import { Keypair } from "@solana/web3.js";

// const keypair = Keypair.generate();

// console.log(`Generated keypair successfully!`);
// console.log(`The public key is: `, keypair.publicKey.toBase58());
// console.log(`The secret key is: `, keypair.secretKey);
// console.log(`Finished!`);
import "dotenv/config.js"
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

const keypair = getKeypairFromEnvironment("SECRET_KEY");

console.log(`FInished! We've loaded our secret key securely, using an .env file!`);

console.log(`Generated keypair successfully!`);
console.log(`The public key is: `, keypair.publicKey.toBase58());
console.log(`The secret key is: `, keypair.secretKey);
console.log(`Finished!`);