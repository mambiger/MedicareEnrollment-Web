appMedicareEnrollment.service("PaymentService", ['$http', '$httpParamSerializerJQLike', function ($http, $httpParamSerializerJQLike, $sessionStorage) {
    
    this.InsertPaymentData = function (PaymentOption) {
        var response = $http({
            url: "http://localhost:61207/api/HumanaAPI/InsertPaymentOption/",
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
        
        return $http.get("http://localhost:61207/api/HumanaAPI/GetPayments/" + ApplicantionDetailId);
    }
}]);