TLS encrypts connections between Dispatcharr and external Redis/PostgreSQL services in [modular deployments](/Dispatcharr-Docs/installation/#modular-deployment). This prevents credentials and data from being sent in plaintext over the network.

!!! note
    Connection security is only available in modular deployment mode. AIO mode uses internal services that do not require encryption.

### Overview

Three levels of connection security are supported:

| Level | What it does | When to use |
| ----- | ------------ | ----------- |
| **TLS** | Encrypts traffic between Dispatcharr and the database | Connections cross a network boundary |
| **TLS + Server Verification** | Encrypts traffic and verifies the server's identity using a CA certificate | Protecting against man-in-the-middle attacks |
| **Mutual TLS (mTLS)** | Both sides verify each other with certificates | The database server requires client authentication |

Each level builds on the previous one. You can enable encryption without verification, or verification without mutual TLS.

### Certificate Volume Mount

Server verification and mutual TLS require certificate files to be accessible inside the container. If you are only encrypting the connection without verification, no certificate files are needed.

Mount a directory containing your certificates as a read-only volume:

```yaml
volumes:
  - ./data:/data
  - ./certs:/certs:ro  # TLS certificates
```

Mount the same volume on both the `web` and `celery` services.

### Redis TLS

| Variable | Required | Description |
| -------- | :------: | ----------- |
| `REDIS_SSL` | Yes | Set to `true` to enable TLS |
| `REDIS_SSL_VERIFY` | No | Verify the server's identity (default: `true`). Set to `false` for self-signed certs without a CA |
| `REDIS_SSL_CA_CERT` | No | Path to the CA certificate used to verify the server |
| `REDIS_SSL_CERT` | No | Path to the client certificate (only if the server requires client authentication) |
| `REDIS_SSL_KEY` | No | Path to the client private key (only if the server requires client authentication) |

??? example "Redis TLS — encrypted, no verification"
    ```yaml
    environment:
      - REDIS_SSL=true
      - REDIS_SSL_VERIFY=false
    ```

??? example "Redis TLS — encrypted with server verification"
    ```yaml
    environment:
      - REDIS_SSL=true
      - REDIS_SSL_VERIFY=true
      - REDIS_SSL_CA_CERT=/certs/redis/ca.crt
    ```

??? example "Redis mTLS — mutual authentication"
    ```yaml
    environment:
      - REDIS_SSL=true
      - REDIS_SSL_VERIFY=true
      - REDIS_SSL_CA_CERT=/certs/redis/ca.crt
      - REDIS_SSL_CERT=/certs/redis/client.crt
      - REDIS_SSL_KEY=/certs/redis/client.key
    ```

### PostgreSQL TLS

| Variable | Required | Description |
| -------- | :------: | ----------- |
| `POSTGRES_SSL` | Yes | Set to `true` to enable TLS |
| `POSTGRES_SSL_MODE` | No | How strictly to verify the server (default: `verify-full`). Options: `verify-full`, `verify-ca`, `require` |
| `POSTGRES_SSL_CA_CERT` | No | Path to the CA certificate used to verify the server |
| `POSTGRES_SSL_CERT` | No | Path to the client certificate (only if the server requires client authentication) |
| `POSTGRES_SSL_KEY` | No | Path to the client private key (only if the server requires client authentication) |

**Verification modes:**

* `verify-full` — verifies the server certificate and checks that the hostname matches (most secure, default)
* `verify-ca` — verifies the server certificate but does not check the hostname
* `require` — encrypts the connection but does not verify the server's identity

??? example "PostgreSQL TLS — encrypted with full verification"
    ```yaml
    environment:
      - POSTGRES_SSL=true
      - POSTGRES_SSL_MODE=verify-full
      - POSTGRES_SSL_CA_CERT=/certs/postgres/ca.crt
    ```

??? example "PostgreSQL TLS — encrypted, no verification"
    ```yaml
    environment:
      - POSTGRES_SSL=true
      - POSTGRES_SSL_MODE=require
    ```

??? example "PostgreSQL mTLS — mutual authentication"
    ```yaml
    environment:
      - POSTGRES_SSL=true
      - POSTGRES_SSL_MODE=verify-full
      - POSTGRES_SSL_CA_CERT=/certs/postgres/ca.crt
      - POSTGRES_SSL_CERT=/certs/postgres/client.crt
      - POSTGRES_SSL_KEY=/certs/postgres/client.key
    ```

### Important Notes

* TLS environment variables must match across the `web` and `celery` services
* Certificate paths refer to paths inside the container, not on the host
* Dispatcharr validates certificate file paths at startup and will fail with a clear error message if a file is not found
* If you override `REDIS_URL` or `CELERY_BROKER_URL` with a custom value, the URL scheme (`redis://` vs `rediss://`) must match the `REDIS_SSL` setting. Most users do not need to set these — Dispatcharr builds the URL automatically
* The Connection Security panel in [System Settings](/Dispatcharr-Docs/system/#connection-security) displays the current TLS status for each service
