appMedicareEnrollment.service("LoginService", ['$http', '$httpParamSerializerJQLike', function ($http, $httpParamSerializerJQLike, $sessionStorage) {
    this.getuserdetails = function (username, Password) {
        debugger;
        return $http.get("http://medicareapi.agentleadcenter.com/api/HumanaAPI/GetLogin/" + username + "/" + Password);
    }
}]);