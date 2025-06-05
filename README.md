# Helia Deno example

It Works!

## Motivation

https://github.com/ipfs/helia/issues/73

# Running the example

```bash

deno run reset
deno run --allow-env --allow-ffi --allow-sys --allow-net main.ts
```

# Without the `--allow-env --allow-ffi --allow-sys --allow-net` flags

```bash
> deno run main.ts

✅ Granted all env access.
✅ Granted all sys access.
┏ ⚠️  Deno requests ffi access to "/Users/sgtpooki/code/work/ipshipyard/sgtpooki/helia-deno/node_modules/.deno/node-datachannel@0.5.5/node_mod✅ Granted all ffi access.
✅ Granted all net access.
12D3KooWJt6Jm2UdgFzPRmXtdtBDVso8LFSVEcKNjqnBrsesk4co
```

# Notes

I have little experience with Deno and this project could probably use many improvements from more Deno-inclined folks.
