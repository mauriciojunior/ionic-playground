(function(window, document, undefined) {
	'use strict';

	angular.module('eliteApp').controller('GameCtrl', ['$stateParams', 'eliteApi',GameCtrl]);

	function GameCtrl($stateParams, eliteApi) {
		var vm = this;

		var gameId = +$stateParams.id;
		var data = eliteApi.getLeagueData();

		vm.game = _.find(data.games, { 'id': gameId });
	}


})(window, document);