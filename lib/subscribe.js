'use strict';

var axon = require('axon');
var socket = axon.socket('sub');

// When complete change the to production link
socket.connect(8001);

socket.on('error', function(err){
  throw err;
});


module.exports = socket;
