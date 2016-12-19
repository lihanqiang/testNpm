myApp = angular.module('myApp', [])
myApp.controller('myController', ['$scope', 'myService', ($scope, myService) -> 
	$scope.pages = [
		{pageNum: 1},
		{pageNum: 2},
		{pageNum: 3}
	]
])
myApp.factory('myService', () -> 
	service = {}
	service.getData = () -> 

	service.setData = () ->

	service.slidesLength = 3
	return service
)
myApp.directive('myDirective', () ->
	return {
		replace: true
		templateUrl: './templates/temp1.html'
		link: (scope, elem, attrs) ->
				move = () -> 
					slideWrap = elem.find('.slide-show-wrap')
					elem.find('.slides:first').animate(
						marginLeft: '-500'
					,1000, () -> 
							elem.find('.slides:first').appendTo(slideWrap)
					)
				run = (speed) -> 
						window.setInterval(move, speed)
				run(4000)
	}
)