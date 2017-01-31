// モジュールローダの設定
require.config({
    paths: {
        echarts: 'http://echarts.baidu.com/build/dist'
    }
});

// グラフの描画
require(
  [
    'echarts',
    'echarts/chart/pie', // 円グラフの読み込み
    'echarts/chart/funnel'
  ],
  function (ec) {

    var pieChart = ec.init(document.getElementById('pie-chart')); // 表示する場所のID

    // オプションの設定
    var pieOption = {

      // グラフ要素の色(指定しなくても大丈夫です)
      color : ['rgba(0,0,0,0.52)','rgba(255,0,0,0.52)','rgba(0,0,255,0.52)','rgba(0,153,0,0.52)','rgba(255,255,0,0.52)'],
      
      // グラフタイトル
      title : {
        text: 'Pie-Chart',
        x:'center'
      },
      
      // カーソルを重ねた際の情報
      tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },

      // 凡例
      legend: {
        textStyle: {
          fontWeight: 'bolder',
          fontSize: 20,
        },
        orient : 'vertical',
        x : '70%',  // 位置を変更できます
        y : '20%',
        data:['Living','Kitchen','Desk Area','Bed Area','Toilet']
      },
      
      // ツールボックス(他にも色々な機能がありますのでドキュメントを参照して下さい)
      toolbox: {
        show : true,
        x : 300,
        feature : {
          dataView : {show: true, title: 'データの表示', readOnly: false},
          magicType : {
            show: true, 
            title: {  // デフォルトだと中国語なので日本語を設定
              pie : '円グラフ',
              funnel: 'ファネルチャート'
            },
            type: ['pie', 'funnel'],
            option: {
              funnel: {
                  x: '25%',
                  width: '50%',
                  funnelAlign: 'left',
                  max: 1548
              }
            }
          },
          restore : {show: true, title: '更新'},
          saveAsImage : {show: true, title: '画像保存'}
        }
      },

      // インタラクティブな操作を有効にする
      calculable : true,

      // データ
      series : [
        {
          name:'項目名',
          type:'pie', //グラフ指定
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
    // オプションをインスタンスに適用
    pieChart.setOption(pieOption); 
  }
);


// use
require(
    [
        'echarts',
        'echarts/chart/pie' // require the specific chart type
    ],
    function (ec) {
        // Initialize after dom ready
        var barChart = ec.init(document.getElementById('bar-chart')); 
        
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
        barChart.setOption(option); 
    }
);

// use
require(
    [
        'echarts',
        'echarts/chart/pie' // require the specific chart type
    ],
    function (ec) {
        // Initialize after dom ready
        var lineChart = ec.init(document.getElementById('line-chart')); 
        
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
        lineChart.setOption(option); 
    }
);

