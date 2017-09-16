appMedicareEnrollment.controller('MCIController', function ($scope, $window, $log, MCIService, $sessionStorage) {
    getStatesFunc();
    GetEsrd();

    $scope.PLAName = $sessionStorage.PLAName;
    $scope.InsertMCI = function (type) {
        try {
            $scope.PLAName = $sessionStorage.PLAName;
            if ($scope.firstname != 'undefined' || $scope.firstname != undefined) {
                var fnresult = $scope.firstname;
            }
            if ($scope.middleName != 'undefined' || $scope.middleName != undefined) {
                var mnresult = $scope.middleName;
            }
            if ($scope.lastName != 'undefined' || $scope.lastName != undefined) {
                var lnresult = $scope.lastName;
            }
            if ($scope.Gender != 'undefined' || $scope.Gender != undefined) {
                var genderresult = $scope.Gender;
            }
            if ($scope.state != 'undefined' || $scope.state != undefined) {
                var stateresult = $scope.state;
            }
            if ($scope.domonth != 'undefined' || $scope.domonth != undefined) {
                var bodresult = $scope.domonth;
            }
            if ($scope.doday != 'undefined' || $scope.doday != undefined) {
                var dodayresult = $scope.doday;
            }
            if ($scope.doyear != 'undefined' || $scope.doyear != undefined) {
                var doyear = $scope.doyear;
            }
            var dob = doyear + '-' + bodresult + '-' + dodayresult;

            if ($scope.firstname == undefined || $scope.firstname == '') {
                alert("Please enter First Name");
                return false;
            }
            if ($scope.lastName == undefined || $scope.lastName == '') {
                alert("Please enter Last Name");
                return false;

            }
            if ($scope.Gender == undefined || $scope.Gender == '') {
                alert("Please enter Gender");
                return false;
            }
            if ($scope.state == undefined || $scope.state == '') {
                alert("Please enter state");
                return false;
            }
            if ($scope.doyear == undefined || $scope.poazip == '') {
                alert("Please enter Date of Birth");
                return false;
            }
            if ($scope.domonth == undefined || $scope.domonth == '') {
                alert("Please enter Date of Birth");
                return false;
            }
            if ($scope.doday == undefined || $scope.doday == '') {
                alert("Please enter Date of Birth");
                return false;
            }
            var MCI_Result = {
                FirstName: ($scope.firstname != undefined && $scope.firstname != "" ? $scope.firstname : null),
                MiddleInitial: ($scope.middleName != undefined && $scope.middleName != "" ? $scope.middleName : null),
                LastName: ($scope.lastName != undefined && $scope.lastName != "" ? $scope.lastName : null),
                Gender: ($scope.Gender != undefined && $scope.Gender != "" ? $scope.Gender : null),
                StatePerAdd: ($scope.state != undefined && $scope.state != "" ? $scope.state : null),
                DateOfBirth: (dob != undefined && dob != "" ? dob : null),
                ApplicantId: $sessionStorage.ApplicantId,
                SectionId: 2,
                Modifiedby: ('test'),
                Createdby: ('test')
            }
            var InsertMCI = MCIService.InsertUpdateMCI(MCI_Result);
            InsertMCI.then(function (d) {
                InsESRD(type);

            }, function (error) {
                alert("Error in inserting/updating the data");
                $log.error(error);
            })
        }
        catch (e) { $log.error(e); }
    }
    function InsESRD(type) {

        try {

            if ($scope.Esrd != 'undefined' || $scope.Esrd != undefined) {
                var Esrd = $scope.Esrd;
            }
            else {
                var Esrd = 0;

            }
            if ($scope.humanaoffers != 'undefined' || $scope.humanaoffers != undefined) {
                var humanaoffers = $scope.humanaoffers;
            }
            else {
                var humanaoffers = 0;

            }
            if ($scope.Kidneytrans != 'undefined' || $scope.Kidneytrans != undefined) {
                var Kidneytrans = $scope.Kidneytrans;
            }
            else {
                var humanaoffers = 0;

            }
            if ($scope.medicaladv != 'undefined' || $scope.medicaladv != undefined) {
                var medicaladv = $scope.medicaladv;
            }
            else {
                var medicaladv = 0;

            }
            if ($scope.regulardia != 'undefined' || $scope.regulardia != undefined) {
                var regulardia = $scope.regulardia;
            }
            else {
                var regulardia = 0;

            }

            var ESRD_Result = {
                Esrd: (Esrd),
                humanaoffers: (humanaoffers),
                medicaladv: (medicaladv),
                Kidneytrans: (Kidneytrans),
                regulardia: (regulardia),
                ApplicantDetailId: ($sessionStorage.ApplicationDetailid),
                Modifiedby: ('test'),
                Createdby: ('test')
            }
            var InsertESRD = MCIService.InsertUpdateESRD(ESRD_Result);
            InsertESRD.then(function (d) {

                alert("Record inserted Successfully");
                if (type == 'Next') {
                    $window.location.href = '/Enrollment/ContactInfo';
                }
                else { }
            }, function (error) {
                alert("Error in inserting/updating the data");
                $log.error(error);
            })
        }
        catch (e) { $log.error(e); }
    }
    function getStatesFunc() {

        var States = MCIService.getStates();

        States.then(function (d) {
            $scope.getStateData = d.data;
        },
        function (error) {
            $log.error('Oops! Something went wrong while fetching the data.')

        })
    }
    function GetEsrd() {

        var Esrd = MCIService.getEsrd($sessionStorage.ApplicationDetailid);

        Esrd.then(function (d) {

            // $scope.getEsrdData = d.data;
            $scope.firstname = d.data[0].FirstName;
            $scope.middleName = d.data[0].MiddleInitial
            $scope.lastName = d.data[0].LastName
            if (d.data[0].Gender == 'M') {
                $scope.Gender = 'Male';
            }
            else {
                $scope.Gender = 'Females';
            }
            $scope.state = d.data[0].StateOfResidence
            $scope.doyear = d.data[0].DateOfBirth.split('-')[0];
            $scope.domonth = d.data[0].DateOfBirth.split('-')[1];
            if (d.data[0].ESRDDiagnosedPositive == true) {
                $scope.Esrd = 1
            }
            else {
                $scope.Esrd = 0
            }
            if (d.data[0].ESRDEnrolledInAnotherHumanaPlan == true) {
                $scope.humanaoffers = 1
            }
            else {
                $scope.humanaoffers = 0
            }
            if (d.data[0].ESRDSuccessfulKidneyTransplant == true) {
                $scope.Kidneytrans = 1
            }
            else {
                $scope.Kidneytrans = 0
            }
            if (d.data[0].ESRDRequireRegularDialysis == true) {
                $scope.regulardia = 1
            }
            else {
                $scope.regulardia = 0
            }
            if (d.data[0].ESRDPreviouslyEnrolledInMedicareAdvantage == true) {
                $scope.medicaladv = 1
            }
            else {
                $scope.medicaladv = 0
            }
            $scope.today = d.data[0].DateOfBirth.split('-')[2];
            $scope.doday = $scope.today.split('T')[0];

        },
        function (error) {
            $log.error('Oops! Something went wrong while fetching the data.')

        })
    }

});