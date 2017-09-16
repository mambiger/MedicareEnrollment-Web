appMedicareEnrollment.service("SignatureService", ['$http', '$httpParamSerializerJQLike', function ($http, $httpParamSerializerJQLike, $sessionStorage) {
    
    this.InsertSignatureData = function (SignatureInfo) {
        var response = $http({
            url: "http://localhost:61207/api/HumanaAPI/InsertSignatureInfo/",
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
        return $http.get("http://localhost:61207/api/HumanaAPI/GetSiganture/" + ApplicantionDetailId);
    }
}]);