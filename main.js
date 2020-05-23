const net = require('net')

let ip = '192.168.0.48'
let port = '49160'

const client = net.connect({
    host: ip,
    port: port
})

client.on('data', (data) => {
console.log(data.toString())
client.destroy();
});