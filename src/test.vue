
<template>
  <div class="wrapper">
    <h1>面向不确定演化的服务生态系统工具平台</h1>
    <div class="container">
      <img src="./img/circle.png" alt="" class="bg" />
      <div class="dev">
        <div class="botton botton_verify">
          <el-button
            slot="reference"
            class=""
            @click="go('https://gcli.notion.site/quality-check-1')"
            >质量</el-button
          >
        </div>
        <div class="botton botton1">
          <el-button
            slot="reference"
            class=""
            @click="go('https://gcli.notion.site/ability-express-1')"
            >能力表达</el-button
          >
        </div>
        <div class="botton botton2">
          <el-button
            slot="reference"
            class=""
            @click="go('https://gcli.notion.site/service-map?pvs=4')"
            >服务映射</el-button
          >
        </div>
        <div class="botton botton_package">
          <el-button
            slot="reference"
            class=""
            @click="go('https://gcli.notion.site/vul-1')"
            >缺陷</el-button
          >
        </div>
        <div class="botton botton_configure">
          <el-button
            slot="reference"
            class=""
            @click="go('https://gcli.notion.site/adaptive-resource-allocation-1')"
            >资源分配</el-button
          >
        </div>
        <div class="botton botton_plan">
          <el-button
            slot="reference"
            class=""
            @click="go('https://gcli.notion.site/business-model-1')"
            >建模</el-button
          >
        </div>
        <div class="botton botton_monitor">
          <el-button
            slot="reference"
            class=""
            @click="go('https://gcli.notion.site/deploy-1?pvs=4')"
            >动态组合</el-button
          >
        </div>
        <div class="botton botton_release">
          <el-button
            slot="reference"
            class=""
            @click="go('https://gcli.notion.site/flex-schedule-1?pvs=4')"
            >灵活调度</el-button
          >
        </div>
        <div class="botton botton_create">
          <el-button
            slot="reference"
            class=""
            @click="go('https://gcli.notion.site/sustainability-1')"
            >可持续</el-button
          >
        </div>
      </div>
      <div class="pro">
        <box :msg = msg.box1 class="box box1"></box>
        <box :msg = msg.box2 class="box box2"></box>
        <box :msg = msg.box3 class="box box3"></box>
        <box :msg = msg.box4 class="box box4"></box>
        <box :msg = msg.box5 class="box box5"></box>
        <box :msg = msg.box6 class="box box6"></box>
        <box :msg = msg.box7 class="box box7"></box>
        <box :msg = msg.box8 class="box box8"></box>
        <box :msg = msg.box9 class="box box9"></box>
      </div>
      <div class="lines">
        <div class="line line1"></div>
        <div class="line line2"></div>
        <div class="line line3"></div>
        <div class="line line4"></div>
        <div class="line line5"></div>
        <div class="line line6"></div>
        <div class="line line7"></div>
        <div class="line line8"></div>
        <div class="line line9"></div>
        <div class="line line10"></div>
      </div>
    </div>
  </div>
</template>
<script>
import box from './components/box'


export default {
  components: { box },
  methods: {
    go(path) {
      window.open(path);
    },
  },
  data() {
    return {
      msg:{
        box1:{
          title:'面向电子商务领域的业务建模方法',
          text:'提出电商业务模型，包含元模型和基模型，通过定义电商领域知识描述规范，以机器可理解的方式刻画概念和流程，指导特征实体在流程生命周期中的演化变迁。'
          ,link:'https://gcli.notion.site/business-model-1'
        },box2:{
          title:'基于本体的多智能体服务模式仿真方法',
          text:'提出了一种基于本体和多智能体的服务模式仿真方法，通过BPMN和本体语言描述业务流程和数据实体，支持对利益相关者价值需求的定量分析，适用于复杂且不确定的企业合作环境。'
          ,link:'https://gcli.notion.site/ability-express-1'
        },box3:{
          title:'基于图挖掘的跨界服务模式映射与融合方法',
          text:'提出基于规则的服务模式融合框架，通过异构信息网络实现参与者、资源和过程融合，并引入服务模式图谱，提升跨界服务模式的灵活性和融合效率。'
          ,link:'https://gcli.notion.site/service-map?pvs=4'
        },box4:{
          title:'Java 软件库API迁移工具',
          text:'通过静态分析提取软件库API信息，检测客户端代码中的API调用点，并支持多种模式的API迁移，旨在帮助开发者更高效地管理和迁移第三方库的API调用。'
          ,link:'https://gcli.notion.site/deploy-1?pvs=4'
        },box5:{
          title:'边缘计算环境下的 AI 模型容器分发平台',
          text:' 边缘计算环境下的 AI 模型容器分发平台 / 支持智能流量调度的全分布式边缘计算环境容器镜像分发平台'
          ,link:'https://gcli.notion.site/adaptive-resource-allocation-1'
        },box6:{
          title:'基于跨项目回归测试的第三方库演化不兼容性检测工具',
          text:'提出了一种优化跨项目回归测试的方法，通过并行化测试用例选择、基于信息检索的测试用例优先级排序和依赖冲突分析，显著提高了检测第三方库行为向后不兼容性问题的效率和准确性。'
          ,link:'https://gcli.notion.site/flex-schedule-1?pvs=4'
        },box7:{
          title:'基于遗传改良与测试用例选择的程序缺陷自动修复原型工具',
          text:'Repair4J 是一个面向Java程序缺陷修复的原型工具，允许开发人员应用不同的实验设置（开关变异操作）和定制化操作（自定义变异算子）。'
          ,link:'https://gcli.notion.site/vul-1'
        },box8:{
          title:'RBC智能平台测试用例增强工具',
          text:'利用RBC智能测新平台自动生成测试用例并提供覆盖率提升建议，显著提高测试效率和发布质量，重点关注变更和重要代码的覆盖率。'
          ,link:'https://gcli.notion.site/quality-check-1'
        },box9:{
          title:'大型软件系统的质量可持续性分析度量',
          text:'利用前沿技术构建代码质量评价体系和工具，帮助大型公司定量评估代码健康，减少线上故障，提供管理决策依据。'
          ,link:'https://gcli.notion.site/sustainability-1'
        }
      }
    };
  },
};
</script>


<style>
body{
  padding: 0;
  margin: 0;
}
</style>
<style scoped>
.click {
  cursor: pointer;
}
.line{
  
  position: absolute;
}
.line1 {
  border-top: 2px solid rgba(255, 255, 255, 0.3);
  width: 140px;
  top: 300px;
  left: 0px;
}
.line2 {
  border-top: 2px solid rgba(255, 255, 255, 0.3);
  width: 150px;
  top: 460px;
  left: 0px;
}

.line3 {
  border-top: 2px solid rgba(255, 255, 255, 0.3);
  width: 154px;
  top: 460px;
  left: 657px;
}
.line4 {
  border-top: 2px solid rgba(255, 255, 255, 0.3);
  width: 145px;
  top: 300px;
  left: 665px;
}
.line5 {
  border-left: 2px solid rgba(255, 255, 255, 0.3);
  height: 145px;
  top: 455px;
  left: 350px;
}
.line6 {
  border-left: 2px solid rgba(255, 255, 255, 0.3);
  height: 200px;
  top: 153px;
  left: 400px;
}
.line7 {
  border-left: 2px solid rgba(255, 255, 255, 0.3);
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
  height: 200px;
  width: 80px;
  top: 473px;
  left: 480px;
}
.line8 {
  border-left: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid rgba(255, 255, 255, 0.3);
  height: 110px;
  width: 178px;
  top: 170px;
  left: 480px;
}

.line9 {
  border-left: 2px solid rgba(255, 255, 255, 0.3);
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
  height: 70px;
  width: 200px;
  top: 155px;
  left: 80px;
}
.line10 {
  border-left: 2px solid rgba(255, 255, 255, 0.3);
  
  height: 35px;
  width: 200px;
  top: 225px;
  left: 280px;
}
</style>
<style scoped>
.wrapper {
  min-width: 1400px;
  background-color: #fafafa;
  background: url('./img/background.png');
  overflow: hidden;
  height: 1000px;
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
.box{
  position: absolute;
  left: -800px;
  top: 0;
  z-index: 2;
}
.box1{
  left: -300px;
  top: 0px;
}
.box2{
  left: 166px;
  top: 0px;
}
.box3{
  left: 530px;
  top: 570px;
  width: 500px;
}
.box4{
  left: 780px;
  top: 390px;
  width: 250px;
}
.box5{
  left: 780px;
  top: 190px;
  width: 250px;
}
.box6{
  left: 630px;
  top: 0px;
  /* width: 250px; */
  right: 800px;
}
.box7{
 left: -300px;
  top: 570px;
  width: 700px;
}
.box8{
 left: -300px;
  top: 370px;
  width: 250px;
}
.box9{
 left: -300px;
  top: 170px;
  width: 250px;
}
</style>
<style scoped>
img.bg {
  width: 900px;
  margin-left: -70px;
  margin-top: 100px;
}

.container {
  width: 800px;
  height: 700px;
  margin: -100px auto;
  /* background-color: #fafafa; */
  position: relative;
}
.botton {
  cursor: pointer !important;
  position: absolute;
  width: 100px;
  height: 30px;
  background-color: #ccc;
  z-index: 8000;
  opacity: 0;
}

.botton1 {
  left: 320px;
  top: 340px;
  width: 120px;
  transform: rotate(45deg);
}

.botton2 {
  left: 440px;
  top: 440px;
  width: 100px;
  transform: rotate(35deg);
}


.botton_verify {
  left: 130px;
  top: 435px;
  width: 100px;
  transform: rotate(45deg);
}
.botton_package {
  left: 270px;
  top: 430px;
  width: 100px;
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
  top: 260px;
  width: 80px;
  height: 40px;
  transform: rotate(35deg);
}
.botton_create {
  left: 100px;
  top: 300px;
  transform: rotate(-50deg);
}

</style>
