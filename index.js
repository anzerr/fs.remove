
const fs = require('fs.promisify'),
	path = require('path');

const remove = (dir) => {
	return fs.access(dir).then(async () => {
		let res = await fs.stat(dir);
		if (res.isDirectory()) {
			let list = await fs.readdir(dir), wait = [];
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
