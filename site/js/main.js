(function() {
  $('.page-turner').click(function(ev) {
    var pageNumber = $(ev.currentTarget).data('targetPage');
    $('body').scrollTop(0);
    $('.cover').hide();
    $('.page').removeClass('page--current');
    $('#page-'+pageNumber).addClass('page--current');
    return false;
  });
})()
