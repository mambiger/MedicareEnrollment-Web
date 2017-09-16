appMedicareEnrollment.service("PQAssessmentService", ['$http', '$httpParamSerializerJQLike', function ($http, $httpParamSerializerJQLike, $sessionStorage) {

    this.InsertPQAssessmentData = function (PQAssessment) {
        var response = $http({
            url: "http://localhost:61207/api/HumanaAPI/InsertPQAssessment/",
            dataType: 'json',
            method: 'POST',
            data: PQAssessment,
            headers: {
                "Content-Type": "application/json"
            }
        })
        return response;
    }
    this.GetPQAssessmentInfo = function (ApplicantionDetailId) {

        return $http.get("http://localhost:61207/api/HumanaAPI/GetChronicDisease/" + ApplicantionDetailId + "/2");
    }
}]);