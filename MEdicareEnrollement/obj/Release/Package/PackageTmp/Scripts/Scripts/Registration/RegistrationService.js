appMedicareEnrollment.service("RegistrationService", ['$http', '$httpParamSerializerJQLike', function ($http, $httpParamSerializerJQLike, $sessionStorage) {

    this.InsertRegistrationData = function (UserInfoData) {
        debugger;
        var response = $http({
            url: "http://localhost:61207/api/HumanaAPI/InsertRegistration/",
            dataType: 'json',
            method: 'POST',
            data: UserInfoData,
            headers: {
                "Content-Type": "application/json"
            }
        })
        return response;
    }
}]);