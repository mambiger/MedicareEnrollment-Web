appMedicareEnrollment.service("ChronicService", ['$http', '$httpParamSerializerJQLike', function ($http, $httpParamSerializerJQLike,$sessionStorage) {
    
    this.InsertChronicData = function (ChronicInfo) {
        var response = $http({
            url: "http://medicareapi.agentleadcenter.com/api/HumanaAPI/InsertChronicInfo/",
            dataType: 'json',
            method: 'POST',
            data: ChronicInfo,
            headers: {
                "Content-Type": "application/json"
            }
        })
        return response;
    }
    this.getStates = function () {
        
        return $http.get("http://medicareapi.agentleadcenter.com/api/HumanaAPI/GetStates");
    }
    this.GetChronicQues = function (ApplicantionDetailId) {
        return $http.get("http://medicareapi.agentleadcenter.com/api/HumanaAPI/GetChronicDisease/" + ApplicantionDetailId + "/3");
    }

    this.getAddress = function (ApplicantionDetailId) {

        return $http.get("http://medicareapi.agentleadcenter.com/api/HumanaAPI/GetAddress/" + ApplicantionDetailId);
    }
}]);