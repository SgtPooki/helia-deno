# Helia Deno example

Simply trying to figure out what's blocking Helia+Deno

## Motivation

https://github.com/ipfs/helia/issues/73


# Running the example

```bash

npm run reset
npm run dev
```

# Current blockers

```
╰─ ✔ ❯ npm run dev

> dev
> deno run --allow-env --allow-all main.ts

error: Uncaught Error: Not implemented: crypto.KeyObject.prototype.asymmetricKeyType
    at notImplemented (ext:deno_node/_utils.ts:9:11)
    at KeyObject.export (ext:deno_node/internal/crypto/keys.ts:84:9)
    at ext:deno_node/internal/crypto/keygen.ts:50:45
    at eventLoopTick (ext:core/01_core.js:183:11)
```

# Notes

I have practically no experience with Deno and this project could probably use many improvements from more Deno-inclined folks.
