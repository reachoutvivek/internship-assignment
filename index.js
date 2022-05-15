function evaluate(){
	const pwd=document.getElementById('password').value;
		const username=document.getElementById('username').value;
	if(pwd.length<=6){
		alert("Password Is Too Short")
	
	}
	if(pwd.length>6){
		 //location.href = "success.html";
		 alert("Sign Up Successfull")
	}
	
}
const button=document.getElementById("click")
button.addEventListener("click",evaluate)
