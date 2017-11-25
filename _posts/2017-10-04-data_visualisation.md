---
layout:     post
title:      Some Data Visualization Examples
subtitle:   
date:       2017-10-04
author:     Da Lei
header-img: img/home-bg-art.jpg
catalog: true
tags:
    - Visualization
---


## Interactive Figure

### A dynamic demonstration displaying intercity bus passenger distribution of Jiangsu, China.
 [click this](/4-30/test2.html) 

## The Bikesharing System in Nanjing
### OD pairs
A geographical figure shows Nanjing bikesharing OD pairs on a weekday.
The yellow points in this picture denotes the metro stations in Nanjing.
![od pairs](/img/od pairs.png)

### The impact of adverse weather on bikesharing usage in peak hours.
As shown in my figure below, most of the docking stations not significantly affected by any adverse weather factors (stations denoted by blue dots) are located in the areas where the bike usage is pretty high. These areas are considered to be densely populated and equipped with various municipal facilities. Most bike trips in such areas are usually work-based or mandatory and thus naturally less affected by weather. On the contrary, the docking stations located in other areas seems to be more sensitive to adverse weather effects and bike-sharing trips generating in such stations are more discretionary.
![od pairs](/img/peak_blue_color.jpg)

<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title></title>
    <meta charset="utf-8" />
    <script src="echarts.js"></script>
</head>
<body>
    <div id="main" style="width: 1350px;height:750px;"></div>
    <script>
        var myChart = echarts.init(document.getElementById('main'), 'dark');
        var option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data: ['直达', '营销广告', '搜索引擎', '邮件营销', '联盟广告', '视频广告', '百度', '谷歌', '必应', '其他']
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    selectedMode: 'single',
                    radius: [0, '30%'],

                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        { value: 335, name: '直达', selected: true },
                        { value: 679, name: '营销广告' },
                        { value: 1548, name: '搜索引擎' }
                    ]
                },
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['40%', '55%'],

                    data: [
                        { value: 335, name: '直达' },
                        { value: 310, name: '邮件营销' },
                        { value: 234, name: '联盟广告' },
                        { value: 135, name: '视频广告' },
                        { value: 1048, name: '百度' },
                        { value: 251, name: '谷歌' },
                        { value: 147, name: '必应' },
                        { value: 102, name: '其他' }
                    ]
                }
            ]
        };
        myChart.setOption(option)
    </script>
</body>
</html>
