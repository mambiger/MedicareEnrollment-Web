
appMedicareEnrollment.controller('EnrollmentDetailController', function ($scope, $window, $log, $sessionStorage, EnrollmentDetailService) {
    GetEnrollmentdata();
    $scope.EnrollPageCount = 20;
    function GetEnrollmentdata() {
        if ($sessionStorage.username != undefined) {
            var username = $sessionStorage.username;
        }
        var GetEnrollmentdata = EnrollmentDetailService.getEnrollmentdata(username);

        GetEnrollmentdata.then(function (d) {
            $scope.GetEnroll = d.data;
            CalculatePageEnroll($scope.GetEnroll.length, $scope.GetEnroll);
        });
    }
    function CalculatePageEnroll(NoOfRecord, d) {
        var cPageSize = parseInt($scope.EnrollPageCount);
        var noofpage = 0;
        var pagecal = 0;
        $scope.TotalJobsRecord = NoOfRecord;
        if (NoOfRecord > cPageSize) {
            $scope.JobStartPage = 1;
            $scope.disabledStartPage = false;
            pagecal = parseInt(NoOfRecord / cPageSize);
            var tc = 0;

            tc = pagecal * cPageSize;
            if (tc < NoOfRecord) {
                $scope.EnrollEndPage = pagecal + 1;
            }
            else {
                $scope.EnrollEndPage = pagecal;

            }
            loadGridEnroll(0, cPageSize, d);

        }
        else {
            $scope.JobStartPage = 1;
            $scope.JobEndPage = 1;
            //$scope.disabledStartPage = true;
            loadGridEnroll(0, NoOfRecord, d);

        }

    }

    function loadGridEnroll(sc, ec, d) {
        var EffectiveDate = "";
        var clientname;
        var EffectiveDate;
        var mailingaddress;
        var status;
        var requestidfortable;
        var noofsubmissions;
        var applicantid;
        var applicationdetailid;
        $("#Enrollmentdetailid").find("tr:gt(0)").remove();
        if (d.length > 0) {
            for (i = sc; i < ec; i++) {
                applicantid = d[i].ApplicantId;
                applicationdetailid = d[i].ApplicationDetailId;
                clientname = d[i].Client_Name;
                if (d[i].Mailing_Address != null) {
                    mailingaddress = d[i].Mailing_Address;
                }
                EffectiveDate = d[i].Effective_Date;
                status = d[i].Status;
                if (d[i]["Effective_Date"] == "1900-01-01T00:00:00")
                { d[i]["Effective_Date"] = ""; }
                else {
                    var date1 = new Date(d[i]["Effective_Date"]);
                    d[i]["Effective_Date"] = (date1.getMonth() + 1) + '/' + date1.getDate() + '/' + date1.getFullYear();
                }
                EffectiveDate = d[i]["Effective_Date"];
                CreateRowEnroll(applicantid, applicationdetailid, clientname, mailingaddress, EffectiveDate, status);
            }

        }
    }
    function CreateRowEnroll(applicantid, applicationdetailid, clientname, mailingaddress, EffectiveDate, status) {
        var temptr = "";
        temptr = "<tr>";
        temptr = temptr + "<td>" + clientname + "</td>";
        temptr = temptr + "<td>" + mailingaddress + "</td>";
        temptr = temptr + "<td>" + "" + "</td>";
        temptr = temptr + "<td>" + EffectiveDate + "</td>";
        if (status == 0) {
            var Submitted = "Not-Submitted"
            temptr = temptr + "<td>" + Submitted + "</td>";
        }
        if (status == 0) {
            temptr = temptr + "<td><a href='#' class='fontweightprospectname' onclick=edit(" + applicantid + "," + applicationdetailid + ")>Edit</a>";
            temptr = temptr + "<a href='#' class='fontweightprospectname' onclick=deleteenroll(" + applicantid + "," + applicationdetailid + ") >Delete</a></td>";
        }

        $('#Enrollmentdetailid').append(temptr);
    }


    $scope.EditNavigate = function (rId, accId) {
        $sessionStorage.ApplicationDetailid = accId;
        $sessionStorage.ApplicantId = rId;
        $window.location.href = '/Enrollment/Index/applicantid=' + rId + '?applicationdetailid=' + accId;
    }

    $scope.AddnewEnrollment = function () {
        $sessionStorage.ApplicationDetailid = 'undefined';
        $sessionStorage.ApplicantId = 'undefined';
        $window.location.href = '/Enrollment/Index/';
    }

    $scope.DeleteNavigate = function (rId, accId) {
        debugger;
        var Applicantid = rId;
        var username = $sessionStorage.username;
        var DeleteEnrollmentdata = EnrollmentDetailService.DeleteEnrollmentdata(rId, username);

        DeleteEnrollmentdata.then(function (d) {
            if (d.data.length > 1) {
                alert("The Enrollment Application has been deleted Successfully");
            }
            debugger;
            GetEnrollmentdata();
        });
    }

});