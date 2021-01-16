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