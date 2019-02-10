function verifySession(){
	var data = sessionStorage.getItem('usuario');
	if(data == null){
		console.log("No hay datos");
		document.getElementById("login").style.display = 'block';
		document.getElementById("register").style.display = 'block';
	}else{
		console.log("Si hay datos");
		document.getElementById("options").style.display = 'block';
	}
}
