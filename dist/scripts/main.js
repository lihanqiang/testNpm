(function() {
  var myApp;

  myApp = angular.module('myApp', []);

  myApp.controller('myController', [
    '$scope', 'myService', function($scope, myService) {
      return $scope.pages = [
        {
          pageNum: 1
        }, {
          pageNum: 2
        }, {
          pageNum: 3
        }
      ];
    }
  ]);

  myApp.factory('myService', function() {
    var service;
    service = {};
    service.getData = function() {};
    service.setData = function() {};
    service.slidesLength = 3;
    return service;
  });

  myApp.directive('myDirective', function() {
    return {
      replace: true,
      templateUrl: './templates/temp1.html',
      link: function(scope, elem, attrs) {
        var move, run;
        move = function() {
          var slideWrap;
          slideWrap = elem.find('.slide-show-wrap');
          return elem.find('.slides:first').animate({
            marginLeft: '-500'
          }, 1000, function() {
            return elem.find('.slides:first').appendTo(slideWrap);
          });
        };
        run = function(speed) {
          return window.setInterval(move, speed);
        };
        return run(4000);
      }
    };
  });

}).call(this);

(function() {
  var myBottomShow;

  myBottomShow = function() {
    var data, show;
    data = {
      name: 'Li',
      author: 'Jack',
      time: '2016-12',
      desc: 'MIT All Rights Reserved'
    };
    show = function() {
      var domBottom;
      domBottom = "<div class='bottom'> <p>" + data.author + " " + data.name + "</p><p>" + data.desc + " " + data.time + "</p> </div>";
      return $(domBottom).appendTo('body');
    };
    return {
      show: show
    };
  };

  myBottomShow().show();

}).call(this);
