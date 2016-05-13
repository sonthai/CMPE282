var express = require('express');
var connect = require('./connection');
var path    = require("path");
exports.registerproduct = function(req, res) {
	console.log("hello");
		
var  productcode = req.param("productCode");
console.log(productcode);
var productname = req.param("productname");
console.log(productname);
var productline = req.param("productline");
console.log(productline);
var productscale = req.param("productscale");
console.log(productscale);
var productvendor = req.param("productvendor");
console.log(productvendor);
var productDescription = req.param("productDescription");
console.log(productDescription);
var quantityInStock = req.param("quantityInStock");
console.log(quantityInStock);
var buyPrice = req.param("buyPrice");
console.log(buyPrice);
var MSRP = req.param("MSRP");
console.log(MSRP);

var url = "mongodb://localhost:27017/cloud_services";
connect.connection(url,function(err,conn){
	console.log("After connection to database");
	if(!err){

		 var products = conn.collection('products',function(error,success){
			 if(!error){
				console.log("Got the order collection");}
				else{
				console.log("Error in finding the collection");	 
				 }
			 });
		products.insert({"productCode":productcode,"productName":productname,"productLine":productline,"productScale":productscale,"productVendor":productvendor,"productDescription":productDescription,
			"quantityInStock":quantityInStock,"buyPrice":buyPrice,"MSRP":MSRP},function(err,order){
			if(err)
				console.log("Error in insert");
			else
				{console.log("Insert was successful");
			res.status(200).json
			({
				code:"200",
				message : "success",
	   	    });}
		});
	


//console.log(productcode + productname+productline+productscale+productprice+username+quantity);
	}
});
};
exports.deleteproduct = function(req, res) {
	var url = "mongodb://localhost:27017/cloud_services";
	var productcode=req.param("productcode");
	var str=String(productcode);
	console.log("code is"+productcode);
	console.log("Str is"+str);
	connect.connection(url,function(err,conn){
		console.log("After connection to database");
		if(!err){

			 var products = conn.collection('products',function(error,success){
				 if(!error){
					console.log("Got the order collection");}
					else{
					console.log("Error in finding the collection");	 
					 }
				 });
			 products.remove({"productCode":str},function(err,product){
				 if (product){
					
						 console.log("delete was successful");
						 res.status(200).json
							({
								code:"200",
								message : "success",
					   	    });
					
						
					 
				 }else
						console.log("Error in insert"); 
			 
			 });
			 }
	});
};
