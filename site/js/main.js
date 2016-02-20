(function() {
  var choices = {
    type: 'issues',
    description: 'bug-or-feature',
    environment: 'browser-and-server'
  };

  $('.page-turner').click(function(ev) {
    var $target = $(ev.currentTarget);
    var pageNumber = $target.data('targetPage');
    var choiceKey = $target.data('choiceKey');
    var choiceValue = $target.data('choiceValue');

    if (pageNumber === 1) {
      $('textarea').val('');
    }

    if (choiceKey && choiceValue) {
      choices[choiceKey] = choiceValue;
      if (choiceKey === 'description' || choiceKey === 'environment') {
        $.get( "templates/issue/"+choiceKey+"/"+choiceValue+".md", function(text) {
          $("textarea").val($("textarea").val()+"\n"+text);
        });
      }
    }

    $('body').scrollTop(0);
    $('.cover').hide();
    $('.page').removeClass('page--current');
    $('#page-'+pageNumber).addClass('page--current');
    return false;
  });
})()
