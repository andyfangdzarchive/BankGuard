angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})
.factory('Merchants', function() {
  var merchants = {
        "560f0206f8d8770df0efa0c5": {
            "_id": "560f0206f8d8770df0efa0c5",
            "name": "Kobe Steaks Japanese Restaurant",
            "avatar": "http://tf2wiki.net/ww/images/6/62/Item_icon_Buffalo_Steak_Sandvich.png",
            "address": "210 25th Avenue North",
            "city": "Nashville, TN 37203",
            "geocode": {
                "lng": -86.808745,
                "lat": 36.148375
            },
            "geocord": "36.1472823,-86.8068658"
        },
        "560f0206f8d8770df0efa0c6": {
            "_id": "560f0206f8d8770df0efa0c6",
            "name": "Bread & Company",
            "avatar": "http://vignette3.wikia.nocookie.net/gotascent/images/2/26/Bread_Icon.png/revision/latest?cb=20140615044509",
            "address": "2525 West End Avenue",
            "city": "Nashville, TN 37203",
            "geocode": {
                "lng": -86.808582,
                "lat": 36.146172
            },
            "geocord": "36.1472823,-86.8068658"
        }
    };
  return {
    all: function() {
      return merchants;
    },
    remove: function(merchant) {
      merchants.splice(merchants.indexOf(merchant), 1);
    },
    get: function(merchantId) {
      for (var i = 0; i < merchants.length; i++) {
        if (merchants[i]['_id'] === merchantId) {
          return merchants[i];
        }
      }
      return null;
    }
  };
})
.factory('Purchases', function($http) {
  var purchases;

  return {
    get: function(purchaseId){return 1;}
  };
})
