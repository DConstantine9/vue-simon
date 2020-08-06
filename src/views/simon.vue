<template>
  <div id="outer-circle">
    <div id="topleft"></div>
    <div id="topright"></div>
    <div id="bottomleft"></div>
    <div id="bottomright"></div>
    <div id="inner-circle">
      <div id="title" class="font-effect-emboss">SIMON!</div>
      <div id="switches">
        <input type="checkbox" class="toggle" id="on">
        <button class="button" id="start">Start</button>
        <input v-bind:strict="strict" v-on:change="strictFn" type="checkbox" class="toggle" id="strict">
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
</template>

<script>
export default {
//name: Simon,
data() {
  return {
    order: [],
    playerOreder: [],
    flash: null,
    turn: null,
    good: null,
    compTurn: null,
    intervalId: null,
    strict: false,
    noise: false,
    on: false,
    win: null
  }
},
methods: {
  strictFn: () => {
    let strictBtn = document.getElementById("strict")
    if (strictBtn.checked) {
      this.strict = true
    } else {
      this.strict = false
    }
    console.log(this.strict)
  },


}


}
</script>

<style lang="scss" scoped>
.toggle {
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
}
</style>