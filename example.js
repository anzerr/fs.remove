
const remove = require('./index.js');

remove('./node_modules').then(() => {
	console.log('done');
});
