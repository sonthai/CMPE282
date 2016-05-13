var connect = require('./connection');
var assert = require('assert');
var express = require('express');
var path    = require("path");

exports.orderpage = function(req, res) {
	  res.sendFile(path.join(__dirname+'/orderdetails.html'));
};

exports.submitorder = function(req, res) {
	console.log("hello");
var productcode = req.param("productcode");
console.log(productcode);
var productname = req.param("productname");
console.log(productname);
var productline = req.param("productline");
console.log(productline);
var productscale = req.param("productscale");
console.log(productscale);
var productprice = req.param("productprice");
console.log(productprice);
var quantity = req.param("productquantity");
console.log(quantity);
var customerID = 103;
var datetime = new Date();
var flag = false;
console.log("Daate is"+datetime);
var orderid;
var url = "mongodb://localhost:27017/cloud_services";
connect.connection(url,function(err,conn){
	console.log("After connection to database");
	if(!err){

		 var orders = conn.collection('orders',function(error,success){
			 if(!error){
				console.log("Got the order collection");}
				else{
				console.log("Error in finding the collection");	 
				 }
			 });
		 var order_detail = conn.collection('orderdetails',function(error,success){
			 if(!error){
				 console.log("Got the order collection");}
			 else{
				 console.log("Error in finding the collection");	 
				 }
		 });
	
	
orders.find({},function(err,order){
	if(err)
		console.log("In order error");
	    order.toArray(function(err,suc){
		var temp=[];
		temp=suc; 
		console.log(temp.length);
		//console.log("temp is"+JSON.stringify(temp[temp.length-]));
		orderid=temp[temp.length-1].orderNumber+1;
		console.log("Final ordwr id is"+orderid);
		orders.insert({"orderNumber":orderid,"orderDate":"01-01-2016","requiredDate":"01-02-2016",shippedDate:"",status:"Yet to be shipped","comments":"","customerNumber":customerID},function(err,order){
			if(err)
				console.log("Error in insert");
			else
				console.log("Insert was successful");
			
			
		});
		order_detail.insert({"orderNumber":orderid,"productCode":productcode,"quantityOrdered":quantity,priceEach:productprice,orderLineNumber:"15"},function(err,order){
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
exports.orderdetails = function(req,res){
	var url = "mongodb://localhost:27017/cloud_services";
	var customernumber = req.param("customerNumber");
	var custom = parseInt(customernumber);
	var temp2=[];
	var temp=[];
	console.log("customer"+custom);
	connect.connection(url,function(err,conn){
		console.log("After connection to database");
		if(!err){

			 var orders = conn.collection('ord',function(error,success){
				 if(!error){
					console.log("Got the order collection");}
					else{
					console.log("Error in finding the collection");	 
					 }
				 });
			/* var orderdetails=conn.collection('orderdetails',function(error,success){
				 if(!error){
						console.log("Got the order collection");}
						else{
						console.log("Error in finding the collection");	 
						 }
					 });*/
			
			 orders.find({"customerNumber":custom},function(err,ord){
				 ord.toArray(function(err,suc){
					 var temp=[];
					 temp=suc;
					 res.status(200).json
						({
							code:"200",
							message : "success",
							data:temp
				   	    });	
						 
							 
						 });
					 });
						/*temp=suc; 
						console.log(temp.length+"temp element"+JSON.stringify(temp[0]));
						var s = temp.length;
					for(var i = 0;i<s;i++){
						console.log("inside i"+i);
						
						orderdetails.find({"orderNumber":temp[i].orderNumber},function(err,or){
							 or.toArray(function(err,suc){
								 
									temp2[i]=suc[0]; 
									console.log("Suc[i]"+i+JSON.stringify(temp2[i]));
								
								});
							 callback();
						});
						
					
					}*/
					
			// });
		
				
	}
	});
		
};
exports.adminorder = function(req,res){
	var url = "mongodb://localhost:27017/cloud_services";
	var customernumber = req.param("customerNumber");
	var custom = parseInt(customernumber);
	var temp2=[];
	var temp=[];
	console.log("customer"+custom);
	connect.connection(url,function(err,conn){
		console.log("After connection to database");
		if(!err){

			 var orders = conn.collection('ord',function(error,success){
				 if(!error){
					console.log("Got the order collection");}
					else{
					console.log("Error in finding the collection");	 
					 }
				 });
			/* var orderdetails=conn.collection('orderdetails',function(error,success){
				 if(!error){
						console.log("Got the order collection");}
						else{
						console.log("Error in finding the collection");	 
						 }
					 });*/
			
			 orders.find({"customerNumber":custom},function(err,ord){
				 ord.toArray(function(err,suc){
					 var temp=[];
					 temp=suc;
					 res.status(200).json
						({
							code:"200",
							message : "success",
							data:temp
				   	    });	
						 
							 
						 });
					 });
		}
	});
	
};