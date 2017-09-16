appMedicareEnrollment.service("DMQService", ['$http', '$httpParamSerializerJQLike', function ($http, $httpParamSerializerJQLike, $sessionStorage) {

    this.InsertUpdateDMQ = function (mpdresult, osbresult, myownresult, poafnresult, poalmresult, poaad1result, poaad2result, poaCityresult, poazipresult, phonenumresult, relationship, ContractNo, state, ApplicantId, ApplicationDetailid, username) {

        if (poafnresult != undefined && poafnresult != "") {
            poafnresult = JSON.stringify(poafnresult);
        }
        else {
            poafnresult = "";
        }
        if (poalmresult != 0 && poalmresult != "") {
            poalmresult = JSON.stringify(poalmresult)
        }
        else {
            poalmresult = "";
        }
        if (poaad1result != 0 && poaad1result != "") {
            poaad1result = JSON.stringify(poaad1result)
        }
        else {
            poaad1result = "";
        }

        if (poaad2result != "" && poaad2result != "") {
            poaad2result = JSON.stringify(poaad2result)
        }
        else {
            poaad2result = "";
        }
        if (poaCityresult != "" && poaCityresult != "") {
            poaCityresult = JSON.stringify(poaCityresult)
        }
        else {
            poaCityresult = "";
        }
        if (poazipresult != "" && poazipresult != "") {
            poazipresult = JSON.stringify(poazipresult)
        }
        else {
            poazipresult = "";
        }
        if (phonenumresult != "" && phonenumresult != "") {
            phonenumresult = JSON.stringify(phonenumresult)
        }
        else {
            phonenumresult = "";
        }
        if (relationship != "" && relationship != "") {
            relationship = JSON.stringify(relationship)
        }
        else {
            relationship = "";
        }
        if (ContractNo != "" && ContractNo != "") {
            ContractNo = JSON.stringify(ContractNo)
        }
        else {
            ContractNo = "";
        }
        if (state != "" && state != "") {
            state = JSON.stringify(state)
        }
        else {
            state = "";
        }
        if (username != "") {
            username = JSON.stringify(username)
        }
        else {
            username = "";
        }
        var strFinal = "[" + mpdresult + "," +
                       osbresult + "," +
                         myownresult + "," +
                     poafnresult + "," +
                     poalmresult + "," +
                     poaad1result + "," + poaad2result + "," + poaCityresult + "," + poazipresult + "," + phonenumresult + "," + relationship + "," + ContractNo + "," + state + "," + ApplicantId + "," + ApplicationDetailid + "," + username + "]";
        var response = $http.post("http://medicareapi.agentleadcenter.com/api/HumanaAPI/InsertDMQues/", strFinal);
        return response;
    }

    this.getStates = function () {
        return $http.get("http://medicareapi.agentleadcenter.com/api/HumanaAPI/GetStates");
    }

    this.getPlans = function () {
        return $http.get("http://medicareapi.agentleadcenter.com/api/HumanaAPI/GetPlans");
    }

    this.getDMQuestions = function (ApplicantionDetailId) {

        return $http.get("http://medicareapi.agentleadcenter.com/api/HumanaAPI/GetDMQuestions/" + ApplicantionDetailId + "/NULL");
    }

    this.InsertUpdateContractNo = function (ContractNo) {
        if (ContractNo != "" && ContractNo != "") {
            ContractNo = JSON.stringify(ContractNo)
        }
        else {
            ContractNo = "";
        }


        var strFinal = "[" + ContractNo + "," + ApplicationDetailID + "]";
        var response = $http.post("http://medicareapi.agentleadcenter.com/api/HumanaAPI/InsertDMQues/", strFinal);
        return response;
    }
}]);