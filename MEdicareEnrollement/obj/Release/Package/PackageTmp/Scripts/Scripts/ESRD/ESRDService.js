appMedicareEnrollment.service("ESRDService", ['$http', '$httpParamSerializerJQLike', function ($http, $httpParamSerializerJQLike, $sessionStorage) {
    
    this.InsertUpdateESRD = function (ESRD_Result) {
        var response = $http({
            url: "http://localhost:61207/api/HumanaAPI/InsertESRD/",
            dataType: 'json',
            method: 'POST',
            data: ESRD_Result,
            headers: {
                "Content-Type": "application/json"
            }
        })
        return response;
    }
}]);