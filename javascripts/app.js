;(function ($, window, undefined) {
  'use strict';

  var $doc = $(document),
      Modernizr = window.Modernizr;

  $(document).ready(function() {
    $.fn.foundationAlerts           ? $doc.foundationAlerts() : null;
    $.fn.foundationButtons          ? $doc.foundationButtons() : null;
    $.fn.foundationAccordion        ? $doc.foundationAccordion() : null;
    $.fn.foundationNavigation       ? $doc.foundationNavigation() : null;
    $.fn.foundationTopBar           ? $doc.foundationTopBar() : null;
    $.fn.foundationCustomForms      ? $doc.foundationCustomForms() : null;
    $.fn.foundationMediaQueryViewer ? $doc.foundationMediaQueryViewer() : null;
    $.fn.foundationTabs             ? $doc.foundationTabs({callback : $.foundation.customForms.appendCustomMarkup}) : null;
    $.fn.foundationTooltips         ? $doc.foundationTooltips() : null;
    $.fn.foundationMagellan         ? $doc.foundationMagellan() : null;
    $.fn.foundationClearing         ? $doc.foundationClearing() : null;

    $('input, textarea').placeholder();
  });

  // UNCOMMENT THE LINE YOU WANT BELOW IF YOU WANT IE8 SUPPORT AND ARE USING .block-grids
  // $('.block-grid.two-up>li:nth-child(2n+1)').css({clear: 'both'});
  // $('.block-grid.three-up>li:nth-child(3n+1)').css({clear: 'both'});
  // $('.block-grid.four-up>li:nth-child(4n+1)').css({clear: 'both'});
  // $('.block-grid.five-up>li:nth-child(5n+1)').css({clear: 'both'});

  // Hide address bar on mobile devices (except if #hash present, so we don't mess up deep linking).
  if (Modernizr.touch && !window.location.hash) {
    $(window).load(function () {
      setTimeout(function () {
        window.scrollTo(0, 1);
      }, 0);
    });
  }


  var url = 'http://jsfiddle.net/echo/jsonp/';
  var items = ['item1', 'item2', 'item3', 'item4', 'item5'];

  $("#problem").click(function() {
    $("#problem_result li").remove();

    for(var i=0; i<items.length; i++) {
      var name = items[i];
      $.getJSON(url+'?callback=?', {item_name: name}, function(data) {
        $("<li />").html('item: ' + name + ' json result: ' + data.item_name).appendTo("#problem_result");
      });
    }
  });

  $("#solution").click(function() {
    $("#solution_result li").remove();

    for(var i=0; i<items.length; i++) {
      var name = items[i];
      $.jsonp_callback(url, {item_name: name}, name, function(data, item) {
        $("<li />").html('item: ' + item + ' json result: ' + data.item_name).appendTo("#solution_result");
      });
    }
  });

})(jQuery, this);
