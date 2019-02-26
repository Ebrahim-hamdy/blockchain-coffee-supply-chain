const HDWalletProvider = require('truffle-hdwallet-provider');

const METAMASK_SEED = "idea exile obey monitor enlist harsh state cash mesh essay hope cricket";
const INFURA_LINK = "https://rinkeby.infura.io/v3/83fb83d143d2426f9c550449c23a58f3";

module.exports = {
  networks: {
    ganache: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*' // Match any network id
    },

    rinkeby: {
      provider: () => new HDWalletProvider(METAMASK_SEED, INFURA_LINK),
      network_id: '4',
      gas: 4500000,
      gasPrice: 10000000000
    }
  }
};