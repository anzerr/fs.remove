
### `Intro`
![GitHub Actions status | linter](https://github.com/anzerr/fs.remove/workflows/linter/badge.svg)
![GitHub Actions status | publish](https://github.com/anzerr/fs.remove/workflows/publish/badge.svg)
![GitHub Actions status | test](https://github.com/anzerr/fs.remove/workflows/test/badge.svg)

perform a "rm -Rf" on a directory/file using the core node libary

#### `Install`
``` bash
npm install --save git+https://github.com/anzerr/fs.remove.git
npm install --save @anzerr/fs.remove
```

### `Example`
``` javascript
require('fs.remove')('./node_modules').then(() => {
	console.log('done');
});
```