# Persistent plugin services

Do not start a persistent server, listener, or loop during module import or in `Plugin.__init__`. Use leader hooks and Dispatcharr's managed service runner instead:

```python
class Plugin:
    def on_leader_acquired(self, context):
        context["start_service"](self._run_service, name="exporter")

    def _run_service(self, stop_event):
        while not stop_event.is_set():
            self._publish_metrics()
            stop_event.wait(10)

    def on_leader_lost(self, context):
        self._close_plugin_resources()
```

Declare the `persistent_service` capability for a plugin that implements these hooks. Dispatcharr elects one worker as leader for that plugin and manages leadership with a Redis lease.

`context["start_service"](target, name=None)` starts one host-managed native thread for the leader. Its target receives a `threading.Event` named `stop_event`. Check or wait on that event regularly, then release sockets and external resources promptly when it is set.

Dispatcharr signals the stop event and briefly waits for the service thread when leadership is lost, the plugin is disabled or reloaded, startup fails, or the worker shuts down. `start_service` is available only in leadership hooks. Do not use `gevent.spawn`, `gevent.spawn_later`, or create a `threading.Thread` for persistent plugin work.

The leadership context provides `settings`, `code_dir`, `data_dir`, `logger`, actions, task-dispatch helpers, and `start_service`. `settings` is a discovery-time snapshot. Use `context["get_settings"]()` to read current settings and field defaults on demand. It reads the database and can fail if the plugin was deleted.

A leader service can queue a declared action as a scheduled run:

```python
task_id = context["dispatch_scheduled_task"]("sync", {"full": True})
```

Scheduled dispatch requires `background_tasks` and checks that the local process still holds leadership. It is not a fencing guarantee: runs can overlap during leadership changes, and already queued work continues after leadership is lost.

If a service exits unexpectedly or raises, Dispatcharr releases its leadership and delays local reacquisition with backoff. Another worker can take over sooner. An administrator can inspect the lease-owned state and failure count at `GET /api/plugins/plugins/<key>/service-health/`; `unknown` means no current health record is available.

Leadership can change during worker restarts or Redis failures. Hooks must be idempotent, tolerate a new leader taking over, and safely handle a brief overlap between leaders.

If the Redis client is unavailable, the fallback can elect a leader in every process. A Redis command failure instead causes lease acquisition or renewal to fail. Design services to tolerate overlapping leaders and release external resources promptly.

See [Plugin manifest and capabilities](capabilities-and-security.md) for capability requirements.
