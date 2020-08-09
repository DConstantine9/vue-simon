<template>
<div>
<audio id="sound1">
  <source src="../assets/one.mp3">
</audio>
<audio id="sound2">
  <source src="../assets/two.mp3">
</audio>
<audio id="sound3">
  <source src="../assets/three.mp3">
</audio>
<audio id="sound4">
  <source src="../assets/four.mp3">
</audio>

  <label for="name">level </label>
  <select v-model="level" name="level" id="level">
    <option>Easy</option>
    <option>Medium</option>
    <option>Hard</option>
  </select>

  <div class="game-board">
    <div class="simon">
      <ul>
        <li v-on:click="toprightFn" id="topright" class="tile red" data-tile="1"></li>
        <li v-on:click="topleftFn" id="topleft" class="tile blue" data-tile="2"></li>
        <li v-on:click="bottomleftFn" id="bottomleft" class="tile yellow" data-tile="3"></li>
        <li v-on:click="bottomrightFn" class="tile green" data-tile="4"></li>
      </ul>
    </div>
  </div>
  <div class="game-info">
    <h2>Round: <div id="turn"></div></h2>
    <button v-on:click="startFn" id="start" data-action="start" >Start</button>
  </div>

  <div id="outer-circle">
    <div v-on:click="topleftFn" id="topleft"></div>
    <div v-on:click="toprightFn" id="topright"></div>
    <div v-on:click="bottomleftFn" id="bottomleft"></div>
    <div v-on:click="bottomrightFn" id="bottomright"></div>
    <div id="inner-circle">
      <!-- <div id="title" class="font-effect-emboss">SIMON!</div> -->
      <div id="switches">
        <input v-on:change="onFn" type="checkbox" class="toggle" id="on">
        <button v-on:click="startFn" class="button" id="start">Start</button>
        <input v-on:change="strictFn" type="checkbox" class="toggle" id="strict">
      </div>
      <div class="text1">
        <span>POWER</span><span>STRICT</span>
      </div>
      <div id="turn"></div>
      <div class="text2">
        COUNT
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
name: "Simon",
data: function() {
  return {
    order: [],
    playerOrder: [],
    flash: null,
    turn: null,
    good: null,
    compTurn: null,
    intervalId: null,
    strict: false,
    noise: false,
    on: false,
    win: null,
    level: "Easy",
    levelInterval: 1500,
  }
},

methods: {
  strictFn: function() {
    let strictBtn = document.getElementById("strict")
    if (strictBtn.checked) {
      this.strict = true
    } else {
      this.strict = false
    }
  },

  onFn: function() {
    let turnCounter = document.getElementById("turn")
    let onBtn = document.getElementById("on")
    if (onBtn.checked) {
      this.on = true;
      turnCounter.innerHTML = "-";
    } else {
      this.on = false;
      turnCounter.innerHTML = "";
      this.clearColor();
      clearInterval(this.intervalId)
    }
  },

  startFn: function() {
    /* if (this.on || this.win) { */
      this.play()
    /* } */

    if (this.level == "Easy") {
      this.levelInterval = 1500;
    } else if (this.level == "Medium") {
      this.levelInterval = 1000;
    } else {
      this.levelInterval = 400
    }
    console.log(this.level, this.levelInterval / 1000)
  },

  play: function() {
    let turnCounter = document.getElementById("turn")
    this.win = false;
    this.order = [];
    this.playerOrder = [];
    this.flash = 0;
    this.intervalId = 0;
    this.turn = 1;
    turnCounter.innerHTML = 1;
    this.good = true;
    for (let i = 0; i < 20; i++) {
      this.order.push(Math.floor(Math.random() * 4) + 1)
    }
    this.compTurn = true;
    this.intervalId = setInterval(this.gameTurn, 800)
  },

  gameTurn: function() {
    this.on = false;

    if (this.flash === this.turn) {
      clearInterval(this.intervalId);
      this.compTurn = false;
      this.clearColor();
      this.on = true;
    }

    if (this.compTurn) {
      this.clearColor();
      setTimeout(() => {
        if (this.order[this.flash] == 1) this.one();
        if (this.order[this.flash] == 2) this.two();
        if (this.order[this.flash] == 3) this.three();
        if (this.order[this.flash] == 4) this.four();
        this.flash++;
      }, 200)
    }
  },

  one: function() {
    if (this.noise) {
      let audio = document.getElementById("sound1");
      audio.play()
    }

    this.noise = true;
    let topleft = document.getElementById("topleft");
    topleft.style.backgroundColor = "lightgreen"
  },

  two: function() {
    if (this.noise) {
      let audio = document.getElementById("sound2");
      audio.play()
    }

    this.noise = true;
    let topright = document.getElementById("topright");
    topright.style.backgroundColor = "tomato"
  },

  three: function() {
    if (this.noise) {
      let audio = document.getElementById("sound3");
      audio.play()
    }

    this.noise = true;
    let bottomleft = document.getElementById("bottomleft");
    bottomleft.style.backgroundColor = "yellow"
  },

  four: function() {
    if (this.noise) {
      let audio = document.getElementById("sound4");
      audio.play()
    }

    this.noise = true;
    let bottomright = document.getElementById("bottomright");
    bottomright.style.backgroundColor = "lightskyblue"
  },

  clearColor: function() {
    topleft.style.backgroundColor = "darkgreen";
    topright.style.backgroundColor = "darkred";
    bottomleft.style.backgroundColor = "goldenrod";
    bottomright.style.backgroundColor = "darkblue";
  },

  flashColor: function() {
    topleft.style.backgroundColor = "lightgreen";
    topright.style.backgroundColor = "tomato";
    bottomleft.style.backgroundColor = "yellow";
    bottomright.style.backgroundColor = "lightskyblue";
  },

  topleftFn: function() {
    if (this.on) {
      this.playerOrder.push(1);
      this.check();
      this.one();
      if (!this.win) {
        setTimeout(() => {
          this.clearColor();
        }, 300)
      }
    }
  },

  toprightFn: function() {
    if (this.on) {
      this.playerOrder.push(2);
      this.check();
      this.two();
      if (!this.win) {
        setTimeout(() => {
          this.clearColor();
        }, 300)
      }
    }
  },

  bottomleftFn: function() {
    if (this.on) {
      this.playerOrder.push(3);
      this.check();
      this.three();
      if (!this.win) {
        setTimeout(() => {
          this.clearColor();
        }, 300)
      }
    }
  },

  bottomrightFn: function() {
    if (this.on) {
      this.playerOrder.push(4);
      this.check();
      this.four();
      if (!this.win) {
        setTimeout(() => {
          this.clearColor();
        }, 300)
      }
    }
  },

  check: function() {
    let turnCounter = document.getElementById("turn")
    if (this.playerOrder[this.playerOrder.length - 1] !== this.order[this.playerOrder.length - 1]) {
      this.good = false
    }

    if (this.playerOrder.length == 20 && this.good) {
      this.winGame();
    }

    if (this.good == false) {
      this.flashColor();
      turnCounter.innerHTML = "No"
      setTimeout(() => {
        turnCounter.innerHTML = this.turn;
        this.clearColor;

        if (this.strict) {
          this.play()
        } else {
          this.compTurn = true;
          this.flash = 0;
          this.playerOrder = [];
          this.good = true;
          this.intervalId = setInterval(this.gameTurn, 800)
        }
      }, 800)

      this.noise = false;
    }

    if (this.turn == this.playerOrder.length && this.good && !this.win) {
      this.turn = this.turn + 1;
      this.playerOrder = [];
      this.compTurn = true;
      this.flash = 0;
      turnCounter.innerHTML = this.turn;
      this.intervalId = setInterval(this.gameTurn, this.levelInterval); //тут
    }
  },

  winGame: function() {
    let turnCounter = document.getElementById("turn");
    this.flashColor();
    turnCounter.innerHTML = "Win";
    this.on = false;
    this.win = true;
  }
}


}
</script>

<style lang="scss" scoped>
body {
	font-family: Arial, serif;
	color: #333;
	-webkit-user-select: none; /* Chrome/Safari */        
	-moz-user-select: none; /* Firefox */
	-ms-user-select: none; /* IE10+ */
	-o-user-select: none;
	user-select: none;
}

h1 {
	margin: 1em 0 2em;
	text-align: center;
}

ul {
	list-style: none;
}

ul, li {
	padding: 0;
	margin: 0;
}

p[data-action="lose"] {
	display: none;
}

.active {
	opacity: 1 !important;
}

.clearfix {
	width: 100%;
	clear: both;
}

.wrapper {
	width: 540px;
	margin: 0 auto;
}
.container {
	width: 305px;
}

.simon {
	background: #fff;
	position: relative;
	float: left;
	margin-right: 3em;	
	width: 302px;
	height: 295px;
	-webkit-border-radius: 150px 150px 150px 150px;
	border-radius: 150px 150px 150px 150px;
    -moz-box-shadow: 2px 1px 12px #aaa;
    -webkit-box-shadow: 2px 1px 12px #aaa;
    -o-box-shadow: 2px 1px 12px #aaa;
    box-shadow: 2px 1px 12px #aaa;
}

.tile {
	opacity: 0.6;
	-webkit-transition: opacity 250ms ease;
	-moz-transition: opacity 250ms ease;
	-ms-transition: opacity 250ms ease;
	-o-transition: opacity 250ms ease;
	transition: opacity 250ms ease;
}

.tile.lit {
	opacity: 1;
}

.red, .blue, .yellow, .green {
	height: 290px;
	-webkit-border-radius: 150px 150px 150px 150px;
	border-radius: 150px 150px 150px 150px;
	position: absolute;
	text-indent: 10000px;
}

.red:hover, .blue:hover, .yellow:hover, .green:hover {
	border: 2px solid black
}

.red {
	background: #FF5643;
	clip: rect(0px, 300px, 150px, 150px);
	width: 296px;
}

.blue {
	background: dodgerblue;
	clip: rect(0px, 150px, 150px, 0px);
	width: 300px;
}

.yellow {
	background: #FEEF33;
	clip: rect(150px, 150px, 300px, 0px);
	width: 300px;
}

.green {
	background: #BEDE15;
	clip: rect(150px,300px, 300px, 150px);
	width: 296px;
}

.game-info {
	margin-top: 90px;
}

.game-info button {
	width: 5em;
	box-sizing: border-box;
	font-size: 1.4em;
	-webkit-border-radius: 10px 10px 10px 10px;
	border-radius: 10px 10px 10px 10px;
	background: #6DABE8;
	border: none;
	padding: 0.3em 0.6em;
}

.game-info button:hover {
	background: #78BCFF;
}

.game-options h2 {
	margin-top: 30px;
	margin-bottom: 0;
}

.game-options input[type="radio"] {
	margin-right: 10px;
}

.hoverable:hover {
	cursor: pointer;
}

footer {
	position: absolute;
	bottom: 20px;
	width: 540px;
	clear: both;
	text-align: center;
}

/* .toggle {
  margin-left: 20px;
  margin-right: 20px;
}

.button {
  border-radius: 50% !important;
  font-size: 1.5em;
  background-color: lightgray;
}

#switches {
  position: absolute;
  font-family: 'Original Surfer', cursive;
  margin-left: 26px;
  margin-top: 110px;
}

.text2 {
  position: absolute;
  font-family: 'Original Surfer', cursive;
  margin-left: 83px;
  margin-top: 197px;
}

.text1 {
  position: absolute;
  font-family: 'Original Surfer', cursive;
  margin-left: 19px;
  margin-top: 142px;
}

.text1 span:last-child {
  padding-left: 70px;
}

#title {
  font-family: 'Original Surfer', cursive;
  position: absolute;
  font-size: 40px;
  margin-left: 35px;
  margin-top: 40px;
}

#turn {
  position: absolute;
  background: #330000;
  color: red;
  font-family: courier;
  font-size: 20px;
  height: 30px;
  width: 50px;
  margin-left: 90px;
  margin-top: 170px;
  text-align: center;
  vertical-align: middle;
  line-height: 30px;
}

#outer-circle {
  background: #385a94;
  border-radius: 50%;
  height: 500px;
  width: 500px;
  position: relative;
  border-style: solid;
  border-width: 10px;
  margin: auto;
  margin-top: 60px;
  box-shadow: 8px 8px 15px 5px #888888;
}

#topleft {
  position: absolute;
  height: 250px;
  width: 250px;
  border-radius: 250px 0 0 0;
  -moz-border-radius: 250px 0 0 0;
  -webkit-border-radius: 250px 0 0 0;
  background: darkgreen;
  top: 50%;
  left: 50%;
  margin: -250px 0px 0px -250px;
  border-style: solid;
  border-width: 5px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

#topright {
  position: absolute;
  height: 250px;
  width: 250px;
  border-radius: 0 250px 0 0;
  -moz-border-radius: 0 250px 0 0;
  -webkit-border-radius: 0 250px 0 0;
  background: darkred;
  top: 50%;
  left: 50%;
  margin: -250px 0px 0px 0px;
  border-style: solid;
  border-width: 5px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

#bottomleft {
  position: absolute;
  height: 250px;
  width: 250px;
  border-radius: 0 0 0 250px;
  -moz-border-radius: 0 0 0 250px;
  -webkit-border-radius: 0 0 0 250px;
  background: goldenrod;
  top: 50%;
  left: 50%;
  margin: 0px -250px 0px -250px;
  border-style: solid;
  border-width: 5px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

#bottomright {
  position: absolute;
  height: 250px;
  width: 250px;
  border-radius: 0 0 250px 0;
  -moz-border-radius: 0 0 250px 0;
  -webkit-border-radius: 0 0 250px 0;
  background: darkblue;
  top: 50%;
  left: 50%;
  margin: 0px 0px -250px 0px;
  border-style: solid;
  border-width: 5px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

#inner-circle {
  position: absolute;
  background: grey;
  border-radius: 50%;
  height: 250px;
  width: 250px;
  border-style: solid;
  border-width: 10px;
  top: 50%;
  left: 50%;
  margin: -125px 0px 0px -125px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
} */
</style>