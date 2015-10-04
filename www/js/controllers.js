angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http) {

    var purchaseEndpoint = 'http://api.reimaginebanking.com/accounts/560f0206f8d8770df0efa2b8/purchases?key=4f1c409728bbd17dca31ea24b9151f7a';

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
    }
    var deploy = new Ionic.Deploy();
    $scope.doRefresh = function() {
        $http.get(purchaseEndpoint).
        success(function(data, status, headers, config) {

            for (var i = 0; i < data.length; i++) {
                data[i].merchant = merchants[data[i].merchant_id];
            }
            console.log(data.length)
            data.sort(function (a, b) {
              if (a.status == b.status) {
                if (a._id < b._id) {
                  return 1
                } else {
                  return -1
                }
              }
              if (a.status == "pending") return -1;
              if (b.status == "pending") return 1;
            });
            $scope.purchases = data;
            console.log($scope.purchases)
        }).
        error(function(data, status, headers, config) {
            $scope.getSuccessful = "unSuccessful"
        }).
        finally(function() {
            // Stop the ion-refresher from spinning
            $scope.$broadcast('scroll.refreshComplete');
        });;
    }
    $scope.doRefresh();
    // Update app code with new release from Ionic Deploy
    $scope.doUpdate = function() {
        deploy.update().then(function(res) {
            console.log('Ionic Deploy: Update Success! ', res);
        }, function(err) {
            console.log('Ionic Deploy: Update error! ', err);
        }, function(prog) {
            console.log('Ionic Deploy: Progress... ', prog);
        });
    };

    // Check Ionic Deploy for new code
    $scope.checkForUpdates = function() {
        console.log('Ionic Deploy: Checking for updates');
        deploy.check().then(function(hasUpdate) {
            console.log('Ionic Deploy: Update available: ' + hasUpdate);
            $scope.hasUpdate = hasUpdate;
        }, function(err) {
            console.error('Ionic Deploy: Unable to check for updates', err);
        });
    }
})

.controller('ChatsCtrl', function($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function(chat) {
        Chats.remove(chat);
    };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
})

.controller('ReportCtrl', function($scope, $stateParams) {
    //$scope.purchase = Purchases.get($stateParams.purchaseId);
})

.controller('AccountCtrl', function($scope) {
    $scope.settings = {
        enableFriends: true
    };
});
