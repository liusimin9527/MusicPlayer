window.onload = function () {
  var oAudio = musicBox.init(document.getElementById('musicPlayer'));
  var oSearch = document.getElementById('search-songs');
  var oPrev = document.getElementById('prev');
  var oPlay = document.getElementById('play');
  var oNext = document.getElementById('next');
  var currentTime = document.getElementById('current-time');
  var durationTime = document.getElementById('duration-time');
  var progress = document.getElementById('progress-bar');
  var progressBar = document.getElementById('progress-bar-cover');
  var progressBtn = document.getElementById('progress-bar-button');

  //添加音乐
  musicBox.add("resource/萧忆情 - 童话镇 [mqms2].mp3");
  musicBox.add("resource/Weir Min - เกลียดตัวเอง [mqms].mp3");

  musicBox.getIrc();  //获取歌词

  //上一首
  EventUtil.addHandler(oPrev, 'click', function () {
    musicBox.prev();
  });

  //播放
  EventUtil.addHandler(oPlay, 'click', function () {
    if (oAudio.paused) {
      musicBox.play();
    } else {
      musicBox.stop();
    }
  });

  //下一首
  EventUtil.addHandler(oNext, 'click', function () {
    musicBox.next();
  });

  //进度条
  EventUtil.addHandler(oAudio, 'ontimeupdate', function () {
    currentTime.innerHTML = timeChangeover(oAudio.currentTime)+'/';
    durationTime.innerHTML = timeChangeover(oAudio.duration);

    progressBar.style.width = oAudio.currentTime/oAudio.duration*390+'px';
    progressBtn.style.left = oAudio.currentTime/oAudio.duration*390+'px';
  });

  //
  EventUtil.addHandler(progress, 'click', function (event) {
    //progressBar.style.width = progressBtn.style.left = event.clientX-progress.offsetLeft+'px';
  });
  
  //向后台请求数据
  //AjaxUtil.get("", function (response) {
	//
    //response.     
  //});


};

/**
 * 
 * @param  {[type]} fTime [description]
 * @return {[type]}       [description]
 */
function timeChangeover(fTime) {
  fTime = Math.floor(fTime);

  var fSeconds = Math.floor(fTime%60);
  var fMinutes = Math.floor(fTime/60);

  fSeconds = fSeconds>=10?fSeconds:'0'+fSeconds;
  fMinutes = fMinutes>=10?fMinutes:'0'+fMinutes;

  return fMinutes + ':' + fSeconds;
}
