(() => {
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
    const data = new FormData(form);

    data.forEach((value, key) => {
      url.searchParams.set(key, String(value).trim());
    });

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
