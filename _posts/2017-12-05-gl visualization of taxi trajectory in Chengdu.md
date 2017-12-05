---
layout:     post
title:      gl visualization of taxi trajectory in Chengdu
subtitle:   成都出租车轨迹可视化gl
date:       2017-12-2
author:     Radar
header-img: img/post-bg-debug.png
catalog: true
tags:
	- GPS
	- Taxi
	- Visualization
---
## webgl版出租车轨迹可视化
	数据来自公开数据源,主要利用echarts.js及mapbox.js两个包实现可视化效果
<html style="height: 100%">
   <head>
		<script src='https://api.mapbox.com/mapbox-gl-js/v0.38.0/mapbox-gl.js'></script>
		<link href='https://api.mapbox.com/mapbox-gl-js/v0.38.0/mapbox-gl.css' rel='stylesheet' />
       <meta charset="utf-8">
   </head>
   <body style="height: 100%; margin: 0">
      <div id="container" style="width:750px;height:500px;"></div>
      <br>
      <script type="text/javascript" src="http://data-visual.cn/datav/src/js/echarts/echarts-3.8.4.min.js"></script>

      <script type="text/javascript">
        var myChart = echarts.init(document.getElementById('container'));
		 
		mapboxgl.accessToken = 'pk.eyJ1IjoiZ3JlYXRyYWRhIiwiYSI6ImNqYW9iaDM0ZTBmZXAyeG1paW12MzM4MnAifQ.Lz_wF3srdlOYOJBvwWT5VA'; <!--Please do not use my token-->
		
		var uploadedDataURL = "../js/taxi.json";
		
		var taxiRoutes = [];
		
		
		$.get(uploadedDataURL, function(linedata)) {
				var data = line.data;
				var hStep = 300 / (data.length - 1);
				
				var i = 0;
				for (var x in data) {
					// i++;
					// if(i<5000)
					//     continue;
					var line = data[x];
					// if(busLines.length>500)
					//     break;
					var pointString = line.ROAD_LINE;
					var pointArr = pointString.split(';');
					var lnglats = [];
					for (var j in pointArr) {
						lnglats.push(pointArr[j].split(','))
					};
					taxiRoutes.push({
						coords: lnglats,
						lineStyle: {
							// color: echarts.color.modifyHSL('#5A94DF', Math.round(hStep * x))
						}
					})
				};
					myChart.setOption({
						mapbox: {
						center: [174.7838400879,-36.8551296749],
						zoom: 5.2,
						// pitch: 50,
						// bearing: -50,
						altitudeScale: 10000000,
						style: 'mapbox://styles/mapbox/dark-v9',
						postEffect: {
							enable: true,
							FXAA: {
								enable: true
							}
						},
						light: {
							main: {
								intensity: 1,
								shadow: true,
								shadowQuality: 'high'
									},
							ambient: {
								intensity: 0.
									}
								}
						},
						series: [{
							type: 'lines3D',

							coordinateSystem: 'mapbox',

							effect: {
								show: true,
								constantSpeed: 5,
								trailWidth: 1,
								trailLength: 10,
								trailOpacity: 1,
								spotIntensity: 2
							},

							blendMode: 'lighter',

							polyline: true,

							lineStyle: {
								width: 0.1,
								color: 'rgb(200, 40, 0)',
								opacity: 0.
							},

							data: {
								count: function() {
									return taxiRoutes.length;
								},
								getItem: function(idx) {
									return taxiRoutes[idx]
								}
							}
							}]
						})
		}
		
       </script>
   </body>
</html>


