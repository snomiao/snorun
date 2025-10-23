# snorun

Run and interact with shell commands in Node.js seamlessly.

## Features

- Returns `true` if command exits with code 0, `false` otherwise
- Pipes stdin, stdout, and stderr with your main process
- Simple, intuitive API for shell command execution

## Installation

```bash
npm install snorun
```

## Usage

Convert shell command chains to JavaScript:

**Shell:**
```shell
echo command && echo succ || echo fail
```

**JavaScript:**
```javascript
import snorun from "snorun";

const result =
  ((await snorun("echo command")) && (await snorun("echo succ"))) ||
  (await snorun("echo fail"));

// result = true

// Console output:
// > command
// > succ
```

## API

### `snorun(command: string): Promise<boolean>`

Executes a shell command and returns a promise that resolves to:
- `true` if the command exits with code 0
- `false` otherwise

All output is piped to the parent process.

## License

[GPL-3.0](https://www.gnu.org/licenses/gpl-3.0.en.html)

## Author

**snomiao** - [snomiao.com](https://snomiao.com)
Email: snomiao@gmail.com

## Contributing

Issues and pull requests are welcome at [github.com/snomiao/snorun](https://github.com/snomiao/snorun)

## Support

If you find this project helpful, consider [sponsoring](mailto:snomiao@gmail.com)!
