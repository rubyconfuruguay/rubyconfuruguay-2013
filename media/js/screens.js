jQuery(function($) {
  function reload() {
    Turbolinks.visit(location.href);
  }

  $(document).on('page:change', function() {
    var now = new Date();
    var $table = now.getDay() == 5 ? $("table:first") : $("table:last");

    $table.find("tr").removeClass('current').filter(function() {
      var $tr = $(this);
      var time = parseInt($tr.find(".time").text().replace(/\D+/g, ''));
      return 100 * now.getHours() + now.getMinutes() > time;
    }).last().addClass('current');
  });

  setInterval(reload, 30000);
});
