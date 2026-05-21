const form = document.getElementById('request-form');
const feedback = document.getElementById('form-feedback');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      feedback.textContent = 'Please complete the required fields before sending your request.';
      feedback.style.color = '#8a2d2d';
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    // Frontend-only placeholder submission.
    // TODO (next step): replace this with a call to a Vercel Serverless Function (e.g. /api/request)
    // that will:
    // 1) Email the request details to thomassen.kristine@gmail.com
    // 2) Append the same submission to Google Sheets for tracking
    // Keep API keys and credentials on the server side only (never expose secrets in client code).
    console.log('Request submission payload:', payload);

    feedback.textContent = 'Thank you — your request has been received. We will review it and get back to you shortly.';
    feedback.style.color = '#30553d';
    form.reset();
  });
}
