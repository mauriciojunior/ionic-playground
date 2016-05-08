(function() {
	'use strict'

	angular
		.module('eliteApp')
		.controller('LocationsCtrl', LocationsCtrl)

	LocationsCtrl.$injector = ['eliteApi']
	function LocationsCtrl(eliteApi) {
		var vm = this

		var data = eliteApi.getLeagueData()
		vm.locations = data.locations
	}
})()