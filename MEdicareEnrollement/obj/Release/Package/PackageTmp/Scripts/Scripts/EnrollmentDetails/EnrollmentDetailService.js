appMedicareEnrollment.service("EnrollmentDetailService", ['$http', '$httpParamSerializerJQLike', function ($http, $httpParamSerializerJQLike, $sessionStorage) {
    debugger;
    this.getEnrollmentdata = function (username) {
        debugger;
        return $http.get("http://localhost:61207/api/HumanaAPI/GetErollmentDetails/" + username);
    }
    this.DeleteEnrollmentdata = function (rId, username) {
        debugger;
        return $http.get("http://localhost:61207/api/HumanaAPI/UpdateEnrollment/" + rId + "/" + username);
    }
}]);