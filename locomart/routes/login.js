/**
 * http://usejsdoc.org/
 */
var connect = require('./connection');
var assert = require('assert');

var path    = require("path");
exports.login = function(req, res) {
	console.log("Inside login function");
	var customerCode ;
	var username,password;
	/*username= "Atelier";
	password="12345";*/
	var status=false;
	username = req.param("name");
	password=req.param("password");
	console.log("Username"+username);
	console.log("Password"+password);
	var url = "mongodb://localhost:27017/cloud_services";
	connect.connection(url,function(err,conn){
		console.log("After connection to databse");
		if(!err){

			 var users = conn.collection('login',function(error,success){
				 if(!error){
					 console.log("Got the collection");}
					 else{
					console.log("Error in finding the collection");	 
					 }
				 });
			 users.find({"username":username,"password":password},function(err,user){
				
				 // res.sendFile(path.join(__dirname+'/home.html'));
				/* var arr = user.toArray();
				 console.log(JSON.stringify(typeof user));
				 res.send(user);*/
				/* user.each(function(err, doc) {
				      assert.equal(err, null);
				      if (doc !== null) {
				          console.dir(doc);
				      
				      }
				 });*/
			user.toArray(function(err,suc){
				var temp=[];
				console.log("length is"+suc.length);
			
					 if(suc.length==1){
						
						temp=suc; 
						console.log(temp.length);
						var s = temp.length;
					
						var size = temp.length;
						customerCode=temp[0].customerNumber;
						//localStorage.setItem("uname", username);
						console.log(customerCode);
						status=true;
					 }else{
						 status=false,
						 temp[0]={}
					 }
						res.status(200).json({ 
							code:"200",
							message : "success",
							status:status,
							
							data:temp[0]
				   	});
					
						
				
				 });
			 });
		}
});
};
exports.adminlogin = function(req, res) {
	console.log("Inside login function");
	var customerCode ;
	var username,password;
	/*username= "Atelier";
	password="12345";*/
	var status=false;
	username = req.param("name");
	password=req.param("password");
	console.log("Username"+username);
	console.log("Password"+password);
	var url = "mongodb://localhost:27017/cloud_services";
	connect.connection(url,function(err,conn){
		console.log("After connection to databse");
		if(!err){

			 var users = conn.collection('adminlogin',function(error,success){
				 if(!error){
					 console.log("Got the collection");}
					 else{
					console.log("Error in finding the collection");	 
					 }
				 });
			 users.find({"adminname":username,"password":password},function(err,user){
				
				 // res.sendFile(path.join(__dirname+'/home.html'));
				/* var arr = user.toArray();
				 console.log(JSON.stringify(typeof user));
				 res.send(user);*/
				/* user.each(function(err, doc) {
				      assert.equal(err, null);
				      if (doc !== null) {
				          console.dir(doc);
				      
				      }
				 });*/
			user.toArray(function(err,suc){
				var temp=[];
				console.log("length is"+suc.length);
			
					 if(suc.length==1){
						
						temp=suc; 
						console.log(temp.length);
						var s = temp.length;
					
						var size = temp.length;
						customerCode=temp[0].customerNumber;
						//localStorage.setItem("uname", username);
						console.log(customerCode);
						status=true;
					 }else{
						 status=false,
						 temp[0]={}
					 }
						res.status(200).json({ 
							code:"200",
							message : "success",
							
							status:status,
							data:temp[0]
				   	});
					
						
				
				 });
			 });
		}
});
};