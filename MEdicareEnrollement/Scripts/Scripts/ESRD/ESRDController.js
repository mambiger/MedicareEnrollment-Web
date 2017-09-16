appMedicareEnrollment.controller('ESRDController', function ($scope, $window, $log, $sessionStorage, ESRDService) {

    
    $scope.InsESRD = function () {
        try {
            
            if ($scope.Esrd != 'undefined' || $scope.Esrd != undefined) {
                var Esrd = $scope.Esrd;
            }
            if ($scope.humanaoffers != 'undefined' || $scope.humanaoffers != undefined) {
                var humanaoffers = $scope.humanaoffers;
            }
            if ($scope.Kidneytrans != 'undefined' || $scope.Kidneytrans != undefined) {
                var Kidneytrans = $scope.Kidneytrans;
            }
            if ($scope.medicaladv != 'undefined' || $scope.medicaladv != undefined) {
                var medicaladv = $scope.medicaladv;
            }
            if ($scope.regulardia != 'undefined' || $scope.regulardia != undefined) {
                var regulardia = $scope.regulardia;
            }
          
            var ESRD_Result = {
                Esrd: ($scope.Esrd != undefined && $scope.Esrd != "" ? $scope.Esrd : null),
                humanaoffers: ($scope.humanaoffers != undefined && $scope.humanaoffers != "" ? $scope.humanaoffers : null),
                medicaladv: ($scope.medicaladv != undefined && $scope.medicaladv != "" ? $scope.medicaladv : null),
                Kidneytrans: ($scope.Kidneytrans != undefined && $scope.Kidneytrans != "" ? $scope.Kidneytrans : null),
                regulardia: ($scope.regulardia != undefined && $scope.regulardia != "" ? $scope.regulardia : null),
                ApplicantDetailId: ($sessionStorage.ApplicationDetailid),
                Modifiedby: ('test'),
                Createdby: ('test')
            }
            var InsertESRD = ESRDService.InsertUpdateESRD(ESRD_Result);
            InsertESRD.then(function (d) {
                alert("Record inserted Successfully");
            }, function (error) {
                alert("Error in inserting/updating the data");
                $log.error(error);
            })
        }
        catch (e) { $log.error(e); }
    }
});