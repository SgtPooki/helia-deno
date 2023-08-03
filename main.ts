import {createHelia} from 'npm:helia'


const helia = await createHelia()

console.log(helia.libp2p.peerId.toString())
