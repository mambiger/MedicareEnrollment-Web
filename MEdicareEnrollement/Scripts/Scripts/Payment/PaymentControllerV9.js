appMedicareEnrollment.controller('PaymentController', function ($scope, $window, $log, $sessionStorage, PaymentService) {
    GetPayment();
    $scope.PLAName = $sessionStorage.PLAName;
    $scope.PaymentMethod = 'radDummySocialSecurity';
    $scope.InsertPaymentInfo = function (type) {
        try {
            $scope.PLAName = $sessionStorage.PLAName;
            if ($scope.PaymentMethod != 'undefined' || $scope.PaymentMethod != undefined) {
                var PaymentMethod = $scope.PaymentMethod;
            }



            var PaymentOption = new Object();
            PaymentOption.PaymentTypeID = PaymentMethod;
            PaymentOption.ApplicantionDetailID = $sessionStorage.ApplicationDetailid;
            PaymentOption.Premium = "26.101";
            PaymentOption.CreatedBy = "Test";
            PaymentOption.ModifiedBy = "Test";



            var InsertPayment = PaymentService.InsertPaymentData(PaymentOption);

            InsertPayment.then(function (d) {

                alert("Record saved successfully");
                if (type == 'Next') {
                    $window.location.href = '/Enrollment/Signature';
                }
            }, function (error) {

                alert("Please enter valid data");
                $log.error(error);
            })
        }
        catch (e) { $log.error(e); }
    }
    function GetPayment() {

        var Payment = PaymentService.GetPayment($sessionStorage.ApplicationDetailid);

        Payment.then(function (d) {


            $scope.PaymentMethod = d.data[0].PaymentType;


        },
        function (error) {
            $log.error('Oops! Something went wrong while fetching the data.')

        })
    }
});