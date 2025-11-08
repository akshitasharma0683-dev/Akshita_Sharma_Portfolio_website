//<!-- =========================
     //JavaScript (validation + toast)
     //This script is scoped and self-contained.
  //   ========================= -->
(function () {
  'use strict';

  const form = document.getElementById('portfolio-contact-form');
  const btn = document.getElementById('portfolio-contact-submit');
  const toast = document.getElementById('portfolio-contact-toast');
  const toastClose = toast.querySelector('.portfolio-toast-close');

  // helper: set error text
  function setError(id, message) {
    const el = document.getElementById(id);
    if (el) el.textContent = message || '';
  }

  // simple validators
  function isValidEmail(email) {
    // basic RFC-like check (client-side only)
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  function isPhoneOkay(phone) {
    return phone.trim() === '' || /^[0-9+\-\s()]+$/.test(phone);
  }

  // show toast
  function showToast(msg = 'Message sent successfully!') {
    const text = toast.querySelector('.portfolio-toast-text');
    if (text) text.textContent = msg;
    toast.style.display = 'block';
    // auto-hide after 4s
    clearTimeout(toast._timer);
    toast._timer = setTimeout(hideToast, 4000);
  }
  function hideToast() {
    toast.style.display = 'none';
    clearTimeout(toast._timer);
  }
  toastClose.addEventListener('click', hideToast);

  // form submit handler
  form.addEventListener('submit', function (ev) {
    ev.preventDefault();

    // read values
    const name = (document.getElementById('portfolio-contact-name') || {}).value || '';
    const email = (document.getElementById('portfolio-contact-email') || {}).value || '';
    const phone = (document.getElementById('portfolio-contact-phone') || {}).value || '';
    const human = (document.getElementById('portfolio-contact-human') || {}).value || '';
    const comments = (document.getElementById('portfolio-contact-comments') || {}).value || '';

    // reset errors
    setError('err-name', '');
    setError('err-email', '');
    setError('err-phone', '');
    setError('err-human', '');
    setError('err-comments', '');

    // validation flags
    let ok = true;

    if (name.trim().length < 2) {
      setError('err-name', 'Please enter your name (at least 2 characters).');
      ok = false;
    }

    if (!isValidEmail(email)) {
      setError('err-email', 'Please enter a valid email address.');
      ok = false;
    }

    if (!isPhoneOkay(phone)) {
      setError('err-phone', 'Phone may contain only numbers and + - ( ) characters.');
      ok = false;
    }

    // bot-check: accept 4 or "four" insensitive
    if (!/^\s*(4|four)\s*$/i.test(human)) {
      setError('err-human', 'Please answer the anti-spam question correctly (2 + 2 = ?).');
      ok = false;
    }

    if (comments.trim().length < 10) {
      setError('err-comments', 'Please enter a message (at least 10 characters).');
      ok = false;
    }

    if (!ok) {
      // focus first error field
      const firstError = form.querySelector('.portfolio-error:not(:empty)');
      if (firstError) {
        const input = firstError.previousElementSibling || form.querySelector('input, textarea');
        if (input && typeof input.focus === 'function') input.focus();
      }
      return;
    }

    // If you want to perform an actual AJAX submit instead of normal form POST,
    // uncomment the following block and remove `form.submit()`:
    /*
    btn.disabled = true;
    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
    }).then(r => {
      btn.disabled = false;
      if (r.ok) {
        form.reset();
        showToast('Message sent successfully!');
      } else {
        showToast('There was an error sending your message.');
      }
    }).catch(err => {
      btn.disabled = false;
      showToast('Network error occurred.');
      console.error(err);
    });
    return;
    */

    // Default behavior: show success toast and reset form (while still performing normal submit to server)
    // If you want to prevent submitting to the server, comment out the next two lines.
    // If you keep them, the toast will appear briefly before page navigation — for AJAX, use the block above.
    showToast('Message validated — sending...');
    form.reset();

    // Optionally submit to backend (uncomment to enable real POST)
    // form.submit();
  });
})();
// skill expeience and project section
               function slideTo(index) {
            currentSlide = index;
            slider.style.transform = `translateX(-${index * 25}%)`;
        }
        function prevSlide() {
            currentSlide = (currentSlide - 1 + 4) % 4;
            slideTo(currentSlide);
        }
        function nextSlide() {
            currentSlide = (currentSlide + 1) % 4;
            slideTo(currentSlide);
        }
        // Optional auto-slide (comment out if not wanted)
        setInterval(() => {
            nextSlide();
        }, 5000);


