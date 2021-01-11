//注意：选项卡 依赖 element 模块，否则无法进行功能性操作
layui.use('element', function(){
    var element = layui.element;
    
    //…
  });
  $(".btn_showAll").click(function(){
    $(".btn_showAll").hide();
    $(".titleClose").hide();
    $(".titleOpen").show();
    $(".morePolicy").show();
});
  $(".titleOpen").click(function(){
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
                    type: 1,
                    content: $('.box_policDetail') //这里content是一个DOM，这个元素要放在body根节点下
                });
        
    
    
     })

})
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('echartsDemo'));
 
      // 指定图表的配置项和数据
      var option = {
        // title: {
        //     text: '某站点用户访问来源',
        //     subtext: '纯属虚构',
        //     left: 'center'
        // },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        color : ["#81DFAB","#FFD37E", "#FFA582", ],
        // legend: {
        //     orient: 'vertical',
        //     left: 'left',
        //     data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        // },
        series: [
            {
                name: '剩余风险保额分布',
                type: 'pie',
                selectedMode: 'single',
                radius: '70%',
                center: ['52%', '50%'],
                data: [
                    {value: 40, name: '寿险   40w',
                    label: {
                        normal: {
                            textStyle: {
                                fontSize: 30,
                            }
                        }
                    }
                },
                    {value: 30, name: '意外险   30w',
                    label: {
                        normal: {
                            textStyle: {
                                fontSize: 30,
                            }
                        }
                    }},
                    {value: 50, name: '重疾险   50w',
                    label: {
                        normal: {
                            textStyle: {
                                fontSize: 30,
                            }
                        }
                    }},
                ],
                textStyle: { //图例文字的样式
                    color: '#fff',
                    fontSize: 30
                },


                // }
            }
        ]
    };
    

      // 使用刚指定的配置项和数据显示图表。
    setTimeout(() => {
    myChart.setOption(option);
    }, 1000);