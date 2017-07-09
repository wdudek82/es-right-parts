// let defaults = {
//     method: 'POST',
//     callback: function(){},
//     headers: {
//         'contend-type': 'text/plain'
//     }
// };

let config = {
    url: 'http://some.url',
    callback: foo => 'foo',
    headers: {
        'x-requested-with': 'foo'
    }
};


{
    let {
        method = 'POST',
        url,
        callback = function(){},
        headers: {
            'content-type': contentType = 'test/plain',
            'x-requested-with': xRequestedWith
        }
    } = config;


    config = {
        method,
        url,
        callback,
        headers: {
            'content-type': contentType,
            'x-requested-with': xRequestedWith
        }
    };
}


console.log(config);