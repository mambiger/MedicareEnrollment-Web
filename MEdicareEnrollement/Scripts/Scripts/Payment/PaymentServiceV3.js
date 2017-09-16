appMedicareEnrollment.service("PaymentService", ['$http', '$httpParamSerializerJQLike', function ($http, $httpParamSerializerJQLike, $sessionStorage) {
    
    this.InsertPaymentData = function (PaymentOption) {
        var response = $http({
            url: "http://medicareapi.agentleadcenter.com/api/HumanaAPI/InsertPaymentOption/",
            dataType: 'json',
            method: 'POST',
            data: PaymentOption,
            headers: {
                "Content-Type": "application/json"
            }
        })
        return response;
    }
    this.GetPayment = function (ApplicantionDetailId) {
        
        return $http.get("http://medicareapi.agentleadcenter.com/api/HumanaAPI/GetPayments/" + ApplicantionDetailId);
    }
}]);