(function() {
	'use strict'

	angular
		.module('eliteApp')
		.controller('GameCtrl', GameCtrl)

	GameCtrl.$injector = ['$stateParams', 'eliteApi']
	function GameCtrl($stateParams, eliteApi) {
		var vm = this

		var gameId = +$stateParams.id
		var data = eliteApi.getLeagueData()

		vm.game = _.find(data.games, { id: gameId })
	}
})()