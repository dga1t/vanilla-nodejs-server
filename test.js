const http = require('http');

const data = new TextEncoder().encode(
    JSON.stringify({
        name: 'Lenovo',
        description: 'ThinkPad',
        price: 1500
    })
);

const options = {
    hostname: 'localhost',
    port: 5000,
    path: '/api/products',
    // method: 'GET',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
}

const req = http.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`)
    res.on('data', d => { process.stdout.write(d) });
});

req.on('error', error => { console.error(error) });
req.write(data);
req.end();