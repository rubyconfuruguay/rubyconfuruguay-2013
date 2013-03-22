jQuery(function($) {
  function reload() {
    Turbolinks.visit(location.href);
  }

  $(document).on('page:change', function() {
    var now = new Date();
    var $table = now.getDay() == 5 ? $("table:first") : $("table:last");

    var $current = $table.find("tr").removeClass('current').filter(function() {
      var $tr = $(this);
      var time = parseInt($tr.find(".time").text().replace(/\D+/g, ''));
      return 100 * now.getHours() + now.getMinutes() > time;
    }).last();

    $current.addClass('current');

    if ($current.length) {
      setTimeout(function() { $.scrollTo($current); }, 0);
    }
  });

  setInterval(reload, 30000);
});

$(window).on("load", function() {
  $(document).trigger("page:change");
});
