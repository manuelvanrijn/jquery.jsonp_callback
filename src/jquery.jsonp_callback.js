/*
 * jsonp_callback
 * https://github.com/manuelvanrijn/jquery.jsonp_callback
 *
 * Copyright (c) 2012 Manuel van Rijn
 * Licensed under the MIT license.
 */

(function($) {

  /**
   * Performs a JSONP request with additional arguments passed to the callback
   *
   * @param url       A String containing the URL to which the request is sent.
   * @param data      A map or string that is sent to the server with the request.
   * @param args      A map or string that is sent to the callback after the request finished.
   * @param callback  A callback function that is executed if the request succeeds.
   * @example
   *    jQuery.jsonp_callback('file.json', 'test=true', 'extra callback value', function(data, args) {
   *      // data contains the returned json
   *     // args contains the additional argumens (in this example 'extra callback value')
   *    });
   */
  $.jsonp_callback = function(url, data, args, callback) {
    if($.isFunction(data)) {
      // no data and no args specified (url, callback)
      callback = data;
      data = null;
      args = null;
    }
    else if($.isFunction(args)) {
      // no data specified (url, args, callback)
      callback = args;
      args = data;
      data = null;
    }

    jQuery.get( url, data, function(data) {
      callback.apply(this, [data, args]);
    }, "jsonp" );
  };

}(jQuery));
