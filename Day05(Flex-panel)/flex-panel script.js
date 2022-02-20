const panels=document.querySelectorAll('.panel');
function togglePanel() {
	this.classList.toggle('open');
}
function toggletext(e){
	if(e.propertyName.includes('flex')){
		this.classList.toggle('open-text');
	}
	
}
panels.forEach(panel => panel.addEventListener('click',togglePanel));
panels.forEach(panel => panel.addEventListener('transitionend',toggletext));
