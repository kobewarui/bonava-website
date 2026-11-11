// Bonava Limited — small behaviours only (menu, year, quote email)
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // The quote form has no server behind it: it opens the visitor's email app
  // with the details filled in, addressed to info@bonava.co.ke.
  var form = document.getElementById('quote-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var f = form.elements;
      var subject = 'Request for Quotation - ' + f.cat.value;
      var body = [
        'Name: ' + f.name.value,
        'Organisation: ' + f.org.value,
        'Phone: ' + f.phone.value,
        'Category: ' + f.cat.value,
        '',
        'Requirement:',
        f.msg.value
      ].join('\n');
      window.location.href = 'mailto:info@bonava.co.ke?subject=' +
        encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    });
  }
})();
