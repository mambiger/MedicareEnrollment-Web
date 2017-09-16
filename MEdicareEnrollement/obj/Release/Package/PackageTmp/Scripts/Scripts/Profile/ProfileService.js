appMedicareEnrollment.service("ProfileService", ['$http', '$httpParamSerializerJQLike', function ($http, $httpParamSerializerJQLike, $sessionStorage) {

    this.InsertProfileData = function (UserInfoData) {
        debugger;
        var response = $http({
            url: "http://localhost:61207/api/HumanaAPI/UpdateUserInfo/",
            dataType: 'json',
            method: 'POST',
            data: UserInfoData,
            headers: {
                "Content-Type": "application/json"
            }
        })
        return response;
    }
    this.GetUserInfo = function (RegID,UserID) {

        return $http.get("http://localhost:61207/api/HumanaAPI/GetUserInfo/" + RegID+"/"+UserID);
    }
}]);