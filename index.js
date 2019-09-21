
const fs = require('fs.promisify'),
	promise = require('promise.util'),
	path = require('path');

const remove = (dir, option = {}) => {
	return fs.access(dir).then(async () => {
		let res = await fs.stat(dir);
		if (res.isDirectory()) {
			let list = await fs.readdir(dir), wait = [];
			if (option.max) {
				return promise.each(list, (r) => {
					return this.remove(path.join(dir, r));
				}, option.max);
			}
			for (let i in list) {
				wait.push(remove(path.join(dir, list[i])));
			}
			await Promise.all(wait);
			await fs.rmdir(dir);
		}
		return fs.unlink(dir);
	}).catch((e) => {
		return e;
	});
};

module.exports = remove;
module.exports.default = remove;
