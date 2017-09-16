appMedicareEnrollment.service("OSBService", ['$http', '$httpParamSerializerJQLike', function ($http, $httpParamSerializerJQLike, $sessionStorage) {
    this.InsertOSBData = function (OSBInfo) {
        var response = $http({
            url: "http://localhost:61207/api/HumanaAPI/InsertOSBInfo/",
            dataType: 'json',
            method: 'POST',
            data: OSBInfo,
            headers: {
                "Content-Type": "application/json"
            }
        })
        return response;
    }
    this.getOSB = function (ApplicantionDetailId) {
        return $http.get("http://localhost:61207/api/HumanaAPI/GetOSBS/" + ApplicantionDetailId);
    }
}]);