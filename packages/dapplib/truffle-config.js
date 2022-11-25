require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess narrow flee skull guard render remember essay include knock brown twenty'; 
let testAccounts = [
"0xbe8aef32716ad1af0aec25104d6e04ececf3f6d2c9a743f426e62cfa6b28a5a5",
"0x8a578a12a14106641f42752565d78b7929c39547fefb8159f38d3c6320daf771",
"0xdbbb8eae457400f0112cc6cb4d5d1da6f8cd89e098c16b1886419e595a17a666",
"0x4e99271f95236fd4627aa7ab7345c76de71ab3191640e505eb2a9515b3408f1d",
"0xf1026e79aa8451e975fb3bd36116c319de81a9314b34b53f02a1ab1227754236",
"0xe863289d4c0b022d23c1c5642a844dc027db6c3209cf458c5569efbf20423369",
"0x381bd20492e35b85436ccb4bc396d48716283c7f3d3c6ea3bfe71e4a642af865",
"0xfb6790579524f813eefc63d9b51eb84dc46c6e6438fa8438697436dd2c9896d5",
"0xacc992782363fe6130ea171e2e918474cf0fa5e9d3c552182e23c8747a14f595",
"0x11d6d473492f3795394aaad1fc211d700803789a2d50701ba0ebac3ba25cc8f8"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

