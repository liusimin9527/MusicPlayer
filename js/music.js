var music = {
	musicDom: null,   //播放器对象
	songs: [],        //歌曲目录
	index: 0,         //歌曲下标

  /**
   * [init description]
   * @param  {[type]} parentNode [description]
   * @return {[type]}            [description]
   */
	init: function (parentNode) {
		this.musicDom = document.createElement('audio');
		parentNode.appendChild(this.musicDom);
	},

  /**
   * [add description]
   * @param {[type]} src [description]
   */
	add: function (src) {
		this.songs.push(src);
	},

  getSongName: function () {

  },

  /**
   * [stop description]
   * @return {[type]} [description]
   */
  stop: function () {
    this.musicDom.pause();
    
  },

  /**
   * [play description]
   * @return {[type]} [description]
   */
  play: function () {
    if (this.index) {

    }
  }
};