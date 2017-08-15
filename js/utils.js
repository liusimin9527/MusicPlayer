/**
 * 定义music对象
 * @type {Object}
 */
var musicBox = {
  musicDom: null,   //播放器对象
  songs: [],        //歌曲目录
  index: 0,         //歌曲下标
  lyricText: null,      //

  /**
   * 初始化,创建一个audio
   * @param  {[type]} parentNode [description]
   * @return {[type]} musicDom   [description]
   */
	init: function (parentNode) {
    this.musicDom = document.createElement('audio');
    parentNode.appendChild(this.musicDom);

    return this.musicDom;
	},

  /**
   * 添加一首音乐
   * @param {[type]} src [description]
   */
	add: function (src) {
		this.songs.push(src);
	},

  /**
   * 获取歌曲名
   * @return {[type]} [description]
   */
  getSongName: function () {
    var songName = document.getElementById('songName');
    var sInfo = this.songs[this.index];
    sInfo = sInfo.split('/')[1];
    sInfo = sInfo.split('.')[0];

    songName.innerHTML = sInfo;
  },

  /**
   * 
   * @return {[type]} [description]
   */
  getIrc: function () {
    var timeLyric = new Array();   //时间
    var oLyric = new Array();      //歌词

    var pattern = /\[\d{2}:\d{2}\.\d{2}\]/g;   //获取时间

    this.lyricText = document.getElementById('irc').innerHTML;
    timelyric = this.lyricText.match(pattern);
    olyric = this.lyricText.split(pattern);

    console.log(timelyric[9], olyric[9]);
  },

  /**
   * 
   * @return {[type]} [description]
   */
  stop: function () {
    this.musicDom.pause();
  },

  /**
   * 上一首
   * @return {[type]} [description]
   */
  prev: function () {
    var iLen = this.songs.length;

    if ((this.index+1) >= 0 && this.index < iLen) {  //判断是否超出范围
      if (this.index == 0) {
        this.index = iLen;
      }

      this.index--;
      this.play();
    }
  },

  /**
   * 播放
   * @return {[type]} [description]
   */
  play: function () {
    //根据数组下标决定播放哪一首歌曲
    this.musicDom.src = this.songs[this.index];
    this.musicDom.play();
    this.getSongName();
  },

  /**
   * 下一首
   * @return {Function} [description]
   */
  next: function () {
    var iLen = this.songs.length;

    if ((this.index+1) >= 0 && this.index < iLen) {  //判断是否超出范围
      this.index++;

      if (this.index == iLen) {
        this.index = 0;
      }
    }

    this.play();
  }
};

var EventUtil = {
  /**
   * [addHandler description]
   * @param {[type]} element [description]
   * @param {[type]} type    [description]
   * @param {[type]} handler [description]
   */
  addHandler: function (element, type, handler) {
    if (element.addEventListener) {
      element.addEventListener(type, handler, false);
    } else if (window.attachEvent) {
      element.attachEvent('on'+type, handler);  //IE
    } else {
      element['on'+type] = handler;
    }
  }
};

var AjaxUtil = {
  /**
   * [get description]
   * @param  {[type]}   url      [description]
   * @param  {Function} callback [description]
   * @return {[type]}            [description]
   */
  get: function (url, callback) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.status == 200 && xhr.readyState == 4) {
        callback(JSON.parse(xhr.responseText));
      }
    };

    xhr.open('get', url);
    xhr.send(null);
  },

  /**
   * [post description]
   * @return {[type]} [description]
   */
  post: function () {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.status == 200 && xhr.readyState == 4) {
        callback(JSON.parse(xhr.responseText));
      }
    };

    xhr.open('post', url);
    xhr.setRequestHeader("Content-Type", "application/x-www--form-urlencoded");
    xhr.send(null);
  }
};