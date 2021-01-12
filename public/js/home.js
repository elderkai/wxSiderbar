//注意：选项卡 依赖 element 模块，否则无法进行功能性操作
layui.use('element', function(){
    var element = layui.element;
  });
  $(".btn_showAll").click(function(){
    $(".btn_showAll").hide();
    $(".titleClose").hide();
    $(".titleOpen").show();
    $(".morePolicy").show();
});
  $(".btnClose").click(function(){
    $(".btn_showAll").show();
    $(".titleClose").show();
    $(".titleOpen").hide();
    $(".morePolicy").hide();
});
$(".showDetail").click(function(a){
    if(a.currentTarget.innerHTML.indexOf(" icon_grey")>=0){
        $(".btnState")[0].innerHTML="已终止"
        $(".btnState").css("background","#ccc");
    }else{
        $(".btnState")[0].innerHTML="生效中"
        $(".btnState").css("background","linear-gradient(20deg, #6CD99D, #2EE681");
    }
    layui.use('layer',function () { 
            //iframe层
            layer.open({
                area: ['750px'],
                shadeClose:false,
                    type: 1,
                    content: $('.box_policDetail') //这里content是一个DOM，这个元素要放在body根节点下
                });
        
    
    
     })

})



      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('echartsDemo'));
//     const data = [40,30,45]
// const sideData = data.map(item => item+1.2)
// option = {
//     // backgroundColor: "#041730",
//     color : ["#81DFAB","#FFD37E", "#FFA582", ],
//     tooltip: {
//         trigger: 'axis',
//         formatter: "{b} : {c}",
//         axisPointer: { // 坐标轴指示器，坐标轴触发有效
//             type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
//         }
//     },
//     xAxis: {
//         data: ["重症险","寿险","意外险"],
//         //坐标轴
//         show: true,
//         axisLine: {
//             lineStyle: {
//                 color: '#FF6D33'
//             }
//         },
//         axisTick: {
//             show: true
//         },
//         axisLabel: {   
//             show: true,
//             fontSize:'29',
//             fontFamily:'微软雅黑',
//             marginTop:'35px',
//       },
//         //坐标值标注
//         // axisLabel: {
//         //     show: true,
//         //     textStyle: {
//         //         color: '#fff',
//         //     }
//         // },
//         splitLine: {    
//             show: false 
//     }
//     },
//     yAxis: {
//         //坐标轴
//         show: true,
//         splitLine: {    
//             show: true 
//     },
//     axisLabel: {   
//         show: true,
//         fontSize:'21',
//         fontFamily:'微软雅黑',
//         marginTop:'35px',
//   },
//         axisTick: {
//             show: true
//         },
//         axisLine: {
//             show: true
//         },
//         //坐标值标注
//         // axisLabel: {
//         //     show: true,
//         //     textStyle: {
//         //         color: '#fff',
//         //     }
//         // },
//         //分格线
     
//     },
//     series: [{
//         name: 'a',
//         tooltip: {
//             show: true
//         },
//         type: 'bar',
//         barWidth: 46,//单柱宽度
//         itemStyle: {
//             normal: {
//                 color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [{
//                     offset: 0,
//                     color: "#FF6D33" // 0% 处的颜色
//                 }, 
//                 // {
//                 //     offset: 0.6,
//                 //     color: "#138CEB" // 60% 处的颜色
//                 // }, 
//                 {
//                     offset: 1,
//                     color: "#FA8E64" // 100% 处的颜色
//                 }], true),
//                 label: {
//                     distance: 10,

//                     show: true,  //开启显示
//                     position: 'top',  //在上方显示
//                     textStyle: {  //数值样式
//                         color: 'black',
//                         fontSize: 25,
//                         padding: [0,0,0, 19]
//                     }
//                 }
//             },
//         },
//         data: data,
//         barGap: 0
//     }, {
//         type: 'bar',
//         barWidth:15,
//         itemStyle: {
//             normal: {
//                 color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
//                     offset: 0,
//                     color: "#CC3A00" // 0% 处的颜色
//                 }, {
//                     offset: 1,
//                     color: "#FF7F4C" // 100% 处的颜色
//                 }], true)
//             }
//         },
//         barGap: 0,
//         data: sideData
//     }, {
//         name: 'b',
//         tooltip: {
//             show: false
//         },
//         type: 'pictorialBar',
//         itemStyle: {
//             // borderWidth: 1,
//             // borderColor: '#0571D5',
//             color: '#FF4700'
//         },
//         symbol: 'path://M 0,0 l 120,0 l -30,60 l -120,0 z',
//         symbolSize: ['64', '12'],
//         symbolOffset: ['0', '-11'],
//         //symbolRotate: -5,
//         symbolPosition: 'end',
//         data: data,
//         z: 3
//     }]
// };
let colors=[["#FF6D33","#FA8E64"],["#33A7FF","#66BDFF"],["#FF4C4C","#FF7F7F"]];
var MyCubeRect = echarts.graphic.extendShape({
             shape: {
                 x: 0,
                 y: 0,
                 width: 48, //柱宽 
                 zWidth: 81, //阴影折角宽 
                 zHeight: 41, //阴影折角高 
             },
             buildPath: function (ctx, shape) {
                 const api = shape.api;
                 const xAxisPoint = api.coord([shape.xValue, 0]);
                 const p0 = [shape.x, shape.y];
                 const p1 = [shape.x - shape.width / 2, shape.y];
                 const p4 = [shape.x + shape.width / 2, shape.y];
                 const p2 = [xAxisPoint[0] - shape.width / 2, xAxisPoint[1]];
                 const p3 = [xAxisPoint[0] + shape.width / 2, xAxisPoint[1]];
     
                 ctx.moveTo(p0[0], p0[1]); //0
                 ctx.lineTo(p1[0], p1[1]); //1
                 ctx.lineTo(p2[0], p2[1]); //2
                 ctx.lineTo(p3[0], p3[1]); //3
                 ctx.lineTo(p4[0], p4[1]); //4
                 ctx.lineTo(p0[0], p0[1]); //0
                 ctx.closePath();
             }
         });
         var MyCubeShadow = echarts.graphic.extendShape({
             shape: {
                 x: 0,
                 y: 0,
                 width: 48,
                 zWidth: 8,
                 zHeight: 4,
             },
             buildPath: function (ctx, shape) {
                 const api = shape.api;
                 const xAxisPoint = api.coord([shape.xValue, 0]);
                 const p0 = [shape.x, shape.y];
                 const p1 = [shape.x - shape.width / 2, shape.y];
                 const p4 = [shape.x + shape.width / 2, shape.y];
                 const p6 = [shape.x + shape.width / 2 + shape.zWidth, shape.y - shape.zHeight];
                 const p7 = [shape.x - shape.width / 2 + shape.zWidth, shape.y - shape.zHeight];
                 const p3 = [xAxisPoint[0] + shape.width / 2, xAxisPoint[1]];
                 const p5 = [xAxisPoint[0] + shape.width / 2 + shape.zWidth, xAxisPoint[1] - shape.zHeight];
     
                 ctx.moveTo(p4[0], p4[1]); //4
                 ctx.lineTo(p3[0], p3[1]); //3
                 ctx.lineTo(p5[0], p5[1]); //5
                 ctx.lineTo(p6[0], p6[1]); //6
                 ctx.lineTo(p4[0], p4[1]); //4
     
                 ctx.moveTo(p4[0], p4[1]); //4
                 ctx.lineTo(p6[0], p6[1]); //6
                 ctx.lineTo(p7[0], p7[1]); //7
                 ctx.lineTo(p1[0], p1[1]); //1
                 ctx.lineTo(p4[0], p4[1]); //4
                 ctx.closePath();
             }
         });
         echarts.graphic.registerShape("MyCubeRect", MyCubeRect);
         echarts.graphic.registerShape("MyCubeShadow", MyCubeShadow);
        //  echarts.graphic.registerShape("MyCubeShadow", MyCubeShadow);
     
     
         var option = {
           
             grid: {
                 height: 300
             },
             xAxis: {
                 data: ["重疾险", "寿险","意外险"],
                 
                 axisLabel:{ 
                    color:function(k){ 
                        
                        return color[k]
                    },
                    color: function(param, index) {
                        let color=['#FF6D33', '#33A7FF', '#FF6666', '#f01798', '#fbaf16', '#0097dd'];
                        return color[index]
                     },
                     textStyle: {           fontSize: 29,padding:[10,0,0,0]},
                     
                }
             },
             yAxis: {
                 type: "value",
                   axisLabel: {
            show: true,
                   },
                   itemStyle:{
                       normal:{

                       }
                   }
             },
             series: [{
                itemStyle: {
                        label: {
                            distance: 10,
                            show: true,      //开启显示
                            position: 'top', //在上方显示
                            textStyle: {     //数值样式
                                color: 'black',
                                fontSize: 67,
                                padding: [0,0,0, 0]
                            }
                        }
                },
                 type: "custom",
                 renderItem: function (params, api) {
                     let location = api.coord([api.value(0), api.value(1)]);
                     console.log(location,api.value(0));
                     return {
                         type: "group",
                         children: [{
                             type: "MyCubeRect",
                             shape: {
                                 api,
                                xValue: api.value(0),
                                yValue: api.value(1),
                                x: location[0],
                                y: location[1]
                            },
                            style: {
                                fill:    colors[api.value(0)][0]
                            }
                        }, 
                        {
                            type: "MyCubeShadow",
                            shape: {
                                api,
                                xValue: api.value(0),
                                yValue: api.value(1),
                                x: location[0],
                                y: location[1]
                            },
                            style: {
                                fill: colors[api.value(0)][1]
                            }
                        },
                    ]
                    };
                },
                data: [40, {
                    value:30,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [{
                                offset: 0,
                                color: "#FF6D33" // 0% 处的颜色
                            }, 
                            // {
                            //     offset: 0.6,
                            //     color: "#138CEB" // 60% 处的颜色
                            // }, 
                            {
                                offset: 1,
                                color: "#FA8E64" // 100% 处的颜色
                            }], true),
                            label: {
                                distance: 10,
            
                                show: true,  //开启显示
                                position: 'top',  //在上方显示
                                textStyle: {  //数值样式
                                    color: '#fff',
                                    fontSize: 25,
                                    padding: [0,0,0, 19]
                                }
                            }
                        },
                    },
                },50]
            }]
        }; 
      // 使用刚指定的配置项和数据显示图表。
    setTimeout(() => {
    myChart.setOption(option);
    }, 200);