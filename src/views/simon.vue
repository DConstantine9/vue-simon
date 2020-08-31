<template>
<div>
<audio id="sound1">
  <source src="../assets/1.mp3">
</audio>
<audio id="sound2">
  <source src="../assets/2.mp3">
</audio>
<audio id="sound3">
  <source src="../assets/3.mp3">
</audio>
<audio id="sound4">
  <source src="../assets/4.mp3">
</audio>

  

<div class="wrapper">
		<h1>Simon Says</h1>
			<div class="game-board">
				<div class="simon">
					<ul>
						<li v-on:click="topleftFn" id="topleft" class="tile red" data-tile="1"></li>
						<li v-on:click="toprightFn" id="topright" class="tile blue" data-tile="2"></li>
						<li v-on:click="bottomleftFn" id="bottomleft" class="tile yellow" data-tile="3"></li>
						<li v-on:click="bottomrightFn" id="bottomright" class="tile green" data-tile="4"></li>
					</ul>
				</div>
			</div>
			<div class="game-info">
				<h2>Round: <span id="turn">0</span></h2>
				<button v-on:click="startFn">Start</button>
				<p data-action="lose">Sorry, you lost after <span data-round="0"></span> rounds!</p>
			</div>
      <label for="strict">Strict mode</label>
			<input v-on:change="strictFn" type="checkbox" name="strict" id="strict">
        <br>
			<label for="name">level </label>
      <select v-model="level" name="level" id="level">
        <option>Easy</option>
        <option>Medium</option>
        <option>Hard</option>
      </select>	
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
    on: true,
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
    if (this.on || this.win) {
      this.play()
    }

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
</style>