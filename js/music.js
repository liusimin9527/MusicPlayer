/**
 * 定义music对象
 * @type {Object}
 */
var music = {
	musicDom: null,   //播放器对象
	songs: [],        //歌曲目录
	index: 0,         //歌曲下标

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
    var sInfo = this.songs[this.index];
    sInfo = sInfo.split('/')[1];
    sInfo = sInfo.split('.')[0];
  },

  /**
   * 暂停音乐
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

    if ((this.index+1)>=0 && this.index < iLen) {  //判断是否超出范围
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
  },

  /**
   * 下一首
   * @return {Function} [description]
   */
  next: function () {
    var iLen = this.songs.length;

    if ((this.index++>=0) && this.index < iLen) {  //判断是否超出范围
      this.index++;

      if (this.index == iLen) {
        this.index = 0;
      }
    }

    this.play();
  }
};