function playSound(e) {
	let aud=document.querySelector(`audio[data-key="${e.keyCode}"]`);
	let key=document.querySelector(`div[data-key="${e.keyCode}"]`);
	if (!aud) return;
	key.classList.add('play');
	aud.currentTime=0;
	aud.play();
}
function transition(e) {
	let aud=document.querySelector(`audio[data-key="${e.keyCode}"]`);
	let key=document.querySelector(`div[data-key="${e.keyCode}"]`);
	if (!aud) return;
	key.classList.remove('play');
}
window.addEventListener('keydown',playSound);
window.addEventListener('keyup',transition);