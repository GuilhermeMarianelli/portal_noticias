module.exports = function(application){
	application.get('/noticias',function(req,res){
		var NoticiasController = new application.app.controllers.NoticiasController(application);
		NoticiasController.renderNoticias(req,res);
	});

	application.get('/noticia',function(req,res){
		var NoticiasController = new application.app.controllers.NoticiasController(application);
		NoticiasController.renderNoticia(req,res);
	})
}
