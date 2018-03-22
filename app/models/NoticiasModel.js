function NoticiasModel(conn){
	this._conn = conn;
}

NoticiasModel.prototype.getNoticias = function(callback){
	this._conn.query("SELECT * FROM noticias",callback);
}

NoticiasModel.prototype.getNoticia = function(id_noticia,callback){
	this._conn.query("SELECT * FROM noticias WHERE id_noticia = "+id_noticia,callback);
}

NoticiasModel.prototype.getLatestNoticias = function(callback){
	this._conn.query("SELECT * FROM noticias ORDER BY id_noticia DESC LIMIT 5",callback);
}
NoticiasModel.prototype.createNoticia = function(dados,callback){
	this._conn.query("INSERT INTO noticias SET ?",dados,callback);
}
module.exports = function(){
	return NoticiasModel;
}