
### `Intro`
perform a "rm -Rf" on a directory/file using the core node libary

#### `Install`
``` bash
npm install --save git+ssh://git@github.com/anzerr/fs.remove.git
```

### `Example`
``` javascript
require('fs.remove')('./node_modules').then(() => {
	console.log('done');
});
```