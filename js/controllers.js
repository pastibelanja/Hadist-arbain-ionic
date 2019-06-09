angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('TentangCtrl', function($scope) { 
  })
  .controller('Hadis1Ctrl', function($scope) { 
  })
  .controller('Hadis2Ctrl', function($scope) { 
  })
  .controller('Hadis3Ctrl', function($scope) { 
  })
  .controller('Hadis4Ctrl', function($scope) { 
  })
  .controller('Hadis5Ctrl', function($scope) { 
  })
  .controller('Hadis6Ctrl', function($scope) { 
  })
  .controller('Hadis7Ctrl', function($scope) { 
  })
  .controller('Hadis8Ctrl', function($scope) { 
  })
  .controller('Hadis9Ctrl', function($scope) { 
  })
  .controller('Hadis10Ctrl', function($scope) { 
  })
  .controller('Hadis11Ctrl', function($scope) { 
  })
  .controller('Hadis12Ctrl', function($scope) { 
  })
  .controller('Hadis13Ctrl', function($scope) { 
  })
  .controller('Hadis14Ctrl', function($scope) { 
  })
  .controller('Hadis15Ctrl', function($scope) { 
  })
  .controller('Hadis16Ctrl', function($scope) { 
  })
  .controller('Hadis17Ctrl', function($scope) { 
  })
  .controller('Hadis18Ctrl', function($scope) { 
  })
  .controller('Hadis19Ctrl', function($scope) { 
  })
  .controller('Hadis20Ctrl', function($scope) { 
  })
  .controller('Hadis21Ctrl', function($scope) { 
  })
  .controller('Hadis22Ctrl', function($scope) { 
  })
  .controller('Hadis22Ctrl', function($scope) { 
  })
  
  .controller('CoverCtrl', function($scope) { 
  })  
  .controller('InfoCtrl', function($scope) { 
  })
  
.controller('SideMenuCtrl', function($scope) {
  $scope.theme = 'ionic-sidemenu-green';
  $scope.tree =
    [{      
      id: 0,
      name: "Tentang Imam Nawawi",
      icon: "ion-paper-airplane",
      level: 0,
      state: 'app.tentang'
    },{      
      id: 1,
      name: "Hadis Arbain",
      icon: "ion-paper-airplane",
      level: 0,
      items:[{
            id: 1000,
            name: "Hadits Niat",
            icon: "ion-connection-bars",
            level: 1,
            state: 'app.hadis1'
          },{
            id: 100,
            name: "Islam, Iman, Ihsan",
            icon: "ion-mic-a",
            level: 1,
            state: 'app.hadis2'
          },{
            id: 101,
            name: "Lima dasar Islam",
            icon: "ion-university",
            level: 1,
            state: 'app.hadis3'

          },{
            id: 102,
            name: "Takdir Manusia",
            icon: "ion-trophy",
            level: 1,
            state: 'app.hadis4'
          }, {
            id: 103,
            name: "Tentang Bid'ah",
            icon: "ion-cash",
            level: 1,
            state: 'app.hadis5'
          },{
            id: 104,
            name: "Halal Haram",
            icon: "ion-umbrella",
            level: 1,
            state: 'app.hadis6'
          },{
            id: 105,
            name: "Agama Adalah Nasehat",
            icon: "ion-ios-lightbulb-outline",
            level: 1,
            state: 'app.hadis7'
          },{
            id: 106,
            name: "Memerangi Manusia Ingkar",
            icon: "ion-settings",
            level: 1,
            state: 'app.hadis8'
          }  ,{
            id: 107,
            name: "Melaksanakan Perintah",
            icon: "ion-log-in",
            level: 1,
            state: 'app.hadis9'
          }  ,{
            id: 108,
            name: "Rizki yang halal",
            icon: "ion-ribbon-a",
            level: 1,
            state: 'app.hadis10'
          }  ,{
            id: 109,
            name: "Perkara Subhat",
            icon: "ion-alert-circled",
            level: 1,
            state: 'app.hadis11'
          }  ,{
            id: 110,
            name: "Tidak Bermanfaat",
            icon: "ion-close-circled",
            level: 1,
            state: 'app.hadis12'
          }  ,{
            id: 111,
            name: "Milik Orang lain",
            icon: "ion-person-stalker",
            level: 1,
            state: 'app.hadis13'
          }  ,{
            id: 112,
            name: "Zina, Membunuh, Murtad",
            icon: "ion-transgender",
            level: 1,
            state: 'app.hadis14'
          }  ,{
            id: 113,
            name: "Berkata Baik",
            icon: "ion-android-volume-up",
            level: 1,
            state: 'app.hadis15'
          }  ,{
            id: 114,
            name: "Jangan Marah",
            icon: "ion-sad",
            level: 1,
            state: 'app.hadis16'
          }  ,{
            id: 115,
            name: "Berbuat Baik",
            icon: "ion-thumbsup",
            level: 1,
            state: 'app.hadis17'
          }  ,{
            id: 116,
            name: "Taubat",
            icon: "ion-loop",
            level: 1,
            state: 'app.hadis18'
          }  ,{
            id: 117,
            name: "Perlindungan",
            icon: "ion-umbrella",
            level: 1,
            state: 'app.hadis19'
          },{
            id: 118,
            name: "Rasa Malu",
            icon: "ion-nuclear",
            level: 1,
            state: 'app.hadis20'
          }  ,{
            id: 119,
            name: "Istiqomah",
            icon: "ion-android-apps",
            level: 1,
            state: 'app.hadis21'
          }  ,{
            id: 120,
            name: "Syariat Islam",
            icon: "ion-android-chat",
            level: 1,
            state: 'app.hadis22'
          } 
          ]} ,{
      id: 2,
      name: "Info Aplikasi",
      icon: "ion-paper-airplane",
      level: 0,
      state: 'app.info'
          }  

    ];
});