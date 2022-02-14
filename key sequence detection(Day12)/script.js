const pressed=[];
const code='jo';
window.addEventListener('keyup',(e)=>{
	pressed.push(e.key);
	pressed.splice(-code.length - 1, pressed.length - code.length);
	console.log(pressed);
	if(pressed.join('').includes(code)){
		console.log('s');
		cornify_add();
	}
})
