var express = require('express');
var connect = require('./connection');
var assert = require('assert');
var path    = require("path");
/* GET home page. */
var productcode;

exports.info = function(req, res) {
	 productcode = req.param("productcode");
	 res.status(200).json({
			code:"200",
			message : "success",});
	 
	  };
exports.inf=function(req,res){
	console.log("inside req");
	res.sendFile(path.join(__dirname+'/productdes.html'));
	  //res.sendFile(path.join(__dirname+'/productinfo.html'));
}	  
exports.information=function(req,res){
	var url = "mongodb://localhost:27017/cloud_services";
	connect.connection(url,function(err,conn)
			{
			console.log("After connection to database");
			if(!err)
			{
				 var information = conn.collection('products',function(error,success){
					 if(!error)
					 	{
						 console.log("Got the collection");
						 }
						 else
						 {
						console.log("Error in finding the collection");	 
						 }
					 });
				 information.find({"productCode":productcode},function(err,prod){
					 prod.toArray(function(err,suc){
						 var temp=[];
							temp=suc;
							console.log("Product description is"+JSON.stringify(temp));
							res.status(200).json({
								code:"200",
								message : "success",
								data:temp});
						 
					 });
				 });
				 }
				
	
	  
			});	  
}

exports.home = function(req, res) {
	 // res.sendFile(path.join(__dirname+'/home.html'));
	res.sendFile(path.join(__dirname+'/index.html'));
};
exports.home2 = function(req, res) {
	console.log("Inside login function");
	var username,password;
	/*username= "Atelier";
	password="12345";*/
	var product = req.param("productvalue");
	console.log("Product is"+product);
	var url = "mongodb://localhost:27017/cloud_services";
	connect.connection(url,function(err,conn)
			{
			console.log("After connection to databse");
			if(!err)
			{
				 var products = conn.collection('products',function(error,success){
					 if(!error)
					 	{
						 console.log("Got the collection");
						 }
						 else
						 {
						console.log("Error in finding the collection");	 
						 }
					 });
				
				 products.find({"productLine":product},function(err,pro){
					 pro.toArray(function(err,suc){
						 console.log("Inside product");
							var temp=[];
							temp=suc; 
							console.log(temp.length);
							console.log("element:"+JSON.stringify(temp[0]));
							var size = temp.length;
							res.status(200).json({
							code:"200",
							message : "success",
							data:temp});
					 
				 });				
			});
		}		 
		
	});

	  
};
exports.getproduct = function(req, res) {
	console.log("Inside product function");
	/*username= "Atelier";
	password="12345";*/
	var productcode = req.param("productcode");
	console.log("productcode is"+productcode);
	var url = "mongodb://localhost:27017/cloud_services";
	connect.connection(url,function(err,conn)
			{
			console.log("After connection to databse");
			if(!err)
			{
				 var products = conn.collection('products',function(error,success){
					 if(!error)
					 	{
						 console.log("Got the collection");
						 }
						 else
						 {
						console.log("Error in finding the collection");	 
						 }
					 });
				
				 products.find({"productCode":productcode},function(err,pro){
					 pro.toArray(function(err,suc){
						 console.log("Inside productcode");
							var temp=[];
							temp=suc; 
							console.log(temp.length);
							console.log("element:"+JSON.stringify(temp[0]));
							var size = temp.length;
							res.status(200).json({
							code:"200",
							message : "success",
							data:temp});
					 
				 });				
			});
		}		 
		
	});

	  
};