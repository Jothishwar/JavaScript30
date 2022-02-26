const checkbox=document.querySelectorAll('input[type="checkbox"]');
let lastcheck;
function check(e) {
	let btw=false;
	if (e.shiftKey && this.checked) {
		checkbox.forEach(inp=>{
			if (inp===this || inp===lastcheck) {
				btw=!btw;
			}
			if(btw){
				inp.checked=true;
			}
		});
	}
	lastcheck=this;
}
checkbox.forEach(inp=>{
	inp.addEventListener('click',check);
});
