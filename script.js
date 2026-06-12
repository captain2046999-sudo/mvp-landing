(() => {
  const config = window.PAS_CONFIG || {};
  const TALLY_FORM_URL = config.TALLY_FORM_URL || "https://tally.so/r/81ryAo";
  const TALLY_WIDGET_SRC = "https://tally.so/widgets/embed.js";

  window.trackEvent = function(name, params = {}) {
    if (!name) {
      return;
    }

    const payload = { ...params };

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: name,
      ...payload
    });

    if (typeof window.gtag === "function") {
      window.gtag("event", name, payload);
    }

    if (typeof window.clarity === "function") {
      window.clarity("event", name);

      Object.entries(payload).forEach(([key, value]) => {
        if (value === undefined || value === null || typeof value === "object") {
          return;
        }

        window.clarity("set", key, String(value));
      });
    }
  };

  const trackEvent = window.trackEvent;
  const getElementLabel = (element) => element.textContent.trim().replace(/\s+/g, " ");

  const getTallyEmbedUrl = () => {
    try {
      const sourceUrl = new URL(TALLY_FORM_URL, window.location.href);
      const formId = sourceUrl.pathname.split("/").filter(Boolean).pop();

      if (!formId) {
        return "";
      }

      const embedUrl = new URL(`https://tally.so/embed/${formId}`);
      embedUrl.searchParams.set("alignLeft", "1");
      embedUrl.searchParams.set("hideTitle", "1");
      embedUrl.searchParams.set("transparentBackground", "1");
      embedUrl.searchParams.set("dynamicHeight", "1");
      return embedUrl.toString();
    } catch {
      return "";
    }
  };

  const configureTallyLinks = () => {
    document.querySelectorAll("a[data-lead-cta], a[data-tally-link]").forEach((link) => {
      link.href = TALLY_FORM_URL;
      link.target = "_blank";
      link.rel = "noopener";
    });
  };

  const configureTallyEmbed = () => {
    const tallyEmbedUrl = getTallyEmbedUrl();

    if (!tallyEmbedUrl) {
      return;
    }

    document.querySelectorAll("iframe[data-tally-embed]").forEach((iframe) => {
      iframe.dataset.tallySrc = tallyEmbedUrl;
    });
  };

  const loadTallyWidget = () => {
    if (window.Tally && typeof window.Tally.loadEmbeds === "function") {
      window.Tally.loadEmbeds();
      return;
    }

    if (document.querySelector(`script[src="${TALLY_WIDGET_SRC}"]`)) {
      return;
    }

    const script = document.createElement("script");
    script.src = TALLY_WIDGET_SRC;
    script.async = true;
    script.onload = () => {
      if (window.Tally && typeof window.Tally.loadEmbeds === "function") {
        window.Tally.loadEmbeds();
      }
    };
    document.body.appendChild(script);
  };

  configureTallyLinks();
  configureTallyEmbed();
  loadTallyWidget();

  document.querySelectorAll("[data-lead-cta]").forEach((element) => {
    element.addEventListener("click", () => {
      trackEvent("cta_click", {
        location: element.dataset.ctaLocation || "unknown",
        button_text: getElementLabel(element)
      });
    });
  });

  const trackedScrollDepths = new Set();
  const scrollDepthEvents = [
    { depth: 25, eventName: "scroll_25" },
    { depth: 50, eventName: "scroll_50" },
    { depth: 75, eventName: "scroll_75" },
    { depth: 100, eventName: "scroll_100" }
  ];
  let scrollTicking = false;

  const trackScrollDepth = () => {
    const documentElement = document.documentElement;
    const scrollHeight = Math.max(document.body.scrollHeight, documentElement.scrollHeight);
    const viewportHeight = window.innerHeight || documentElement.clientHeight;
    const scrollableHeight = scrollHeight - viewportHeight;
    const currentDepth = scrollableHeight <= 0
      ? 100
      : Math.round(((window.scrollY || documentElement.scrollTop) / scrollableHeight) * 100);

    scrollDepthEvents.forEach(({ depth, eventName }) => {
      if (currentDepth >= depth && !trackedScrollDepths.has(eventName)) {
        trackedScrollDepths.add(eventName);
        trackEvent(eventName);
      }
    });
  };

  const handleScroll = () => {
    if (scrollTicking) {
      return;
    }

    scrollTicking = true;
    window.requestAnimationFrame(() => {
      trackScrollDepth();
      scrollTicking = false;
    });
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  trackScrollDepth();

  const trackedFaqIds = new Set();
  const toFaqId = (question, index) => {
    const slug = question
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

    return slug || `faq-${index + 1}`;
  };

  document.querySelectorAll("details.faq-item").forEach((details, index) => {
    details.addEventListener("toggle", () => {
      if (!details.open) {
        return;
      }

      const question = details.querySelector("summary")?.textContent.trim() || `FAQ ${index + 1}`;
      const faqId = toFaqId(question, index);

      if (trackedFaqIds.has(faqId)) {
        return;
      }

      trackedFaqIds.add(faqId);
      trackEvent("faq_open", {
        faq_id: faqId
      });
    });
  });

  let tallyInteractionStarted = false;
  const trackTallyInteraction = () => {
    if (tallyInteractionStarted) {
      return;
    }

    tallyInteractionStarted = true;
    trackEvent("form_start", {
      provider: "tally_embed"
    });
  };

  document.querySelectorAll("iframe[data-tally-embed]").forEach((iframe) => {
    iframe.addEventListener("pointerenter", trackTallyInteraction, { passive: true });
    iframe.addEventListener("focus", trackTallyInteraction);
  });

  window.addEventListener("message", (event) => {
    if (event.origin !== "https://tally.so") {
      return;
    }

    const payload = typeof event.data === "string" ? event.data : JSON.stringify(event.data || {});

    if (/submit|submitted/i.test(payload)) {
      trackEvent("form_submit", {
        provider: "tally_embed"
      });
    }
  });
})();
