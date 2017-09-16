appMedicareEnrollment.controller('PQAssessmentController', function ($scope, $window, $log, PQAssessmentService, $sessionStorage) {

    GetPQAssessmentInfo();
    $scope.PLAName = $sessionStorage.PLAName;
    $scope.InsertPQAssessmentInfo = function (type) {
        try {
            $scope.PLAName = $sessionStorage.PLAName;
            if ($scope.BloodSugarOrDiabetes != undefined) {
                var BloodSugarOrDiabetes = $scope.BloodSugarOrDiabetes;
            }
            else {
                var BloodSugarOrDiabetes = 'false';
            }
            if ($scope.MonitorBloodSugar != 'undefined') {
                var MonitorBloodSugar = $scope.MonitorBloodSugar;
            }
            else {
                var MonitorBloodSugar = 'false';
            }
            if ($scope.InsulinOrMedicine != 'undefined' || $scope.InsulinOrMedicine != undefined) {
                var InsulinOrMedicine = $scope.InsulinOrMedicine;
            }
            else {
                var InsulinOrMedicine = 'false';
            }
            if ($scope.HeartAttack != 'undefined' || $scope.HeartAttack != undefined) {
                var HeartAttack = $scope.HeartAttack;
            }
            else {
                var HeartAttack = 'false';
            }
            if ($scope.Circulations != 'undefined' || $scope.Circulations != undefined) {
                var Circulations = $scope.Circulations;

            }
            else {
                var Circulations = 'false';
            }
            if ($scope.LegPain != 'undefined' || $scope.LegPain != undefined) {
                var LegPain = $scope.LegPain;
            }

            else {
                var LegPain = 'false';
            }

            if ($scope.HeartFailure != 'undefined' || $scope.HeartFailure != undefined) {
                var HeartFailure = $scope.HeartFailure;
            }
            else {
                var HeartFailure = 'false';
            }
            if ($scope.FluidLungs != 'undefined' || $scope.FluidLungs != undefined) {
                var FluidLungs = $scope.FluidLungs;
            }
            else {
                var FluidLungs = 'false';
            }
            if ($scope.SwellingLegs != 'undefined' || $scope.SwellingLegs != undefined) {
                var SwellingLegs = $scope.SwellingLegs;
            }
            else {
                var SwellingLegs = 'false';
            }
            if ($scope.DiabetesMedicine != 'undefined' || $scope.DiabetesMedicine != undefined) {
                var DiabetesMedicine = $scope.DiabetesMedicine;
            }
            else {
                var DiabetesMedicine = 'false';
            }
            if ($scope.CVDMedicine != 'undefined' || $scope.CVDMedicine != undefined) {
                var CVDMedicine = $scope.CVDMedicine;
            }
            else {
                var CVDMedicine = 'false';
            }
            if ($scope.CHFMedicine != 'undefined' || $scope.CHFMedicine != undefined) {
                var CHFMedicine = $scope.CHFMedicine;
            }
            else {
                var CHFMedicine = 'false';
            }


            var PQAssessment = new Object();
            PQAssessment.DiabetesHighBloodSugar = BloodSugarOrDiabetes;
            PQAssessment.DiabetesMonitorBloodSugar = MonitorBloodSugar;
            PQAssessment.DiabetesInsulinOralMedication = InsulinOrMedicine;
            PQAssessment.CardiovascularHeartProblem = HeartAttack;
            PQAssessment.CardiovascularCirculation = Circulations;
            PQAssessment.CardiovascularLegPain = LegPain;
            PQAssessment.HeartFailure = HeartFailure;
            PQAssessment.HeartFailureFluid = FluidLungs;
            PQAssessment.HeartFailureLegSwelling = SwellingLegs;
            PQAssessment.DiabetesMedications = DiabetesMedicine;
            PQAssessment.CardiovascularMedication = CVDMedicine;
            PQAssessment.CHFMedicine = CHFMedicine;
            PQAssessment.ApplicationDetailID = $sessionStorage.ApplicationDetailid;
            PQAssessment.ModifiedBy = 'test';
            PQAssessment.CreatedBy = 'test';



            var InsertPQAssessment = PQAssessmentService.InsertPQAssessmentData(PQAssessment);

            InsertPQAssessment.then(function (d) {

                alert("Record inserted Successfully");
                if (type == 'Next') {
                    $window.location.href = '/Enrollment/Chronicnew';
                }
            }, function (error) {

                alert("Error in inserting/updating the data");
                $log.error(error);
            })
        }
        catch (e) { $log.error(e); }
    }
    function GetPQAssessmentInfo() {
        debugger
        var PQAssessmentInfo = PQAssessmentService.GetPQAssessmentInfo($sessionStorage.ApplicationDetailid);
        PQAssessmentInfo.then(function (d) {
            debugger
            //if (d.data[0].CardiovascularHeartProblem == 'true' || d.data[0].CardiovascularHeartProblem == 'false') {
            //    $scope.HeartAttack = d.data[0].CardiovascularHeartProblem;
            //    $scope.BloodSugarOrDiabetes = d.data[0].DiabetesHighBloodSugar;
            //    $scope.MonitorBloodSugar = d.data[0].DiabetesMonitorBloodSugar;
            //    $scope.InsulinOrMedicine = d.data[0].CardiovascularCirculation;
            //    $scope.Circulations = d.data[0].CardiovascularHeartProblem;
            //    $scope.LegPain = d.data[0].CardiovascularLegPain;
            //    $scope.HeartFailure = d.date[0].HeartFailure;
            //    $scope.FluidLungs = d.data[0].HeartFailureFluid;
            //    $scope.SwellingLegs = d.data[0].HeartFailureLegSwelling;
            //}
            //else {
            if (d.data[0].CardiovascularHeartProblem != null) {
                $scope.HeartAttack = d.data[0].CardiovascularHeartProblem;
            }
            else {
                $scope.HeartAttack = 'false';
            }
            if (d.data[0].DiabetesHighBloodSugar != null) {
                $scope.BloodSugarOrDiabetes = d.data[0].DiabetesHighBloodSugar;
            }
            else {
                $scope.BloodSugarOrDiabetes = 'false';
            }
            if (d.data[0].DiabetesMonitorBloodSugar != null) {
                $scope.MonitorBloodSugar = d.data[0].DiabetesMonitorBloodSugar;
            }
            else {
                $scope.MonitorBloodSugar = 'false';
            }
            if (d.data[0].CardiovascularCirculation != null) {
                $scope.InsulinOrMedicine = d.data[0].CardiovascularCirculation;
            }
            else {
                $scope.InsulinOrMedicine = 'false';
            }
            if (d.data[0].CardiovascularHeartProblem != null) {
                $scope.Circulations = d.data[0].CardiovascularHeartProblem;
            }
            else {
                $scope.Circulations = 'false';
            }
            if (d.data[0].CardiovascularLegPain != null) {
                $scope.LegPain = d.data[0].CardiovascularLegPain;
            }
            else {
                $scope.LegPain = 'false';
            }
            if (d.data[0].HeartFailure != null) {
                $scope.HeartFailure = d.data[0].HeartFailure;
            }
            else {
                $scope.HeartFailure = 'false';
            }
            if (d.data[0].HeartFailureFluid != null) {
                $scope.FluidLungs = d.data[0].HeartFailureFluid;
            }
            else {
                $scope.FluidLungs = 'false';
            }
            if (d.data[0].HeartFailureLegSwelling != null) {
                $scope.SwellingLegs = d.data[0].HeartFailureLegSwelling;
            }
            else {
                $scope.SwellingLegs = 'false';
            }
            //}
            $scope.DiabetesMedicine = d.data[0].DiabetesMedications;
            $scope.CVDMedicine = d.data[0].CardiovascularMedication;
            if (d.data[0].HeartFailureMedications != null) {
                $scope.CHFMedicine = d.data[0].HeartFailureMedications;
            }
            else {
                $scope.CHFMedicine = '';
            }

        },
        function (error) {
            $log.error('Oops! Something went wrong while fetching the data.')

        })
    }

});