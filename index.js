var music=document.getElementById("music");
var playBtn=document.getElementById("playBtn");  
var preBtn=document.getElementById("preBtn");
var nextBtn=document.getElementById("nextBtn");
var sName=document.getElementById("sName");
var singer=document.getElementById("singer");
var musicpic=document.getElementById("musicpic");
var musicImg=document.getElementById("musicImg");
var jdtLeft=document.getElementById("jdtLeft");
var jdtRight=document.getElementById("jdtRight");
var gequjd=document.getElementById("gequjd");
var gequJDBar=document.getElementById("gequJDBar");
var volJd=document.getElementById("volJd");
var volColor=document.getElementById("volColor");
var volBlok=document.getElementById("volBlok");
var musicone=document.getElementById('music1');
var musictwo=document.getElementById('music2');
var musicthree=document.getElementById('music3');
var musicfour=document.getElementById('music4');
// 歌曲列表
var songs=[{
    mp3:"music/Last Dance-伍佰&China_Blue.mp3",
    singer:"伍佰&China_Blue",
    name:"Last Dance",
    img:"source/Last Dance.jpg",
},{
    mp3:"music/光辉岁月 - Beyond.mp3",
    singer:"beyond",
    name:"光辉岁月",
    img:"source/beyond.jpg",
},{
    mp3:"music/四季不败 - 郝云.mp3",
    singer:"郝云",
    name:"四季不败",
    img:"source/四季不败.jpg",
},{
    mp3:"music/处处吻(男生版)-罗隽永.mp3",
    singer:"罗隽永",
    name:"处处吻(男生版)",
    img:"source/处处吻-罗隽永.jpg",
}];
//切歌函数
var changeMusic=function (index) {
    music.src=songs[index].mp3;
    musicpic.src=songs[index].img;
    sName.innerHTML=songs[index].name;
    singer.innerHTML=songs[index].singer;
    gequjd.style.width=0;//切歌时进度归0
};
var index=0;//当前播放歌曲索引
changeMusic(index);
playBtn.addEventListener("click",function (event) {
    if(music.paused){
        playBtn.src= 'source/pause.png';
        music.play();
        playBtn.title='暂停';
    }else {
        playBtn.src ='source/play.png';
        music.pause();
        playBtn.title='播放';
    }
});
preBtn.addEventListener("click",function (event) {
    index--;
    if(index<=-1){
        index=songs.length-1;
    }
    playBtn.src= 'source/pause.png';
    changeMusic(index);
});
nextBtn.addEventListener("click",function (event) {
    index++;
    if(index>songs.length-1){
        index=0;
    }
    playBtn.src= 'source/pause.png';
    changeMusic(index);
});
function setTime(x, times) {
    if (times < 10) {
        x.innerHTML = "0:0" + Math.floor(times);
    } else if (times < 60) {
        x.innerHTML = "0:" + Math.floor(times);
    } else {
        var minute = parseInt(times / 60);
        var second = times - minute * 60;
        if (second < 10) {x.innerHTML = "0" + minute + ":" + "0" + parseInt(second);}
        else {x.innerHTML = "0" + minute + ":" + parseInt(second);}
    }
};
music.addEventListener("canplay",function (event) {music.play();});
music.addEventListener("ended",function(){nextBtn.click();});
music.addEventListener("loadedmetadata",function (event) {
    var times = music.duration;
    setTime(jdtRight, times);
});
music.addEventListener("timeupdate",function (event) {
    var jd=music.currentTime/music.duration;//0-1的小数
    var bfb=jd*100+"%";
    gequjd.style.width=bfb;
    var times = music.currentTime;
    setTime(jdtLeft, times);
});
gequJDBar.addEventListener("click",function (event) {
    var x=event.offsetX;
    var bfb=x/610*100;
    gequjd.style.width=bfb+"%";
    music.currentTime=music.duration*+bfb/100;
});
var setVol=function(event){
    var x=event.offsetX;
    var bfb=x/100*100;
    volColor.style.width=bfb+"%";
    volBlok.style.left=bfb+"%";
    music.volume=bfb/100;
};
volJd.addEventListener("click",function (event) {
    setVol(event);
});
volJd.addEventListener("mousedown",function (event) {
    volJd.addEventListener("mousemove",setVol);
});
volJd.addEventListener("mouseup",function (event) {
    volJd.removeEventListener("mousemove",setVol);
});
musicone.addEventListener('click',function(){
	music.src = 'music/Last Dance-伍佰&China_Blue.mp3';
	music.play();
	sName.innerHTML='Last Dance';
	singer.innerHTML='伍佰&China_Blue';
	playBtn.src = 'source/pause.png';
	musicpic.src='source/Last Dance.jpg';
});
musictwo.addEventListener('click',function(){
	music.src = 'music/光辉岁月 - Beyond.mp3';
	music.play();
	sName.innerHTML='光辉岁月';
	singer.innerHTML='Beyond';
	playBtn.src = 'source/pause.png';
	musicpic.src='source/beyond.jpg';
});
musicthree.addEventListener('click',function(){
	music.src = 'music/四季不败 - 郝云.mp3';
	music.play();
	sName.innerHTML='四季不败';
	singer.innerHTML='郝云';
	playBtn.src = 'source/pause.png';
	musicpic.src='source/四季不败.jpg';
});
musicfour.addEventListener('click',function(){
	music.src = 'music/处处吻(男生版)-罗隽永.mp3';
	music.play();
	sName.innerHTML='处处吻(男生版)';
	singer.innerHTML='罗隽永';
	playBtn.src = 'source/pause.png';
	musicpic.src='source/处处吻-罗隽永.jpg';
});