//your JS code here. If required.

let number=document.getElementById("ip")

function arith(){


let InitialPromise=new Promise((resolve,reject)=>{

	setTimeout(()=>{
       resolve(Number(number.value));
	},2000);
});
	
	InitialPromise.then((num)=>{
	document.getElementById("output").innerText= `Result: ${num}`; 
	return new Promise((resolve)=>{

	setTimeout(()=>{
		
       resolve(num*2);
	},3000);
});

}).then((multiply)=>{

	document.getElementById("output").innerText +=
		`\nResult: ${multiply}`; 
	return new Promise((resolve)=>{

	setTimeout(()=>{
	
       resolve(multiply-3);
	},4000);
});

}).then((sub)=>{

document.getElementById("output").innerText +=
		`\nResult: ${sub}`; 
	return new Promise((resolve)=>{

	setTimeout(()=>{
	
       resolve(sub/2);
	},5000);
});
}).then((division)=>{

	document.getElementById("output").innerText +=
		`\nResult: ${division}`; 
	return new Promise((resolve,reject)=>{

	setTimeout(()=>{
		
       resolve(division+10);
	},6000);
});

}).then((add)=>{

	document.getElementById("output").innerText +=
		`\nResult: ${add}`; 
	
});


}


