let form=document.querySelector('form');
form.addEventListener('submit',function(e)
{
	e.preventDefault();
	
	let name=document.getElementById("name").value;
	let pass=document.getElementById("pswd").value;
	let result=document.querySelector('#result');
	if((name==' ')||(name.length<3)||(name.length>20))
	{
		 result.innerHTML="Please Enter Valid Name";
		 result.style.color="hot-pink";
		 
	}
	else if(pass.length<9)
	{
		result.innerHTML="please enter valid password";
		result.style.color="hotpink";
	}
	else 
	{
		 alert("succes");
	}
	
		
})