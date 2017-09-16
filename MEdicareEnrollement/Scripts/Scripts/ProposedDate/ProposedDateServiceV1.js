appMedicareEnrollment.service("ProposedDateService", ['$http', '$httpParamSerializerJQLike', function ($http, $httpParamSerializerJQLike, $sessionStorage) {
    
    this.InsertProposedDateData = function (ProposedDate) {
        var response = $http({
            url: "http://medicareapi.agentleadcenter.com/api/HumanaAPI/InsertPEDateInfo/",
            dataType: 'json',
            method: 'POST',
            data: ProposedDate,
            headers: {
                "Content-Type": "application/json"
            }
        })
        return response;
    }
    this.GetPEDate = function (ApplicantionDetailId) {

        return $http.get("http://medicareapi.agentleadcenter.com/api/HumanaAPI/GetChronicDisease/" + ApplicantionDetailId + "/1");
    }
}]);