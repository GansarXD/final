var app = angular.module("myApp",[]);
app.controller("myCtrl", function ($scope,$http,$timeout,$window,$document){
  $scope.back = false;
  $scope.userlogin = localStorage.getItem("logins");
  $scope.basket = [];
  // $scope.basket_arr = localStorage.getItem("basket_arr");
  if($scope.basket_arr==null){
    $scope.basket_arr = []
  }
  console.log($scope.basket_arr)
  $scope.games=[
  {
    "image":"images/csgo.jpg",
    "name":"Counter-Strike: Global Offensive",
    "price":"349 руб.",
    "url":"http://localhost/final2/csgo.html"
  },
  {
    "image":"http://wycc.pro/media/games/dishonored-2/full.jpg",
    "name":"Dishonored 2",
    "price":"1299 руб.",
    "url":"http://localhost/final2/dis2.html"
  },
  {
    "image":"http://wycc.pro/media/games/garrys-mod/full.jpg",
    "name":"Garry's Mod",
    "price":"125 руб.",
    "url":"http://localhost/final2/gmod.html"
  },
  {
    "image":"http://wycc.pro/media/games/mafia-iii/full.jpg",
    "name":"Mafia III",
    "price":"999 руб.",
    "url":"http://localhost/final2/mafia.html"
  },
  {
    "image":"http://wycc.pro/media/games/watch_dogs-2/full.jpg",
    "name":"Watch_Dogs 2",
    "price":"1 999 руб.",
    "url":"http://localhost/final2/wdos.html"
  },
  {
    "image":"http://wycc.pro/media/games/deus-ex-mankind-divided/full.jpg",
    "name":"Deus Ex: Mankind Divided",
    "price":"749 руб.",
    "url":"http://localhost/final2/deus.html"
  },
  {
    "image":"http://wycc.pro/media/games/wwe-2k16/full.jpg",
    "name":"WWE 2K16",
    "price":"499 руб.",
    "url":"http://localhost/final2/wwe.html"
  },
  {
    "image":"http://wycc.pro/media/games/fallout-4/full.jpg",
    "name":"Fallout 4",
    "price":"679 руб.",
    "url":"http://localhost/final2/fallout.html"
  },
  {
    "image":"http://wycc.pro/media/games/the-elder-scrolls-v-skyrim-legendary/full.jpg",
    "name":"The Elder Scrolls V: Skyrim",
    "price":"249 руб.",
    "url":"http://localhost/final2/skyrim.html"
  },
  {
    "image":"http://wycc.pro/media/games/chivalry-medieval-warfare/full.jpg",
    "name":"Chivalry: Medieval Warfare",
    "price":"99 руб.",
    "url":"http://localhost/final2/chiv.html"
  },
  {
    "image":"http://wycc.pro/media/games/tom-clancys-the-division/full.jpg",
    "name":"Tom Clancys The Division",
    "price":"799 руб.",
    "url":"http://localhost/final2/division.html"
  },
  {
    "image":"http://wycc.pro/media/games/this-is-the-police/full.jpg",
    "name":"This Is the Police",
    "price":"295 руб.",
    "url":"http://localhost/final2/police.html"
  },
  {
    "image":"http://wycc.pro/media/games/call-of-duty-infinite-warfare/full.jpg",
    "name":"Call of Duty: Infinite Warfare",
    "price":"1 399 руб.",
    "url":"http://localhost/final2/cod.html"
  },
  {
    "image":"http://wycc.pro/media/games/total-war-warhammer/full.jpg",
    "name":"Total War: WARHAMMER",
    "price":"1 499 руб.",
    "url":"http://localhost/final2/totalw.html"
  },
  {
    "image":"http://wycc.pro/media/games/killing-floor-2/full.jpg",
    "name":"Killing Floor 2",
    "price":"629 руб.",
    "url":"http://localhost/final2/kill.html"
  },
  {
    "image":"http://wycc.pro/media/games/battlefield-4/full.jpg",
    "name":"Battlefield 4",
    "price":"569 руб.",
    "url":"http://localhost/final2/bat.html"
  }
  ];
  $scope.reg_on = function(){
    $scope.reg_window = true;
    $scope.back = true;
  }
  $scope.log_on = function(){
    $scope.log_window = true;
    $scope.back = true;
  }
  $scope.cart_open = function(){
    $scope.basket_list = true;
    $scope.back = true;
  }
  $scope.log_in = function(){
    $http.get("login.json").then(function(response){
        for(var i = 0; i < response.data.users.length; i++){
          if(response.data.users[i].login==$scope.username && response.data.users[i].password==$scope.password){
            $scope.element = i;
            console.log(response.data.users[i].login);
            break;
          }
          else{
            $scope.count += 1;
            console.log($scope.count);
          }
        }
        if($scope.count == response.data.users.length){
          $timeout(function(){
            window.alert("invalid data");
            $scope.count = 0;
          });
        }
        else{
          $scope.userlogin = response.data.users[$scope.element].name;
          localStorage.setItem("logins",$scope.userlogin);
          console.log($scope.userlogin);
          window.location = "loged.html";
        }
        $scope.count = 0;
    });
  }
  // $buy_now = function(){

  // }

  $scope.addbasket = function(item){
    // $scope.basket_arr = localStorage.getItem("basket_arr")
    // if($scope.basket_arr==null){
    //   $scope.basket_arr = [] 
    // }
    
    console.log(item);
    $scope.basket_arr.push(item);

    console.log($scope.basket_arr);
    // localStorage.setItem("basket_arr",$scope.basket_arr)
    


  }
  $scope.removeBasket = function(item){
    console.log(item)
    index = $scope.basket_arr.indexOf(item);
    console.log(index)
    $scope.basket_arr.splice(index,index+1);
    
  }

});