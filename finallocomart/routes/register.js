var express = require('express');
var connect = require('./connection');
var path    = require("path");
/* GET home page. */




exports.register = function(req, res) {
	console.log("Inside register");
	  res.sendFile(path.join(__dirname+'/user_register.html'));
};
exports.adminregister=function(req, res) {
	console.log("Inside register");
	  res.sendFile(path.join(__dirname+'/admin_user_register.html'));
};

exports.registeradmin = function(req, res) {
	console.log("hello");
	
var  name = req.param("name");
console.log(name);
var lname = req.param("lname");
console.log(lname);
var ext = req.param("ext");
console.log(ext);
var email = req.param("email");
console.log(email);
var ofccode = req.param("ofccode");
console.log(ofccode);
var reportsto = req.param("reportsto");
console.log(reportsto);
var jobtitle = req.param("jobtitle");
console.log(jobtitle);
var employeeid;
var username=req.param("username");
var password = req.param("password");
var url = "mongodb://localhost:27017/cloud_services";
connect.connection(url,function(err,conn){
	console.log("After connection to database");
	if(!err){

		 var employees = conn.collection('employees',function(error,success){
			 if(!error){
				console.log("Got the order collection");}
				else{
				console.log("Error in finding the collection");	 
				 }
			 });
		 var adminlogin = conn.collection('adminlogin',function(error,success){
			 if(!error){
				console.log("Got the order collection");}
				else{
				console.log("Error in finding the collection");	 
				 }
			 });
		 
	
	
	
		 employees.find({},function(err,customer){
	if(err)
		console.log("In admin error");
	    customer.toArray(function(err,suc){
		var temp=[];
		temp=suc; 
		console.log(temp.length);
		//console.log("temp is"+JSON.stringify(temp[temp.length-]));
		employeeid=temp[temp.length-1].employeeNumber+1;
		console.log("Final customer id is"+employeeid);
		employees.insert({"employeeNumber":employeeid,"lastName":lname,"firstName":name,"extension":ext,"email":email,"officeCode":ofccode,
			"reportsTo":reportsto,"jobTitle":jobtitle},function(err,order){
			if(err)
				console.log("Error in insert");
			else
				console.log("Insert was successful");
			
			
		});
		adminlogin.insert({"employeeNumber":employeeid,"username":username,"password":password},function(err,order){
			if(err)
				console.log("Error in insert");
			else
				{
				console.log("Insert was successful");
				res.status(200).json
				({
					code:"200",
					message : "success",
		   	    });	
				}
		});
	});
});

//console.log(productcode + productname+productline+productscale+productprice+username+quantity);
	}
});
};

exports.registeruser = function(req, res) {
	console.log("hello");
		
var  name = req.param("name");
console.log(name);
var lname = req.param("lname");
console.log(lname);
var cfname = req.param("cfname");
console.log(cfname);
var phone = req.param("phone");
console.log(phone);
var addressline1 = req.param("addressline1");
console.log(addressline1);
var addressline2 = req.param("addressline2");
console.log(addressline2);
var city = req.param("city");
console.log(city);
var state = req.param("state");
console.log(state);
var code = req.param("postalcode");
console.log(code);
var country = req.param("country");
var customerid;
var username=req.param("username");
var password = req.param("password");
var url = "mongodb://localhost:27017/cloud_services";
connect.connection(url,function(err,conn){
	console.log("After connection to database");
	if(!err){

		 var customers = conn.collection('customers',function(error,success){
			 if(!error){
				console.log("Got the order collection");}
				else{
				console.log("Error in finding the collection");	 
				 }
			 });
		 var logins = conn.collection('login',function(error,success){
			 if(!error){
				console.log("Got the order collection");}
				else{
				console.log("Error in finding the collection");	 
				 }
			 });
		 
	
	
	
customers.find({},function(err,customer){
	if(err)
		console.log("In customer error");
	    customer.toArray(function(err,suc){
		var temp=[];
		temp=suc; 
		console.log(temp.length);
		//console.log("temp is"+JSON.stringify(temp[temp.length-]));
		customerid=temp[temp.length-1].customerNumber+1;
		console.log("Final customer id is"+customerid);
		customers.insert({"customerNumber":customerid,"customerName":name,"contactLastName":lname,"contactFirstName":cfname,"phone":phone,"addressLine1":addressline1,
			"addressLine2":addressline2,"city":city,"state":state,"postalCode":code,"country":country,"salesRepEmployeeNumber":"","creditLimit":""},function(err,order){
			if(err)
				console.log("Error in insert");
			else
				console.log("Insert was successful");
			
			
		});
		logins.insert({"customerNumber":customerid,"username":username,"password":password,"Role":"user"},function(err,order){
			if(err)
				console.log("Error in insert");
			else
				{
				console.log("Insert was successful");
				res.status(200).json
				({
					code:"200",
					message : "success",
		   	    });	
				}
		});
	});
});

//console.log(productcode + productname+productline+productscale+productprice+username+quantity);
	}
});
};