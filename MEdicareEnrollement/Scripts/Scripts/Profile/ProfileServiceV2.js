appMedicareEnrollment.service("ProfileService", ['$http', '$httpParamSerializerJQLike', function ($http, $httpParamSerializerJQLike) {
    debugger;
    this.InsertProfileData = function (UserInfoData) {
        debugger;
        var response = $http({
            url: "http://medicareapi.agentleadcenter.com/api/HumanaAPI/UpdateUserInfo/",
            dataType: 'json',
            method: 'POST',
            data: UserInfoData,
            headers: {
                "Content-Type": "application/json"
            }
        })
        return response;
    }
    this.GetUserInfo = function (RegID, UserID) {
        debugger;
        return $http.get("http://medicareapi.agentleadcenter.com/api/HumanaAPI/GetUserInfo/" + RegID + "/" + UserID);
    }
}]);