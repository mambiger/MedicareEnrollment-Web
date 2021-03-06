﻿appMedicareEnrollment.service("PhysicianService", ['$http', '$httpParamSerializerJQLike', function ($http, $httpParamSerializerJQLike, $sessionStorage) {
    
    this.InsertPhysicianData = function (PhysicianInfo) {
        var response = $http({
            url: "http://equitaweb.com/MedicalEnrollmentAPI/api/HumanaAPI/InsertPhysicianInfo/",
            dataType: 'json',
            method: 'POST',
            data: PhysicianInfo,
            headers: {
                "Content-Type": "application/json"
            }
        })
        return response;
    }
}]);