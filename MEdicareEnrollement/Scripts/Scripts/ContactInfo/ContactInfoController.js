appMedicareEnrollment.controller('ContactInfoController', function ($scope, $window, $log, ContactInfoService, $sessionStorage) {

    getStatesFunc();
    getContactInfo();
    getPCP();
    $scope.PLAName = $sessionStorage.PLAName;
    $scope.InsertContactInfo = function (type) {
        try {

            var Mailingcheck = $scope.Mailingcheck;
            var CheckSameasPermanent = $scope.CheckSameasPermanent;
            $scope.PLAName = $sessionStorage.PLAName;

            if (CheckSameasPermanent == true) {
                if ($scope.PermanentAddress1 != 'undefined' || $scope.PermanentAddress1 != undefined) {
                    var PermanentAddress1 = $scope.PermanentAddress1;
                }
                if ($scope.PermanentAddress2 != 'undefined' || $scope.PermanentAddress2 != undefined) {
                    var PermanentAddress2 = $scope.PermanentAddress2;
                }
                if ($scope.Country != 'undefined' || $scope.Country != undefined) {
                    var Country = $scope.Country;
                }
                if ($scope.City != 'undefined' || $scope.City != undefined) {
                    var City = $scope.City;
                }
                if ($scope.State != 'undefined' || $scope.State != undefined) {
                    var State = $scope.State;
                }
                if ($scope.Zip != 'undefined' || $scope.Zip != undefined) {
                    var ZipCode = $scope.Zip;
                }
                if ($scope.CheckSameasPermanent != 'undefined' || $scope.CheckSameasPermanent != undefined) {
                    var CheckSameasPermanent = $scope.CheckSameasPermanent;
                }
                if ($scope.PermanentAddress1 != 'undefined' || $scope.PermanentAddress1 != undefined) {
                    var MailingAddress1 = $scope.PermanentAddress1;
                    $scope.MailingAddress1 = $scope.PermanentAddress1;
                }
                if ($scope.PermanentAddress2 != 'undefined' || $scope.PermanentAddress2 != undefined) {
                    var MailingAddress2 = $scope.PermanentAddress2;
                    $scope.MailingAddress2 = $scope.PermanentAddress2;

                }
                if ($scope.City != 'undefined' || $scope.City != undefined) {
                    var MailingCity = $scope.City;
                    $scope.MailingCity = $scope.City;

                }
                if ($scope.State != 'undefined' || $scope.State != undefined) {
                    var MailingState = $scope.State;
                    $scope.MailingState = $scope.State;
                }
                if ($scope.Zip != 'undefined' || $scope.Zip != undefined) {
                    var MailingZipCode = $scope.Zip;
                    $scope.MailingZip = $scope.Zip;

                }
            }
            else {
                if ($scope.PermanentAddress1 != 'undefined' || $scope.PermanentAddress1 != undefined) {
                    var PermanentAddress1 = $scope.PermanentAddress1;
                }
                if ($scope.PermanentAddress2 != 'undefined' || $scope.PermanentAddress2 != undefined) {
                    var PermanentAddress2 = $scope.PermanentAddress2;
                }
                if ($scope.Country != 'undefined' || $scope.Country != undefined) {
                    var Country = $scope.Country;
                }
                if ($scope.City != 'undefined' || $scope.City != undefined) {
                    var City = $scope.City;
                }
                if ($scope.State != 'undefined' || $scope.State != undefined) {
                    var State = $scope.State;
                }
                if ($scope.Zip != 'undefined' || $scope.Zip != undefined) {
                    var ZipCode = $scope.Zip;
                }
                if ($scope.CheckSameasPermanent != 'undefined' || $scope.CheckSameasPermanent != undefined) {
                    var CheckSameasPermanent = $scope.CheckSameasPermanent;
                }
                if ($scope.MailingAddress1 != 'undefined' || $scope.MailingAddress1 != undefined) {
                    var MailingAddress1 = $scope.MailingAddress1;
                }
                if ($scope.MailingAddress2 != 'undefined' || $scope.MailingAddress2 != undefined) {
                    var MailingAddress2 = $scope.MailingAddress2;
                }
                if ($scope.MailingCity != 'undefined' || $scope.MailingCity != undefined) {
                    var MailingCity = $scope.MailingCity;
                }
                if ($scope.MailingState != 'undefined' || $scope.MailingState != undefined) {
                    var MailingState = $scope.MailingState;
                }
                if ($scope.MailingZip != 'undefined' || $scope.MailingZip != undefined) {
                    var MailingZipCode = $scope.MailingZip;
                }
            }
            if ($scope.OKtoEmail != 'undefined' || $scope.OKtoEmail != undefined) {
                var OKtoEmail = $scope.OKtoEmail;
            }
            if ($scope.ApplicantEmailAdress != 'undefined' || $scope.ApplicantEmailAdress != undefined) {
                var ApplicantEmailAdress = $scope.ApplicantEmailAdress;
            }
            if ($scope.Phone1 != undefined) {
                var Phone1 = $scope.Phone1;
            }
            if ($scope.Phone2 != undefined) {
                var Phone2 = $scope.Phone2;
            }
            if ($scope.Phone3 != undefined) {
                var Phone3 = $scope.Phone3;
            }
            if ($scope.LanguagePref != 'undefined' || $scope.LanguagePref != undefined) {
                var LanguagePreference = $scope.LanguagePref;
            }

            var ContactInfo = new Object();
            ContactInfo.PermanentAddress1 = PermanentAddress1;
            ContactInfo.PermanentAddress2 = PermanentAddress2;
            ContactInfo.Country = Country;
            ContactInfo.City = City;
            ContactInfo.State = State;
            ContactInfo.ZipCode = ZipCode;
            ContactInfo.PermanentAddressType = 2;
            ContactInfo.CheckSameasPermanent = CheckSameasPermanent;
            ContactInfo.MailingAddress1 = MailingAddress1;
            ContactInfo.MailingAddress2 = MailingAddress2;
            ContactInfo.MailingCity = MailingCity;
            ContactInfo.MailingState = MailingState;
            ContactInfo.MailingZipCode = MailingZipCode;
            ContactInfo.MailingAddressType = 3;
            ContactInfo.OKtoEmail = OKtoEmail;
            ContactInfo.ApplicantEmailAdress = ApplicantEmailAdress;
            ContactInfo.Phone1 = Phone1 + Phone2 + Phone3;
            ContactInfo.LanguagePreference = LanguagePreference;
            ContactInfo.ApplicantId = $sessionStorage.ApplicantId;
            ContactInfo.ApplicantDetailId = $sessionStorage.ApplicationDetailid;


            if ($scope.PermanentAddress1 == undefined) {
                alert("Please enter valid data");
                return false;

            }
            if ($scope.Country == undefined) {
                alert("Please enter valid data");
                return false;

            }
            if ($scope.City == undefined) {
                alert("Please enter valid data");
                return false;

            }
            if ($scope.State == undefined) {
                alert("Please enter valid data");
                return false;

            }
            if ($scope.Zip == undefined) {
                alert("Please enter valid data");
                return false;

            }
            if ($scope.MailingAddress1 == undefined) {
                alert("Please enter valid data");
                return false;

            }
            if ($scope.MailingCity == undefined) {
                alert("Please enter valid data");
                return false;

            }
            if ($scope.MailingState == undefined) {
                alert("Please enter valid data");
                return false;

            }
            if ($scope.MailingZip == undefined) {
                alert("Please enter valid data");
                return false;

            }
            if ($scope.LanguagePref == undefined) {
                alert("Please enter valid data");
                return false;

            }
            if ($scope.OKtoEmail == 1) {
                if ($scope.ApplicantEmailAdress == undefined) {
                    alert("Please enter valid data");
                    return false;

                }
                if ($scope.ConfirmEmailAdress == undefined) {
                    alert("Please enter valid data");
                    return false;

                }

            }
            var InsertContact = ContactInfoService.InsertContactData(ContactInfo);

            InsertContact.then(function (d) {

                alert("Record saved successfully");
                if (type == 'Next') {
                    $window.location.href = '/Enrollment/AddContactInfo';
                }
            }, function (error) {

                alert("Please enter valid data");
                $log.error(error);
            })
        }
        catch (e) { $log.error(e); }
    }
    function getStatesFunc() {

        var Accounts = ContactInfoService.getStates();

        Accounts.then(function (d) {
            $scope.getStateData = d.data;
        },
        function (error) {
            $log.error('Oops! Something went wrong while fetching the data.')
        })
    }
    function getContactInfo() {

        var ContactInfo = ContactInfoService.getContactInfo($sessionStorage.ApplicationDetailid, $sessionStorage.ApplicantId);

        ContactInfo.then(function (d) {

            $scope.getContactInfo = d.data;

            if (d.data[0].AddressTypeId == 2 || d.data[1].AddressTypeId == 2) {
                $scope.PermanentAddress1 = d.data[0].Address1;
                $scope.PermanentAddress2 = d.data[0].Address2;
                $scope.Country = d.data[0].County;
                $scope.State = d.data[0].State;
                $scope.Zip = d.data[0].PostalCode;
                $scope.City = d.data[0].City;
            }
            if (d.data[0].AddressTypeId == 3 || d.data[1].AddressTypeId == 3) {
                $scope.MailingAddress1 = d.data[1].Address1;
                $scope.MailingAddress2 = d.data[1].Address2;
                $scope.MailingState = d.data[1].State;
                $scope.MailingZip = d.data[1].PostalCode;
                $scope.MailingCity = d.data[1].City;
            }
            else { }
            if ($scope.PermanentAddress1 == $scope.MailingAddress1) {
                if ($scope.PermanentAddress2 == $scope.MailingAddress2) {
                    if ($scope.State == $scope.MailingState) {
                        if ($scope.Zip == $scope.MailingZip) {
                            if ($scope.City == $scope.MailingCity) {
                                $scope.CheckSameasPermanent = true;
                            }
                        }
                    }
                }
            }
            if (d.data[0].OkEmail == true) {
                $scope.OKtoEmail = 1;
            }
            else {
                $scope.OKtoEmail = 0;
            }
            if (d.data[0].Email == null) {
                $scope.ApplicantEmailAdress = "";
            }
            else {
                $scope.ApplicantEmailAdress = d.data[0].Email;
            }
            if (d.data[0].ConfirmEmail == null) {
                $scope.ConfirmEmailAdress = "";
            }
            else {
                $scope.ConfirmEmailAdress = d.data[0].ConfirmEmail;
            }
            if (d.data[0].LanguagePreference == null) {
                $scope.LanguagePref = 0;
            }
            else {
                $scope.LanguagePref = d.data[0].LanguagePreference;
            }
            if (d.data[0].PhoneNumber == null) {
                $scope.Phone1 = "";
                $scope.Phone2 = "";
                $scope.Phone3 = "";
            }
            else {
                if (d.data[0].PhoneNumber.split('-')[0] == 'undefined') {
                    $scope.Phone1 = '';
                }
                else {
                    $scope.Phone1 = (d.data[0].PhoneNumber.split('-')[0]);
                }
                if (d.data[0].PhoneNumber.split('-')[1] == 'undefined') {
                    $scope.Phone2 = '';
                }
                else {
                    $scope.Phone2 = (d.data[0].PhoneNumber.split('-')[1]);
                }
                if (d.data[0].PhoneNumber.split('-')[2] == 'undefined') {
                    $scope.Phone3 = '';
                }
                else {
                    $scope.Phone3 = (d.data[0].PhoneNumber.split('-')[2]);
                }
            }


        },
        function (error) {
            $log.error('Oops! Something went wrong while fetching the data.')
        })
    }


    function getPCP() {

        var ContactInfo = ContactInfoService.getPCP($sessionStorage.ApplicationDetailid);

        ContactInfo.then(function (d) {

            $scope.getPCP = d.data;

            if ($scope.OnlineCommunication != undefined) {
                if (d.data[0].OptInForEmailCommunication == true) {
                    $scope.OnlineCommunication = 1;
                }
                else {
                    $scope.OnlineCommunication = 0;
                }

                if (d.data[0].IdentifyPrimaryCarePhysician == true) {
                    $scope.PCP = 1;
                }
                else {
                    $scope.PCP = 0;
                }
                $scope.PCPType = d.data[0].PCPType;
                if (d.data[0].PrimaryCarePhysicianEstablishedPatient == true) {
                    $scope.PatientPhysician = 1;
                }
                else {
                    $scope.PatientPhysician = 0;
                }
                $scope.PrimaryCare = d.data[0].PrimaryCarePhysicianProviderName;
                $scope.PCPNo = d.data[0].PrimaryCarePhysicianProviderNumber;
            }
            else { }

        },
        function (error) {
            $log.error('Oops! Something went wrong while fetching the data.')
        })
    }



    $scope.InsPCP = function (type) {
        try {

            if ($scope.OnlineCommunication != 'undefined' || $scope.OnlineCommunication != undefined) {
                var OnlineCommunication = $scope.OnlineCommunication;
            }
            if ($scope.PCP != 'undefined' || $scope.PCP != undefined) {
                var PCP = $scope.PCP;
            }
            if ($scope.PCPType != 'undefined' || $scope.PCPType != undefined) {
                var PCPType = $scope.PCPType;
            }
            if ($scope.PrimaryCare != 'undefined' || $scope.PrimaryCare != undefined) {
                var PrimaryCare = $scope.PrimaryCare;
            }
            if ($scope.PCPNo != 'undefined' || $scope.PCPNo != undefined) {
                var PCPNo = $scope.PCPNo;
            }
            if ($scope.PatientPhysician != 'undefined' || $scope.PatientPhysician != undefined) {
                var PatientPhysician = $scope.PatientPhysician;
            }


            var PCPInfo = new Object();
            PCPInfo.ReceiveCommunications = OnlineCommunication;
            PCPInfo.IdentifyPCP = PCP;
            PCPInfo.PCPType = PCPType;
            PCPInfo.PCPNo = PCPNo;
            PCPInfo.PCPName = PrimaryCare;
            PCPInfo.EstablishedPatient = PatientPhysician;
            //PCPInfo.ApplicantId = $sessionStorage.ApplicantId;
            PCPInfo.ApplicantDetailId = $sessionStorage.ApplicationDetailid;
            PCPInfo.ModifiedBy = ('test');
            PCPInfo.CreatedBy = ('test');
            if ($scope.PCPType == undefined) {
                alert("Please enter valid data");
                return false;

            }
            if ($scope.PrimaryCare == undefined) {
                alert("Please enter valid data");
                return false;

            }
            if ($scope.PrimaryCare == "")
            {
                alert("Please enter valid data");
                return false;
            }
            if ($scope.PCPNo == undefined) {
                alert("Please enter valid data");
                return false;

            }
            if ($scope.PCPNo == "") {
                alert("Please enter valid data");
                return false;
            }

            var InsertPCP = ContactInfoService.InsertPCP(PCPInfo);

            InsertPCP.then(function (d) {

                alert("Record saved successfully");
                if (type == 'Next') {
                    $window.location.href = '/Enrollment/PEDate';
                }

            }, function (error) {

                alert("Please enter valid data");
                $log.error(error);
            })
        }
        catch (e) { $log.error(e); }
    }
    $scope.EditNavigate1 = function (type, type1) {
        $scope.MailingState = $scope.State;

    }
});
