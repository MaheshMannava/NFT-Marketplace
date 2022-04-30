/* hardhat.config.js */
require("@nomiclabs/hardhat-waffle")

module.exports = {
  defaultNetwork: "hardhat",
   networks: {
    hardhat: {
      chainId: 1337
    },

  //mumbai: {
  //  url: "https://polygon-mumbai.g.alchemy.com/v2/43KRSeoYJUI4qliRRxZJLGBlHclZiNiP",
  //  accounts: [process.env.privateKey]
  // }
   },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}