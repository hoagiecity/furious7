angular.module('starter.services', [])

.factory('Chats', function () {
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
    name: 'Andrew Jostlin',
    lastText: 'Did you get the ice cream?',
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
    id: 3,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 4,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function (chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function (chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});

// Camera Factory
angular.module('starter.services', [])
.factory('Camera', ['$cordovaCamera', function ($cordovaCamera) {

  // return {
  //   getPicture: function(options) {
  //     var q = $q.defer();
  //     $cordovaCamera.getPicture(function(result) {
  //       // Do any magic you need
  //       q.resolve(result);
  //     }, function(err) {
  //       q.reject(err);
  //     }, options);
  //
  //     return q.promise;
  //   }
  // }

  return {
    getPicture: function () {
      document.addEventListener('deviceready', function () {

        var options = {
          destinationType: Camera.DestinationType.FILE_URI,
          sourceType: Camera.PictureSourceType.CAMERA,
        };

        $cordovaCamera.getPicture(options).then(function (imageURI) {
          var image = document.getElementById('myImage');
          image.src = imageURI;
          return image.src;
        }, function (err) {
          console.error(err);
          return err;
        });
        // $cordovaCamera.cleanup().then(...); // only for FILE_URI
      }, false);
    }
  }
}])

.factory('Calendar', ['$cordovaCalendar', function ($cordovaCalendar) {
  return {
    createEvent: function (d) {
      $cordovaCalendar.createEvent(d).then(function (result) {
        return result;
      }, function (err) {
        console.error(err);
      });
    }
  }
}])

.factory('OCR', ['$q', function ($q) {
  return {
    processPicture: function () {
      var q = $q.defer();
      var d = {
        title: 'Space Race',
        location: 'The Moon',
        notes: 'Bring sandwiches',
        startDate: new Date(2015, 0, 6, 18, 30, 0, 0, 0),
        endDate: new Date(2015, 1, 6, 12, 0, 0, 0, 0)
      };
      q.resolve(d);
      return q.promise;
    }
  };
}]);
