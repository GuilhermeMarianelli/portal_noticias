module.exports = function(application){
	application.get('/',function(req,res){
		var HomeController = new application.app.controllers.HomeController(application);
		HomeController.renderIndex(req,res);
	});
	
}