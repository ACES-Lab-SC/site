webpackJsonp([2,0],{0:function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var s=i(2),o=n(s),a=i(215),r=n(a),c=i(113),l=n(c),_=i(115),d=n(_),u=i(35);n(u);i(186);var p=i(169),v=n(p);o.default.use(v.default),o.default.use(r.default);var f=new r.default({routes:l.default});new o.default({router:f,store:d.default}).$mount("#app")},35:function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(19),o=n(s),a=i(117),r=n(a),c=i(119),l=n(c),_=i(120),d=n(_);e.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"GET",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return new d.default(function(s,a){t=t.toUpperCase();var c=void 0;if(c=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject,"GET"==t){var _="";(0,l.default)(i).forEach(function(t){_+=t+"="+i[t]+"&"}),_=_.substr(0,_.lastIndexOf("&")),e=e+"?"+_,c.open(t,e,n),c.setRequestHeader("Content-type","application/x-www-form-urlencoded"),c.send()}else"POST"==t?(c.open(t,e,n),c.setRequestHeader("Content-type","application/json"),c.send((0,r.default)(i))):a("error type");c.onreadystatechange=function(){if(4==c.readyState)if(200==c.status){var t=c.response;"object"!==("undefined"==typeof t?"undefined":(0,o.default)(t))&&(t=JSON.parse(t)),s(t)}else a(c)}})}},110:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{go:function(t){window.open(t)}},data:function(){return{}}}},111:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{msg:{default:!0}},methods:{go:function(t){window.open(t)}}}},112:function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(210),o=n(s);e.default={components:{box:o.default},methods:{go:function(t){window.open(t)}},data:function(){return{msg:{box1:{title:"面向电子商务领域的业务建模方法",text:"提出电商业务模型，包含元模型和基模型，通过定义电商领域知识描述规范，以机器可理解的方式刻画概念和流程，指导特征实体在流程生命周期中的演化变迁。",link:"https://gcli.notion.site/business-model-1"},box2:{title:"基于本体的多智能体服务模式仿真方法",text:"提出了一种基于本体和多智能体的服务模式仿真方法，通过BPMN和本体语言描述业务流程和数据实体，支持对利益相关者价值需求的定量分析，适用于复杂且不确定的企业合作环境。",link:"https://gcli.notion.site/ability-express-1"},box3:{title:"基于图挖掘的跨界服务模式映射与融合方法",text:"提出基于规则的服务模式融合框架，通过异构信息网络实现参与者、资源和过程融合，并引入服务模式图谱，提升跨界服务模式的灵活性和融合效率。",link:"https://gcli.notion.site/service-map?pvs=4"},box4:{title:"Java 软件库API迁移工具",text:"通过静态分析提取软件库API信息，检测客户端代码中的API调用点，并支持多种模式的API迁移，旨在帮助开发者更高效地管理和迁移第三方库的API调用。",link:"https://gcli.notion.site/deploy-1?pvs=4"},box5:{title:"边缘计算环境下的 AI 模型容器分发平台",text:" 边缘计算环境下的 AI 模型容器分发平台 / 支持智能流量调度的全分布式边缘计算环境容器镜像分发平台",link:"https://gcli.notion.site/adaptive-resource-allocation-1"},box6:{title:"基于跨项目回归测试的第三方库演化不兼容性检测工具",text:"提出了一种优化跨项目回归测试的方法，通过并行化测试用例选择、基于信息检索的测试用例优先级排序和依赖冲突分析，显著提高了检测第三方库行为向后不兼容性问题的效率和准确性。",link:"https://gcli.notion.site/flex-schedule-1?pvs=4"},box7:{title:"基于遗传改良与测试用例选择的程序缺陷自动修复原型工具",text:"Repair4J 是一个面向Java程序缺陷修复的原型工具，允许开发人员应用不同的实验设置（开关变异操作）和定制化操作（自定义变异算子）。",link:"https://gcli.notion.site/vul-1"},box8:{title:"RBC智能平台测试用例增强工具",text:"利用RBC智能测新平台自动生成测试用例并提供覆盖率提升建议，显著提高测试效率和发布质量，重点关注变更和重要代码的覆盖率。",link:"https://gcli.notion.site/quality-check-1"},box9:{title:"大型软件系统的质量可持续性分析度量",text:"利用前沿技术构建代码质量评价体系和工具，帮助大型公司定量评估代码健康，减少线上故障，提供管理决策依据。",link:"https://gcli.notion.site/sustainability-1"}}}}}},113:function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(209),o=n(s),a=i(211),r=n(a);e.default=[{path:"/test1",component:o.default},{path:"/",component:r.default}]},114:function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(35);n(s);e.default={addNum:function(t,e){var i=t.commit,n=t.state;i("REMBER_ANSWER",e),n.itemNum<n.itemDetail.length&&i("ADD_ITEMNUM",1)},initializeData:function(t){var e=t.commit;e("INITIALIZE_DATA")}}},115:function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(2),o=n(s),a=i(217),r=n(a),c=i(116),l=n(c),_=i(114),d=n(_),u=i(35);n(u);o.default.use(r.default);var p={level:"第一周",itemNum:1,allTime:0,timer:"",itemDetail:[{topic_id:20,active_topic_id:4,type:"ONE",topic_name:"题目一",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:1,topic_id:20,answer_name:"答案aaaa",is_standard_answer:0},{topic_answer_id:2,topic_id:20,answer_name:"正确答案",is_standard_answer:0},{topic_answer_id:3,topic_id:20,answer_name:"答案cccc",is_standard_answer:0},{topic_answer_id:4,topic_id:20,answer_name:"答案dddd",is_standard_answer:1}]},{topic_id:21,active_topic_id:4,type:"MORE",topic_name:"题目二",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:5,topic_id:21,answer_name:"答案A",is_standard_answer:1},{topic_answer_id:6,topic_id:21,answer_name:"答案B",is_standard_answer:0},{topic_answer_id:7,topic_id:21,answer_name:"正确答案",is_standard_answer:0},{topic_answer_id:8,topic_id:21,answer_name:"答案D",is_standard_answer:0}]},{topic_id:21,active_topic_id:4,type:"MORE",topic_name:"题目三",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:9,topic_id:21,answer_name:"测试A",is_standard_answer:1},{topic_answer_id:10,topic_id:21,answer_name:"BBBBBB",is_standard_answer:0},{topic_answer_id:11,topic_id:21,answer_name:"CCCCCC",is_standard_answer:0},{topic_answer_id:12,topic_id:21,answer_name:"正确答案",is_standard_answer:0}]},{topic_id:21,active_topic_id:4,type:"MORE",topic_name:"题目四",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:13,topic_id:21,answer_name:"正确答案",is_standard_answer:1},{topic_answer_id:14,topic_id:21,answer_name:"A是错的",is_standard_answer:0},{topic_answer_id:15,topic_id:21,answer_name:"D是对的",is_standard_answer:0},{topic_answer_id:16,topic_id:21,answer_name:"C说的不对",is_standard_answer:0}]},{topic_id:21,active_topic_id:4,type:"MORE",topic_name:"题目五",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:17,topic_id:21,answer_name:"错误答案",is_standard_answer:1},{topic_answer_id:18,topic_id:21,answer_name:"正确答案",is_standard_answer:0},{topic_answer_id:19,topic_id:21,answer_name:"错误答案",is_standard_answer:0},{topic_answer_id:20,topic_id:21,answer_name:"错误答案",is_standard_answer:0}]}],answerid:[]};e.default=new r.default.Store({state:p,actions:d.default,mutations:l.default})},116:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={}},186:function(t,e){},187:function(t,e){},188:function(t,e){},189:function(t,e){},190:function(t,e){},191:function(t,e){},192:function(t,e){},193:function(t,e){},194:function(t,e){},195:function(t,e,i){t.exports=i.p+"static/img/bg3.png"},196:function(t,e,i){t.exports=i.p+"static/img/circle.png"},197:function(t,e,i){t.exports=i.p+"static/img/configure.png"},198:function(t,e,i){t.exports=i.p+"static/img/package.png"},199:function(t,e,i){t.exports=i.p+"static/img/verify.png"},209:function(t,e,i){i(192),i(193),i(194);var n=i(57)(i(110),i(214),"data-v-46e720b8",null);t.exports=n.exports},210:function(t,e,i){i(191);var n=i(57)(i(111),i(213),null,null);t.exports=n.exports},211:function(t,e,i){i(187),i(188),i(189),i(190);var n=i(57)(i(112),i(212),"data-v-0acc9d6b",null);t.exports=n.exports},212:function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("h1",[t._v("面向不确定演化的服务生态系统工具平台")]),t._v(" "),n("div",{staticClass:"container"},[n("img",{staticClass:"bg",attrs:{src:i(196),alt:""}}),t._v(" "),n("div",{staticClass:"dev"},[n("div",{staticClass:"botton botton_verify"},[n("el-button",{attrs:{slot:"reference"},on:{click:function(e){return t.go("https://gcli.notion.site/quality-check-1")}},slot:"reference"},[t._v("质量")])],1),t._v(" "),n("div",{staticClass:"botton botton1"},[n("el-button",{attrs:{slot:"reference"},on:{click:function(e){return t.go("https://gcli.notion.site/ability-express-1")}},slot:"reference"},[t._v("能力表达")])],1),t._v(" "),n("div",{staticClass:"botton botton2"},[n("el-button",{attrs:{slot:"reference"},on:{click:function(e){return t.go("https://gcli.notion.site/service-map?pvs=4")}},slot:"reference"},[t._v("服务映射")])],1),t._v(" "),n("div",{staticClass:"botton botton_package"},[n("el-button",{attrs:{slot:"reference"},on:{click:function(e){return t.go("https://gcli.notion.site/vul-1")}},slot:"reference"},[t._v("缺陷")])],1),t._v(" "),n("div",{staticClass:"botton botton_configure"},[n("el-button",{attrs:{slot:"reference"},on:{click:function(e){return t.go("https://gcli.notion.site/adaptive-resource-allocation-1")}},slot:"reference"},[t._v("资源分配")])],1),t._v(" "),n("div",{staticClass:"botton botton_plan"},[n("el-button",{attrs:{slot:"reference"},on:{click:function(e){return t.go("https://gcli.notion.site/business-model-1")}},slot:"reference"},[t._v("建模")])],1),t._v(" "),n("div",{staticClass:"botton botton_monitor"},[n("el-button",{attrs:{slot:"reference"},on:{click:function(e){return t.go("https://gcli.notion.site/deploy-1?pvs=4")}},slot:"reference"},[t._v("动态组合")])],1),t._v(" "),n("div",{staticClass:"botton botton_release"},[n("el-button",{attrs:{slot:"reference"},on:{click:function(e){return t.go("https://gcli.notion.site/flex-schedule-1?pvs=4")}},slot:"reference"},[t._v("灵活调度")])],1),t._v(" "),n("div",{staticClass:"botton botton_create"},[n("el-button",{attrs:{slot:"reference"},on:{click:function(e){return t.go("https://gcli.notion.site/sustainability-1")}},slot:"reference"},[t._v("可持续")])],1)]),t._v(" "),n("div",{staticClass:"pro"},[n("box",{staticClass:"box box1",attrs:{msg:t.msg.box1}}),t._v(" "),n("box",{staticClass:"box box2",attrs:{msg:t.msg.box2}}),t._v(" "),n("box",{staticClass:"box box3",attrs:{msg:t.msg.box3}}),t._v(" "),n("box",{staticClass:"box box4",attrs:{msg:t.msg.box4}}),t._v(" "),n("box",{staticClass:"box box5",attrs:{msg:t.msg.box5}}),t._v(" "),n("box",{staticClass:"box box6",attrs:{msg:t.msg.box6}}),t._v(" "),n("box",{staticClass:"box box7",attrs:{msg:t.msg.box7}}),t._v(" "),n("box",{staticClass:"box box8",attrs:{msg:t.msg.box8}}),t._v(" "),n("box",{staticClass:"box box9",attrs:{msg:t.msg.box9}})],1),t._v(" "),t._m(0)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"lines"},[i("div",{staticClass:"line line1"}),t._v(" "),i("div",{staticClass:"line line2"}),t._v(" "),i("div",{staticClass:"line line3"}),t._v(" "),i("div",{staticClass:"line line4"}),t._v(" "),i("div",{staticClass:"line line5"}),t._v(" "),i("div",{staticClass:"line line6"}),t._v(" "),i("div",{staticClass:"line line7"}),t._v(" "),i("div",{staticClass:"line line8"}),t._v(" "),i("div",{staticClass:"line line9"}),t._v(" "),i("div",{staticClass:"line line10"})])}]}},213:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"box"},[i("div",{staticClass:"tittle"},[t._v("\n          "+t._s(t.msg.title)+"\n        ")]),t._v(" "),i("div",{staticClass:"text"},[t._v(t._s(t.msg.text))]),t._v(" "),i("div",{staticClass:"link",on:{click:function(e){return t.go(t.msg.link)}}},[t._v("\n          "+t._s(t.msg.link)+"\n        ")])])},staticRenderFns:[]}},214:function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("h1",[t._v("面向不确定演化的服务生态系统工具平台")]),t._v(" "),n("div",{staticClass:"container"},[n("img",{staticClass:"bg",attrs:{src:i(195),alt:""}}),t._v(" "),n("div",{staticClass:"dev"},[n("el-button",{staticClass:"botton botton_verify",attrs:{slot:"reference"},on:{click:function(e){return t.go("https://422.gcli.eu.org/")}},slot:"reference"},[t._v("verify")]),t._v(" "),n("el-button",{staticClass:"botton botton_package",attrs:{slot:"reference"},on:{click:function(e){return t.go("https://422.gcli.eu.org/")}},slot:"reference"},[t._v("package")]),t._v(" "),n("el-button",{staticClass:"botton botton_configure",attrs:{slot:"reference"},on:{click:function(e){return t.go("https://422.gcli.eu.org/")}},slot:"reference"},[t._v("configure")]),t._v(" "),n("el-button",{staticClass:"botton botton_plan",attrs:{slot:"reference"},on:{click:function(e){return t.go("https://422.gcli.eu.org/")}},slot:"reference"},[t._v("plan")]),t._v(" "),n("el-button",{staticClass:"botton botton_monitor",attrs:{slot:"reference"},on:{click:function(e){return t.go("https://422.gcli.eu.org/")}},slot:"reference"},[t._v("monitor")]),t._v(" "),n("el-button",{staticClass:"botton botton_release",attrs:{slot:"reference"},on:{click:function(e){return t.go("https://422.gcli.eu.org/")}},slot:"reference"},[t._v("release")]),t._v(" "),n("el-button",{staticClass:"botton botton_create",attrs:{slot:"reference"},on:{click:function(e){return t.go("https://422.gcli.eu.org/")}},slot:"reference"},[t._v("create")])],1),t._v(" "),n("el-popover",{attrs:{placement:"top-start",width:"300",trigger:"hover",content:"这是一段内容,这是一段内容,这是一段内容,这是一段内容。"}},[n("img",{staticClass:"click",attrs:{src:i(199),alt:"",srcset:"",width:"300px"},on:{click:function(e){return t.go("https://422.gcli.eu.org/archives/1705648308628")}}}),t._v(" "),n("el-button",{staticClass:"botton botton_verify",attrs:{slot:"reference"},slot:"reference"},[t._v("verify")])],1),t._v(" "),n("el-popover",{attrs:{placement:"top-start",width:"300",trigger:"hover",content:"这是一段内容,这是一段内容,这是一段内容,这是一段内容。"}},[n("img",{staticClass:"click",attrs:{src:i(198),alt:"",srcset:"",width:"300px"},on:{click:function(e){return t.go("https://422.gcli.eu.org/archives/1705583054965")}}}),t._v(" "),n("el-button",{staticClass:"botton botton_package",attrs:{slot:"reference"},slot:"reference"},[t._v("botton_package")])],1),t._v(" "),n("el-popover",{attrs:{placement:"top-start",width:"300",trigger:"hover"}},[n("img",{staticClass:"click",attrs:{src:i(197),alt:"",srcset:"",width:"300px"},on:{click:function(e){return t.go("https://422.gcli.eu.org/archives/1705582539715")}}}),t._v(" "),n("el-button",{staticClass:"botton botton_configure",attrs:{slot:"reference"},slot:"reference"},[t._v("hover 激活")])],1)],1)])},staticRenderFns:[]}}});