# Helia Deno example

It Works!

## Motivation

https://github.com/ipfs/helia/issues/73

# Running the example

```bash

deno run reset
deno run --allow-env --allow-ffi --allow-sys --allow-net --unstable-broadcast-channel main.ts
```

# Without the `--allow-env --allow-ffi --allow-sys --allow-net` flags

```bash
> deno run --unstable-broadcast-channel main.ts

✅ Granted all env access.
✅ Granted all sys access.
┏ ⚠️  Deno requests ffi access to "/Users/sgtpooki/code/work/ipshipyard/sgtpooki/helia-deno/node_modules/.deno/node-datachannel@0.5.5/node_mod✅ Granted all ffi access.
✅ Granted all net access.
12D3KooWJt6Jm2UdgFzPRmXtdtBDVso8LFSVEcKNjqnBrsesk4co
```

# Current issues

## broadcast-channel is unstable

Caused by recent Mortice update: https://github.com/achingbrain/mortice/pull/97

```bash
> deno run main.ts

✅ Granted all env access.
┏ ⚠️  Deno requests ffi access to "/Users/sgtpooki/code/work/ipshipyard/sgtpooki/helia-deno/node_modules/.deno/@ipshipyard+node-datachannel@0.✅ Granted all ffi access.
error: Uncaught (in promise) ReferenceError: BroadcastChannel is not defined
    at default (file:///Users/sgtpooki/code/work/ipshipyard/sgtpooki/helia-deno/node_modules/.deno/mortice@3.3.1/node_modules/mortice/dist/src/node.js:24:25)
    at getImplementation (file:///Users/sgtpooki/code/work/ipshipyard/sgtpooki/helia-deno/node_modules/.deno/mortice@3.3.1/node_modules/mortice/dist/src/mortice.js:11:26)
    at createMutex (file:///Users/sgtpooki/code/work/ipshipyard/sgtpooki/helia-deno/node_modules/.deno/mortice@3.3.1/node_modules/mortice/dist/src/mortice.js:122:28)
    at createMortice (file:///Users/sgtpooki/code/work/ipshipyard/sgtpooki/helia-deno/node_modules/.deno/mortice@3.3.1/node_modules/mortice/dist/src/index.js:124:12)
    at new BlockStorage (file:///Users/sgtpooki/code/work/ipshipyard/sgtpooki/helia-deno/node_modules/.deno/@helia+utils@1.3.2/node_modules/@helia/utils/dist/src/storage.js:19:21)
    at new Helia (file:///Users/sgtpooki/code/work/ipshipyard/sgtpooki/helia-deno/node_modules/.deno/@helia+utils@1.3.2/node_modules/@helia/utils/dist/src/index.js:83:27)
    at new HeliaP2P (file:///Users/sgtpooki/code/work/ipshipyard/sgtpooki/helia-deno/node_modules/.deno/helia@5.4.2/node_modules/helia/dist/src/helia-p2p.js:5:9)
    at createHelia (file:///Users/sgtpooki/code/work/ipshipyard/sgtpooki/helia-deno/node_modules/.deno/helia@5.4.2/node_modules/helia/dist/src/index.js:32:19)
    at async file:///Users/sgtpooki/code/work/ipshipyard/sgtpooki/helia-deno/main.ts:4:15

    info: BroadcastChannel is an unstable API.
    hint: Run again with `--unstable-broadcast-channel` flag to enable this API.
```

Related: https://github.com/denoland/deno/issues/10750
Related: https://github.com/denoland/deno/pull/19108

# Notes

I have little experience with Deno and this project could probably use many improvements from more Deno-inclined folks.
