(function(window, document, undefined) {
	'use strict'
	angular.module('eliteApp')
		.controller('LeaguesCtrl', ['$state','eliteApi', LeaguesCtrl]);

	function LeaguesCtrl($state, eliteApi) {
		var vm = this;
		var leagues = eliteApi.getLeagues();

		vm.leagues = leagues;

		vm.selectLeague = function(leagueId) {
			$state.go('app.locations')
		}
	}
})(window, document);

// (function(window, document, undefined) {
// 	'use strict'
// 	angular.module('eliteApp').controller('LeaguesCtrl', ['$state','eliteApi', LeaguesCtrl]);

// 	function LeaguesCtrl($state, eliteApi) {
// 		var vm = this;

// 		eliteApi.getLeagues(function(data) {
// 			vm.leagues = data;
// 		});

// 		vm.selectLeague = function(leagueId) {
// 			eliteApi.setLeagueId(leagueId)
// 			$state.go('app.teams')
// 		}
// 	}


// })(window, document);