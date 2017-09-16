appMedicareEnrollment.controller('LTCQController', function ($scope, $window, $log, $sessionStorage, LTCQService) {

    getStatesFunc();
    getLTCQues();
    $scope.PLAName = $sessionStorage.PLAName;
    $scope.InsertLTCQInfo = function (type) {
        try {
            $scope.PLAName = $sessionStorage.PLAName;
            if ($scope.CurrentlyOnMedicalID != 'undefined' || $scope.CurrentlyOnMedicalID != undefined) {
                var CurrentlyOnMedicalID = $scope.CurrentlyOnMedicalID;
            }
            if ($scope.MedicalIDPolicyNo != 'undefined' || $scope.MedicalIDPolicyNo != undefined) {
                var MedicalIDPolicyNo = $scope.MedicalIDPolicyNo;
            }
            if ($scope.CurrentlyResInNHorLT != 'undefined' || $scope.CurrentlyResInNHorLT != undefined) {
                var CurrentlyResInNHorLT = $scope.CurrentlyResInNHorLT;
            }
            if ($scope.DateEnteredMonth != 'undefined' || $scope.DateEnteredMonth != undefined) {
                var DateEnteredMonth = $scope.DateEnteredMonth;
            }
            if ($scope.DateEnteredYear != 'undefined' || $scope.DateEnteredYear != undefined) {
                var DateEnteredYear = $scope.DateEnteredYear;
            }
            if ($scope.InstitutionName != 'undefined' || $scope.InstitutionName != undefined) {
                var InstitutionName = $scope.InstitutionName;
            }
            if ($scope.InstitutionAdd1 != 'undefined' || $scope.InstitutionAdd1 != undefined) {
                var InstitutionAdd1 = $scope.InstitutionAdd1;
            }
            if ($scope.InstitutionAdd2 != 'undefined' || $scope.InstitutionAdd2 != undefined) {
                var InstitutionAdd2 = $scope.InstitutionAdd2;
            }
            if ($scope.InstitutionCity != 'undefined' || $scope.InstitutionCity != undefined) {
                var InstitutionCity = $scope.InstitutionCity;
            }
            if ($scope.InstitutionState != 'undefined' || $scope.InstitutionState != undefined) {
                var InstitutionState = $scope.InstitutionState;
            }
            if ($scope.InstitutionZIP != 'undefined' || $scope.InstitutionZIP != undefined) {
                var InstitutionZIP = $scope.InstitutionZIP;
            }
            if ($scope.InstitutionPhone1 != 'undefined' || $scope.InstitutionPhone1 != undefined) {
                var InstitutionPhone1 = $scope.InstitutionPhone1;
            }
            if ($scope.InstitutionPhone2 != 'undefined' || $scope.InstitutionPhone2 != undefined) {
                var InstitutionPhone2 = $scope.InstitutionPhone2;
            }
            if ($scope.InstitutionPhone3 != 'undefined' || $scope.InstitutionPhone3 != undefined) {
                var InstitutionPhone3 = $scope.InstitutionPhone3;
            }
            if ($scope.EmergencyContactOption != 'undefined' || $scope.EmergencyContactOption != undefined) {
                var EmergencyContactOption = $scope.EmergencyContactOption;
            }
            if ($scope.Emergency_FirstName != 'undefined' || $scope.Emergency_FirstName != undefined) {
                var Emergency_FirstName = $scope.Emergency_FirstName;
            }
            if ($scope.Emergency_Middle != 'undefined' || $scope.Emergency_Middle != undefined) {
                var Emergency_Middle = $scope.Emergency_Middle;
            }

            if ($scope.Emergency_LastName != 'undefined' || $scope.Emergency_LastName != undefined) {
                var Emergency_LastName = $scope.Emergency_LastName;
            }

            if ($scope.Emergency_Relation != 'undefined' || $scope.Emergency_Relation != undefined) {
                var Emergency_Relation = $scope.Emergency_Relation;
            }
            if ($scope.Phone != 'undefined' || $scope.Phone != undefined) {
                //   var Emergency_Phone = $scope.Phone + '-' + $scope.Phone2 + '-' + $scope.Phone3;
                var Emergency_Phone = $scope.Phone + $scope.Phone2 + $scope.Phone3;
            }
            if ($scope.Date != 'undefined' || $scope.Date != undefined) {
                var Date = $scope.Date;
            }


            var LTCQuestions = {

                ApplicantDetailID: $sessionStorage.ApplicationDetailid,
                CurrentlyOnMedicalID: ($scope.CurrentlyOnMedicalID != undefined && $scope.CurrentlyOnMedicalID != "" ? $scope.CurrentlyOnMedicalID : null),
                MedicalIDPolicyNo: (MedicalIDPolicyNo),
                CurrentlyResInNHorLT: ($scope.CurrentlyResInNHorLT != undefined && $scope.CurrentlyResInNHorLT != "" ? $scope.CurrentlyResInNHorLT : null),
                DateEnteredMonth: (DateEnteredMonth),
                DateEnteredYear: (DateEnteredYear),
                Date: (Date),
                InstitutionName: (InstitutionName),
                InstitutionAdd1: (InstitutionAdd1),
                InstitutionAdd2: (InstitutionAdd2),
                InstitutionCity: (InstitutionCity),
                InstitutionState: (InstitutionState),
                InstitutionZIP: (InstitutionZIP),
                InstitutionPhone2: (InstitutionPhone2),
                InstitutionPhone3: (InstitutionPhone3),
                InstitutionPhone: (InstitutionPhone1 + InstitutionPhone2 + InstitutionPhone3),
                EmergencyContactOption: ($scope.EmergencyContactOption != undefined && $scope.EmergencyContactOption != "" ? $scope.EmergencyContactOption : null),
                Emergency_FirstName: (Emergency_FirstName),
                Emergency_Middle: (Emergency_Middle),
                Emergency_LastName: (Emergency_LastName),
                Emergency_Relation: (Emergency_Relation),
                Emergency_Phone: (Emergency_Phone)
            }

            //var ESRD_Result = {
            //    Esrd: ($scope.Esrd != undefined && $scope.Esrd != "" ? $scope.Esrd : null),
            //    humanaoffers: ($scope.humanaoffers != undefined && $scope.humanaoffers != "" ? $scope.humanaoffers : null),
            //    medicaladv: ($scope.medicaladv != undefined && $scope.medicaladv != "" ? $scope.medicaladv : null),
            //    Kidneytrans: ($scope.Kidneytrans != undefined && $scope.Kidneytrans != "" ? $scope.Kidneytrans : null),
            //    regulardia: ($scope.regulardia != undefined && $scope.regulardia != "" ? $scope.regulardia : null),
            //    ApplicantDetailId: (1022),
            //    Modifiedby: ('test'),
            //    Createdby: ('test')
            //}


            var InsertLTCQ = LTCQService.InsertLTCQuestionsData(LTCQuestions);

            InsertLTCQ.then(function (d) {

                alert("Record inserted Successfully");
                if (type == 'Next') {
                    $window.location.href = '/Enrollment/OSB';
                }
            }, function (error) {

                alert("Error in inserting/updating the data");
                $log.error(error);
            })
        }
        catch (e) { $log.error(e); }
    }

    function getStatesFunc() {

        var Accounts = LTCQService.getStates();

        Accounts.then(function (d) {

            $scope.getStateData = d.data;
        },
        function (error) {
            $log.error('Oops! Something went wrong while fetching the data.')
        })
    }

    function getLTCQues() {
        var LTCQues = LTCQService.GetLTCQues($sessionStorage.ApplicationDetailid);

        LTCQues.then(function (d) {

            //if (d.data[0].EnrolledToMedicAid == 0) {
            //    $scope.CurrentlyOnMedicalID = 'false';
            //}
            //else if (d.data[0].EnrolledToMedicAid == null) {
            //    $scope.CurrentlyOnMedicalID = 'true';
            //}
            //else {
            //    $scope.CurrentlyOnMedicalID = 'false';

            //}
            //$scope.MedicalIDPolicyNo = d.data[0].MedicAidNumber;
            //if (d.data[0].LTCEnrolled == 0) {
            //    $scope.CurrentlyResInNHorLT = 'false';
            //}
            //else if (d.data[0].LTCEnrolled == null) {
            //    $scope.CurrentlyResInNHorLT = 'true';
            //}
            //else {
            //    $scope.CurrentlyOnMedicalID = 'false';

            //}
            if (d.data[0].EnrolledToMedicAid != null) {
                $scope.CurrentlyOnMedicalID = d.data[0].EnrolledToMedicAid;
            }
            else {
                $scope.CurrentlyOnMedicalID = 0;
            }

            if (d.data[0].MedicAidNumber != null) {
                $scope.MedicalIDPolicyNo = d.data[0].MedicAidNumber;
            }
            else {
                $scope.MedicalIDPolicyNo = '';
            }


            if (d.data[0].LTCEnrolled != null) {
                $scope.CurrentlyResInNHorLT = d.data[0].LTCEnrolled;
            }
            else {
                $scope.CurrentlyResInNHorLT = 0;
            }


            $scope.DateEnteredMonth = d.data[0].DateEnrolled.split('-')[1];
            $scope.DateEnteredYear = d.data[0].DateEnrolled.split('-')[0];
            $scope.Date1 = d.data[0].DateEnrolled.split('-')[2];
            $scope.Date = $scope.Date1.split('T')[0];

            $scope.InstitutionName = d.data[0].FacilityName;
            $scope.InstitutionAdd1 = d.data[0].FacilityAddress1;
            $scope.InstitutionAdd2 = d.data[0].FacilityAddress2;
            $scope.InstitutionCity = d.data[0].FacilityAddressCity;
            $scope.InstitutionState = d.data[0].FacilityAddressState;
            $scope.InstitutionZIP = d.data[0].FacilityAddressZip;
            if (d.data[0].FacilityPhoneNumber != null) {
                $scope.InstitutionPhone1 = d.data[0].FacilityPhoneNumber.split('-')[0];
                $scope.InstitutionPhone2 = d.data[0].FacilityPhoneNumber.split('-')[1];
                $scope.InstitutionPhone3 = d.data[0].FacilityPhoneNumber.split('-')[2];
            }

            if (d.data[0].EmergencyProvideEmergencyContact) {
                $scope.EmergencyContactOption = d.data[0].EmergencyProvideEmergencyContact;
            }
            else {
                $scope.EmergencyContactOption = 0;
            }

            //$scope.EmergencyContactOption=d.data[0].EmergencyContactFirstName
            $scope.Emergency_FirstName = d.data[0].EmergencyContactFirstName;
            $scope.Emergency_Middle = d.data[0].EmergencyContactMidName
            $scope.Emergency_LastName = d.data[0].EmergencyContactLastName
            $scope.Emergency_Relation = d.data[0].EmergencyContactRelationShip
            // $scope.Emergency_Phone       =d.data[0].
            if (d.data[0].EmergencyContactPhoneNumber != null) {
                $scope.Phone = d.data[0].EmergencyContactPhoneNumber.split('-')[0];
                $scope.Phone1 = d.data[0].EmergencyContactPhoneNumber.split('-')[1];
                $scope.Phone2 = d.data[0].EmergencyContactPhoneNumber.split('-')[2];
            }

        },
        function (error) {
            $log.error('Oops! Something went wrong while fetching the data.')

        })
    }
});