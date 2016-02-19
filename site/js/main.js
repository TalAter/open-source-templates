(function() {
  $('.page-turner').click(function(ev) {
    var pageNumber = $(ev.currentTarget).data('targetPage');
    $('.page').removeClass('page--current');
    $('#page-'+pageNumber).addClass('page--current');
    return false;
  });
})()
