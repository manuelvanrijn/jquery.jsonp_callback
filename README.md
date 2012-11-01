# jquery.jsonp_callback

JSONP with additional arguments passed to the callback

## Intro

When performing a JSONP request we can only specify `http://url.org/file.json?callback=?`which results in a by jQuery created function, returning only the responded json

When performing JSONP calls within a loop we are unable to determ in which order the request will complete and also unable to add additional arguments to the callback.

This small plugin helps you in these cases by giving you the ability to add additional arguments to the callback function.

## Examples

see [http://manuel.manuelles.nl/jquery.jsonp_callback/](http://manuel.manuelles.nl/jquery.jsonp_callback/)
