appMedicareEnrollment.controller('LoginController', function ($scope, $window, $log, $sessionStorage, LoginService) {
    debugger;
    $scope.getuser = function () {
        debugger;
        if ($scope.username != undefined) {
            var username = $scope.username;
        }
        if ($scope.Password != undefined) {
            var Password = $scope.Password;
        }
        var userdetails = LoginService.getuserdetails(username, Password);

        userdetails.then(function (d) {
            debugger;
            if (d.data.length > 0) {
                debugger;
                $sessionStorage.username = d.data[0].USER_NAME;
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