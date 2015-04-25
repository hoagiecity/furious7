angular.module('starter.controllers', [])

.controller('DashCtrl', function ($scope, Camera, Calendar, OCR) {

  $scope.saveEvent = function () {
    // Camera.getPicture().then(function(imageURI) {
    //   console.log(imageURI);
    // }, function(err) {
    //   console.err(err);
    // });

    var imageURI = 'img/test.png';
    console.log(imageURI);
    
    OCR.processPicture().then(function (d) {
      console.log(d);
      Calendar.createEvent(d).then(function (result) {
        console.log(result);
      }, function (err) {
        console.error(err);
      });

    }, function (err) {
      console.error(err);
    });
  }
})

.controller('ChatsCtrl', function ($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function ($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
