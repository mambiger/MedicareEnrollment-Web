appMedicareEnrollment.controller('RegistrationController', function ($scope, $window, $log, $sessionStorage, RegistrationService) {
    debugger;
    $scope.PLAName = $sessionStorage.PLAName;
    $scope.InsertRegistrationInfo = function (type) {
        try {

            if ($scope.RegType != 'undefined' || $scope.RegType != undefined) {
                var RegType = $scope.RegType;
            }
            if ($scope.AffinityID != 'undefined' || $scope.AffinityID != undefined) {
                var AffinityID = $scope.AffinityID;
            }
            if ($scope.FirstName != 'undefined' || $scope.FirstName != undefined) {
                var FirstName = $scope.FirstName;
            }
            if ($scope.MiddleName != 'undefined' || $scope.MiddleName != undefined) {
                var MiddleName = $scope.MiddleName;
            }
            if ($scope.LastName != 'undefined' || $scope.LastName != undefined) {
                var LastName = $scope.LastName;
            }
            if ($scope.Phone != 'undefined' || $scope.Phone != undefined) {
                var Phone = $scope.Phone;
            }
            if ($scope.Email != 'undefined' || $scope.Email != undefined) {
                var Email = $scope.Email;
            }
            if ($scope.Address != 'undefined' || $scope.Address != undefined) {
                var Address = $scope.Address;
            }
            if ($scope.City != 'undefined' || $scope.City != undefined) {
                var City = $scope.City;
            }
            if ($scope.State != 'undefined' || $scope.State != undefined) {
                var State = $scope.State;
            }
            if ($scope.PostalCode != 'undefined' || $scope.PostalCode != undefined) {
                var PostalCode = $scope.PostalCode;
            }
            if ($scope.Password != 'undefined' || $scope.Password != undefined) {
                var Password = $scope.Password;
            }
            if ($scope.SAN != 'undefined' || $scope.SAN != undefined) {
                var SAN = $scope.SAN;
            }
     
            debugger;
          
            var UserInfoData = new Object();
            UserInfoData.FirstName = FirstName;
            UserInfoData.MiddleName = MiddleName;
            UserInfoData.LastName = LastName;
            UserInfoData.AffinityID = AffinityID;
            UserInfoData.Phone = Phone;
            UserInfoData.City = City;
            UserInfoData.State = State;
            UserInfoData.Address = Address;
            UserInfoData.PostalCode = PostalCode;
            UserInfoData.Email = Email;
            UserInfoData.Password = Password;
            UserInfoData.RegistrationType = RegType;
            UserInfoData.RegId = 0;
            UserInfoData.UserID = 0;
            UserInfoData.SAN = SAN;

            if ($scope.FirstName == undefined) {
                alert("Please enter valid data");
                return false;
            }
            if ($scope.LastName == undefined) {
                alert("Please enter valid data");
                return false;
            }
            if ($scope.AffinityID == undefined) {
                alert("Please enter valid data");
                return false;
            }
            if ($scope.Email == undefined) {
                alert("Please enter valid data");
                return false;
            }
            if ($scope.Password == undefined) {
                alert("Please enter valid data");
                return false;
            }
            if ($scope.SAN == undefined) {
                alert("Please enter valid data");
                return false;
            }


            var InsertRegistration = RegistrationService.InsertRegistrationData(UserInfoData);

            InsertRegistration.then(function (d) {
                debugger;
                alert("Record inserted Successfully");
                $window.location.href = '/Login/Index';
            }, function (error) {
                debugger;
                alert("Error in inserting/updating the data");
                $log.error(error);
            })
        }
        catch (e) { $log.error(e); }
    }

});