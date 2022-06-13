const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('92ace4ab7c67ff6b424402cff6241d7995d55897d137288eff2e3b25facce847');
const myWalletAddress = myKey.getPublic('hex');

let myCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
myCoin.addTransaction(tx1);

console.log('\n Starting the miner...');
myCoin.minePendingTransactions(myWalletAddress);

console.log('\nBalance of me is: ', myCoin.getBalanceOfAddress(myWalletAddress));

console.log('Is chain valid?', myCoin.isChainValid());