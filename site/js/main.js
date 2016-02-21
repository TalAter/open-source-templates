(function() {
  var choices = {
    type: 'issues',
    description: 'bug-or-feature',
    environment: 'browser-and-server'
  };

  var viewPage = function(pageNumber) {
    if (pageNumber === 1) {
      $('textarea').val('');
    }
    $('body').scrollTop(0);
    $('.cover').hide();
    $('.page').removeClass('page--current');
    $('#page-'+pageNumber).addClass('page--current');
  };

  var makeChoice = function(pageNumber, choiceKey, choiceValue) {
    choices[choiceKey] = choiceValue;
    if (choiceKey === 'description' || choiceKey === 'environment') {
      $.get( "templates/issue/"+choiceKey+"/"+choiceValue+".md", function(text) {
        $("textarea").val($("textarea").val()+"\n"+text);
      });
    }

    return viewPage(pageNumber);
  };

  var routes = {
    '/page/:pageNumber': viewPage,
    '/page/:pageNumber/:choiceKey/:choiceValue': makeChoice
  };

  var router = Router(routes);

  router.init();

})()
