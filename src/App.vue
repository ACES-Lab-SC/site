
<template>
  <div class="wrapper">
    <h1>面向不确定演化的服务生态系统工具平台</h1>
    <div class="container">
      <img src="./img/bg3.png" alt="" class="bg" />
      <div class="dev">
        <el-button
          slot="reference"
          class="botton botton_verify"
          @click="go('https://422.gcli.eu.org/')"
          >verify</el-button
        >
        <el-button
          slot="reference"
          class="botton botton_package"
          @click="go('https://422.gcli.eu.org/')"
          >package</el-button
        >
        <el-button
          slot="reference"
          class="botton botton_configure"
          @click="go('https://422.gcli.eu.org/')"
          >configure</el-button
        >
        <el-button
          slot="reference"
          class="botton botton_plan"
          @click="go('https://422.gcli.eu.org/')"
          >plan</el-button
        >
        <el-button
          slot="reference"
          class="botton botton_monitor"
          @click="go('https://422.gcli.eu.org/')"
          >monitor</el-button
        >
        <el-button
          slot="reference"
          class="botton botton_release"
          @click="go('https://422.gcli.eu.org/')"
          >release</el-button
        >
        <el-button
          slot="reference"
          class="botton botton_create"
          @click="go('https://422.gcli.eu.org/')"
          >create</el-button
        >
      </div>

      <el-popover
        placement="top-start"
        width="300"
        trigger="hover"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
      >
        <img
          class="click"
          src="./img/verify.png"
          alt=""
          srcset=""
          width="300px"
          @click="go('https://422.gcli.eu.org/archives/1705648308628')"
        />

        <el-button slot="reference" class="botton botton_verify"
          >verify</el-button
        >
      </el-popover>
      <el-popover
        placement="top-start"
        width="300"
        trigger="hover"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
      >
        <img
          class="click"
          src="./img/package.png"
          alt=""
          srcset=""
          width="300px"
          @click="go('https://422.gcli.eu.org/archives/1705583054965')"
        />
        <el-button slot="reference" class="botton botton_package"
          >botton_package</el-button
        >
      </el-popover>
      <el-popover placement="top-start" width="300" trigger="hover">
        <img
          class="click"
          src="./img/configure.png"
          alt=""
          srcset=""
          width="300px"
          @click="go('https://422.gcli.eu.org/archives/1705582539715')"
        />
        <el-button slot="reference" class="botton botton_configure"
          >hover 激活</el-button
        >
      </el-popover>

      <!-- <div class="pro">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
        <div class="card card_oppo">
          <img
            src="./img/verify.png"
            width="330px"
            @click="go('https://422.gcli.eu.org/archives/1705648308628')"
          />
        </div>
        <div class="card card_huawei">
          <img
            src="./img/package.png"
            width="280px"
            @click="go('https://422.gcli.eu.org/archives/1705583054965')"
          />
        </div>
        <div class="card card_hs">
          <img
            src="./img/configure.png"
            width="300px"
            @click="go('https://422.gcli.eu.org/archives/1705582539715')"
          />
        </div>
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    go(path) {
      window.open(path);
    },
  },
  data() {
    return {};
  },
};
</script>


</script>
<style scoped>
.click {
  cursor: pointer;
}
.line1 {
  border-bottom: 3px solid #ccc;
  border-left: 3px solid #ccc;
  /* border-radius: 3px; */
  width: 188px;
  height: 200px;
  position: absolute;
  top: 250px;
  left: -50px;
}
.line2 {
  border-bottom: 3px solid #ccc;
  border-left: 3px solid #ccc;
  /* border-radius: 3px; */
  width: 50px;
  height: 200px;
  position: absolute;
  top: 455px;
  left: 350px;
}

.line3 {
  border-top: 3px solid #ccc;
  border-left: 3px solid #ccc;
  /* border-radius: 3px; */
  width: 220px;
  height: 85px;
  position: absolute;
  top: 200px;
  left: 655px;
}
</style>
<style scoped>
.wrapper {
  min-width: 1100px;
  background-color: #fafafa;
  background: url(http://www.watchman-pypi.com/img/background.png);
  overflow: hidden;
  height: 100vh;
}
h1 {
  text-align: center;
  z-index: 100;
  position: relative;
  color: #fff;
}
img {
  display: block;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 5px;
}
.card {
  cursor: pointer;
  position: absolute;
  width: 200px;
  height: 150px;
  border-radius: 5px;
  border: 3px solid #ccc;
  color: #606266;
  font-size: 16px;
  line-height: 1;
  margin-bottom: 12px;
  /* padding: 10px; */
  box-sizing: border-box;
}
.tittle {
  font-size: 20px;
  text-align: center;
}
.card .papper {
  color: #303133;
  font-size: 14px;
  position: absolute;
  bottom: 10px;
}
.card_oppo {
  top: 150px;
  left: -150px;
  width: 250px;
  height: 140px;
  overflow: hidden;
}
.card_huawei {
  top: 580px;
  left: 380px;
  width: 290px;
  height: 130px;
  overflow: hidden;
}
.card_hs {
  top: 130px;
  left: 770px;
  height: 150px;
  width: 250px;
  overflow: hidden;
}
.card_ali {
  top: 530px;
  left: 430px;
  width: 250px;
  height: 150px;
}
.card_sys {
  top: 400px;
  left: 770px;
  height: 150px;
  width: 250px;
}
</style>
<style scoped>
img.bg {
  width: 900px;
  margin-left: -70px;
  /* display: block; */
  /* position: absolute; */
}

.container {
  width: 800px;
  height: 700px;
  margin: -100px auto;
  /* background-color: #fafafa; */
  position: relative;
}
.botton {
  cursor: pointer;
  position: absolute;
  width: 100px;
  height: 30px;
  background-color: #ccc;
  z-index: 100;
  opacity: 0;
}

.botton_verify {
  left: 130px;
  top: 430px;
  width: 70px;
  transform: rotate(45deg);
}
.botton_package {
  left: 280px;
  top: 420px;
  width: 120px;
  transform: rotate(-40deg);
}
.botton_release {
  left: 430px;
  top: 290px;
  transform: rotate(-34deg);
}
.botton_monitor {
  left: 570px;
  top: 440px;
  transform: rotate(-34deg);
}
.botton_configure {
  left: 590px;
  top: 300px;
  transform: rotate(60deg);
}
.botton_plan {
  left: 250px;
  top: 280px;
  transform: rotate(30deg);
}
.botton_create {
  left: 100px;
  top: 300px;
  transform: rotate(-50deg);
}
body {
  padding: 0;
  margin: 0;
}
</style>
