function NoticiasController(app){
	this._app = app;
}

NoticiasController.prototype.renderNoticias = function(req,res){
	var conn = this._app.config.connection();
	var NoticiasModel = new this._app.app.models.NoticiasModel(conn);
	NoticiasModel.getNoticias(function(err,result){
		res.render('noticias/noticias',{noticias:result});
	});
}

NoticiasController.prototype.renderNoticia = function(req,res){
	var id_noticia = req.query.id_noticia;
	var conn = this._app.config.connection();
	var NoticiasModel = new this._app.app.models.NoticiasModel(conn);
	NoticiasModel.getNoticia(id_noticia,function(err,result){
		res.render('noticias/noticia',{noticia : result});
	});
}

module.exports = function(){
	return NoticiasController;
}