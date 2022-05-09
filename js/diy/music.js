const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
	autoplay: false, //自动播放
	listFolded: true, //列表默认折叠
	//lrcType: 3, //歌词传递方式
	mutex: true,
    audio: [
	{
		name: "枫（live）",
		artist: '王小草',
		url: 'https://dl.stream.qqmusic.qq.com/C400003tsQO04TSQz1.m4a?guid=448892888&vkey=D7163147D7BD8CF6F1DF588370196FD40879B1457093F90AE0A61947CFBBCB52751651D538B80570A4E046CB81328D356F169E0937681A0F&uin=1306910276&fromtag=120002.mp3',
		cover: 'https://y.qq.com/music/photo_new/T001R300x300M000004TlNhm1u4K2c.jpg?max_age=2592000',
	},
	{
        name: "浴室",
        artist: 'deca joins',
        url: 'http://music.163.com/song/media/outer/url?id=483378334.mp3',
        cover: 'https://p1.music.126.net/byjfkEIOWI_RmxSKEWTPyw==/18910500486297525.jpg?param=200y200',
		
    },
	{
		name: "唯一",
		artist: '告五人',
		url: 'http://www.ytmp3.cn/down/75603.mp3',
		cover: 'https://y.qq.com/music/photo_new/T002R300x300M000000P4Dod0GzRlM.jpg?max_age=2592000',
	},
	{
		name: "三十岁的女人",
		artist: '赵雷',
		url: 'http://music.163.com/song/media/outer/url?id=29567191.mp3',
		cover: 'https://p2.music.126.net/PJNV84mjt_mDXEkxtjzB4w==/18957779486268444.jpg?param=130y130',
	},
	{
		name: "喜帖街",
		artist: '谢安琪',
		url: 'http://music.163.com/song/media/outer/url?id=308299.mp3',
		cover: 'https://p1.music.126.net/dLkalW4CyC6hAZQS6xXFeA==/109951163649564629.jpg?param=130y130',
	}

	// url: 'http://music.163.com/song/media/outer/url?id=308299.mp3',
	// https://music.163.com/#/song?id=308299
	]
});