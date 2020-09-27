const ecLib = require('elliptic').ec;
const ec = new ecLib('secp256k1') // curve name
// 如果作为依赖安装，请用这种方式import
// const { Transaction, Chain, Block } = require("borongcoin");
const { Transaction, Chain, Block } = require("./blockChainDemo");

const borongCoin = new Chain(3);
const keyPairSender = ec.genKeyPair();
const privateKeySender = keyPairSender.getPrivate('hex')
const publicKeySender = keyPairSender.getPublic('hex')

const keyPairReceiver = ec.genKeyPair();
const privateKeyReceiver = keyPairReceiver.getPrivate('hex')
const publicKeyReceiver = keyPairReceiver.getPublic('hex')

const t1 = new Transaction(publicKeySender, publicKeyReceiver, 10);
t1.sign(ec.keyFromPrivate(privateKeySender))
console.log(t1)
// t1.amount=20
// const t2 = new Transaction("addr2", "addr1", 5);
borongCoin.addTransaction(t1);
// borongCoin.addTransaction(t2);

// console.log(borongCoin)
borongCoin.mineTransactionPool("addr3");
console.log(borongCoin.validateChain())
console.log(borongCoin)
console.log(borongCoin.chain[1])