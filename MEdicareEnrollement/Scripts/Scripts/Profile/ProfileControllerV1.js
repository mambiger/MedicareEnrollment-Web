appMedicareEnrollment.controller('ProfileController', function ($scope, $window, $log, ProfileService, $sessionStorage) {
    GetUserInfo();
    $scope.InsertProfileInfo = function (type) {
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
            UserInfoData.RegId = 10;
            UserInfoData.UserID = 11;
            UserInfoData.SAN = SAN;




            var InsertProfile = ProfileService.InsertProfileData(UserInfoData);

            InsertProfile.then(function (d) {
                alert("Record Updated Successfully");
                    $window.location.href = '/Login/Index';
            }, function (error) {
                alert("Error in updating the data");
                $log.error(error);
            })
        }
        catch (e) { $log.error(e); }
    }
    function GetUserInfo() {
        if ($sessionStorage.Reg_ID == undefined) {
            $sessionStorage.Reg_ID = 0;
        }
        if ($sessionStorage.User_ID == undefined) {
            $sessionStorage.User_ID = 0;
        }

        var Profile = ProfileService.GetUserInfo($sessionStorage.Reg_ID, $sessionStorage.User_ID);

        Profile.then(function (d) {
            $scope.RegType = d.data[0].RegType;
            $scope.FirstName = d.data[0].FirstName;
            $scope.MiddleName = d.data[0].MiddleName;
            $scope.LastName = d.data[0].LastName;
            $scope.AffinityID = d.data[0].AffinityID;
            $scope.Phone = d.data[0].Phone;
            $scope.Email = d.data[0].Email;
            $scope.City = d.data[0].City;
            $scope.State = d.data[0].State;
            $scope.PostalCode = d.data[0].PostalCode;
            $scope.Password = d.data[0].Password;
            $scope.CNFPassword = d.data[0].Password;
            $scope.Address = d.data[0].Address;
            $scope.SAN = d.data[0].SAN;
        },
        function (error) {
            $log.error('Oops! Something went wrong while fetching the data.')

        })
    }
});