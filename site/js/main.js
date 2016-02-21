(function(undefined) {
  var choices = {};

  var content = {};

  var viewPage = function(pageNumber) {
    $('body').scrollTop(0);
    $('.cover').hide();
    $('.page').removeClass('page--current');
    $('#page-'+pageNumber).addClass('page--current');
  };

  var makeChoice = function(pageNumber, choiceKey, choiceValue) {
    choices[choiceKey] = choiceValue;

    if (choiceKey === 'description' || choiceKey === 'environment') {
      var contentKey = choiceKey+'-'+choiceValue;
      if (content[contentKey] === undefined) {
        $.get( "templates/issue/"+choiceKey+"/"+choiceValue+".md", function(text) {
          content[contentKey] = text;
          updateTextarea();
        });
      }
    }

    updateTextarea();

    return viewPage(pageNumber);
  };

  var updateTextarea = function() {
    if (choices['type'] === 'issues') {
      $('textarea').val(
        content['description-'+choices['description']]+"\n"+
        content['environment-'+choices['environment']]
        );
    }
  };

  var routes = {
    '/page/:pageNumber': viewPage,
    '/page/:pageNumber/:choiceKey/:choiceValue': makeChoice
  };

  var router = Router(routes);

  router.setRoute('/')

  router.init();

})()
