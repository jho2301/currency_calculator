<template>
  <div id="app">
    <v-header class="header col-12"></v-header>
    <div class="section">
      <v-input class="input col-9"></v-input>
      <v-result class="result col-3"></v-result>
    </div>
    <div class="highlight"></div>
    <div class="update-text">환율 업데이트 : {{updatedDate}}</div>
  </div>
</template>

<script>
import vHeader from "./components/cal-header.vue";
import vInput from "./components/cal-input.vue";
import vResult from "./components/cal-result.vue";

export default {
  components: {
    vHeader,
    vInput,
    vResult
  },
  data() {
    return {
      updatedDate: ""
    };
  },
  methods: {
    getJSON: function() {
      this.axios
        .get("https://www.floatrates.com/daily/usd.json")
        .then(res => {
          this.$store.commit("setCurrencyRate", res.data["krw"].rate); //환율
          let date = res.data["krw"].date; //날짜

          let tempArr = date.split(" ");
          date = ` ${tempArr[1]}  ${tempArr[2]}, ${tempArr[3]}`;
          this.updatedDate = date;
        })
        .catch(err => {
          throw err;
        });
    }
  },

  created() {
    this.getJSON();
  }
};
</script>

<style lnag="scss">
@import url("https://fonts.googleapis.com/css?family=Black+Han+Sans|Noto+Sans+KR:300,400,700&display=swap");

* {
  font-family: "Noto Sans KR";
}

html body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: rgb(244, 246, 252);
}

#app {
  color: #2c3e50;
  min-width: 640px;
  height: 440px;
  position: relative;
}

.highlight {
  box-shadow: inset 0 2px 2px rgba(255, 238, 238, 0.315);
  width: 100%;
  height: 50px;
  z-index: 100;
  position: absolute;
  top: 44px;
  border-radius: 20px;
}

.section {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  width: 100%;
  height: 90%;
  border: 5px solid rgb(67, 92, 109);
  background: rgb(67, 92, 109);
  border-radius: 20px;
  box-shadow: 0 8px 10px rgba(75, 72, 117, 0.37);
}

.header {
  height: 10%;
}

.input {
  border-radius: 15px 0 0 15px;
  height: 100%;
}

.result {
  align-self: center;
  border-radius: 20px;
  height: 99.8%;
}

.update-text {
  position: fixed;
  bottom: 10px;
  right: 10px;
}
</style>
