const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('92ace4ab7c67ff6b424402cff6241d7995d55897d137288eff2e3b25facce847');
const myWalletAddress = myKey.getPublic('hex');

let myCoin = new Blockchain();

console.log('Mining...');
myCoin.minePendingTransactions(myWalletAddress);
console.log('Done mining!');

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
myCoin.addTransaction(tx1);

console.log('Mining...');
myCoin.minePendingTransactions(myWalletAddress);
console.log('Done mining!');

console.log('My balance: ', myCoin.getBalanceOfAddress(myWalletAddress));

console.log('Transaction History');
console.log(JSON.stringify(myCoin.getAllTransactions(), null, 4));