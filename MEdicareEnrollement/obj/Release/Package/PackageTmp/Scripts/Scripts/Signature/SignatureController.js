appMedicareEnrollment.controller('SignatureController', function ($scope, $window, $log, SignatureService, $sessionStorage) {
    
   
   GetSignature();
   
   $scope.PLAName = $sessionStorage.PLAName;
    $scope.InsertSignatureInfo = function () {
        try {
            
            $scope.PLAName = $sessionStorage.PLAName;
            if ($scope.CompleteTheEnrollment != undefined) {
                var CompleteTheEnrollment = $scope.CompleteTheEnrollment;
            }
            if ($scope.SaleAgentName != 'undefined' || $scope.SaleAgentName != undefined) {
                var SaleAgentName = $scope.SaleAgentName;
            }
            if ($scope.SaleAgentSSN != 'undefined' || $scope.SaleAgentSSN != undefined) {
                var SaleAgentSSN = $scope.SaleAgentSSN;
            }
            if ($scope.SaleAgentSAN != 'undefined' || $scope.SaleAgentSAN != undefined) {
                var SaleAgentSAN = $scope.SaleAgentSAN;
            }
            if ($scope.ConfirmAgentSSN != 'undefined' || $scope.ConfirmAgentSSN != undefined) {
                var ConfirmAgentSSN = $scope.ConfirmAgentSSN;
            }
            if ($scope.ConfirmSaleAgentSAN != 'undefined' || $scope.ConfirmSaleAgentSAN != undefined) {
                var ConfirmSaleAgentSAN = $scope.ConfirmSaleAgentSAN;
            }
            if ($scope.CMedicareClaimNo != 'undefined' || $scope.CMedicareClaimNo != undefined) {
                var CMedicareClaimNo = $scope.CMedicareClaimNo;
            }
            if ($scope.AffinityID != 'undefined' || $scope.AffinityID != undefined) {
                var AffinityID = $scope.AffinityID;
            }
            if ($scope.MedicareClaimNo != 'undefined' || $scope.MedicareClaimNo != undefined) {
                var MedicareClaimNo = $scope.MedicareClaimNo;
            }
            if ($scope.PartAEffective_Month != 'undefined' || $scope.PartAEffective_Month != undefined) {
                var PartAEffective_Month = $scope.PartAEffective_Month;
            }
            if ($scope.PartAEffective_Year != 'undefined' || $scope.PartAEffective_Year != undefined) {
                var PartAEffective_Year = $scope.PartAEffective_Year;
            }
            if ($scope.PartAEffective_Date != 'undefined' || $scope.PartAEffective_Date != undefined) {
                var PartAEffective_Date = $scope.PartAEffective_Date;
            }
            if ($scope.PartBEffective_Date != 'undefined' || $scope.PartBEffective_DateS != undefined) {
                var PartBEffective_Date = $scope.PartBEffective_Date;
            }
            if ($scope.PartBEffective_Month != 'undefined' || $scope.PartBEffective_Month != undefined) {
                var PartBEffective_Month = $scope.PartBEffective_Month;
            }
            if ($scope.PartBEffective_Year != 'undefined' || $scope.PartBEffective_Year != undefined) {
                var PartBEffective_Year = $scope.PartBEffective_Year;
            }

            var SignatureInfo = new Object();
            SignatureInfo.CompleteEnrollment = CompleteTheEnrollment;
            SignatureInfo.SaleAgentName = SaleAgentName;
            SignatureInfo.SaleAgentSSN = SaleAgentSSN;
            SignatureInfo.SaleAgentSAN = SaleAgentSAN;
            SignatureInfo.ConfirmAgentSSN = ConfirmAgentSSN;
            SignatureInfo.ConfirmSaleAgentSAN = ConfirmSaleAgentSAN;
            SignatureInfo.CMedicareClaimNo = CMedicareClaimNo;
            SignatureInfo.AffinityID = AffinityID;
            SignatureInfo.MedicareClaimNo = MedicareClaimNo;
            SignatureInfo.PartAEffective_Month = PartAEffective_Month;
            SignatureInfo.PartAEffective_Year = PartAEffective_Year;
            SignatureInfo.PartAEffective_Date = PartAEffective_Date;
            SignatureInfo.PartBEffective_Month = PartBEffective_Month;
            SignatureInfo.PartBEffective_Year = PartBEffective_Year;
            SignatureInfo.PartBEffective_Date = PartBEffective_Date;
            SignatureInfo.ApplicantDetailID = $sessionStorage.ApplicationDetailid;
            SignatureInfo.Createdby = 'test';
            SignatureInfo.Modifiedby = 'test';




            var InsertSignature = SignatureService.InsertSignatureData(SignatureInfo);

            InsertSignature.then(function (d) {
                debugger
                alert("Record inserted Successfully");
                $window.location.href = '/Result/Index/' + $sessionStorage.ApplicantId;
            }, function (error) {

                alert("Error in inserting/updating the data");
                $log.error(error);
            })
        }
        catch (e) { $log.error(e); }
    }
    function GetSignature() {
        var Signature = SignatureService.GetSignature($sessionStorage.ApplicationDetailid);

        Signature.then(function (d) {
            
            if (d.data[0].SSN == null) {
                $scope.SaleAgentSSN = '';
            }
            else {
                $scope.SaleAgentSSN = d.data[0].SSN;

            }
            if (d.data[0].SSNConfirmation == null) {
                $scope.ConfirmAgentSSN = '';
            }
            else {
                $scope.ConfirmAgentSSN = d.data[0].SSNConfirmation;

            }
            if (d.data[0].ClaimNumber == null) {
                $scope.MedicareClaimNo = '';
            }
            else {
                $scope.MedicareClaimNo = d.data[0].ClaimNumber;

            }
            if (d.data[0].ClaimNumberConfirmation == null) {
                $scope.CMedicareClaimNo = '';
            }
            else {
                $scope.CMedicareClaimNo = d.data[0].ClaimNumberConfirmation;
            }
            $scope.PartAEffective_Month = d.data[0].PartAEffectiveDate.split('-')[1];
            $scope.PartAEffective_Year = d.data[0].PartAEffectiveDate.split('-')[0];
            $scope.PartAEffective_Date1 = d.data[0].PartAEffectiveDate.split('-')[2];
            $scope.PartAEffective_Date = $scope.PartAEffective_Date1.split('T')[0];

            $scope.PartBEffective_Month = d.data[0].PartBEffectiveDate.split('-')[1];
            $scope.PartBEffective_Year = d.data[0].PartBEffectiveDate.split('-')[0];
            $scope.PartBEffective_Date1 = d.data[0].PartBEffectiveDate.split('-')[2];
            $scope.PartBEffective_Date = $scope.PartBEffective_Date1.split('T')[0]; 


        },
        function (error) {
            $log.error('Oops! Something went wrong while fetching the data.')

        })
    }
});


