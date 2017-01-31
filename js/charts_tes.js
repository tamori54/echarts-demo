// モジュールローダの設定
require.config({
    paths: {
        echarts: 'http://echarts.baidu.com/build/dist'
    }
});

// 円グラフの描画
require(
  [
    'echarts',
    'echarts/chart/pie', // 円グラフの読み込み
    'echarts/chart/funnel' // toolbox内で切り替えるため読み込みます
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
        x : '75%',  // 位置を変更できます
        y : '20%',
        data: ['カレーライス','ハヤシライス','オムライス','チキンライス','タコライス']
      },
      
      // ツールボックス(他にも色々な機能がありますのでドキュメントを参照して下さい)
      toolbox: {
        show : true,
        x : 300,
        feature : {
          dataView : {
            show: true, 
            title: 'データの表示', 
            readOnly: false,
            lang: ['データの表示','閉じる','更新']
          },
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
            {value:335, name:'カレーライス'},
            {value:310, name:'ハヤシライス'},
            {value:234, name:'オムライス'},
            {value:135, name:'チキンライス'},
            {value:1548, name:'タコライス'}
          ]
        }
      ]
    };
    // オプションをインスタンスに適用
    pieChart.setOption(pieOption); 
  }
);


// 棒グラフの描画
require(
  [
    'echarts',
    'echarts/chart/bar', // 棒グラフの読み込み
    'echarts/chart/line' // toolbox内で切り替えるため読み込みます
  ],
  function (ec) {

    var barChart = ec.init(document.getElementById('bar-chart')); // 表示する場所のID

    // オプションの設定
    var barOption = {

      // グラフタイトル
      title : {
        text: 'Bar-Chart',
        x:'center'
      },
      
      // カーソルを重ねた際の情報
      tooltip : {
        trigger: 'axis',
      },

      // 凡例
      legend: {
        textStyle: {
          fontWeight: 'bolder',
          fontSize: 20,
        },
        orient : 'vertical',
        x : '75%',  // 位置を変更できます
        y : '20%',
        data:['降水量','湿度']
      },
      
      // ツールボックス(他にも色々な機能がありますのでドキュメントを参照して下さい)
      toolbox: {
        show : true,
        x : 300,
        feature : {
          dataView : {
            show: true, 
            title: 'データの表示', 
            readOnly: false,
            lang: ['データの表示','閉じる','更新']
          },
          magicType : {
            show: true, 
            title: {  // デフォルトだと中国語なので日本語を設定
              bar : '棒グラフ',
              line : '折れ線グラフ'
            },
            type: ['bar', 'line'],
          },
          restore : {show: true, title: '更新'},
          saveAsImage : {show: true, title: '画像保存'}
        }
      },

      // インタラクティブな操作を有効にする
      calculable : true,

      // データ
      xAxis : [ // x軸
        {
          type : 'category',
          data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
        }
      ],
      yAxis : [ //y軸
        {
          type : 'value'
        }
      ],
      series : [
        {
          name:'湿度',
          type:'bar',
          data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
          markPoint : {
            data : [
              {type : 'max', name: '最大值'},
              {type : 'min', name: '最小值'}
            ]
          },
          markLine : {
            data : [
                {type : 'average', name: '平均值'}
            ]
          }
        },
        {
          name:'降水量',
          type:'bar',
          data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
          markPoint : {
            data : [
              {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183, symbolSize:18},
              {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
            ]
          },
          markLine : {
            data : [
              {type : 'average', name : '平均值'}
            ]
          }
        }
      ]
    };
    // オプションをインスタンスに適用
    barChart.setOption(barOption); 
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

