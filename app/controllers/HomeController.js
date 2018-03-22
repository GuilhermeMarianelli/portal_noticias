
function HomeController(app){
	this._app = app;
}

HomeController.prototype.renderIndex= function(req,res){
	var conn = this._app.config.connection();
	var NoticiasModel = new this._app.app.models.NoticiasModel(conn);
	NoticiasModel.getLatestNoticias(function(err,result){
		res.render('home/index',{noticias:result});
	});
}

module.exports = function(){
	return HomeController;
}