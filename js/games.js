// use maximum image dimensions of 1280 x 720
var games =
[
 {
  name: "34C3 Alpaka",
  year: "2017",
  href: "https://konradhoeffner.github.io/34c3-alpaka/",
  source: "https://github.com/KonradHoeffner/34c3-alpaka",
  img: "img/alpaka.jpg",
  description: `Both players must cooperate to send all Alpakas into the spaceship above.<br>
<embed type="video/mp4" src="https://video.twimg.com/tweet_video/DSKM27-W4AASOy0.mp4"/>
<br>
Controls:<br>
Player 1: A and D<br>
Player 2: Left Arrow and Right Arrow<br>
<br>
Two player JavaScript game developed at the 34th Chaos Communication Congress in Leipzig by Simon Trümpler, Noah Rullmann and me.
`
},
 {
  name: "Cats",
  year: "1998 ?",
  href: "cats.html",
  source: "https://github.com/KonradHoeffner/bp/blob/master/katze/katze.pas",
  img: "img/katze.png",
  description: 
`Controls:<br>
Select Weapon: 1 and 2<br>
Spawn Cat: Enter<br>
Shoot: Primary Mouse Button<br>
Increase Emulated CPU Speed: CTRL+F12<br>
<br>
Experimentation with "Damage Maps" in Borland Pascal on DOS with Simon Trümpler.<br>
No animals were harmed in the making of this game.<br>
This is how the cats are created:
<pre><code>
katze : array[1..3] of array[1..10,1..10] of byte =
((
(0 ,0 ,0 ,0 ,0 ,0 ,0 ,6 ,0 ,0 ),
(0 ,6 ,0 ,0 ,0 ,0 ,6 ,6 ,0 ,0 ),
(0 ,6 ,0 ,0 ,0 ,0 ,6 ,6 ,6 ,0 ),
(6 ,0 ,0 ,6 ,6 ,6 ,6 ,1 ,6 ,6 ),
(6 ,6 ,6 ,6 ,6 ,6 ,6 ,6 ,6 ,6 ),
(6 ,6 ,6 ,6 ,6 ,6 ,6 ,6 ,6 ,0 ),
(6 ,6 ,6 ,6 ,6 ,6 ,6 ,0 ,0 ,0 ),
(6 ,6 ,0 ,0 ,0 ,6 ,6 ,0 ,0 ,0 ),
(0 ,6 ,0 ,0 ,0 ,0 ,6 ,0 ,0 ,0 ),
(0 ,6 ,6 ,0 ,0 ,0 ,6 ,6 ,0 ,0 )
),...
</code></pre>`
},

];
