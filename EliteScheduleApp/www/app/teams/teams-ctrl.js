(function(window, document, undefined) {
	'use strict';

	angular.module('eliteApp').controller('TeamsCtrl', ['eliteApi', TeamsCtrl]);

	function TeamsCtrl(eliteApi) {
		var vm = this;

		var data = eliteApi.getLeagueData();
		vm.teams = data.teams;
	}
})(window, document);

// (function(window, document, undefined) {
// 	'use strict';

// 	angular.module('eliteApp').controller('TeamsCtrl', ['eliteApi', TeamsCtrl]);

// 	function TeamsCtrl(eliteApi, $ionicScroll) {
// 		var vm = this;

// 		eliteApi.getLeagueData(function (data) {
// 			vm.teams = data.teams;
// 		});
// 	}
// })(window, document);