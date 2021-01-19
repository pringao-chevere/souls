# EtherSouls
#### Human souls on the Ethereum mainnet

---
## About the project

EtherSouls is an NFT collectable project where you can collect other people's souls. 
Each address can mint a `SOUL` token, which is unique to that address. It represents the 
soul of the person who owns that Ethereum address. The tokens are fully compliant ERC-721 tokens,
which can be kept, traded, or sold on 3rd party NFT marketplaces. 

EtherSouls is completely free, and doesn't charge a fee for minting `SOUL` tokens. The only fee 
users have to pay are Ethereum transaction fees.

## The code

Verified contract code is [available on Etherscan](https://etherscan.io/address/0x1f9695C836eC9d12391Ed46cf4fc50dA664F5Dc2#code). The contract is a standard ERC-721 implementation with the Enumerable and Metadata extensions.

The only project-specific function is `separate()`. This function can be executed once by each Ethereum address, and will mint the corresponding `SOUL` token. This address will be the owner of the newly minted token.

Contract address: [0x1f9695C836eC9d12391Ed46cf4fc50dA664F5Dc2](https://etherscan.io/address/0x1f9695C836eC9d12391Ed46cf4fc50dA664F5Dc2)

## Team

Project created by [Pringao Chevere](https://www.linkedin.com/in/pringao-chevere-36bb93203/).