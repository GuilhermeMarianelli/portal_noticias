function AdminController(app){
	this._app = app;
}

AdminController.prototype.renderCreateNoticias = function(req,res){
	var err = false;
	res.render('admin/create_noticia',{erros : err, input : {}});
}

AdminController.prototype.insertNoticia = function(req,res){
	var dados = req.body;
	req.check('titulo','O preenchimento do campo "título" é obrigatório').notEmpty();
	req.checkBody('noticia','O preenchimento do campo "notícia" é obrigatório').notEmpty();
	req.checkBody('resumo','O preenchimento do campo "resumo" é obrigatório').notEmpty();
	req.checkBody('autor','O preenchimento do campo "autor" é obrigatório').notEmpty();
	req.checkBody('data','O preenchimento do campo "data" é obrigatório').notEmpty();
	var err = req.validationErrors();
	if(err){
		res.render('admin/create_noticia',{erros:err, input:dados});
		return;
	}else{
		var conn = this._app.config.connection();
		var NoticiasModel = new this._app.app.models.NoticiasModel(conn);
		NoticiasModel.createNoticia(dados,function(err,result){
			res.redirect('/noticias');
		});	
	}
}

module.exports = function(){
	return AdminController;
}