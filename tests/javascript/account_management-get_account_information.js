var iotkit = require('./src/javascript/iotkit');

console.log('iotkit library version:', iotkit.iotkit_get_version());

var response = iotkit.getAccountInformation();
console.log(response);
