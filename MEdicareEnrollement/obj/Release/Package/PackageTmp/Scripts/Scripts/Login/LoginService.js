appMedicareEnrollment.service("LoginService", ['$http', '$httpParamSerializerJQLike', function ($http, $httpParamSerializerJQLike, $sessionStorage) {
    debugger;
    this.getuserdetails = function (username, Password) {
        debugger;
        return $http.get("http://localhost:61207/api/HumanaAPI/GetLogin/" + username + "/" + Password);
    }
}]);