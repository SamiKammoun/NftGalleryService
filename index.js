const express = require("express");
const app = express();
const utils = require("./utils.js");

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log("Server listening on port 3000");
});

app.get(`/nfts/:address`, async (req, res) => {
  const nfts = await utils.getContracts(req.params.address);
  res.send(nfts);
  //nfts is an array with elements that look like this:
  //   {
  //     contract: {
  //       address: '0x3fe1a4c1481c8351e91b64d5c398b159de07cbc5',
  //       name: 'SupDucks',
  //       symbol: 'SD',
  //       totalSupply: '10001',
  //       tokenType: 'ERC721',
  //       openSea: [Object]
  //     },
  //     tokenId: '7059',
  //     tokenType: 'ERC721',
  //     title: 'SupDuck 7059',
  //     description: '',
  //     timeLastUpdated: '2023-01-07T04:39:29.940Z',
  //     metadataError: undefined,
  //     rawMetadata: {
  //       name: 'SupDuck 7059',
  //       image: 'https://ipfs.io/ipfs/QmdkjpvMvzQ9J4AEUQEmsKbD2usAd955qp2gL1NoAAu3Xm',
  //       seller_fee_basis_points: 300,
  //       external_url: 'https://www.supducks.com/',
  //       attributes: [Array],
  //       fee_recipient: '0xA18a2078D44C93867dB711ed80C0E2784BB3c8d3'
  //     },
  //     tokenUri: {
  //       raw: 'ipfs://QmeeBx1ZmC7sUumbp3SCQCtFNiMrwAsNcJLeAgmZ84EHEV',
  //       gateway: 'https://ipfs.io/ipfs/QmeeBx1ZmC7sUumbp3SCQCtFNiMrwAsNcJLeAgmZ84EHEV'
  //     },
  //     media: [ [Object] ],
  //     spamInfo: undefined,
  //     balance: 1
  //   }
});
