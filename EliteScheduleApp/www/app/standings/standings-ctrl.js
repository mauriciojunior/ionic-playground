(function() {
	'use strict'

	angular
		.module('eliteApp')
		.controller('StandingsCtrl', StandingsCtrl)

	StandingsCtrl.$injector = ['eliteApi']
	function StandingsCtrl(eliteApi) {
		var vm = this
		var data = eliteApi.getLeagueData()
		vm.standings = data.standings
	}

})()