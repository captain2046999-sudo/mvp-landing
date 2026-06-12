(() => {
  const config = window.PAS_CONFIG || {};
  const TALLY_FORM_URL = config.TALLY_FORM_URL || "https://tally.so/r/81ryAo";

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

  const configureTallyLinks = () => {
    document.querySelectorAll("a[data-lead-cta], a[data-tally-link]").forEach((link) => {
      link.href = TALLY_FORM_URL;
      link.target = "_blank";
      link.rel = "noopener";
    });
  };

  configureTallyLinks();

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

  const form = document.querySelector("[data-application-form]");

  if (!form) {
    return;
  }

  const status = form.querySelector("[data-form-status]");
  const successPanel = form.querySelector("[data-success-panel]");
  const tallyLink = form.querySelector("[data-tally-link]");
  const requiredFields = ["name", "email", "persona", "use_case", "budget_range", "desired_model"];
  const labels = {
    name: "Name",
    email: "Email",
    persona: "What best describes you?",
    use_case: "What would you use this for?",
    budget_range: "Budget",
    desired_model: "What model would you like to run?"
  };
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let formStarted = false;

  const getField = (name) => form.elements[name];
  const getErrorElement = (name) => form.querySelector(`[data-error-for="${name}"]`);

  const setStatus = (message) => {
    if (status) {
      status.textContent = message;
    }
  };

  const setFieldError = (name, message) => {
    const error = getErrorElement(name);
    const field = getField(name);

    if (error) {
      error.textContent = message;
    }

    if (field && typeof field.setAttribute === "function") {
      field.setAttribute("aria-invalid", message ? "true" : "false");
    }
  };

  const clearFieldError = (name) => setFieldError(name, "");

  const clearAllErrors = () => {
    requiredFields.forEach(clearFieldError);
    setStatus("");
  };

  const getTrimmedValue = (name) => {
    const field = getField(name);
    return field && typeof field.value === "string" ? field.value.trim() : "";
  };

  const trackFormStart = () => {
    if (formStarted) {
      return;
    }

    formStarted = true;
    trackEvent("form_start");
  };

  const validateForm = () => {
    const errors = {};

    requiredFields.forEach((name) => {
      if (!getTrimmedValue(name)) {
        errors[name] = `${labels[name]} is required.`;
      }
    });

    const email = getTrimmedValue("email");
    if (email && !emailPattern.test(email)) {
      errors.email = "Enter a valid email address.";
    }

    return errors;
  };

  const focusFirstError = (errors) => {
    const firstError = Object.keys(errors)[0];
    getField(firstError)?.focus();
  };

  ["focusin", "input", "change"].forEach((eventName) => {
    form.addEventListener(eventName, trackFormStart);
  });

  form.addEventListener("input", (event) => {
    const target = event.target;
    if (target instanceof HTMLInputElement || target instanceof HTMLSelectElement || target instanceof HTMLTextAreaElement) {
      clearFieldError(target.name);
      setStatus("");
    }
  });

  form.addEventListener("change", (event) => {
    const target = event.target;
    if (target instanceof HTMLInputElement || target instanceof HTMLSelectElement || target instanceof HTMLTextAreaElement) {
      clearFieldError(target.name);
      setStatus("");
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    trackFormStart();
    clearAllErrors();

    if (successPanel) {
      successPanel.hidden = true;
    }

    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      Object.entries(errors).forEach(([name, message]) => setFieldError(name, message));
      setStatus("Complete the required fields before continuing.");
      focusFirstError(errors);
      return;
    }

    trackEvent("form_submit", {
      persona: getTrimmedValue("persona"),
      use_case: getTrimmedValue("use_case"),
      budget_range: getTrimmedValue("budget_range")
    });

    if (tallyLink) {
      tallyLink.href = TALLY_FORM_URL;
    }

    if (successPanel) {
      successPanel.hidden = false;
      successPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    setStatus("Application details validated. Continue to Tally to save your application.");
    tallyLink?.focus();
  });
})();
