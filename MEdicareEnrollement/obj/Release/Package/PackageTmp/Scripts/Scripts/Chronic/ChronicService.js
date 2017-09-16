appMedicareEnrollment.service("ChronicService", ['$http', '$httpParamSerializerJQLike', function ($http, $httpParamSerializerJQLike,$sessionStorage) {
    
    this.InsertChronicData = function (ChronicInfo) {
        var response = $http({
            url: "http://localhost:61207/api/HumanaAPI/InsertChronicInfo/",
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
        
        return $http.get("http://localhost:61207/api/HumanaAPI/GetStates");
    }
    this.GetChronicQues = function (ApplicantionDetailId) {
        debugger;
        return $http.get("http://localhost:61207/api/HumanaAPI/GetChronicDisease/" + ApplicantionDetailId + "/3");
    }

    this.getAddress = function (ApplicantionDetailId) {
        
        return $http.get("http://localhost:61207/api/HumanaAPI/GetAddress/" + ApplicantionDetailId);
    }
}]);