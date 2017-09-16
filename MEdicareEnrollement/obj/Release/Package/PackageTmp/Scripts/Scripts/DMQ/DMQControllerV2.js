appMedicareEnrollment.controller('DMQController', function ($scope, $window, $log, $sessionStorage, DMQService, $sessionStorage) {
  

    getStatesFunc();
    getPlansFunc();
    getDMQuestions();
    $sessionStorage.PLAName = $scope.PLAName
    $scope.InsertDMQ = function (type) {
        try {

            $sessionStorage.PLAName = $scope.PLAName;
            if ($sessionStorage.ApplicantId != undefined) {
                if ($sessionStorage.ApplicantId != 'undefined') {
                    var ApplicantId = $sessionStorage.ApplicantId;
                }
            }
            if ($sessionStorage.ApplicationDetailid != undefined) {
                if ($sessionStorage.ApplicationDetailid != 'undefined') {
                    var ApplicationDetailid = $sessionStorage.ApplicationDetailid;
                }
            }

            if ($scope.mpdresult != undefined) {
                var mpdresult = $scope.mpdresult;
            }
            else {
                var mpdresult = "";
            }

            if ($scope.osbresult != undefined) {
                var osbresult = $scope.osbresult;
            }
            else {
                var osbresult = "";
            }
            if ($scope.myown != undefined) {
                var myownresult = $scope.myown;
            }
            else {
                var myownresult = "";
            }
            if ($scope.poafn != undefined) {
                var poafnresult = $scope.poafn;
            }
            else {
                var poafnresult = "";
            }
            if ($scope.poalm != undefined) {
                var poalmresult = $scope.poalm;
            }
            else {
                var poalmresult = "";
            }
            if ($scope.poaad1 != undefined) {
                var poaad1result = $scope.poaad1;
            }
            else {
                var poaad1result = "";
            }
            if ($scope.poaad2 != undefined) {
                var poaad2result = $scope.poaad2;
            }
            else {
                var poaad2result = "";
            }
            if ($scope.poaCity != undefined) {
                var poaCityresult = $scope.poaCity;
            }
            else {
                var poaCityresult = "";
            }
            if ($scope.poazip != undefined) {
                var poazipresult = $scope.poazip;
            }
            else {
                var poazipresult = "";
            }
            if ($scope.poanum1 != undefined) {
                var phonenumresult = $scope.poanum1 + "-" + $scope.poanum2 + "-" + $scope.poanum3;
            }
            else {
                var phonenumresult = "";
            }
            if ($scope.poarel != undefined) {
                var relationship = $scope.poarel;
            }
            else {
                var relationship = "";
            }
            if ($scope.PLAName != undefined) {
                var ContractNo = $scope.PLAName;
            }
            else {
                var ContractNo = "";
            }
            if ($scope.state != undefined) {
                var state = $scope.state;
            }
            else {
                var state = "";
            }

            if (mpdresult == 0) // yes validation
            {
                alert('Select Yes "Based on what we have discussed, is it your understanding that this plan provides coverage for medical AND prescription drugs? "to proceed further"')

                return false;
            }
            if ($scope.PLAName == undefined || $scope.PLAName == '') // yes validation
            {
                alert('Please select Plan')
                return false;
            }
            if ($scope.myown == 1) {
                
                if ($scope.poafn == undefined || $scope.poafn == '') {
                    alert("Please enter POA First Name");
                    return false;
                }
                if ($scope.poalm == undefined || $scope.poalm == '') {
                    alert("Please enter POA Last Name");
                    return false;

                }
                if ($scope.poaad1 == undefined || $scope.poaad1 == '') {
                    alert("Please enter POA Address 1");
                    return false;
                }
                if ($scope.poaCity == undefined || $scope.poaCity == '') {
                    alert("Please enter POA City");
                    return false;
                }
                if ($scope.state == undefined || $scope.state == '') {
                    alert("Please select POA state");
                    return false;
                }
                if ($scope.poazip == undefined || $scope.poazip == '') {
                    alert("Please enter POA Zip Code");
                    return false;
                }
                if ($scope.poanum1 == undefined || $scope.poanum1 == '') {
                    alert("Please enter valid POA Phone Number");
                    return false;
                }
                if ($scope.poanum2 == undefined || $scope.poanum2 == '') {
                    alert("Please enter valid POA Phone Number");
                    return false;
                }
                if ($scope.poanum3 == undefined || $scope.poanum3 == '') {
                    alert("Please enter valid POA Phone Number");
                    return false;
                }
                if ($scope.poarel == undefined || $scope.poarel == '') {
                    alert("Please enter POA Relationship to Applicant");
                    return false;
                }

            }

            var InsertDMQ = DMQService.InsertUpdateDMQ(mpdresult, osbresult, myownresult, poafnresult, poalmresult, poaad1result, poaad2result, poaCityresult, poazipresult, phonenumresult, relationship, ContractNo, state, ApplicantId, ApplicationDetailid);
            InsertDMQ.then(function (d) {
                

                $sessionStorage.ApplicantId = d.data[0].ApplicantId;
                $sessionStorage.ApplicationDetailid = d.data[0].ApplicationDetailid;
                $scope.ApplicationDetailid = $sessionStorage.ApplicantId;
                $scope.ApplicantId = $sessionStorage.ApplicationDetailid;
                alert("Record saved Successfully");
                if (type == 'Next') {

                    $window.location.href = '/Enrollment/MedicareInfo';
                }
                else { }

            }, function (error) {

                alert("Please enter valid data");
                $log.error(error);
            })

            //
        }
        catch (e) { $log.error(e); }
    }

    function getStatesFunc() {
        var Accounts = DMQService.getStates();

        Accounts.then(function (d) {
            $scope.getStateData = d.data;
        },
        function (error) {
            $log.error('Oops! Something went wrong while fetching the data.')

        })
    }
    function getPlansFunc() {
        var Plans = DMQService.getPlans();

        Plans.then(function (d) {
            
            $scope.getPlans = d.data;
        },
        function (error) {
            $log.error('Oops! Something went wrong while fetching the data.')

        })
    }
    function getDMQuestions() {

        var DMQuestions = DMQService.getDMQuestions($sessionStorage.ApplicationDetailid);

        DMQuestions.then(function (d) {

            $scope.getDMQuestions = d.data;

            $scope.poanum1 = (d.data[0].PhoneNumber.split('-')[0]);
            $scope.poanum2 = (d.data[0].PhoneNumber.split('-')[1]);
            $scope.poanum3 = (d.data[0].PhoneNumber.split('-')[2]);
            $scope.poazip = d.data[0].PostalCode
            $scope.poafn = (d.data[0].FirstName);
            $scope.poalm = (d.data[0].LastName);
            $scope.poarel = d.data[0].Relationship;
            var fvalue = d.data[0].PBPNumber + '-' + d.data[0].ContractNumber;
            var lvalue = d.data[0].PlanName + '-' + d.data[0].ContractNumber;
            $scope.PLAName = fvalue.trim() + ' - ' + lvalue.trim();
            if (d.data[0].Completing_Application == true) {
                $scope.myown = 1;
            }
            else {
                $scope.myown = 0;
            }
            if (d.data[0].OSB_Available == true) {
                $scope.osbresult = 1;
            }
            else {
                $scope.osbresult = 0;
            }
            if (d.data[0].Based_MedicalPrescriptionDrug == true) {
                $scope.mpdresult = 1;
            }
            else {
                $scope.mpdresult = 0;
            }
            $scope.poaad1 = d.data[0].Address1;
            $scope.poaad2 = d.data[0].Address2;
            $scope.state = d.data[0].State;
            $scope.poaCity = d.data[0].City;
        },
        function (error) {
            $log.error('Oops! Something went wrong while fetching the data.')

        })
    }

    $scope.getPlans = function () {
        try {

            if ($scope.ContractNo != 'undefined' || $scope.ContractNo != undefined) {
                var ContractNo = $scope.ContractNo;
                var ApplicationDetailID = $sessionStorage.ApplicationDetailid;
            }
            var InsertDMQ = DMQService.InsertUpdateContractNos(ContractNo, ApplicationDetailID);
            InsertDMQ.then(function (d) {
                alert("Record saved Successfully");
            }, function (error) {
                alert("Please enter valid data");
                $log.error(error);
            })
        }
        catch (e) { $log.error(e); }
    }

});