angular.module('aggridenterpriselicensekey', ['servoy']).factory('$aggridenterpriselicensekey',[function() {
	return {
		setLicenseKey: function() {
			agGrid.LicenseManager.setLicenseKey("Servoy_B.V._Servoy_7Devs_1OEM_22_August_2019__MTU2NjQyODQwMDAwMA==6c490d5c7f432e256493c8ca91624202");
		}
	}
}]);
