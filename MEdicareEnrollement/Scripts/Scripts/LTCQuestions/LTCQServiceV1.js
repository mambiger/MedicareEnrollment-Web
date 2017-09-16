appMedicareEnrollment.service("LTCQService", ['$http', '$httpParamSerializerJQLike', function ($http, $httpParamSerializerJQLike, $sessionStorage) {

    this.InsertLTCQuestionsData = function (LTCQuestions) {
        var response = $http({
            url: "http://medicareapi.agentleadcenter.com/api/HumanaAPI/InsertLTCQuestions/",
            dataType: 'json',
            method: 'POST',
            data: LTCQuestions,
            headers: {
                "Content-Type": "application/json"
            }
        })
        return response;
    }
    this.getStates = function () {

        return $http.get("http://medicareapi.agentleadcenter.com/api/HumanaAPI/GetStates");
    }
    this.GetLTCQues = function (ApplicantionDetailId) {
        
        return $http.get("http://medicareapi.agentleadcenter.com/api/HumanaAPI/GetMedicaidLTC/" + ApplicantionDetailId);
    }
}]);