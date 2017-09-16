appMedicareEnrollment.controller('PhysicianController', function ($scope, $window, $log, PhysicianService, $sessionStorage) {
    $scope.PLAName = $sessionStorage.PLAName;
    $scope.InsertPhysicianInfo = function () {
        try {
            $scope.PLAName = $sessionStorage.PLAName;
            if ($scope.PhysicianName != 'undefined' || $scope.PhysicianName != undefined) {
                var PhysicianName = $scope.PhysicianName;
            }
            if ($scope.Address != 'undefined' || $scope.Address != undefined) {
                var Address = $scope.Address;
            }
            if ($scope.Phone != 'undefined' || $scope.Phone != undefined) {
                var Phone = $scope.Phone;
            }
            if ($scope.City != 'undefined' || $scope.City != undefined) {
                var City = $scope.City;
            }
            if ($scope.State != 'undefined' || $scope.State != undefined) {
                var State = $scope.State;
            }
            if ($scope.ZipCode != 'undefined' || $scope.ZipCode != undefined) {
                var ZipCode = $scope.ZipCode;
            }
            if ($scope.SPPhysicianName1 != 'undefined' || $scope.SPPhysicianName1 != undefined) {
                var SPPhysicianName1 = $scope.SPPhysicianName1;
            }
            if ($scope.SPAddress1 != 'undefined' || $scope.SPAddress1 != undefined) {
                var SPAddress1 = $scope.SPAddress1;
            }
            if ($scope.SPPhone1 != 'undefined' || $scope.SPPhone1 != undefined) {
                var SPPhone1 = $scope.SPPhone1;
            }
            if ($scope.SPCity1 != 'undefined' || $scope.SPCity1 != undefined) {
                var SPCity1 = $scope.SPCity1;
            }
            if ($scope.SPState1 != 'undefined' || $scope.SPState1 != undefined) {
                var SPState1 = $scope.SPState1;
            }
            if ($scope.SPZipCode1 != 'undefined' || $scope.SPZipCode1 != undefined) {
                var SPZipCode1 = $scope.SPZipCode1;
            }
            if ($scope.SPPhysicianName2 != 'undefined' || $scope.SPPhysicianName2 != undefined) {
                var SPPhysicianName2 = $scope.SPPhysicianName2;
            }
            if ($scope.SPAddress2 != 'undefined' || $scope.SPAddress2 != undefined) {
                var SPAddress2 = $scope.SPAddress2;
            }
            if ($scope.SPPhone2 != 'undefined' || $scope.SPPhone2 != undefined) {
                var SPPhone2 = $scope.SPPhone2;
            }
            if ($scope.SPCity2 != 'undefined' || $scope.SPCity2 != undefined) {
                var SPCity2 = $scope.SPCity2;
            }
            if ($scope.SPState2 != 'undefined' || $scope.SPState2 != undefined) {
                var SPState2 = $scope.SPState2;
            }
            if ($scope.SPZipCode2 != 'undefined' || $scope.SPZipCode2 != undefined) {
                var SPZipCode2 = $scope.SPZipCode2;
            }
            if ($scope.SEP != 'undefined' || $scope.SEP != undefined) {
                var SEP = $scope.SEP;
            }
            if ($scope.SEPOption != 'undefined' || $scope.SEPOption != undefined) {
                var SEPOption = $scope.SEPOption;
            }



            var PhysicianInfo = new Object();
            PhysicianInfo.PhysicianName = PhysicianName;
            PhysicianInfo.Address = Address;
            PhysicianInfo.Phone = Phone;
            PhysicianInfo.City = City;
            PhysicianInfo.State = State;
            PhysicianInfo.ZipCode = ZipCode;
            PhysicianInfo.SPPhysicianName1 = SPPhysicianName1;
            PhysicianInfo.SPAddress1 = SPAddress1;
            PhysicianInfo.SPPhone1 = SPPhone1;
            PhysicianInfo.SPCity1 = SPCity1;
            PhysicianInfo.SPState1 = SPState1;
            PhysicianInfo.SPZipCode1 = SPZipCode1;
            PhysicianInfo.SPPhysicianName2 = SPPhysicianName2;
            PhysicianInfo.SPAddress2 = SPAddress2;
            PhysicianInfo.SPPhone2 = SPPhone2;
            PhysicianInfo.SPCity2 = SPCity2;
            PhysicianInfo.SPState2 = SPState2;
            PhysicianInfo.SPZipCode2 = SPZipCode2;
            PhysicianInfo.SEP = SEP;
            PhysicianInfo.SEPOption = SEPOption;


            var InsertPhysician = PhysicianService.InsertPhysicianData(PhysicianInfo);
            
            InsertPhysician.then(function (d) {
                
                alert("Record saved successfully");
            }, function (error) {
                
                alert("Please enter valid data");
                $log.error(error);
            })
        }
        catch (e) { $log.error(e); }
    }
});