'use strict';

module.exports.multiplyRange = (event, context, callback) => {

    var start = event.start;
    var end = event.end;

    // Fix code below
    var range = [];
    for (var i = start; i <= end; i++) {
        range = range.push(i);
    }

    let multiply = (a, b) => a * b;
    var result = range.reduce(multiply);

    const response = {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*', // Required for CORS support to work
        },
        body: {
            result: result,
        },
    };
    callback(null, response);
};