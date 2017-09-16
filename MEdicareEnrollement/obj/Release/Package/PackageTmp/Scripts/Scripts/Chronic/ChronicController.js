appMedicareEnrollment.controller('ChronicController', function ($scope, $window, $log, ChronicService, $sessionStorage) {

    getStatesFunc();
    GetChronicQues();
    $scope.PLAName = $sessionStorage.PLAName;
    $scope.InsertChronicInfo = function (type) {
        try {
            debugger;
            $scope.PLAName = $sessionStorage.PLAName;
            if ($scope.BP != undefined) {
                var BreathProblem = $scope.BP;
            }
            if ($scope.LP != undefined) {
                var LungProblem = $scope.LP;
            }
            if ($scope.IM != undefined) {
                var InhalerOrMedicine = $scope.IM;
            }
            if ($scope.MedESRD != undefined) {
                var MedESRD = $scope.MedESRD;
            }
            if ($scope.MLD != undefined) {
                var MedLungDisorder = $scope.MLD;
            }
            if ($scope.ES != undefined) {
                var ESRD = $scope.ES;
            }
            if ($scope.HEP != undefined) {
                var HEorPEDialysis = $scope.HEP;
            }
            if ($scope.KidneyTransplant != undefined) {
                var KidneyTransplant = $scope.KidneyTransplant;
            }

            if ($scope.PhysicianName != undefined) {
                var PhysicianName = $scope.PhysicianName;
            }
            if ($scope.Address != undefined) {
                var Address = $scope.Address;
            }
            var Phone = $scope.Phone1 + "-" + $scope.Phone2 + "-" + $scope.Phone3;


            if ($scope.City != undefined) {
                var City = $scope.City;
            }
            if ($scope.State != undefined) {
                var State = $scope.State;
            }
            if ($scope.ZipCode != undefined) {
                var ZipCode = $scope.ZipCode;
            }
            if ($scope.SPPhysicianName1 != undefined) {
                var SPPhysicianName1 = $scope.SPPhysicianName1;
            }
            if ($scope.SPAddress1 != undefined) {
                var SPAddress1 = $scope.SPAddress1;
            }
            //if ($scope.SPPhone1 != undefined) {
            //    var SPPhone1 = $scope.SPPhone1;
            //}
            // if ($scope.SPhone1 != undefined) {
            var SPPhone1 = $scope.SPhone1 + "-" + $scope.SPhone2 + "-" + $scope.SPhone3;
            //}
            //// else {
            ///    var phonenumresult = "";
            // }
            if ($scope.SPCity1 != undefined) {
                var SPCity1 = $scope.SPCity1;
            }
            if ($scope.SPState1 != undefined) {
                var SPState1 = $scope.SPState1;
            }
            if ($scope.SPZipCode1 != undefined) {
                var SPZipCode1 = $scope.SPZipCode1;
            }
            if ($scope.SPPhysicianName2 != undefined) {
                var SPPhysicianName2 = $scope.SPPhysicianName2;
            }
            if ($scope.SPAddress2 != undefined) {
                var SPAddress2 = $scope.SPAddress2;
            }
            //if ($scope.SPPhone2 != undefined) {
            //    var SPPhone2 = $scope.SPPhone2;
            //}
            //if ($scope.SPPhone2 != undefined) {
            var SPPhone2 = $scope.TPhone1 + "-" + $scope.TPhone2 + "-" + $scope.TPhone3;
            //}
            //else {
            //    var phonenumresult = "";
            //}
            if ($scope.SPCity2 != undefined) {
                var SPCity2 = $scope.SPCity2;
            }
            if ($scope.SPState2 != undefined) {
                var SPState2 = $scope.SPState2;
            }
            if ($scope.SPZipCode2 != undefined) {
                var SPZipCode2 = $scope.SPZipCode2;
            }


            var ChronicInfo = new Object();
            ChronicInfo.BreathProblem = BreathProblem;
            ChronicInfo.LungProblem = LungProblem;
            ChronicInfo.InhalerOrMedicine = InhalerOrMedicine;
            ChronicInfo.MedESRD = MedESRD;
            ChronicInfo.MedLungDisorder = MedLungDisorder;
            ChronicInfo.ESRD = ESRD;
            ChronicInfo.HEorPEDialysis = HEorPEDialysis;
            ChronicInfo.KidneyTransplant = KidneyTransplant;
            ChronicInfo.PhysicianName = PhysicianName;
            ChronicInfo.Address = Address;
            ChronicInfo.Phone = Phone;
            ChronicInfo.City = City;
            ChronicInfo.State = State;
            ChronicInfo.ZipCode = ZipCode;
            ChronicInfo.SPPhysicianName1 = SPPhysicianName1;
            ChronicInfo.SPAddress1 = SPAddress1;
            ChronicInfo.SPPhone1 = SPPhone1;
            ChronicInfo.SPCity1 = SPCity1;
            ChronicInfo.SPState1 = SPState1;
            ChronicInfo.SPZipCode1 = SPZipCode1;
            ChronicInfo.SPPhysicianName2 = SPPhysicianName2;
            ChronicInfo.SPAddress2 = SPAddress2;
            ChronicInfo.SPPhone2 = SPPhone2;
            ChronicInfo.SPCity2 = SPCity2;
            ChronicInfo.SPState2 = SPState2;
            ChronicInfo.SPZipCode2 = SPZipCode2;
            ChronicInfo.ApplicationDetailId = $sessionStorage.ApplicationDetailid; // changes

            var InsertChronic = ChronicService.InsertChronicData(ChronicInfo);

            InsertChronic.then(function (d) {

                alert("Record inserted Successfully");
                if (type == 'Next') {
                    $window.location.href = '/Enrollment/GrpCovgeQues';
                }
            }, function (error) {

                alert("Error in inserting/updating the data");
                $log.error(error);
            })
        }
        catch (e) { $log.error(e); }
    }
    function getStatesFunc() {

        var Accounts = ChronicService.getStates();

        Accounts.then(function (d) {
            $scope.getStateData = d.data;
        },
        function (error) {
            $log.error('Oops! Something went wrong while fetching the data.')
        })
    }

    function GetChronicQues() {
        debugger;
        var ChronicQues = ChronicService.GetChronicQues($sessionStorage.ApplicationDetailid);

        ChronicQues.then(function (d) {
            debugger;
            if (d.data[0].LungDiseaseBreathingProblem) {
                $scope.BP = d.data[0].LungDiseaseBreathingProblem;
            }
            else {
                $scope.BP = 0;
            }
            if (d.data[0].LungDiseaseLungProblem) {
                $scope.LP = d.data[0].LungDiseaseLungProblem;
            }
            else {
                $scope.LP = 0;
            }
            if (d.data[0].LungDiseaseUsingInhaler) {
                $scope.IM = d.data[0].LungDiseaseUsingInhaler;
            }
            else {
                $scope.IM = 0;
            }
            if (d.data[0].ESRDMedications != null) {
                $scope.MedESRD = d.data[0].ESRDMedications;
            }
            else {
                $scope.MedESRD = '';

            }
            if (d.data[0].LungDiseaseMedications != null) {
                $scope.MLD = d.data[0].LungDiseaseMedications;
            }
            else {
                $scope.MLD = '';

            }
            if (d.data[0].ESRD == 0) {
                $scope.ES = d.data[0].ESRD;
            }
            else {
                $scope.ES = 0;
            }
            if (d.data[0].ESRDUndergoingDialysis) {
                $scope.HEP = d.data[0].ESRDUndergoingDialysis;
            }
            else {
                $scope.HEP = 0;
            }
            if (d.data[0].ESRDKidneyTransplant) {
                $scope.KidneyTransplant = d.data[0].ESRDKidneyTransplant;
            }
            else {
                $scope.KidneyTransplant = 0;
            }
            if (d.data[0].ChronicPCPName != null) {
                $scope.PhysicianName = d.data[0].ChronicPCPName;

            }
            else {
                $scope.PhysicianName = '';
            }
            if (d.data[0].ChronicSPN1Name != null) {
                $scope.SPPhysicianName1 = d.data[0].ChronicSPN1Name;

            }
            else {
                $scope.SPPhysicianName1 = '';
            }
            if (d.data[0].ChronicSPN2Name != null) {
                $scope.SPPhysicianName2 = d.data[0].ChronicSPN2Name;

            }
            else {
                $scope.SPPhysicianName2 = '';
            }
            $scope.Phone1 = (d.data[0].PhoneNumber.split('-')[0]);
            $scope.Phone2 = (d.data[0].PhoneNumber.split('-')[1]);
            $scope.Phone3 = (d.data[0].PhoneNumber.split('-')[2]);
            //spn1
            $scope.SPhone1 = (d.data[0].SPN1Phone.split('-')[0]);
            $scope.SPhone2 = (d.data[0].SPN1Phone.split('-')[1]);
            $scope.SPhone3 = (d.data[0].SPN1Phone.split('-')[2]);
            //spn2
            $scope.TPhone1 = (d.data[0].SPN2Phone.split('-')[0]);
            $scope.TPhone2 = (d.data[0].SPN2Phone.split('-')[1]);
            $scope.TPhone3 = (d.data[0].SPN2Phone.split('-')[2]);
            getAddress();



        },
        function (error) {
            $log.error('Oops! Something went wrong while fetching the data.')

        })
    }

    function getAddress() {
        
        var Address = ChronicService.getAddress($sessionStorage.ApplicationDetailid);

        Address.then(function (d) {
            debugger;
            $scope.getAddress = d.data;
            
            if (d.data[0].AddressTypeId == 9 || d.data[1].AddressTypeId == 9 || d.data[2].AddressTypeId == 9) {
                $scope.Address = d.data[0].Address1;
                $scope.City = d.data[0].City;
                $scope.State = d.data[0].State;
                $scope.ZipCode = d.data[0].PostalCode;
            }
            if (d.data[0].AddressTypeId == 10 || d.data[1].AddressTypeId == 10 || d.data[2].AddressTypeId == 10) {
                $scope.SPAddress1 = d.data[1].Address1;
                $scope.SPState1 = d.data[1].State;
                $scope.SPZipCode1 = d.data[1].PostalCode;
                $scope.SPCity1 = d.data[1].City;
            }
            if (d.data[0].AddressTypeId == 11 || d.data[1].AddressTypeId == 11 || d.data[2].AddressTypeId == 11) {
                $scope.SPAddress2 = d.data[1].Address1;
                $scope.SPState2 = d.data[1].State;
                $scope.SPZipCode2 = d.data[1].PostalCode;
                $scope.SPCity2 = d.data[1].City;
            }
            else { }


        },
        function (error) {
            $log.error('Oops! Something went wrong while fetching the data.')
        })
    }

});