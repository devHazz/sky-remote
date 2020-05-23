const remote = require('./Controllers/BaseController.js')


const control = new remote('192.168.0.48')

console.log(remote.commands)

control.press('home');