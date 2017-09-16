appMedicareEnrollment.service("ProposedDateService", ['$http', '$httpParamSerializerJQLike', function ($http, $httpParamSerializerJQLike, $sessionStorage) {
    
    this.InsertProposedDateData = function (ProposedDate) {
        var response = $http({
            url: "http://localhost:61207/api/HumanaAPI/InsertPEDateInfo/",
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

        return $http.get("http://localhost:61207/api/HumanaAPI/GetChronicDisease/" + ApplicantionDetailId + "/1");
    }
}]);