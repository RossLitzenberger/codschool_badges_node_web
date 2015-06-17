'use strict';

var request = require('request');

/*
* Get badge from the pub/sub server
* @param {Function} callback
*/

exports.get = function(callback){
  request('http://localhost:8080/badges', function(err, response, body){
    callback(err, JSON.parse(body));
  });
};
