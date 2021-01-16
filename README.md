## DApp-Donation:
This project is a part of UTCC assignment project, Which will use truffle pet-shop framework as a reference to implement the process

## Donation Web-base Dapp
Simulate web-base DApp for donate goods to recipient becasue due to current situation. most of donator do not know the goods they have donate have already reach to th people they help or not? cannot track or check any result which cause some of problem as we know "Corruption". because of this problem we have design the web DApp for donator and recipient have meet and track all the detail in real time.

### Smart Contract
For this project will use smart contract with File call "Donation.sol" (Solidity)
- With contract name : Donation
- 12 address for recipient
- Donate funtion when donator have donate to recipient, status will be change succes as recipient receive 

### Front-End (UI design)
main file to desing the UI and connect to user it will be a file calls "index.html" by call Back-end as app.js / bootstrap.min.js / truffle-contract.js / web3.min.js and also can modify the UI as picture / Background / Fonts / Title ETC.

### Back-End
app.js is a Back-End file coding to call other code return the variable.
E.g.
- Use get.json to call Recipients.json with for loop command. This will retrieve information for setting the variables for CarsTemplate for display in the front-end.
- Use initWeb3 indicates which Block-chain (web3) is used to connect to Smart Contract (Metamask, Legacy browser and Ganache) markDonated as Function to connect to Wallet address and when transaction occurs, display of Donate button. Will change to Donated etc.


## 1. Configure environment
Create a directory to save this project and use the following command to create and move into a directory named Donating.
```
mkdir Donating
cd Donating
```

1.1 Download the structure and files of the Donation project from the Truffle Framework using the following command in terminal.
```
truffle unbox pet-shop
```
Then check all the download file with ```ls -l``` and will see the following directory:
- contracts: This is the directory in which Smart Contracts are written in Solidity.
- migrations: This is a directory in which JavaScript files are stored in the Smart Contracts code to the blockchain.
- src: is a directory used to store web application related files such as JavaScript, CSS, HTML, images, etc.
- test: This is a directory to store Solidity or JavaScript files that can be used to test Smart Contracts.
- truffle-config.js: is the configuration file of the project.

1.2 Open Virtual Studio Code  >  File  >  Open Folder…[Ctrl+K Ctrl+O]  >  Choose the Donation (The file that you have storage with)
