appMedicareEnrollment.service("MCIService", ['$http', '$httpParamSerializerJQLike', function ($http, $httpParamSerializerJQLike, $sessionStorage) {
    
    this.InsertUpdateMCI = function (MCI_Result) {
        var response = $http({
            url: "http://equitaweb.com/MedicalEnrollmentAPI/api/HumanaAPI/InsertMCInfo/",
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
            url: "http://equitaweb.com/MedicalEnrollmentAPI/api/HumanaAPI/InsertESRD/",
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
        
        return $http.get("http://equitaweb.com/MedicalEnrollmentAPI/api/HumanaAPI/GetStates");
    }
    this.getEsrd = function (ApplicationDetailId) {
        
        return $http.get("http://equitaweb.com/MedicalEnrollmentAPI/api/HumanaAPI/GetESRD/" + ApplicationDetailId + "");
    }
}]);