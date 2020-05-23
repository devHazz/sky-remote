const remote = require('./Controllers/BaseController.js')


const control = new remote('192.168.x.x')
control.press('home'); //Presses the home button
