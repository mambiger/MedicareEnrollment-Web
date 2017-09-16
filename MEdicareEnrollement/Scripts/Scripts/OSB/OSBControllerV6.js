appMedicareEnrollment.controller('OSBController', function ($scope, $window, $log, $sessionStorage, OSBService) {


    $scope.OSB1 = true;
    $scope.Premium1 = 0;
    $scope.OSBlbl1 = "";
    $scope.OSB2 = true;
    $scope.Premium2 = 0;
    $scope.OSBlbl2 = "";
    $scope.OSBSelect1 = "";
    $scope.OSBSelect2 = "";


    GetOSB();
    $scope.PLAName = $sessionStorage.PLAName;


    $scope.OSBshow = function () {
        GETOSBValidation();
    }
    $scope.OSBAdd = function () {
        if ($scope.OSBlbl1 == "") {
            $scope.OSB1 = false;
            $scope.Premium1 = 0;
            var list = document.getElementById("selectosb");
            var res = list.options[list.selectedIndex].text;
            $scope.OSBlbl1 = res;
            $scope.OSBSelect1 = $scope.SelectOSB;


        } else if ($scope.OSBlbl2 == "") {
            $scope.OSB2 = false;
            $scope.Premium2 = 0;
            var list = document.getElementById("selectosb");
            var res = list.options[list.selectedIndex].text;
            $scope.OSBlbl2 = res;
            $scope.OSBSelect2 = $scope.SelectOSB;
        } else { alert("Only 2 OSB's can be selected"); }
    }
    $scope.OSBMinus1 = function () {
        $scope.OSB1 = true;
        $scope.Premium1 = 0;
        $scope.OSBlbl1 = "";
        $scope.OSBSelect1 = "";
    }
    $scope.OSBMinus2 = function () {
        $scope.OSB2 = true;
        $scope.Premium2 = 0;
        $scope.OSBlbl2 = "";
        $scope.OSBSelect2 = "";
    }

    $scope.InsertOSBInfo = function (type) {
        try {
            $scope.PLAName = $sessionStorage.PLAName;
            if ($scope.EnrollPlan != 'undefined' || $scope.EnrollPlan != undefined) {
                var EnrollPlan = $scope.EnrollPlan;
            }
            if ($scope.EnrollPlanOptional != 'undefined' || $scope.EnrollPlanOptional != undefined) {
                var EnrollPlanOptional = $scope.EnrollPlanOptional;
            }
            if ($scope.Premium2 != 'undefined' || $scope.Premium2 != undefined) {
                var Premium2 = $scope.Premium2;
            }
            if ($scope.Premium1 != 'undefined' || $scope.Premium1 != undefined) {
                var Premium1 = $scope.Premium1;
            }

            if ($scope.OSBSelect1 != 'undefined' || $scope.OSBSelect1 != undefined) {
                var OSB1 = $scope.OSBSelect1;
            }

            if ($scope.OSBSelect2 != 'undefined' || $scope.OSBSelect2 != undefined) {
                var OSB2 = $scope.OSBSelect2;
            }
            if ($scope.OSBlbl1 != 'undefined' || $scope.OSBlbl1 != undefined) {
                var OSBSelect1 = $scope.OSBlbl1;
            }
            if ($scope.OSBlbl2 != 'undefined' || $scope.OSBlbl2 != undefined) {
                var OSBSelect2 = $scope.OSBlbl2;
            }


            //var values = SelectOSB.split("-");
            //var adr_id = kundeBoxVal.split(';')[1];
            //$scope.SelectOSB = SelectOSB.split("-")[0];
            //$scope.OsbType = SelectOSB.split("-")[1];

            var OSBInfo = new Object();
            OSBInfo.EnrollPlan = EnrollPlan;
            OSBInfo.EnrollPlanOptional = EnrollPlanOptional;
            OSBInfo.Premium1 = Premium2;

            OSBInfo.SelectOSB = OSBSelect1;
            OSBInfo.SelectOSB1 = OSBSelect2;

            OSBInfo.Premium = Premium1;
            OSBInfo.OSB1 = OSB1;
            OSBInfo.OSB2 = OSB2;
            if (OSBInfo.EnrollPlan == 1 && OSBInfo.EnrollPlanOptional == 1) {
                if (OSBInfo.OSB1 == "" && OSBInfo.OSB2 == "") {
                    alert("Please enter atleast one OSB");
                    return false;
                }
            }
            OSBInfo.ApplicantDetailID = $sessionStorage.ApplicationDetailid


            var InsertOSB = OSBService.InsertOSBData(OSBInfo);

            InsertOSB.then(function (d) {

                alert("Record saved Successfully");
                if (type == 'Next') {
                    $window.location.href = '/Enrollment/Payment';
                }
            }, function (error) {

                alert("Please enter valid data");
                $log.error(error);
            })
        }
        catch (e) { $log.error(e); }
    }

    function GetOSB() {
        var OSB = OSBService.getOSB($sessionStorage.ApplicationDetailid);
        OSB.then(function (d) {
            var val1, val2;
            if (d.data[0].SupplementBenefitPlan == 0) {
                $scope.EnrollPlan = 0;
                val1 = 0;
            }
            else {
                $scope.EnrollPlan = 1;
                val1 = 1;
            }
            if (d.data[0].OptionalSuppBenifitPlan == 0) {
                $scope.EnrollPlanOptional = 0;
                val2 = 0;
            }
            else {
                $scope.EnrollPlanOptional = 1;
                val2 = 1;
            }
            $scope.Premium1 = parseInt(d.data[0].Premium);
            $scope.Premium2 = parseInt(d.data[0].Premium1);
            $scope.OSBSelect1 = d.data[0].OSB1;
            $scope.OSBSelect2 = d.data[0].OSB2;
            $scope.OSBlbl1 = d.data[0].osbName1;
            $scope.OSBlbl2 = d.data[0].osbName2;

            GETOSBValidation();
            GETOSBNameValidation()

        },
        function (error) {
            $log.error('Oops! Something went wrong while fetching the data.')

        })
    }
    function GETOSBValidation() {
        if ($scope.EnrollPlan == 1 && $scope.EnrollPlanOptional == 1) {
            $scope.ShowOSB = true;
            GETOSBNameValidation();
        } else {
            $scope.ShowOSB = false;
            $scope.OSB1 = true;
            $scope.Premium1 = 0;
            $scope.OSBlbl1 = "";
            $scope.OSB2 = true;
            $scope.Premium2 = 0;
            $scope.OSBlbl2 = "";
            $scope.OSBSelect1 = "";
            $scope.OSBSelect2 = "";
        }


    }

    function GETOSBNameValidation() {
        if ($scope.OSBlbl1 != null) {
            $scope.OSB1 = false;
        }
        if ($scope.OSBlbl1 == "") {
            $scope.OSB1 = true;
        }
        if ($scope.OSBlbl2 != null) {
            $scope.OSB2 = false;
        }
        if ($scope.OSBlbl2 == "") {
            $scope.OSB2 = true;
        }

    }

});