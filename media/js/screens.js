jQuery(function($) {
  function reload() {
    Turbolinks.visit(location.href);
  }

  $(document).on('page:change', function() {
  });

  setInterval(reload, 30000);
});
