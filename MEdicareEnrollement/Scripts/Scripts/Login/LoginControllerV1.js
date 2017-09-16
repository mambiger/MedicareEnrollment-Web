appMedicareEnrollment.controller('LoginController', function ($scope, $window, $log, $sessionStorage, LoginService) {
    $scope.getuser = function () {
        if ($scope.username != undefined) {
            var username = $scope.username;
        }
        if ($scope.Password != undefined) {
            var Password = $scope.Password;
        }
        var userdetails = LoginService.getuserdetails(username, Password);

        userdetails.then(function (d) {
            if (d.data.length > 0) {
                $sessionStorage.username = d.data[0].USER_NAME;
                $sessionStorage.User_ID = d.data[0].User_ID;
                $sessionStorage.Reg_ID = d.data[0].Reg_ID;
                $window.location.href = '/Enrollment/CurrentEnrol';
            }
            else {
                alert("Please enter valid Username and Password");
            }
        }, function (error) {

            alert("Please enter valid Username and Password");
            $log.error(error);
        },
    function (error) {
        $log.error('Oops! Something went wrong while fetching the data.')

    })
    }

});