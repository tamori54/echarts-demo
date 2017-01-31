// configure for module loader
require.config({
    paths: {
        echarts: 'http://echarts.baidu.com/build/dist'
    }
});

// 円グラフ描画
require(
    [
        'echarts',
        'echarts/chart/pie' // require the specific chart type
    ],
    function (ec) {
        // Initialize after dom ready
        var myChart = ec.init(document.getElementById('pie-chart')); 
        
        var option = {
          color : ['rgba(0,0,0,0.52)','rgba(255,0,0,0.52)','rgba(0,0,255,0.52)','rgba(0,153,0,0.52)','rgba(255,255,0,0.52)'],
          title : {
              text: 'Area',
              x:'center'

          },
          tooltip : {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
            fontWeight: 'bolder',
            fontSize: 20,
            fontStyle: 'italic',
            color: '#fff',
            shadowColor : '#fff', //默认透明
            shadowBlur: 10
        },
              orient : 'vertical',
              x : '30%',
              y : '20%',
              data:['Living','Kitchen','Desk Area','Bed Area','Toilet']
          },
          
          calculable : true,
          series : [
              {
                  name:'Exist Area',
                  type:'pie',
                  radius : '70%',
                  center: ['50%', '50%'],
                  data:[
                      {value:335, name:'Living'},
                      {value:310, name:'Kitchen'},
                      {value:234, name:'Desk Area'},
                      {value:135, name:'Bed Area'},
                      {value:1548, name:'Toilet'}
                  ]
              }
          ]
      };

        // Load data into the ECharts instance 
        myChart.setOption(option); 
    }
);