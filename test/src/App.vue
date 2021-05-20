<template>
    <div style="height: 100%; margin: 20px">
        <Echarts v-model="list" />
        <el-button type="danger" icon="el-icon-delete" @click="deleteList"
            >删除</el-button
        >
        <el-button type="primary" icon="el-icon-plus" @click="addList"
            >添加</el-button
        >
    </div>
</template>

<script>
import '../../dist/maple.css';
/**
 * 方式一
 */
// import { Echarts } from '../../dist/maple.js';
/**
 * 方式二
 */
import Vue from 'vue';
import Echarts from '../../dist/maple.js';
Vue.use(Echarts);
/**
 * 本地调试
 */
// import Echarts from './components/Echarts';

export default {
    // components: { Echarts }, // 配合方式一
    data() {
        const publicOpt = {}; // 公共配置
        return {
            publicOpt,
            list: [
                {
                    key: 1,
                    option: Object.assign(
                        {
                            title: {
                                text: '折线图堆叠'
                            },
                            tooltip: {
                                trigger: 'axis'
                            },
                            legend: {
                                data: [
                                    '邮件营销',
                                    '联盟广告',
                                    '视频广告',
                                    '直接访问',
                                    '搜索引擎'
                                ]
                            },
                            grid: {
                                left: '3%',
                                right: '4%',
                                bottom: '3%',
                                containLabel: true
                            },
                            toolbox: {
                                feature: {
                                    saveAsImage: {}
                                }
                            },
                            xAxis: {
                                type: 'category',
                                boundaryGap: false,
                                data: [
                                    '周一',
                                    '周二',
                                    '周三',
                                    '周四',
                                    '周五',
                                    '周六',
                                    '周日'
                                ]
                            },
                            yAxis: {
                                type: 'value'
                            },
                            series: [
                                {
                                    name: '邮件营销',
                                    type: 'line',
                                    stack: '总量',
                                    data: [120, 132, 101, 134, 90, 230, 210]
                                },
                                {
                                    name: '联盟广告',
                                    type: 'line',
                                    stack: '总量',
                                    data: [220, 182, 191, 234, 290, 330, 310]
                                },
                                {
                                    name: '视频广告',
                                    type: 'line',
                                    stack: '总量',
                                    data: [150, 232, 201, 154, 190, 330, 410]
                                },
                                {
                                    name: '直接访问',
                                    type: 'line',
                                    stack: '总量',
                                    data: [320, 332, 301, 334, 390, 330, 320]
                                },
                                {
                                    name: '搜索引擎',
                                    type: 'line',
                                    stack: '总量',
                                    data: [820, 932, 901, 934, 1290, 1330, 1320]
                                }
                            ]
                        },
                        publicOpt
                    )
                },
                {
                    key: 2,
                    option: Object.assign(
                        {
                            title: {
                                text: '某站点用户访问来源',
                                subtext: '纯属虚构',
                                left: 'center'
                            },
                            tooltip: {
                                trigger: 'item'
                            },
                            legend: {
                                orient: 'vertical',
                                left: 'left'
                            },
                            series: [
                                {
                                    name: '访问来源',
                                    type: 'pie',
                                    radius: '50%',
                                    data: [
                                        { value: 1048, name: '搜索引擎' },
                                        { value: 735, name: '直接访问' },
                                        { value: 580, name: '邮件营销' },
                                        { value: 484, name: '联盟广告' },
                                        { value: 300, name: '视频广告' }
                                    ],
                                    emphasis: {
                                        itemStyle: {
                                            shadowBlur: 10,
                                            shadowOffsetX: 0,
                                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                                        }
                                    }
                                }
                            ]
                        },
                        publicOpt
                    )
                }
            ]
        };
    },
    methods: {
        deleteList() {
            this.list.splice(0, 1);
        },
        addList() {
            const { publicOpt, list } = this;

            list.push({
                key: 3,
                option: Object.assign(publicOpt, {
                    xAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            data: [120, 200, 150, 80, 70, 110, 130],
                            type: 'bar',
                            showBackground: true,
                            backgroundStyle: {
                                color: 'rgba(180, 180, 180, 0.2)'
                            }
                        }
                    ]
                })
            });
        }
    }
};
</script>

<style>
html,
body {
    background: #909399;
    margin: 0;
    padding: 0;
    height: 100%;
}
</style>
