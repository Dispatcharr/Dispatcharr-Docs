(() => {
  function languageAlternates() {
    return [...document.querySelectorAll('link[rel="alternate"][hreflang]')]
      .map((link) => ({
        locale: link.hreflang.toLowerCase(),
        url: new URL(link.href, location.href),
      }))
      .filter(({ locale, url }) => locale !== "null" && url.origin === location.origin);
  }

  function configuredLocales(alternates) {
    return new Set(alternates.map(({ locale }) => locale));
  }

  function defaultLocale(alternates, locales) {
    return (
      alternates.find(({ url }) => {
        const segments = url.pathname.split("/");
        return !segments.some((segment) => locales.has(segment));
      })?.locale || "en"
    );
  }

  function localeFromUrl(url, locales, fallbackLocale) {
    const locale = new URL(url, location.href).pathname
      .split("/")
      .find((segment) => locales.has(segment));

    return locale || fallbackLocale;
  }

  function filterResults() {
    const alternates = languageAlternates();
    const locales = configuredLocales(alternates);
    const activeLocale =
      document.documentElement.lang.toLowerCase().split("-")[0] ||
      defaultLocale(alternates, locales);
    const fallbackLocale = defaultLocale(alternates, locales);

    document.querySelectorAll(".md-search-result__item").forEach((item) => {
      const link = item.querySelector("a[href]");
      item.hidden = Boolean(
        link && localeFromUrl(link.href, locales, fallbackLocale) !== activeLocale,
      );
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    const results = document.querySelector(".md-search-result__list");
    if (!results) {
      return;
    }

    new MutationObserver(filterResults).observe(results, {
      childList: true,
      subtree: true,
    });
    filterResults();
  });
})();
