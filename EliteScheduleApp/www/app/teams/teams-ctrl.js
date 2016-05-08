(function() {
	'use strict'

	angular
		.module('eliteApp')
	  .controller('TeamsCtrl', TeamsCtrl)

  TeamsCtrl.$injector = ['eliteApi']
	function TeamsCtrl(eliteApi) {
		var vm = this

		var data = eliteApi.getLeagueData()
		vm.teams = data.teams
	}
})()
