appMedicareEnrollment.service("EnrollmentDetailService", ['$http', '$httpParamSerializerJQLike', function ($http, $httpParamSerializerJQLike, $sessionStorage) {
    this.getEnrollmentdata = function (username) {
        return $http.get("http://medicareapi.agentleadcenter.com/api/HumanaAPI/GetErollmentDetails/" + username);
    }
    this.DeleteEnrollmentdata = function (rId, username) {
        return $http.get("http://medicareapi.agentleadcenter.com/api/HumanaAPI/UpdateEnrollment/" + rId + "/" + username);
    }
}]);
