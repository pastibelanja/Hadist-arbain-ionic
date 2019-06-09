// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic','ionic-sidemenu', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.tentang', {
      url: '/tentang',
      views: {
        'menuContent': {
          templateUrl: 'templates/tentang.html',
          controller: 'TentangCtrl'
        }
      }
    })

  .state('app.hadis1', {
    url: '/hadis1',
    views: {
      'menuContent': {
        templateUrl: 'templates/hadis-1.html',
          controller: 'Hadis1Ctrl'
      }
    }
  })

  .state('app.hadis2', {
    url: '/hadis2',
    views: {
      'menuContent': {
        templateUrl: 'templates/hadis-2.html',
          controller: 'Hadis2Ctrl'
      }
    }
  })

  .state('app.hadis3', {
    url: '/hadis3',
    views: {
      'menuContent': {
        templateUrl: 'templates/hadis-3.html',
          controller: 'Hadis3Ctrl'
      }
    }
  })

  .state('app.hadis4', {
    url: '/hadis4',
    views: {
      'menuContent': {
        templateUrl: 'templates/hadis-4.html',
          controller: 'Hadis4Ctrl'
      }
    }
  })

  .state('app.hadis5', {
    url: '/hadis5',
    views: {
      'menuContent': {
        templateUrl: 'templates/hadis-5.html',
          controller: 'Hadis5Ctrl'
      }
    }
  })

  .state('app.hadis6', {
    url: '/hadis6',
    views: {
      'menuContent': {
        templateUrl: 'templates/hadis-6.html',
          controller: 'Hadis6Ctrl'
      }
    }
  })

  .state('app.hadis7', {
    url: '/hadis7',
    views: {
      'menuContent': {
        templateUrl: 'templates/hadis-7.html',
          controller: 'Hadis7Ctrl'
      }
    }
  })

  .state('app.hadis8', {
    url: '/hadis8',
    views: {
      'menuContent': {
        templateUrl: 'templates/hadis-8.html',
          controller: 'Hadis8Ctrl'
      }
    }
  })

  .state('app.hadis9', {
    url: '/hadis9',
    views: {
      'menuContent': {
        templateUrl: 'templates/hadis-9.html',
          controller: 'Hadis9Ctrl'
      }
    }
  })

  .state('app.hadis10', {
    url: '/hadis10',
    views: {
      'menuContent': {
        templateUrl: 'templates/hadis-10.html',
          controller: 'Hadis10Ctrl'
      }
    }
  })

  .state('app.hadis11', {
    url: '/hadis11',
    views: {
      'menuContent': {
        templateUrl: 'templates/hadis-11.html',
          controller: 'Hadis11Ctrl'
      }
    }
  })

  .state('app.hadis12', {
    url: '/hadis12',
    views: {
      'menuContent': {
        templateUrl: 'templates/hadis-12.html',
          controller: 'Hadis12Ctrl'
      }
    }
  })

  .state('app.hadis13', {
    url: '/hadis13',
    views: {
      'menuContent': {
        templateUrl: 'templates/hadis-13.html',
          controller: 'Hadis13Ctrl'
      }
    }
  })

  .state('app.hadis14', {
    url: '/hadis14',
    views: {
      'menuContent': {
        templateUrl: 'templates/hadis-14.html',
          controller: 'Hadis14Ctrl'
      }
    }
  })

  .state('app.hadis15', {
    url: '/hadis15',
    views: {
      'menuContent': {
        templateUrl: 'templates/hadis-15.html',
          controller: 'Hadis15Ctrl'
      }
    }
  })

  .state('app.hadis16', {
    url: '/hadis16',
    views: {
      'menuContent': {
        templateUrl: 'templates/hadis-16.html',
          controller: 'Hadis16Ctrl'
      }
    }
  })

  .state('app.hadis17', {
    url: '/hadis17',
    views: {
      'menuContent': {
        templateUrl: 'templates/hadis-17.html',
          controller: 'Hadis17Ctrl'
      }
    }
  })

  .state('app.hadis18', {
    url: '/hadis18',
    views: {
      'menuContent': {
        templateUrl: 'templates/hadis-18.html',
          controller: 'Hadis18Ctrl'
      }
    }
  })

  .state('app.hadis19', {
    url: '/hadis19',
    views: {
      'menuContent': {
        templateUrl: 'templates/hadis-19.html',
          controller: 'Hadis19Ctrl'
      }
    }
  })

  .state('app.hadis20', {
    url: '/hadis20',
    views: {
      'menuContent': {
        templateUrl: 'templates/hadis-20.html',
          controller: 'Hadis20Ctrl'
      }
    }
  })

  .state('app.hadis21', {
    url: '/hadis21',
    views: {
      'menuContent': {
        templateUrl: 'templates/hadis-21.html',
          controller: 'Hadis21Ctrl'
      }
    }
  })

  .state('app.hadis22', {
    url: '/hadis22',
    views: {
      'menuContent': {
        templateUrl: 'templates/hadis-22.html',
          controller: 'Hadis22Ctrl'
      }
    }
  })

.state('app.cover', {
    url: '/cover',
    views: {
      'menuContent': {
        templateUrl: 'templates/cover.html',
          controller: 'CoverCtrl'
      }
    }
  })  
.state('app.info', {
    url: '/info',
    views: {
      'menuContent': {
        templateUrl: 'templates/info-app.html',
          controller: 'InfoCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/cover');
});
