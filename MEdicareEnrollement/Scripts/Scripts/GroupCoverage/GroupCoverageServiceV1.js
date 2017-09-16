appMedicareEnrollment.service("GroupCoverageService", ['$http', '$httpParamSerializerJQLike', function ($http, $httpParamSerializerJQLike, $sessionStorage) {
    
    this.InsertGroupCoverageData = function (GroupCoverage) {
        
        var response = $http({
            url: "http://medicareapi.agentleadcenter.com/api/HumanaAPI/InsertGroupCoverage/",
            dataType: 'json',
            method: 'POST',
            data: GroupCoverage,
            headers: {
                "Content-Type": "application/json"
            }
        })
        return response;
    }
    this.getStates = function () {
        
        return $http.get("http://medicareapi.agentleadcenter.com/api/HumanaAPI/GetStates");
    }
    this.GetGroupCoverage = function (ApplicantionDetailId) {
        return $http.get("http://medicareapi.agentleadcenter.com/api/HumanaAPI/GetDrugAndGroupCoverage/" + ApplicantionDetailId);
    }
}]);