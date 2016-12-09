

	window.addEventListener('keydown', function(e){
		const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
		const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
		if(!audio || !key) {
			return; 
		}
		audio.currentTime = 0;
		audio.play();
		key.classList.add('playing');
		window.addEventListener('keyup', function(e){
			key.classList.remove('playing');
		}) 
		});

