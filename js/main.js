window.onload = function () {
	var oAudio = music.init(document.getElementById('musicPlayer')); //audio
	var oPrev = document.getElementById('prev');
	var oPlay = document.getElementById('play');
	var oNext = document.getElementById('next');

	music.add();  //

	oPrev.onclick = music.prev;

	oPlay.onclick = function () {
		if (oAudio.paused) {
			music.play();
		} else {
			music.stop();
		}
	};

	oNext.onclick = music.next;

	oAudio.ontimeupdate = function () {
		console.log(oAudio.duration);

	};
};

	//console.log(oAudio);