appMedicareEnrollment.controller('GroupCoverageController', function ($scope, $window, $log, $sessionStorage, GroupCoverageService) {
    debugger;
    getStatesFunc();
    getGroupCoverage();

    $scope.PLAName = $sessionStorage.PLAName;
    $scope.InsertGroupCoverageInfo = function (type) {
        try {
            $scope.PLAName = $sessionStorage.PLAName;
            if ($scope.YouOrSpouseWork != 'undefined' || $scope.YouOrSpouseWork != undefined) {
                var YouOrSpouseWork = $scope.YouOrSpouseWork;
            }
            if ($scope.YouOrSpouseGroupHealth != 'undefined' || $scope.YouOrSpouseGroupHealth != undefined) {
                var YouOrSpouseGroupHealth = $scope.YouOrSpouseGroupHealth;
            }
            if ($scope.CarrierName != 'undefined' || $scope.CarrierName != undefined) {
                var CarrierName = $scope.CarrierName;
            }
            if ($scope.PolicyNumber != 'undefined' || $scope.PolicyNumber != undefined) {
                var PolicyNumber = $scope.PolicyNumber;
            }
            if ($scope.CarrierAddress1 != 'undefined' || $scope.CarrierAddress1 != undefined) {
                var CarrierAddress1 = $scope.CarrierAddress1;
            }
            if ($scope.CarrierAddress2 != 'undefined' || $scope.CarrierAddress2 != undefined) {
                var CarrierAddress2 = $scope.CarrierAddress2;
            }
            if ($scope.CarrierCity != 'undefined' || $scope.CarrierCity != undefined) {
                var CarrierCity = $scope.CarrierCity;
            }
            if ($scope.CarrierState != 'undefined' || $scope.CarrierState != undefined) {
                var CarrierState = $scope.CarrierState;
            }
            if ($scope.CarrierZip != 'undefined' || $scope.CarrierZip != undefined) {
                var CarrierZip = $scope.CarrierZip;
            }
            if ($scope.OtherPrescription != 'undefined' || $scope.OtherPrescription != undefined) {
                var OtherPrescription = $scope.OtherPrescription;
            }
            if ($scope.OtherCoverage != 'undefined' || $scope.OtherCoverage != undefined) {
                var OtherCoverage = $scope.OtherCoverage;
            }
            if ($scope.OtherPolicyNo != 'undefined' || $scope.OtherPolicyNo != undefined) {
                var OtherPolicyNo = $scope.OtherPolicyNo;
            }
            if ($scope.OtherMemberID != 'undefined' || $scope.OtherMemberID != undefined) {
                var OtherMemberID = $scope.OtherMemberID;
            }
            if ($scope.AcceptedByCenters != 'undefined' || $scope.AcceptedByCenters != undefined) {
                var AcceptedByCenters = $scope.AcceptedByCenters;
            }


            var GroupCoverage = new Object();
            GroupCoverage.YouOrSpouseWork = YouOrSpouseWork;
            GroupCoverage.YouOrSpouseGroupHealth = YouOrSpouseGroupHealth;
            GroupCoverage.CarrierName = CarrierName;
            GroupCoverage.PolicyNumber = PolicyNumber;
            GroupCoverage.CarrierAddress1 = CarrierAddress1;
            GroupCoverage.CarrierAddress2 = CarrierAddress2;
            GroupCoverage.CarrierCity = CarrierCity;
            GroupCoverage.CarrierState = CarrierState;
            GroupCoverage.CarrierZip = CarrierZip;
            GroupCoverage.OtherPrescription = OtherPrescription;
            GroupCoverage.OtherCoverage = OtherCoverage;
            GroupCoverage.OtherPolicyNo = OtherPolicyNo;
            GroupCoverage.OtherMemberID = OtherMemberID;
            GroupCoverage.AcceptedByCenters = AcceptedByCenters;
            GroupCoverage.ApplicationDetailID = $sessionStorage.ApplicationDetailid;
            GroupCoverage.CreatedBy = "Test";
            GroupCoverage.ModifiedBy = "Test";


            var InsertGroupCoverage = GroupCoverageService.InsertGroupCoverageData(GroupCoverage);

            InsertGroupCoverage.then(function (d) {

                alert("Record inserted Successfully");
                if (type == 'Next') {
                    $window.location.href = '/Enrollment/LTCQuestions';
                }
            }, function (error) {

                alert("Error in inserting/updating the data");
                $log.error(error);
            })
        }
        catch (e) { $log.error(e); }
    }
    function getStatesFunc() {

        var Accounts = GroupCoverageService.getStates();

        Accounts.then(function (d) {
            $scope.getStateData = d.data;
        },
        function (error) {
            $log.error('Oops! Something went wrong while fetching the data.')
        })
    }

    function getGroupCoverage() {

        //$scope.getGroupCoverage = function () {
        debugger;
        var GroupCoverage = GroupCoverageService.GetGroupCoverage($sessionStorage.ApplicationDetailid);

        GroupCoverage.then(function (d) {

            debugger;
            //$scope.YouOrSpouseWork       = d.data[0]  
            //$scope.YouOrSpouseGroupHealth= d.data[0].
            $scope.CarrierName = d.data[0].CarrierName;
            $scope.PolicyNumber = d.data[0].GroupPolicyNumber;
            $scope.CarrierAddress1 = d.data[0].CarrierAddress1;
            $scope.CarrierAddress2 = d.data[0].CarrierAddress2;
            $scope.CarrierCity = d.data[0].CarrierAddressCity;
            $scope.CarrierState = d.data[0].CarrierAddressState;
            $scope.CarrierZip = d.data[0].CarrierAddressZip;

            $scope.OtherCoverage = d.data[0].NameofDrugCoverage;
            $scope.OtherPolicyNo = d.data[0].DrugPolicyNumber;
            $scope.OtherMemberID = d.data[0].MemberId
            //$scope.AcceptedByCenters     = d.data[0].



            if (d.data[0].SpouseWork != null) {
                $scope.YouOrSpouseWork = d.data[0].SpouseWork;
            }
            else {
                $scope.YouOrSpouseWork = 0;
            }

            if (d.data[0].MedicalCoverageIncludeRx != null) {
                $scope.YouOrSpouseGroupHealth = d.data[0].MedicalCoverageIncludeRx;
            }
            else {
                $scope.YouOrSpouseGroupHealth = 0;
            }


            if (d.data[0].MedicalCoverage != null) {
                $scope.OtherPrescription = d.data[0].MedicalCoverage;
            }
            else {
                $scope.OtherPrescription = 0;
            }

            if (d.data[0].AcceptedByCenters != null) {
                $scope.AcceptedByCenters = d.data[0].AcceptedByCenters;
            }
            else {
                $scope.AcceptedByCenters = 0;
            }



        },
        function (error) {
            $log.error('Oops! Something went wrong while fetching the data.')

        })
    }

    $scope.Previous = function () {
        debugger;
        if ($sessionStorage.Chronic == 0) {
            $window.location.href = '/Enrollment/PEDate';
        }
        else {
            $window.location.href = '/Enrollment/Chronicnew';
        }
    }
});