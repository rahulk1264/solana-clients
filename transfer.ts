import {
    Connection,
    Transaction,
    SystemProgram,
    sendAndConfirmTransaction,
    PublicKey,
    LAMPORTS_PER_SOL,
} from "@solana/web3.js";

import "dotenv/config.js";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

const suppliedToPublickey = process.argv[2] || null;

if(!suppliedToPublickey) {
    console.log(`Please provide a public key to trassfer to!`);
    process.exit(1);
}

const senderKeypair = getKeypairFromEnvironment("SECRET_KEY");

console.log(`suppliedToPublickey: ${suppliedToPublickey}`);

const toPubkey = new PublicKey(suppliedToPublickey);

const connection = new Connection("https://api.devnet.solana.com", "confirmed");

console.log(`Loaded our own keypair, the destination public key, and connected to the solana network!`);

const transaction = new Transaction();

const LAMPORTS_TO_SEND = 5000;

const SOL_TO_SEND = LAMPORTS_TO_SEND /LAMPORTS_PER_SOL;

const sendSolInstruction = SystemProgram.transfer({
    fromPubkey: senderKeypair.publicKey,
    toPubkey,
    lamports: LAMPORTS_TO_SEND,
});

transaction.add(sendSolInstruction);

const signature = await sendAndConfirmTransaction(connection, transaction, [senderKeypair,]);

console.log(`Finished! Sent ${SOL_TO_SEND} SOL to the address ${toPubkey}`);
console.log(`Transaction signature is ${signature}`);



