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
	},1000);
});

}).then((multiply)=>{

	document.getElementById("output").innerText +=
		`\nResult: ${multiply}`; 
	return new Promise((resolve)=>{

	setTimeout(()=>{
	
       resolve(multiply-3);
	},1000);
});

}).then((sub)=>{

document.getElementById("output").innerText +=
		`\nResult: ${sub}`; 
	return new Promise((resolve)=>{

	setTimeout(()=>{
	
       resolve(sub/2);
	},1000);
});
}).then((division)=>{

	document.getElementById("output").innerText +=
		`\nResult: ${division}`; 
	return new Promise((resolve,reject)=>{

	setTimeout(()=>{
		
       resolve(division+10);
	},1000);
});

}).then((add)=>{

	document.getElementById("output").innerText +=
		`\nResult: ${add}`; 
	
});


}


