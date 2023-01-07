const alch = require("alchemy-sdk");
require("dotenv").config();
const config = {
  apiKey: process.env.ALCHEMY_API_KEY,
  network: alch.Network.ETH_MAINNET,
};

const alchemy = new alch.Alchemy(config);

const getContracts = async (ownerAddress) => {
  try {
    const res = await alchemy.nft.getNftsForOwner(ownerAddress);
    return res.ownedNfts;
  } catch {
    return [];
  }
};

module.exports = { getContracts };
