module.exports = function(application){
	application.get('/admin',function(req,res){
		var AdminController = new application.app.controllers.AdminController(application);
		AdminController.renderCreateNoticias(req,res);
	});

	application.post('/noticia/salvar',function(req,res){
		var AdminController = new application.app.controllers.AdminController(application);
		AdminController.insertNoticia(req,res);
	});
}