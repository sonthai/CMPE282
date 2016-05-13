var connect = require('./connection');
var assert = require('assert');
exports.officepage = function(req, res) {
	  res.sendFile(path.join(__dirname+'/office.html'));
};
var path    = require("path");
exports.office = function(req, res) {
	console.log("Inside office function");
	var username,password;
	/*username= "Atelier";
	password="12345";*/
	var url = "mongodb://localhost:27017/cloud_services";
	connect.connection(url,function(err,conn){
		console.log("After connection to database");
		if(!err){

			 var office = conn.collection('offices',function(error,success){
				 if(!error){
					 console.log("Got the collection");}
					 else{
					console.log("Error in finding the collection");	 
					 }
				 });
			 office.find({},function(err,ofc){
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
			ofc.toArray(function(err,suc){
					 
						var temp=[];
						temp=suc; 
						var temp2=[];
						console.log(temp.length);
						var s = temp.length;
					for(var i = 0 ;i<temp.length/2;i++){
						temp2[i]=temp[i];
					}
						var size = temp2.length;
						res.status(200).json({
							code:"200",
							message : "success",
							data:temp2
				   	});
						
				
				 });
			 });
		}
});
};