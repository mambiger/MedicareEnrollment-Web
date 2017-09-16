appMedicareEnrollment.service("MCIService", ['$http', '$httpParamSerializerJQLike', function ($http, $httpParamSerializerJQLike, $sessionStorage) {
    
    this.InsertUpdateMCI = function (MCI_Result) {
        var response = $http({
            url: "http://medicareapi.agentleadcenter.com/api/HumanaAPI/InsertMCInfo/",
            dataType: 'json',
            method: 'POST',
            data: MCI_Result,
            headers: {
                "Content-Type": "application/json"
            }
        })
        return response;
    }
    this.InsertUpdateESRD = function (ESRD_Result) {
        var response = $http({
            url: "http://medicareapi.agentleadcenter.com/api/HumanaAPI/InsertESRD/",
            dataType: 'json',
            method: 'POST',
            data: ESRD_Result,
            headers: {
                "Content-Type": "application/json"
            }
        })
        return response;
    }
    this.getStates = function () {
        
        return $http.get("http://medicareapi.agentleadcenter.com/api/HumanaAPI/GetStates");
    }
    this.getEsrd = function (ApplicationDetailId) {
        
        return $http.get("http://medicareapi.agentleadcenter.com/api/HumanaAPI/GetESRD/" + ApplicationDetailId + "");
    }
}]);