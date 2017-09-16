appMedicareEnrollment.controller('ProposedDateController', function ($scope, $window, $log, $sessionStorage, ProposedDateService, $filter) {

    var date = new Date();
    $scope.ddMMyyyy = $filter('date')(new Date(), 'MM/dd/yyyy');
    $scope.HHmmss = $filter('date')(new Date(), 'HH:mm');
    GetPEDate();
    $scope.PLAName = $sessionStorage.PLAName;
    $scope.InsertProposedDateInfo = function (type) {
        try {
            $scope.PLAName = $sessionStorage.PLAName;

            if ($scope.Enrollment != 'undefined' || $scope.Enrollment != undefined) {
                var Enrollment = $scope.Enrollment;
            }
            if ($scope.SelectSEP != 'undefined' || $scope.SelectSEP != undefined) {
                var SelectSEP = $scope.SelectSEP;
            }
            if ($scope.Month != 'undefined' || $scope.Month != undefined) {
                var Month = $scope.Month;
            }
            if ($scope.Year != 'undefined' || $scope.Year != undefined) {
                var Year = $scope.Year;
            }
            if ($scope.Date != 'undefined' || $scope.Date != undefined) {
                var Date = $scope.Date;
            }
            if ($scope.Chronic != 'undefined' || $scope.Chronic != undefined) {
                var Chronic = $scope.Chronic;
            }


            var ProposedDate = new Object();
            ProposedDate.EnrollmentType = Enrollment;
            ProposedDate.Month = Month;
            ProposedDate.Year = Year;
            ProposedDate.ProposedEffectiveDateEffectiveDate = Year + "-" + Month + "-" + Date;
            ProposedDate.SEPCOde = SelectSEP;
            ProposedDate.ChronicCondition = Chronic;
            ProposedDate.ApplicationDetailID = $sessionStorage.ApplicationDetailid;
            ProposedDate.PageNum = 1;

            if ($scope.Month == undefined) {
                alert("Please enter valid data");
                return false;

            }
            if ($scope.Date == undefined) {
                alert("Please enter valid data");
                return false;

            }
            if ($scope.Year == undefined) {
                alert("Please enter valid data");
                return false;

            }
            var InsertProposedDate = ProposedDateService.InsertProposedDateData(ProposedDate);

            InsertProposedDate.then(function (d) {

                alert("Record saved successfully");
                if (type == 'Next') {
                    if ($scope.Chronic == 0) {
                        $sessionStorage.Chronic = 0;
                        $window.location.href = '/Enrollment/GrpCovgeQues';
                    }
                    else {
                        $sessionStorage.Chronic = 1;
                        $window.location.href = '/Enrollment/ChronicQues';
                    }
                }
            }, function (error) {

                alert("Please enter valid data");
                $log.error(error);
            })
        }
        catch (e) { $log.error(e); }
    }

    function GetPEDate() {
        var PEDate = ProposedDateService.GetPEDate($sessionStorage.ApplicationDetailid);

        PEDate.then(function (d) {

            $scope.Enrollment = d.data[0].EnrollmentType;
            $scope.SelectSEP = d.data[0].SEPCOde;
            $scope.Month = d.data[0].ProposedEffectiveDate.split('-')[1];
            $scope.Year = d.data[0].ProposedEffectiveDate.split('-')[0];
            $scope.Date1 = d.data[0].ProposedEffectiveDate.split('-')[2];
            $scope.Date = $scope.Date1.split('T')[0];
            if (d.data[0].ChronicCondition) { //error
                $scope.Chronic = d.data[0].ChronicCondition;
            }
            else {
                $scope.Chronic = d.data[0].ChronicCondition;
            }
        },
          function (error) {
              $log.error('Oops! Something went wrong while fetching the data.')

          })
    }
});