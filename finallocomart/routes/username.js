/**
 * http://usejsdoc.org/
 */
exports.username = function(req, res) {
	console.log("Inside username");
	var user=req.params.username;
	res.send(user);
};
