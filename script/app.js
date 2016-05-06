angular.module('Midterm', [])
.controller('MidtermCtrl', function($scope, $http){
    $http.get('https://api.myjson.com/bins/4t5lw')
         .success(function (data) {
            $scope.Avatar = data.Avatar;
            $scope.FName = data.FName;
            $scope.LName = data.LName;
            $scope.Name = $scope.FName + " " + $scope.LName;
            $scope.Headline = data.Headline;
            $scope.Location = data.Location;
            $scope.Industry = data.Industry;
            $scope.Summary = data.Summary;
            $scope.Experience = data.Experience;
            $scope.Skills = data.Skills;
            $scope.Projects = data.Projects;
            $scope.Education = data.Education;
            $scope.name = 0;
            $scope.nameEditShow =  function() {
                $scope.name = 1;
            };
            $scope.profileImageEditShow = function() {
                $scope.avatar = 1;
                $scope.temp = $scope.Avatar;
            };
            $scope.saveName = function() {
                $scope.Name=$scope.FName + " " + $scope.LName;
                $scope.name = 0;
            };
            $scope.saveAvatar = function() {
                $scope.Avatar = $scope.temp;
                $scope.avatar = 0;
            };
            $scope.headlineEditShow = function() {
                $scope.temp1 = $scope.Headline;
                $scope.headline = 1;
            };
            $scope.saveHeadline = function() {
                $scope.Headline =  $scope.temp1;
                $scope.headline = 0;
            };
            $scope.demoEditShow = function() {
                $scope.temp2 = $scope.Location;
                $scope.temp3 = $scope.Industry;
                $scope.demo = 1;
            };
            $scope.saveDemo = function() {
                $scope.Location = $scope.temp2;
                $scope.Industry = $scope.temp3;
                $scope.demo = 0;
            };
            $scope.summaryEditShow = function() {
                $scope.summary = 1;
                $scope.temp4 = $scope.Summary;
            };
            $scope.saveSummary = function() {
                $scope.Summary = $scope.temp4;
                $scope.summary = 0;
            };
            $scope.exp = [];
            while($scope.exp.length < $scope.Experience.length)
                {
                    $scope.exp.push(false);
                }
            $scope.expEditShow = function(index) {
                $scope.temp5 = JSON.parse(JSON.stringify($scope.Experience[index]));
                $scope.exp[index] = true;
            };
            $scope.saveExp = function(index) {
                $scope.Experience[index] = $scope.temp5;
                $scope.exp[index] = false;
            };
            $scope.expAddShow = function() {
                $scope.aexp = true;
                $scope.temp6 = {Roll:"",Company:"",StartDate:"",EndDate:"",Description:""};
            };
            $scope.addExp = function() {
                $scope.Experience.push($scope.temp6);
                $scope.aexp = false;
            }
            $scope.skillAddShow = function() {
                $scope.temp7 = {Skill:""};
                $scope.skill = 1;
            };
            $scope.addSkill = function() {
                $scope.Skills.push($scope.temp7);
                $scope.skill = 0;
            };
        
            $scope.pj = [];
            while($scope.pj.length < $scope.Projects.length)
                {
                    $scope.pj.push(false);
                }
            $scope.projectAddShow = function() {
                $scope.apj = true;
                $scope.temp8 = {Name:"", StartDate:"", EndDate:"", Description:""};
            };
            $scope.addPj = function() {
                $scope.apj = false;
                $scope.Projects.push($scope.temp8);
            };
            $scope.projectEditShow = function(index) {
                $scope.pj[index] = true;
                $scope.temp9 = JSON.parse(JSON.stringify($scope.Projects[index]));
            };
            $scope.savePj = function(index) {
                $scope.Projects[index] = $scope.temp9;
                $scope.pj[index] = false;
            };
            $scope.eduAddShow = function() {
                $scope.temp10 = {Name:"",Degree:"", Major:"", StartDate:"", EndDate:"", ImgSrc:""}; 
                $scope.aedu = true;
            };
            $scope.addEdu = function() {
                $scope.Education.push($scope.temp10);
                $scope.aedu = false;
            };
            $scope.edu = [];
            while($scope.edu.length < $scope.Education.length)
                {
                    $scope.edu.push(false);
                }
            $scope.eduEditShow = function(index) {
                $scope.edu[index] = true;
                $scope.temp11 = JSON.parse(JSON.stringify($scope.Education[index]));
            };
            $scope.saveEdu = function(index) {
                $scope.Education[index] = $scope.temp11;
                $scope.edu[index] = false;
            };
         })
         .error(function (data, status, headers, config) {
             //  Do some error handling here
         });
});