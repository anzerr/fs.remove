
const remove = require('./index.js');

remove('./node_modules', {max: 5}).then(() => {
	console.log('done');
}).catch((err) => {
	console.log(err);
	process.exit(1);
});
