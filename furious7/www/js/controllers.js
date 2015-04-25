angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Camera) {

  $scope.takePicture = function () {
    // Camera.getPicture().then(function(imageURI) {
    //   console.log(imageURI);
    // }, function(err) {
    //   console.err(err);
    // });

    var imageURI = 'img/test.png';
    console.log(imageURI);
  }
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
