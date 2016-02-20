(function() {
  var choices = {
    type: 'issues',
    issue_types: 'bug-or-feature',
    environment: 'browser-and-server'
  };

  $('.page-turner').click(function(ev) {
    var $target = $(ev.currentTarget);

    var choiceKey = $target.data('choiceKey');
    var choiceValue = $target.data('choiceValue');
    if (choiceKey && choiceValue) {
      choices[choiceKey] = choiceValue;
    }

    var pageNumber = $target.data('targetPage');
    $('body').scrollTop(0);
    $('.cover').hide();
    $('.page').removeClass('page--current');
    $('#page-'+pageNumber).addClass('page--current');
    return false;
  });
})()
