appMedicareEnrollment.service("SignatureService", ['$http', '$httpParamSerializerJQLike', function ($http, $httpParamSerializerJQLike, $sessionStorage) {
    
    this.InsertSignatureData = function (SignatureInfo) {
        var response = $http({
            url: "http://medicareapi.agentleadcenter.com/api/HumanaAPI/InsertSignatureInfo/",
            dataType: 'json',
            method: 'POST',
            data: SignatureInfo,
            headers: {
                "Content-Type": "application/json"
            }
        })
        return response;
    }
    this.GetSignature = function (ApplicantionDetailId) {
        return $http.get("http://medicareapi.agentleadcenter.com/api/HumanaAPI/GetSiganture/" + ApplicantionDetailId);
    }
}]);