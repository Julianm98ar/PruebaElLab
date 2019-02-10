static var ip = "10.103.49.238/";

function iniciar(){
	var email = document.getElementById("emails").value.toLowerCase();
	var password = document.getElementById("passwords").value;
    var list = {
    	"action": "usuarios",
    	"email" : email,
    	"password" : password,
    };
    sessionStorage.setItem('usuario',list);
    location.href = "Index.html";
    M.toast({html: 'error loggeandose'});
    
}

function registrar(){
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	var retype = document.getElementById("retype").value;
	var code = document.getElementById("code").value;
	var list = {
		"action" : "usuarios",
		"email" : email,
		"password" : password,
		"retype" : retype,
		"code" : code
	}
	console.log(list);

}