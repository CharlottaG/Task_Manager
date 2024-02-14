document.addEventListener('DOMContentLoaded', function() {
    var sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

// date picker initialization
    var datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
      format: "dd mmmm, yyyy",
      i18n: {done: "Select"}
    });

// select option initialization
    var selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);
  });