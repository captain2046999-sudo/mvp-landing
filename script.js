(() => {
  const trackEvent = (eventName, params = {}) => {
    if (!eventName) {
      return;
    }

    const payload = { ...params };

    console.info("[analytics]", eventName, payload);

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      ...payload
    });

    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, payload);
    }

    if (typeof window.clarity === "function") {
      window.clarity("event", eventName);

      Object.entries(payload).forEach(([key, value]) => {
        if (value === undefined || value === null || typeof value === "object") {
          return;
        }

        window.clarity("set", key, String(value));
      });
    }
  };

  const getElementLabel = (element) => element.textContent.trim().replace(/\s+/g, " ");

  const getSafeDestination = (href) => {
    if (!href) {
      return "";
    }

    try {
      const url = new URL(href, window.location.href);
      return `${url.origin}${url.pathname}`;
    } catch {
      return href.split("?")[0];
    }
  };

  document.querySelectorAll("[data-analytics-event]").forEach((element) => {
    element.addEventListener("click", () => {
      trackEvent(element.dataset.analyticsEvent, {
        label: getElementLabel(element),
        destination: getSafeDestination(element.getAttribute("href") || ""),
        section: element.closest("[data-section-event]")?.dataset.sectionEvent || ""
      });
    });
  });

  const viewedSections = new Set();
  const trackSectionView = (section) => {
    const eventName = section.dataset.sectionEvent;

    if (!eventName || viewedSections.has(eventName)) {
      return;
    }

    viewedSections.add(eventName);
    trackEvent(eventName, {
      section_id: section.id || "hero"
    });
  };

  const trackedSections = document.querySelectorAll("[data-section-event]");

  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          trackSectionView(entry.target);
          sectionObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.35 });

    trackedSections.forEach((section) => sectionObserver.observe(section));
  } else {
    trackedSections.forEach(trackSectionView);
  }

  const trackedScrollDepths = new Set();
  const scrollDepthEvents = [
    { depth: 50, eventName: "scroll_50" },
    { depth: 90, eventName: "scroll_90" }
  ];

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
        trackEvent(eventName, {
          scroll_depth: depth
        });
      }
    });
  };

  window.addEventListener("scroll", trackScrollDepth, { passive: true });
  trackScrollDepth();

  const trackedFaqQuestions = new Set();

  document.querySelectorAll("details.faq-item").forEach((details, index) => {
    details.addEventListener("toggle", () => {
      if (!details.open) {
        return;
      }

      const question = details.querySelector("summary")?.textContent.trim() || `FAQ ${index + 1}`;

      if (trackedFaqQuestions.has(question)) {
        return;
      }

      trackedFaqQuestions.add(question);
      trackEvent("faq_expand", {
        question
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
  const calendlyLink = form.querySelector("[data-calendly-link]");

  const requiredFields = [
    "email",
    "role",
    "current_setup",
    "desired_models",
    "use_case",
    "monthly_spend",
    "budget"
  ];

  const labels = {
    email: "Email",
    role: "Role",
    current_setup: "Current AI setup",
    desired_models: "Models you want to run locally",
    use_case: "Main use case",
    monthly_spend: "Monthly AI / cloud GPU spend",
    budget: "Expected budget",
    demo_interest: "Demo interest"
  };

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
    [...requiredFields, "demo_interest"].forEach(clearFieldError);
    setStatus("");
  };

  const getTrimmedValue = (name) => {
    const field = getField(name);
    return field && typeof field.value === "string" ? field.value.trim() : "";
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

    if (!form.querySelector('input[name="demo_interest"]:checked')) {
      errors.demo_interest = "Select your demo interest.";
    }

    return errors;
  };

  const focusFirstError = (errors) => {
    const firstError = Object.keys(errors)[0];

    if (firstError === "demo_interest") {
      form.querySelector('input[name="demo_interest"]')?.focus();
      return;
    }

    getField(firstError)?.focus();
  };

  const buildTallyUrl = () => {
    const url = new URL(form.dataset.tallyBaseUrl || "https://tally.so/r/81ryAo");

    url.searchParams.set("source", "personal-ai-server-landing");
    url.searchParams.set("intent", "founding-user-application");

    return url.toString();
  };

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

  const trackedBudgetRanges = new Set();

  getField("budget")?.addEventListener("change", () => {
    const budgetRange = getTrimmedValue("budget");

    if (budgetRange && !trackedBudgetRanges.has(budgetRange)) {
      trackedBudgetRanges.add(budgetRange);
      trackEvent("select_budget_range", {
        budget_range: budgetRange
      });
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
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

    const tallyUrl = buildTallyUrl();
    const calendlyUrl = form.dataset.calendlyUrl || "https://calendly.com/captain2046999/personal-ai-server-founding-user-call";
    const selectedDemoInterest = form.querySelector('input[name="demo_interest"]:checked')?.value || "";

    trackEvent("submit_early_access", {
      role: getTrimmedValue("role"),
      use_case: getTrimmedValue("use_case"),
      monthly_spend: getTrimmedValue("monthly_spend"),
      budget_range: getTrimmedValue("budget"),
      demo_interest: selectedDemoInterest
    });

    if (tallyLink) {
      tallyLink.href = tallyUrl;
    }

    if (calendlyLink) {
      calendlyLink.href = calendlyUrl;
    }

    if (successPanel) {
      successPanel.hidden = false;
      successPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    setStatus("Application details validated. Continue to Tally to save your application.");
    tallyLink?.focus();
  });
})();
