appMedicareEnrollment.service("ContactInfoService", ['$http', '$httpParamSerializerJQLike', function ($http, $httpParamSerializerJQLike, $sessionStorage) {
    
    this.InsertContactData = function (ContactInfo) {
        var response = $http({
            url: "http://medicareapi.agentleadcenter.com/api/HumanaAPI/InsertContactInfo/",
            dataType: 'json',
            method: 'POST',
            data: ContactInfo,
            headers: {
                "Content-Type": "application/json"
            }
        })
        return response;
    }
    this.getStates = function () {
        
        return $http.get("http://medicareapi.agentleadcenter.com/api/HumanaAPI/GetStates");
    }
    this.getContactInfo = function (ApplicationDetailId, ApplicantId) {
        
        return $http.get("http://medicareapi.agentleadcenter.com/api/HumanaAPI/GetContactInfo/" + ApplicationDetailId + "/" + ApplicantId);
    }
    this.getPCP = function (ApplicationDetailId) {
        
        return $http.get("http://medicareapi.agentleadcenter.com/api/HumanaAPI/GetPCP/" + ApplicationDetailId);
    }
    this.InsertPCP = function (PCPInfo) {
        
        var response = $http({
            url: "http://medicareapi.agentleadcenter.com/api/HumanaAPI/InsertPCPInfo/",
            dataType: 'json',
            method: 'POST',
            data: PCPInfo,
            headers: {
                "Content-Type": "application/json"
            }
        })
        return response;
    }

}]);