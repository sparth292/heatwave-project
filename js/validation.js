'use strict';
// Fail closed if the CDN is unavailable: no unvalidated form submission.
if (!window.jQuery) {
  document.getElementById('dependency-status').textContent = 'jQuery could not load. Connect to the internet and reload this page to enable validation. The form is disabled until then.';
  document.getElementById('subscription-form').addEventListener('submit', function (event) { event.preventDefault(); });
} else {
  jQuery(function ($) {
    $('#dependency-status').prop('hidden', true);
    $('#submit-button').prop('disabled', false);
    const fields = ['name', 'email', 'phone', 'subscription-location'];
    const touched = new Set();
    function validate(id) {
      const $field = $('#' + id);
      const value = $field.val().trim();
      let error = '';
      if (!value) {
        error = { name: 'Enter your full name.', email: 'Enter your email address.', phone: 'Enter your phone number.', 'subscription-location': 'Select a location.' }[id];
      } else if (id === 'name' && (value.length < 2 || value.length > 80 || !/^[\p{L}\p{M}][\p{L}\p{M} .’'\-]*$/u.test(value))) {
        error = 'Use 2–80 characters: letters, spaces, apostrophes, periods or hyphens.';
      } else if (id === 'email' && (value.length > 254 || !/^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)+$/.test(value) || $field[0].validity.typeMismatch)) {
        error = 'Enter a valid email address, such as name@example.com.';
      } else if (id === 'phone' && !/^[6-9]\d{9}$/.test(value)) {
        error = 'Enter 10 digits starting with 6–9, without spaces or +91.';
      } else if (id === 'subscription-location' && !['nagpur', 'pune', 'mumbai', 'delhi'].includes(value)) {
        error = 'Select one of the listed locations.';
      }
      $field.attr('aria-invalid', error ? 'true' : 'false');
      $('#' + id + '-error').text(error);
      return !error;
    }
    // jQuery handles submission, field events, error messages and success state.
    $('#subscription-form').on('submit', function (event) {
      event.preventDefault(); // Demo only: never navigate or send data.
      $('#form-success').prop('hidden', true);
      let firstInvalid = null;
      fields.forEach(function (id) {
        touched.add(id);
        if (!validate(id) && firstInvalid === null) firstInvalid = id;
      });
      if (firstInvalid !== null) {
        $('#' + firstInvalid).trigger('focus');
        return;
      }
      const preference = $('#receive-alerts').is(':checked') ? 'Alerts preference: opted in (demo only).' : 'Alerts preference: not opted in.';
      $('#form-success').text('Validation successful! ' + preference + ' No data was saved or sent, and no subscription was created.').prop('hidden', false).trigger('focus');
    });
    fields.forEach(function (id) {
      $('#' + id).on('blur', function () { touched.add(id); validate(id); })
        .on('input change', function () {
          $('#form-success').prop('hidden', true);
          if (touched.has(id)) validate(id);
        });
    });
    $('#receive-alerts').on('change', function () { $('#form-success').prop('hidden', true); });
  });
}
