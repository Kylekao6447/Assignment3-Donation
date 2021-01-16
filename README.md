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

![1](https://user-images.githubusercontent.com/74086015/104798443-70732680-57f9-11eb-9c3f-e927b83b92da.jpg)
Then check all the download file with ```ls -l``` and will see the following directory:

- contracts: This is the directory in which Smart Contracts are written in Solidity.
- migrations: This is a directory in which JavaScript files are stored in the Smart Contracts code to the blockchain.
- src: is a directory used to store web application related files such as JavaScript, CSS, HTML, images, etc.
- test: This is a directory to store Solidity or JavaScript files that can be used to test Smart Contracts.
- truffle-config.js: is the configuration file of the project.

1.2 Open Virtual Studio Code  >  File  >  Open Folder…[Ctrl+K Ctrl+O]  >  Choose the Donation (The file that you have storage with)

![2](https://user-images.githubusercontent.com/74086015/104798990-e24d6f00-57fd-11eb-87b6-6e6130ac90fd.jpg)
![3](https://user-images.githubusercontent.com/74086015/104798988-e083ab80-57fd-11eb-9b40-44dd45046dc3.jpg)

## 2. Build Smart Contract

2.1 Donation Smart Contract
Go to contracts  >  New File  >  Donation.sol (create the name smart contract you want and last with .sol)

![4](https://user-images.githubusercontent.com/74086015/104799137-3a38a580-57ff-11eb-971b-3595a79ac191.JPG)

![5](https://user-images.githubusercontent.com/74086015/104799135-37d64b80-57ff-11eb-95f2-0714d33b452b.JPG)

![6](https://user-images.githubusercontent.com/74086015/104799136-39a00f00-57ff-11eb-8ee0-8820207058da.JPG)

After that input the following code, Due to this framework is from truffle pet-shop, so we have to change the detail as follow :
- Adoption	=>	Donation
- address[16]	=>	address[12]
- adopters	=>	donators
- adopt		=>	donate
- petId		=>	recipientId
- getAdopters	=>	getDonators

```
pragma solidity ^0.5.0;

contract Donation {
    address[12] public donators;

    function donate(uint recipientId) public returns (uint) {
        require(recipientId >= 0 && recipientId <=15);
        donators[recipientId] = msg.sender;
        return recipientId;
    }

    function getDonators() public view returns (address[12] memory) {
        return donators;
    }
}
```
#### Save the code every time when you have to edit the code by pressing Ctrl+S to save

2.2 compile 
truffle compile at the terminal in Virtual Studio Code by going to Terminal  >  New Terminal  >  click It will appear below then input
```
truffle compile
```

![7](https://user-images.githubusercontent.com/74086015/104799259-3fe2bb00-5800-11eb-9234-877677c20819.JPG)

![8](https://user-images.githubusercontent.com/74086015/104799260-41ac7e80-5800-11eb-97b0-47f5bd42fd58.JPG)

![9](https://user-images.githubusercontent.com/74086015/104799261-42451500-5800-11eb-89e1-0678c83dfe53.JPG)

It will be compiling the Donation.sol and Migrations.sol and build a new file call “build/contracts” which in this file will have Donation.json and Migrations.json

![10](https://user-images.githubusercontent.com/74086015/104799288-833d2980-5800-11eb-90aa-39ac772136be.jpg)

2.3 Migrate
The next step is to create a file to deploy the contract by going to migrations  >  New File  >  2_deploy_contracts.js  >  Press Enter
Then input the following code:

```
var Donation = artifacts.require("Donation");

module.exports = function(deployer) {
  deployer.deploy(Donation);
};
```

Changing point is:
- Adoption	=>	Donation

To migrate the smart contract we  have to use Ganache as a private blockchain by download the Ganache from the website and go to NEW WORKSPACE (ethereum)

![11](https://user-images.githubusercontent.com/74086015/104799376-44f43a00-5801-11eb-9b67-d53c27338267.JPG)

![12](https://user-images.githubusercontent.com/74086015/104799378-46bdfd80-5801-11eb-84ac-2d129a43f863.JPG)

In the WORKSPACE NAME input whatever name you want for current, we use Donation as a name of the workspace  >  SAVE WORKSPACE at the top right, and when we save Ganache will create 10 address and each address will have 100 ETH

![13](https://user-images.githubusercontent.com/74086015/104799380-47569400-5801-11eb-9924-586723b32619.JPG)

When Ganache start, the next step is to migrate as follow:
```
truffle migrate
```

If migrate are correct the result will be like this
```
Compiling your contracts...
===========================
> Compiling ./contracts/Donation.sol
> Compiling ./contracts/Migrations.sol
> Artifacts written to /home/fintech/Documents/Assignment/Donation_R0/build/contracts
> Compiled successfully using:
   - solc: 0.5.16+commit.9c3226ce.Emscripten.clang

fintech@fintech-dapp:~/Documents/Assignment/Donation_R0$ truffle migrate

Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.



Starting migrations...
======================
> Network name:    'development'
> Network id:      5777
> Block gas limit: 6721975 (0x6691b7)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0x5ba631041a833896ef2d1b033f01f24453a908cd546be8058e0cd50e56f3b122
   > Blocks: 0            Seconds: 0
   > contract address:    0xB4821C98c5ba31870175263923B4A4EA23956Ca0
   > block number:        1
   > block timestamp:     1610686820
   > account:             0xEB4BB3838459EdaBef3f9bDA404FcC17a6cb298b
   > balance:             99.99616114
   > gas used:            191943 (0x2edc7)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00383886 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00383886 ETH


2_deploy_contracts.js
=====================

   Deploying 'Donation'
   --------------------
   > transaction hash:    0x3371688d4fa7998ab1bfabc949b8bd52d03992c3071c15e4d72a5cc766d97036
   > Blocks: 0            Seconds: 0
   > contract address:    0x77274dDBEa6b385D63C74fE487b8c7b5fC315B5C
   > block number:        3
   > block timestamp:     1610686821
   > account:             0xEB4BB3838459EdaBef3f9bDA404FcC17a6cb298b
   > balance:             99.9912376
   > gas used:            203839 (0x31c3f)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00407678 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00407678 ETH


Summary
=======
> Total deployments:   2
> Final cost:          0.00791564 ETH
```

2.4 Test Smart Contract
To make sure the smart contract we have to build works correctly, we back to Virtua Studio Code  >  contracts  >  New File  >  TestDonation.sol  >  Press Enter and input the following code to test Donation.sol  and storage into the test directory.

```
pragma solidity ^0.5.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Donation.sol";

contract TestDonation {
  // The address of the donation contract to be tested
  Donation donation = Donation(DeployedAddresses.Donation());

  // The id of the recipient that will be used for testing
  uint expectedRecipientId = 8;

  //The expected person of donated recipient is this contract
  address expectedDonator = address(this);

  function testUserCanDonateRecipient() public {
    uint returnedId = donation.donate(expectedRecipientId);
    Assert.equal(returnedId, expectedRecipientId, "Donation of the expected recipient should match what is returned.");
  }

  // Testing retrieval of a single recipient's owner
  function testGetDonatorAddressByRecipientId() public {
    address donator = donation.donators(expectedRecipientId);
    Assert.equal(donator, expectedDonator, "Owner of the expected recipient should be this contract");
  }

  // Testing retrieval of all recipient owners
  function testGetDonatorAddressByRecipientIdInArray() public {
    // Store donators in memory rather than contract's storage
    address[12] memory donators = donation.getDonators();
    Assert.equal(donators[expectedRecipientId], expectedDonator, "Owner of the expected recipient should be this contract");
  }
}
```

Changing point:
- Adoption		=>	Donation
- adoption		=>	donation
- adopt			=>	donate
- TestAdoption		=>	TestDonation
- adopter		=>	donator
- adopters		=>	donators
- getAdopters		=>	getDonators
- expectedPetId		=>	expectedRecipientId
- expectedAdopter	=>	expectedDonator
- testUserCanAdoptPet		=>	testUserCanDonateRecipient
- testGetAdopterAddressByPetId	=>	testGetDonatorAddressByRecipientId
- testGetAdopterAddressByPetIdInArray	=>	testGetDonatorAddressByRecipientIdInArray

Next run the test from this directory in the terminal

```
truffle test
```

The result will be as follow:

![14](https://user-images.githubusercontent.com/74086015/104799490-1b87de00-5802-11eb-85dc-208d52706daa.jpg)

## 3. Design UI to connect with User
The appearance of the designed web application looks like this:

![15](https://user-images.githubusercontent.com/74086015/104800321-b54f8b00-5802-11eb-9429-4797a9c987e8.jpg)

As you can see, this is an edit of index.html, app.js and Recipients.json files 
starting with the front end "index.html" file
Open Visual Studio Code  >   src  >  index.html with the following code:
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Kao's Foundation</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the ptel via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-push-2">
          <h1 class="text-center">Kao's Foundation</h1>
          <hr/>
          <br/>
        </div>
      </div>

      <div id="RecipientsRow" class="row">
        <!-- RECIPIENTS LOAD HERE -->
      </div>
    </div>

    <div id="RecipientTemplate" style="display: none;">
      <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="panel panel-default panel-Recipient">
          <div class="panel-heading">
            <h3 class="panel-title">Luang Ta Noi Foundation</h3>
          </div>
          <div class="panel-body">
            <img alt="140x140" data-src="holder.js/140x140" class="img-rounded img-center" style="width: 100%;" src="http://localhost:7545/images/1.JPG" data-holder-rendered="true">
            <br/><br/>
            <strong>address</strong>: <span class="Recipient-address">Salaya, Phutthamonthon, Nakhon Pathom</span><br/>
            <strong>tel</strong>: <span class="Recipient-tel">096-646-4992</span><br/>
            <strong>goods</strong>: <span class="Recipient-goods">Clothes</span><br/><br/>
            <button class="btn btn-default btn-Donate" type="button" data-id="0">Donate</button>
          </div>
        </div>
      </div>
    </div>

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
    <script src="js/web3.min.js"></script>
    <script src="js/truffle-contract.js"></script>
    <script src="js/app.js"></script>
  </body>
</html>
```

## 4. Create a backend that can be connected to a smart contract.
4.1 Edit the src  >  js  >  app.js file in visual studio code to have the following code:

```
App = {
  web3Provider: null,
  contracts: {},

  init: async function() {
    // Load Recipients.
    $.getJSON('../Recipients.json', function(data) {
      var RecipientsRow = $('#RecipientsRow');
      var RecipientTemplate = $('#RecipientTemplate');

      for (i = 0; i < data.length; i ++) {
        RecipientTemplate.find('.panel-title').text(data[i].name);
        RecipientTemplate.find('img').attr('src', data[i].picture);
        RecipientTemplate.find('.Recipient-address').text(data[i].address);
        RecipientTemplate.find('.Recipient-tel').text(data[i].tel);
        RecipientTemplate.find('.Recipient-goods').text(data[i].goods);
        RecipientTemplate.find('.btn-Donate').attr('data-id', data[i].id);

        RecipientsRow.append(RecipientTemplate.html());
      }
    });

    return await App.initWeb3();
  },

   initWeb3: async function() {
    // Modern dapp browsers...
    if (window.ethereum) {
      App.web3Provider = window.ethereum;
      try {
        // Request account access
        await window.ethereum.enable();
      } catch (error) {
        // User denied account access...
        console.error("User denied account access")
      }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
      App.web3Provider = window.web3.currentProvider;
    }
    // If no injected web3 instance is detected, fall back to Ganache
    else {
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
    }
    web3 = new Web3(App.web3Provider);
    
    return App.initContract();
  },

  initContract: function() {
    $.getJSON('Recipients.json', function (data) {
      // Get the necessary contract artifact file and instantiate it with @truffle/contract
      var DonationArtifact = data;
      App.contracts.Donation = TruffleContract(DonationArtifact);

      // Set the provider for our contract
      App.contracts.Donation.setProvider(App.web3Provider);

      // Use our contract to retrieve and mark the Donated Recipients
      return App.markDonated();
    });
    return App.bindEvents();
  },

  bindEvents: function() {
    $(document).on('click', '.btn-Donate', App.handleDonate);
  },

  markDonated: function() {
    var DonationInstance;

    App.contracts.Donation.deployed().then(function (instance) {
      DonationInstance = instance;

      return DonationInstance.getDonators.call();
    }).then(function (Donators) {
      for (i = 0; i < Donators.length; i++) {
        if (Donators[i] !== '0x0000000000000000000000000000000000000000') {
          $('.panel-Recipient').eq(i).find('button').text('Donated').attr('disabled', true);
        }
      }
    }).catch(function (err) {
      console.log(err.message);
    });
  },

  handleDonate: function(event) {
    event.preventDefault();

    var RecipientID = parseInt($(event.target).data('id'));

    var DonationInstance;

    web3.eth.getAccounts(function (error, accounts) {
      if (error) {
        console.log(error);
      }

      var account = accounts[0];

      App.contracts.Donation.deployed().then(function (instance) {
        DonationInstance = instance;

        // Execute Donate as a transaction by sending account
        return DonationInstance.Donate(RecipientID, { from: account });
      }).then(function (result) {
        return App.markDonated();
      }).catch(function (err) {
        console.log(err.message);
      });
    });
  }

};

$(function() {
  $(window).load(function() {
    App.init();
  });
})
```

4.2 Create a .json file which is a database of 12 Recipient
Go to the src  >  create a new file "Recipients.json" with the following code.

```
[
  {
    "id": 0,
    "name": "Luang Ta Noi Foundation",
    "picture": "images/1.JPG",
    "tel": "096-646-4992",
    "address": "Nakhon Pathom",
    "goods": "Clothes"
  },
  {
    "id": 1,
    "name": "Thammarak Foundation",
    "picture": "images/2.JPG",
    "tel": "062-751-8800",
    "address": "Lopburi Province",
    "goods": "Clothes"
  },
  {
    "id": 2,
    "name": "Mirror Foundation",
    "picture": "images/3.JPG",
    "tel": "061-909-1840",
    "address": "Laksi, Bangkok",
    "goods": "Clothes"
  },
  {
    "id": 3,
    "name": "Fueng Fah House",
    "picture": "images/4.JPG",
    "tel": "02-583-6815",
    "address": "Pakkred,Nonthaburi",
    "goods": "Clothes"
  },
  {
    "id": 4,
    "name": "Baan Nokkamin Foundation",
    "picture": "images/5.JPG",
    "tel": "02-375-6497",
    "address": "Khlong Kum,Bangkok",
    "goods": "Books"
  },
  {
    "id": 5,
    "name": "Stang Mongkolsuk Library",
    "picture": "images/6.JPG",
    "tel": "02-201-5724",
    "address": "Phaya Thai,Bangkok",
    "goods": "Books"
  },
  {
    "id": 6,
    "name": "Pan Kan Restaurant",
    "picture": "images/7.JPG",
    "tel": "02-301-1096",
    "address": "Srinakarin,Bangkok",
    "goods": "Books"
  },
  {
    "id": 7,
    "name": "Mirror Foundation",
    "picture": "images/8.JPG",
    "tel": "02-973-2237",
    "address": "Vibhavadi,Bangkok",
    "goods": "Books"
  },
  {
    "id": 8,
    "name": "Aunt Joo",
    "picture": "images/9.JPG",
    "tel": "086-7751151",
    "address": "Pathum Thani Province",
    "goods": "Dog feeds"
  },
  {
    "id": 9,
    "name": "Manee dog",
    "picture": "images/10.JPG",
    "tel": "085-3569225",
    "address": "Wat Prayoon",
    "goods": "Dog feeds"
  },
  {
    "id": 10,
    "name": "Auntie Dog Home",
    "picture": "images/11.JPG",
    "tel": "084-6653559",
    "address": "Pathum Thani",
    "goods": "Dog feeds"
  },
  {
    "id": 11,
    "name": "Fairy house of feral animals",
    "picture": "images/12.JPG",
    "tel": "089-0996000",
    "address": "Muaklek, Saraburi",
    "goods": "Dog feeds"
  }
]
```

## 5. Install MetaMask
Go to website Metamask  >  Download Metamask  >  Get start  >  Create Wallet or Import Wallet
```Create wallet``` For those who have not applied before
```Import Wallet``` For those who already have an account

![16](https://user-images.githubusercontent.com/74086015/104806110-a7e8cf80-5807-11eb-96a7-6b3ce28ea4b3.JPG)

![17](https://user-images.githubusercontent.com/74086015/104806111-a8816600-5807-11eb-95df-693242268bca.JPG)

![18](https://user-images.githubusercontent.com/74086015/104806112-a919fc80-5807-11eb-963e-1cbae91a4729.JPG)

![19](https://user-images.githubusercontent.com/74086015/104806113-a9b29300-5807-11eb-9ace-ee709106d100.JPG)

Enter the ```Ganache``` Network Name to make it easy to remember. 
For ```New RPC the URL``` must be the Ganache URL 
```http://127.0.0.1:7545```

![20](https://user-images.githubusercontent.com/74086015/104806107-a61f0c00-5807-11eb-824d-b80ed4a08e33.JPG)

## 6. Operate the program
Input command in terminal
```
npm run dev
```
- Then the Web browser will open a web page application at the URL ```http: // localhost: 3000```

![21](https://user-images.githubusercontent.com/74086015/104806246-baafd400-5808-11eb-8c9a-1ca2dfa97ed4.jpg)

- You can see that Before there was a button below scale box will say "Donate" in dark text.

![22](https://user-images.githubusercontent.com/74086015/104806412-e41d2f80-5809-11eb-9fb6-60ed910b461c.JPG)

- When a Donator want to choose any Recipients just click a button, then to the button will change to "Donated"

![23](https://user-images.githubusercontent.com/74086015/104806414-e4b5c600-5809-11eb-94fd-fdc15b4706cb.JPG)

- Ganache and Metamask will update the balance after deducting the gas charge.

![24](https://user-images.githubusercontent.com/74086015/104806411-e2536c00-5809-11eb-82ce-7399aa765a81.JPG)
