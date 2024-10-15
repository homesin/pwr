var time = new Date();
const year = time.getFullYear() - 1911;
const lastyear = year - 1;
var month = time.getMonth() + 1;
//document.getElementById('btn1').innerText =year+ '年用電情形';
const IDs = ['09-55-6206-20-0', '09-55-6206-00-6', '09-18-5706-95-7', '09-16-6291-00-2', '09-05-7116-00-8', '09-05-7116-10-0', '09-18-5706-92-4', '09-16-6190-13-5', '09-16-6190-00-0'];
const waterexcludelist = ['51-06329700-9'];
const meterexcludelist = ['000002', '000003', '000004', ''];
const tpwrprop = [
    {
        "電號": "09-16-6190-00-0",
        "電號別名": "蘭潭教學行政區",
        "校區": "蘭潭"
    },
    {
        "電號": "09-16-6190-13-5",
        "電號別名": "蘭潭畜牧場區",
        "校區": "蘭潭"
    },
    {
        "電號": "09-16-6291-00-2",
        "電號別名": "蘭潭宿舍區",
        "校區": "蘭潭"
    },
    {
        "電號": "09-55-6206-00-6",
        "電號別名": "民雄主校區",
        "校區": "民雄"
    },
    {
        "電號": "09-55-6206-20-0",
        "電號別名": "民雄大學館創意樓",
        "校區": "民雄"
    },
    {
        "電號": "09-05-7116-00-8",
        "電號別名": "林森主校區",
        "校區": "林森"
    },
    {
        "電號": "09-05-7116-10-0",
        "電號別名": "林森樂育堂",
        "校區": "林森"
    },
    {
        "電號": "09-18-5706-95-7",
        "電號別名": "新民主校區",
        "校區": "新民"
    },
    {
        "電號": "09-18-5706-92-4",
        "電號別名": "新民動物醫院及泳池區",
        "校區": "新民"
    },
    {
        "電號": "09-30-6631-08-9",
        "電號別名": "社口林場10號",
        "校區": "社口"
    },
    {
        "電號": "09-30-6631-05-6",
        "電號別名": "社口林場10-1號",
        "校區": "社口"
    },
    {
        "電號": "09-11-5365-00-4",
        "電號別名": "忠義街首長宿舍",
        "校區": "宿舍"
    },
    {
        "電號": "09-16-8246-20-4",
        "電號別名": "八掌段803-1地號",
        "校區": "未知"
    },
    {
        "電號": "09-16-8355-20-7",
        "電號別名": "短竹段999-37地號",
        "校區": "未知"
    }
];
const waterprop = [
    {
        "校區": "蘭潭",
        "供水區": "蘭潭主校區",
        "水號": "51-18000201-5"
    },
    {
        "校區": "蘭潭",
        "供水區": "蘭潭能源系、育成中心",
        "水號": "51-18025522-8"
    },
    {
        "校區": "蘭潭",
        "供水區": "蘭潭宿舍1、2舍及昆蟲、咖啡、綠建築",
        "水號": "51-18000200-K"
    },
    {
        "校區": "蘭潭",
        "供水區": "蘭潭宿舍2、3、5、6舍",
        "水號": "51-18000100-6"
    },
    {
        "校區": "民雄",
        "供水區": "民雄全校區",
        "水號": "5Y-24001800-5"
    },
    {
        "校區": "林森",
        "供水區": "林森全校區",
        "水號": "51-03000800-2"
    },
    {
        "校區": "新民",
        "供水區": "新民管院及宿舍",
        "水號": "51-30963840-0"
    },
    {
        "校區": "新民",
        "供水區": "新民動物醫院",
        "水號": "51-19326740-5"
    },
    {
        "校區": "新民",
        "供水區": "新民游泳池",
        "水號": "51-19326735-8"
    },
    {
        "校區": "首長宿舍",
        "供水區": "忠義街首長宿舍",
        "水號": "51-06329700-9"
    }
];
const meterprop = [{ "DeviceID": "yy-meter-5", "area": "蘭潭", "MeterName": "行政中心" }, { "DeviceID": "yy-meter-9", "area": "蘭潭", "MeterName": "應化一館" }, { "DeviceID": "yy-meter-11", "area": "蘭潭", "MeterName": "電物二館、應化二館、農藝場管理室、電物一館" }, { "DeviceID": "yy-meter-13", "area": "蘭潭", "MeterName": "活動中心" }, { "DeviceID": "yy-meter-14", "area": "蘭潭", "MeterName": "理工大樓" }, { "DeviceID": "yy-meter-15", "area": "蘭潭", "MeterName": "嘉禾館總" }, { "DeviceID": "yy-meter-16", "area": "蘭潭", "MeterName": "動科館" }, { "DeviceID": "yy-meter-17", "area": "蘭潭", "MeterName": "森林館總" }, { "DeviceID": "yy-meter-18", "area": "蘭潭", "MeterName": "應物二館、應化二館MP" }, { "DeviceID": "yy-meter-19", "area": "蘭潭", "MeterName": "應物二館、應化二館ML" }, { "DeviceID": "yy-meter-20", "area": "蘭潭", "MeterName": "魚保中心" }, { "DeviceID": "yy-meter-21", "area": "蘭潭", "MeterName": "生資館" }, { "DeviceID": "yy-meter-22", "area": "蘭潭", "MeterName": "生農一、二館、植醫系" }, { "DeviceID": "yy-meter-23", "area": "蘭潭", "MeterName": "生科館" }, { "DeviceID": "yy-meter-24", "area": "蘭潭", "MeterName": "材料試驗場" }, { "DeviceID": "yy-meter-25", "area": "蘭潭", "MeterName": "國際交流學園" }, { "DeviceID": "yy-meter-27", "area": "蘭潭", "MeterName": "機能系+創新育成大樓" }, { "DeviceID": "yy-meter-29", "area": "蘭潭", "MeterName": "瑞穗館+警衛室+學生活動廣場" }, { "DeviceID": "yy-meter-30", "area": "蘭潭", "MeterName": "單身宿舍、教職員宿舍" }, { "DeviceID": "yy-meter-31", "area": "蘭潭", "MeterName": "綠建築" }, { "DeviceID": "yy-meter-32", "area": "蘭潭", "MeterName": "昆蟲館" }, { "DeviceID": "yy-meter-33", "area": "蘭潭", "MeterName": "禾康園" }, { "DeviceID": "yy-meter-34", "area": "蘭潭", "MeterName": "食品科學館" }, { "DeviceID": "yy-meter-35", "area": "蘭潭", "MeterName": "機電館" }, { "DeviceID": "yy-meter-36", "area": "蘭潭", "MeterName": "園藝技藝中心" }, { "DeviceID": "yy-meter-38", "area": "蘭潭", "MeterName": "食品加工廠" }, { "DeviceID": "yy-meter-39", "area": "蘭潭", "MeterName": "景觀學系大樓" }, { "DeviceID": "yy-meter-40", "area": "蘭潭", "MeterName": "生技健康館" }, { "DeviceID": "yy-meter-41", "area": "蘭潭", "MeterName": "生物機械產業實驗室" }, { "DeviceID": "yy-meter-42", "area": "蘭潭", "MeterName": "工程館" }, { "DeviceID": "yy-meter-43", "area": "蘭潭", "MeterName": "農園館" }, { "DeviceID": "yy-meter-44", "area": "蘭潭", "MeterName": "綜合教學大樓" }, { "DeviceID": "yy-meter-45", "area": "蘭潭", "MeterName": "圖書資訊館" }, { "DeviceID": "yy-meter-46", "area": "蘭潭", "MeterName": "園藝場管理室" }, { "DeviceID": "yy-meter-62", "area": "蘭潭", "MeterName": "菇舍" }, { "DeviceID": "yy-meter-63", "area": "蘭潭", "MeterName": "植物園" }, { "DeviceID": "yy-meter-65", "area": "蘭潭", "MeterName": "生物多樣性館" }, { "DeviceID": "yy-meter-66", "area": "蘭潭", "MeterName": "生農一、二館" }, { "DeviceID": "yy-meter-67", "area": "蘭潭", "MeterName": "植醫系館" }, { "DeviceID": "yy-meter-71", "area": "蘭潭", "MeterName": "畜牧場" }, { "DeviceID": "yy-meter-72", "area": "蘭潭", "MeterName": "木材工廠" }, { "DeviceID": "yy-meter-74", "area": "民雄", "MeterName": "學人宿舍" }, { "DeviceID": "yy-meter-75", "area": "民雄", "MeterName": "第9變電站、學人宿舍、男女宿舍、餐廳" }, { "DeviceID": "yy-meter-76", "area": "民雄", "MeterName": "樂育堂、工友室、游泳池、司令台、運動場" }, { "DeviceID": "yy-meter-77", "area": "民雄", "MeterName": "初教館、行政大樓" }, { "DeviceID": "yy-meter-78", "area": "民雄", "MeterName": "圖書館、教育館" }, { "DeviceID": "yy-meter-79", "area": "民雄", "MeterName": "科學館" }, { "DeviceID": "yy-meter-81", "area": "民雄", "MeterName": "教育館" }, { "DeviceID": "yy-meter-82", "area": "民雄", "MeterName": "大學館與創意樓" }, { "DeviceID": "yy-meter-84", "area": "民雄", "MeterName": "人文館" }, { "DeviceID": "yy-meter-85", "area": "民雄", "MeterName": "音樂館、社團教室、文薈館、藝術館" }, { "DeviceID": "yy-meter-C1", "area": "蘭潭", "MeterName": "森林館" }, { "DeviceID": "yy-meter-C2", "area": "蘭潭", "MeterName": "水生館" }, { "DeviceID": "yy-meter-C3", "area": "蘭潭", "MeterName": "生農一館" }, { "DeviceID": "yy-meter-C8", "area": "蘭潭", "MeterName": "景觀學系大樓" }, { "DeviceID": "yy-meter-C9", "area": "民雄", "MeterName": "男女宿舍加餐廳" }, { "DeviceID": "yy-meter-C10", "area": "民雄", "MeterName": "育樂堂總用電" }, { "DeviceID": "yy-meter-C11", "area": "民雄", "MeterName": "圖書館總用電" }, { "DeviceID": "sb-meter-12", "area": "新民", "MeterName": "新民A棟" }, { "DeviceID": "sb-meter-21", "area": "新民", "MeterName": "MVCBB B棟" }, { "DeviceID": "sb-meter-22", "area": "新民", "MeterName": "LBS1 明德樓" }, { "DeviceID": "sb-meter-31", "area": "新民", "MeterName": "動物總電表" }, { "DeviceID": "sb-meter-32", "area": "新民", "MeterName": "游泳池電表" }, { "DeviceID": "sb-meter-33", "area": "新民", "MeterName": "動物醫院電表" }]
var results;
Papa.parse('usage.txt', {
    header: true,
    download: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    complete: function (r) {
        results = r.data;
        //與去年相比();
    }
})

Papa.parse('water.txt', {
    header: true,
    download: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    complete: function (r) {
        wresults = r.data;
        //與去年相比();      
    }
})

Papa.parse('tpwr.txt', {
    header: true,
    download: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    complete: function (r) {
        tresults = r.data;
    }
})
Papa.parse('output.csv', {
    header: true,
    download: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    complete: function (r) {
        mresults = r.data.filter(e => moment(e.DataTimeStamp) < moment().add(-1, 'M'));

        MeterThisYear();
    }
})
function MeterThisYear() {
    let ary = [];
    for (let ii = 0; ii < mresults.length; ii++) {
        for (let i = 1; i < Object.keys(mresults[0]).length; i++) {
            ary.push({
                //用電年: moment(mresults[ii].DataTimeStamp).format('YYYY') - 1911 + '年',
                //用電月: moment(mresults[ii].DataTimeStamp).format('M月'),
                帳單年: moment(mresults[ii].DataTimeStamp).add(1, 'month').format('YYYY') - 1911 + '年',
                帳單月: moment(mresults[ii].DataTimeStamp).add(1, 'month').format('M月'),
                DeviceID: Object.keys(mresults[ii])[i],
                建築物: meterprop.find(e => e.DeviceID == Object.keys(mresults[ii])[i])?.MeterName,
                校區: meterprop.find(e => e.DeviceID == Object.keys(mresults[ii])[i])?.area,
                MonthUsageDegree: mresults[ii][Object.keys(mresults[ii])[i]],
            })
        }
    }
    result = JSON.parse(JSON.stringify(ary));
    result = result.filter(e => e.建築物);
    //result = result.filter(list => !meterexcludelist.includes(list.DeviceID));
    result = result.filter(e => e.帳單年 == moment().format('YYYY') - 1911 + '年');
    console.log("result:", result)

    let month1 = Math.max(...[...new Set(result.filter(e => e.帳單年 == year + '年').map(e => e.帳單月.replace('月', '')))]);
    document.querySelector('#head').innerText = `國立嘉義大學能源管理系統各棟建築物用電情形${month1 != 1 ? `(1月至${month1}月)` : '(1月)'}`;
    var renderer = $.pivotUtilities.subtotal_renderers["Table With Subtotal Row Heatmap"];
    var aggregator = $.pivotUtilities.aggregators["Integer Sum"](["MonthUsageDegree"]);
    var sortAs = $.pivotUtilities.sortAs
    //result = result.filter(word => word['帳單年'] == year);


    $("#output")
        .pivot(result, {
            dataClass: $.pivotUtilities.SubtotalPivotData,
            rows: ["校區", "建築物", "帳單年"],
            cols: ["帳單月"],
            aggregator: aggregator,
            sorters: {
                "校區": sortAs(["蘭潭", "民雄", "新民"]),
                //"帳單年": sortAs(["109年","108年"]),
                //"帳單月":sortAs(["1月","2月","3月","4月", "5月","6月","7月","8月","9月","10月","11月","12月"])
            },
            renderer: renderer,
            renderers: $.extend(
                $.pivotUtilities.renderers,
                $.pivotUtilities.plotly_renderers,
                $.pivotUtilities.export_renderers
            ),
            rendererOptions: {
                rowSubtotalDisplay: {
                    disableAfter: 1
                },
                colSubtotalDisplay: {
                    disableAfter: 1
                },
                /*heatmap: {
                    colorScaleGenerator: function(values) {
                        // Plotly happens to come with d3 on board
                        return Plotly.d3.scale.linear()
                            .domain([0, 10000, 100000])
                            .range(["#77F", "#FFF", "#F77"])
                    }
                }*/
            }
        });
}
function MeterAll() {
    let ary = [];
    mresults1 = mresults.filter(e => !['2020-11-01'].includes(e.DataTimeStamp));
    for (let ii = 0; ii < mresults1.length; ii++) {
        for (let i = 1; i < Object.keys(mresults1[0]).length; i++) {
            ary.push({
                //用電年: moment(mresults1[ii].DataTimeStamp).format('YYYY') - 1911 + '年',
                //用電月: moment(mresults1[ii].DataTimeStamp).format('M月'),
                帳單年: moment(mresults1[ii].DataTimeStamp).add(1, 'month').format('YYYY') - 1911 + '年',
                帳單月: moment(mresults1[ii].DataTimeStamp).add(1, 'month').format('M月'),
                DeviceID: Object.keys(mresults1[ii])[i],
                建築物: meterprop.find(e => e.DeviceID == Object.keys(mresults1[ii])[i])?.MeterName,
                校區: meterprop.find(e => e.DeviceID == Object.keys(mresults1[ii])[i])?.area,
                MonthUsageDegree: mresults1[ii][Object.keys(mresults1[ii])[i]],
            })
        }
    }
    result = JSON.parse(JSON.stringify(ary));
    result = result.filter(e => e.建築物);
    //result = result.filter(list => !meterexcludelist.includes(list.DeviceID));
    //console.log("result:", result)
    //console.log("result:", result.filter(e => e.建築物))


    let month1 = Math.max(...[...new Set(result.filter(e => e.帳單年 == year + '年').map(e => e.帳單月.replace('月', '')))]);
    document.querySelector('#head').innerText = `國立嘉義大學能源管理系統各棟建築物所有年度用電情形`;
    var renderer = $.pivotUtilities.subtotal_renderers["Table With Subtotal Row Heatmap"];
    var aggregator = $.pivotUtilities.aggregators["Integer Sum"](["MonthUsageDegree"]);
    var sortAs = $.pivotUtilities.sortAs
    //result = result.filter(word => word['帳單年'] == year);


    $("#output")
        .pivot(result, {
            dataClass: $.pivotUtilities.SubtotalPivotData,
            rows: ["校區", "建築物", "帳單年"],
            cols: ["帳單月"],
            aggregator: aggregator,
            sorters: {
                "校區": sortAs(["蘭潭", "民雄", "新民"]),
                //"帳單年": sortAs(["109年","108年"]),
                //"帳單月":sortAs(["1月","2月","3月","4月", "5月","6月","7月","8月","9月","10月","11月","12月"])
            },
            renderer: renderer,
            renderers: $.extend(
                $.pivotUtilities.renderers,
                $.pivotUtilities.plotly_renderers,
                $.pivotUtilities.export_renderers
            ),
            rendererOptions: {
                rowSubtotalDisplay: {
                    disableAfter: 1
                },
                colSubtotalDisplay: {
                    disableAfter: 1
                },
                /*heatmap: {
                    colorScaleGenerator: function(values) {
                        // Plotly happens to come with d3 on board
                        return Plotly.d3.scale.linear()
                            .domain([0, 10000, 100000])
                            .range(["#77F", "#FFF", "#F77"])
                    }
                }*/
            }
        });
}
function MeterRaw() {
    let ary = [];
    for (let ii = 0; ii < mresults.length; ii++) {
        for (let i = 1; i < Object.keys(mresults[0]).length; i++) {
            ary.push({
                //用電年: moment(mresults[ii].DataTimeStamp).format('YYYY') - 1911 + '年',
                //用電月: moment(mresults[ii].DataTimeStamp).format('M月'),
                帳單年: moment(mresults[ii].DataTimeStamp).add(1, 'month').format('YYYY') - 1911 + '年',
                帳單月: moment(mresults[ii].DataTimeStamp).add(1, 'month').format('M月'),
                DeviceID: Object.keys(mresults[ii])[i],
                建築物: meterprop.find(e => e.DeviceID == Object.keys(mresults[ii])[i])?.MeterName,
                校區: meterprop.find(e => e.DeviceID == Object.keys(mresults[ii])[i])?.area,
                MonthUsageDegree: mresults[ii][Object.keys(mresults[ii])[i]],
            })
        }
    }
    result = JSON.parse(JSON.stringify(ary));
    //result = result.filter(list => !meterexcludelist.includes(list.DeviceID));
    result = result.filter(e => e.建築物);
    //result = result.filter(e => e.帳單年 == '110年');

    let month1 = Math.max(...[...new Set(result.filter(e => e.帳單年 == year + '年').map(e => e.帳單月.replace('月', '')))]);
    document.querySelector('#head').innerText = `國立嘉義大學能源管理系統各棟建築物所有年度用電情形`;
    var renderer = $.pivotUtilities.subtotal_renderers["Table With Subtotal Row Heatmap"];
    var aggregator = $.pivotUtilities.aggregators["Integer Sum"](["MonthUsageDegree"]);
    var sortAs = $.pivotUtilities.sortAs
    //result = result.filter(word => word['帳單年'] == year);


    $("#output")
        .pivotUI(result, {
            dataClass: $.pivotUtilities.SubtotalPivotData,
            rows: ["校區", "建築物", "帳單年"],
            cols: ["帳單月"],
            aggregator: aggregator,
            sorters: {
                "校區": sortAs(["蘭潭", "民雄", "新民"]),
                //"帳單年": sortAs(["109年","108年"]),
                //"帳單月":sortAs(["1月","2月","3月","4月", "5月","6月","7月","8月","9月","10月","11月","12月"])
            },
            renderer: renderer,
            renderers: $.extend(
                $.pivotUtilities.renderers,
                $.pivotUtilities.plotly_renderers,
                $.pivotUtilities.export_renderers
            ),
            rendererOptions: {
                rowSubtotalDisplay: {
                    disableAfter: 1
                },
                colSubtotalDisplay: {
                    disableAfter: 1
                },
                /*heatmap: {
                    colorScaleGenerator: function(values) {
                        // Plotly happens to come with d3 on board
                        return Plotly.d3.scale.linear()
                            .domain([0, 10000, 100000])
                            .range(["#77F", "#FFF", "#F77"])
                    }
                }*/
            }
        });
}
// function 今年() {
//     let month1=Math.max(...[...new Set(results.filter(e=>e.帳單年==year).map(e=>e.帳單月))]);
//     document.querySelector('#head').innerText=`國立嘉義大學自設電錶今年度各棟建築物用電情形${month1!=1?`(1月至${month1}月)`:'(1月)'}`;
//     result = JSON.parse(JSON.stringify(results));
//     var renderer = $.pivotUtilities.subtotal_renderers["Table With Subtotal Row Heatmap"];
//     var aggregator = $.pivotUtilities.aggregators["Integer Sum"](["總用電度"]);
//     var sortAs = $.pivotUtilities.sortAs
//     result = result.filter(word => word['帳單年'] == year);
//     result.forEach(function (element, index) {
//         element["帳單月"] = element["帳單月"] + "月";
//         element["公開報表序號"] = element["公開報表序號"] + " " + element["用電建築物"];
//         element["帳單年"] = element["帳單年"] + "年";
//     })

//     $("#output")
//         .pivot(result, {
//             dataClass: $.pivotUtilities.SubtotalPivotData,
//             rows: ["校區", "公開報表序號"],
//             cols: ["帳單月"],
//             aggregator: aggregator,
//             sorters: {
//                 "校區": sortAs(["蘭潭", "民雄", "新民"]),
//                 //"帳單年": sortAs(["109年","108年"]),
//                 //"帳單月":sortAs(["1月","2月","3月","4月", "5月","6月","7月","8月","9月","10月","11月","12月"])
//             },
//             renderer: renderer,
//             renderers: $.extend(
//                 $.pivotUtilities.renderers,
//                 $.pivotUtilities.plotly_renderers,
//                 $.pivotUtilities.export_renderers
//             ),
//             rendererOptions: {
//                 rowSubtotalDisplay: {
//                     disableAfter: 1
//                 },
//                 colSubtotalDisplay: {
//                     disableAfter: 1
//                 },
//                 /*heatmap: {
//                     colorScaleGenerator: function(values) {
//                         // Plotly happens to come with d3 on board
//                         return Plotly.d3.scale.linear()
//                             .domain([0, 10000, 100000])
//                             .range(["#77F", "#FFF", "#F77"])
//                     }
//                 }*/
//             }
//         });
// }
// function 與去年相比() {
//     let month1=Math.max(...[...new Set(results.filter(e=>e.帳單年==year).map(e=>e.帳單月))]);
//     document.querySelector('#head').innerText=`國立嘉義大學自設電錶各棟建築物用電情形與去年相比${month!=1?`(1月至${month1}月)`:'(1月)'}`;
//     let filtermonth=[];for (let i = 1; i <= month1; i++) {filtermonth.push(i+'月')};
//     let filteryear=[0,-1].map(e=>e+year+'年');
//     result = JSON.parse(JSON.stringify(results));   
//     var renderer = $.pivotUtilities.subtotal_renderers["Table With Subtotal Row Heatmap"];
//     var aggregator = $.pivotUtilities.aggregators["Integer Sum"](["總用電度"]);
//     var sortAs = $.pivotUtilities.sortAs
//     result.forEach(function (element, index) {
//         element["帳單月"] = element["帳單月"] + "月";
//         element["公開報表序號"] = element["公開報表序號"] + " " + element["用電建築物"];
//         element["帳單年"] = element["帳單年"] + "年";
//     })
//     result = result.filter(e=>filteryear.includes(e.帳單年));
//     result = result.filter(e=>filtermonth.includes(e.帳單月));
//     $("#output")
//         .pivot(result, {
//             dataClass: $.pivotUtilities.SubtotalPivotData,
//             rows: ["校區", "公開報表序號", "帳單年"],
//             cols: ["帳單月"],
//             aggregator: aggregator,
//             sorters: {
//                 "校區": sortAs(["蘭潭", "民雄", "新民"]),
//                 //"帳單年": sortAs(["109年","108年"]),
//                 //"帳單月":sortAs(["1月","2月","3月","4月", "5月","6月","7月","8月","9月","10月","11月","12月"])
//             },
//             renderer: renderer,
//             renderers: $.extend(
//                 $.pivotUtilities.renderers,
//                 $.pivotUtilities.plotly_renderers,
//                 $.pivotUtilities.export_renderers
//             ),
//             rendererOptions: {
//                 rowSubtotalDisplay: {
//                     disableAfter: 1
//                 },
//                 colSubtotalDisplay: {
//                     disableAfter: 1
//                 },
//                 /*heatmap: {
//                     colorScaleGenerator: function(values) {
//                         // Plotly happens to come with d3 on board
//                         return Plotly.d3.scale.linear()
//                             .domain([0, 10000, 100000])
//                             .range(["#77F", "#FFF", "#F77"])
//                     }
//                 }*/
//             }
//         });
// }
// function 同期排行() {       
//     let month=Math.max(...[...new Set(results.filter(e=>e.帳單年==year).map(e=>e.帳單月))]);
//     let filteryear=[0,-1].map(e=>e+year);    
//     document.querySelector('#head').innerText=`國立嘉義大學自設電錶同期(${filteryear[0]}年${month}月及${filteryear[1]}年${month}月)比較`;
//     result = results.filter(e=>filteryear.includes(e.帳單年));   
//     result = results.filter(e =>  e.帳單月 == month);

//     result = JSON.parse(JSON.stringify(result));
//     ro = Array.from(
//         new Set(
//             result.map(e => e['公開報表序號'])))
//     result = ro.map(e1 => {
//         a = {};
//         r1 = results.filter(e => e['公開報表序號'] == e1 && e['帳單年'] === lastyear && e['帳單月'] === month)[0];
//         r11 = r1['總用電度'];
//         r2 = results.filter(e => e['公開報表序號'] == e1 && e['帳單年'] === year && e['帳單月'] === month)[0];
//         r21 = r2['總用電度'];        
//         r3 = r2['用電建築物'];
//         //a[r3]=r;
//         a['校區'] = r2['校區'];
//         a['公開報表序號'] = r2['公開報表序號'];
//         a['用電建築物'] = r2['用電建築物'];
//         a['本月用電量'] = r21;
//         a['去年同期用電量'] = r11;       
//         if (r11 != 0&&r11 != 'None') {
//             a['增減用電量百分比'] = Math.round(((r21 / r11) - 1) * 10000)/100;
//             a['增減用電量'] = r21 - r11;
//         } else {
//             a['增減用電量百分比'] = "None";
//             a['增減用電量'] = "None";
//         }
//         return a;
//     })
//     result=result.filter(e=>e['增減用電量百分比']!="None");
//     //result=alasql("select * from ? ORDER BY [增減用電量百分比] DESC ",[result]);
//     //var renderer = $.pivotUtilities.subtotal_renderers["Table With Subtotal Row Heatmap"];
//     //var aggregator = $.pivotUtilities.aggregators["First"](["增減用電量百分比"]);
//     var sortAs = $.pivotUtilities.sortAs    

//     $("#output")
//         .pivot(result, {
//             dataClass: $.pivotUtilities.SubtotalPivotData,
//             rows: ["增減用電量百分比","公開報表序號","用電建築物","本月用電量","去年同期用電量","增減用電量"],
//             //cols: ["帳單月"],
//             //aggregator: aggregator,
//             sorters: {
//                 "增減用電量百分比": function(a,b){ return b-a; } ,
//                 //"帳單年": sortAs(["109年","108年"]),
//                 //"帳單月":sortAs(["1月","2月","3月","4月", "5月","6月","7月","8月","9月","10月","11月","12月"])
//             },                  
//             renderers: $.extend(
//                 $.pivotUtilities.renderers,
//                 $.pivotUtilities.plotly_renderers,
//                 $.pivotUtilities.export_renderers
//             ),

//         });
//     //$('.pvtTotalLabel.pvtRowTotalLabel').text("增減用電量百分比(%)");
//     //$('.pvtTotalLabel.pvtColTotalLabel').parent().css('display','none');
//     $('.pvtTotal').css('display','none');
//     $('.pvtTotalLabel').css('display','none');
//     $('.pvtGrandTotal').css('display','none');
// }
// function 近5年度() {
//     let month=Math.max(...[...new Set(results.filter(e=>e.帳單年==year).map(e=>e.帳單月))]);
//     document.querySelector('#head').innerText=`國立嘉義大學自設電錶近5年度各棟建築物用電情形${month!=1?`(1月至${month}月)`:'(1月)'}`;
//     let filtermonth=[];for (let i = 1; i <= month; i++) {filtermonth.push(i+'月')};
//     let filteryear=[0,-1,-2,-3,-4].map(e=>e+year+'年');
//     result = JSON.parse(JSON.stringify(results));
//     var renderer = $.pivotUtilities.subtotal_renderers["Table With Subtotal Row Heatmap"];
//     var aggregator = $.pivotUtilities.aggregators["Integer Sum"](["總用電度"]);
//     var sortAs = $.pivotUtilities.sortAs;
//     //result = result.filter(word => word['帳單年'] == year | word['帳單年'] == year - 1 | word['帳單年'] == year - 2 | word['帳單年'] == year - 3 | word['帳單年'] == year - 4);
//     result.forEach(function (element, index) {
//         element["帳單月"] = element["帳單月"] + "月";
//         element["公開報表序號"] = element["公開報表序號"] + " " + element["用電建築物"];
//         element["帳單年"] = element["帳單年"] + "年";
//     })
//     result = result.filter(e=>filteryear.includes(e.帳單年));
//     result = result.filter(e=>filtermonth.includes(e.帳單月));
//     $("#output")
//         .pivot(result, {
//             dataClass: $.pivotUtilities.SubtotalPivotData,
//             rows: ["校區", "公開報表序號", "帳單年"],
//             cols: ["帳單月"],
//             aggregator: aggregator,
//             sorters: {
//                 "校區": sortAs(["蘭潭", "民雄", "新民"]),
//             },
//             renderer: renderer,
//             renderers: $.extend(
//                 $.pivotUtilities.renderers,
//                 $.pivotUtilities.plotly_renderers,
//                 $.pivotUtilities.export_renderers
//             ),
//             rendererOptions: {
//                 rowSubtotalDisplay: {
//                     disableAfter: 1
//                 },
//                 colSubtotalDisplay: {
//                     disableAfter: 0
//                 },

//             }
//         });
// }
function 所有年度() {
    //let month=Math.max(...[...new Set(results.filter(e=>e.帳單年==year).map(e=>e.帳單月))]);
    //let filtermonth=[];for (let i = 1; i <= month; i++) {filtermonth.push(i+'月')};
    result = JSON.parse(JSON.stringify(results));
    result.forEach(function (element, index) {
        element["帳單月"] = element["帳單月"] + "月";
        element["公開報表序號"] = element["公開報表序號"] + " " + element["用電建築物"];
        element["帳單年"] = element["帳單年"] + "年";
    })
    //result = result.filter(e=>filtermonth.includes(e.帳單月));
    document.querySelector('#head').innerText = `國立嘉義大學自設電錶所有年度各棟建築物用電情形`;
    var renderer = $.pivotUtilities.subtotal_renderers["Table With Subtotal Row Heatmap"];
    var aggregator = $.pivotUtilities.aggregators["Integer Sum"](["總用電度"]);
    var sortAs = $.pivotUtilities.sortAs
    $("#output")
        .pivot(result, {
            dataClass: $.pivotUtilities.SubtotalPivotData,
            rows: ["校區", "公開報表序號", "帳單年"],
            cols: ["帳單月"],
            aggregator: aggregator,
            sorters: {
                "校區": sortAs(["蘭潭", "民雄", "新民"]),
                //"帳單年": sortAs(["109年","108年"]),
                //"帳單月":sortAs(["1月","2月","3月","4月", "5月","6月","7月","8月","9月","10月","11月","12月"])
            },
            renderer: renderer,
            renderers: $.extend(
                $.pivotUtilities.renderers,
                $.pivotUtilities.plotly_renderers,
                $.pivotUtilities.export_renderers
            ),
            rendererOptions: {
                rowSubtotalDisplay: {
                    disableAfter: 1
                },
                colSubtotalDisplay: {
                    disableAfter: 0
                },
                /*heatmap: {
                    colorScaleGenerator: function(values) {
                        // Plotly happens to come with d3 on board
                        return Plotly.d3.scale.linear()
                            .domain([0, 10000, 100000])
                            .range(["#77F", "#FFF", "#F77"])
                    }
                }*/
            }
        });
}
function 自行定義() {
    document.querySelector('#head').innerText = '國立嘉義大學自設電錶各棟建築物用電情形自行定義報表';
    result = JSON.parse(JSON.stringify(results));
    $("#output")
        .pivotUI(result, {
            dataClass: $.pivotUtilities.SubtotalPivotData,
            rows: ["校區", "用電建築物", "公開報表序號", "帳單年"],
            cols: ["帳單月"],
            renderers: $.extend(
                $.pivotUtilities.subtotal_renderers,
                $.pivotUtilities.plotly_renderers,
                $.pivotUtilities.d3_renderers,
                $.pivotUtilities.export_renderers
            ),
        })
}

function 今年用水() {
    let month1 = Math.max(...[...new Set(wresults.filter(e => new Date(e.繳費年月).getFullYear() - 1911 == year).map(e => new Date(e.繳費年月).getMonth() + 1))]);
    document.querySelector('#head').innerText = `國立嘉義大學本年度用水情形${month != 1 ? `(1月至${month1}月)` : '(1月)'}`;
    result = JSON.parse(JSON.stringify(wresults));
    result = result.filter(e => new Date(e.繳費年月).getFullYear() - 1911 == year);
    result.forEach(e => {
        e.水費年 = new Date(e.繳費年月).getFullYear() - 1911 + '年';
        e.水費月 = new Date(e.繳費年月).getMonth() + 1 + '月';
        e.校區 = waterprop.find(e1 => e1.水號 == e.水號)?.校區;
        e.供水區 = waterprop.find(e1 => e1.水號 == e.水號)?.供水區;
    });
    result = result.filter(list => !waterexcludelist.includes(list.水號));
    $("#output")
        .pivot(result, {
            dataClass: $.pivotUtilities.SubtotalPivotData,
            rows: ["校區", "供水區"],
            cols: ["水費月"],
            aggregator: $.pivotUtilities.aggregators["Integer Sum"](["用水度數"]),
            sorters: {
                "校區": $.pivotUtilities.sortAs(["蘭潭", "民雄", "新民", "林森"]),
            },
            renderer: $.pivotUtilities.subtotal_renderers["Table With Subtotal Row Heatmap"],
            renderers: $.extend(
                $.pivotUtilities.subtotal_renderers,
                $.pivotUtilities.plotly_renderers,
                $.pivotUtilities.d3_renderers,
                $.pivotUtilities.export_renderers
            ),
            rendererOptions: {
                rowSubtotalDisplay: {
                    disableAfter: 1
                },
                colSubtotalDisplay: {
                    disableAfter: 0
                },
            }
        });
}
function 用水與去年相比() {
    let month1 = Math.max(...[...new Set(wresults.filter(e => new Date(e.繳費年月).getFullYear() - 1911 == year).map(e => new Date(e.繳費年月).getMonth() + 1))]);
    document.querySelector('#head').innerText = `國立嘉義大學本年度用水情形與去年相比${month != 1 ? `(1月至${month1}月)` : '(1月)'}`;
    let filtermonth = []; for (let i = 1; i <= month1; i++) { filtermonth.push(i + '月') };
    let filteryear = [0, -1].map(e => e + year + '年');
    result = JSON.parse(JSON.stringify(wresults));

    result.forEach(e => {
        e.水費年 = new Date(e.繳費年月).getFullYear() - 1911 + '年';
        e.水費月 = new Date(e.繳費年月).getMonth() + 1 + '月';
        e.校區 = waterprop.find(e1 => e1.水號 == e.水號)?.校區;
        e.供水區 = waterprop.find(e1 => e1.水號 == e.水號)?.供水區;
    });
    result = result.filter(list => !waterexcludelist.includes(list.水號));
    result = result.filter(e => filteryear.includes(e.水費年));
    result = result.filter(e => filtermonth.includes(e.水費月));
    $("#output")
        .pivot(result, {
            dataClass: $.pivotUtilities.SubtotalPivotData,
            rows: ["校區", "供水區", "水費年"],
            cols: ["水費月"],
            aggregator: $.pivotUtilities.aggregators["Integer Sum"](["用水度數"]),
            sorters: {
                "校區": $.pivotUtilities.sortAs(["蘭潭", "民雄", "新民", "林森"]),
            },
            renderer: $.pivotUtilities.subtotal_renderers["Table With Subtotal Row Heatmap"],
            renderers: $.extend(
                $.pivotUtilities.subtotal_renderers,
                $.pivotUtilities.plotly_renderers,
                $.pivotUtilities.d3_renderers,
                $.pivotUtilities.export_renderers
            ),
            rendererOptions: {
                rowSubtotalDisplay: {
                    disableAfter: 1
                },
                colSubtotalDisplay: {
                    disableAfter: 0
                },
            }
        });
}
function 近5年度用水() {
    let month1 = Math.max(...[...new Set(wresults.filter(e => new Date(e.繳費年月).getFullYear() - 1911 == year).map(e => new Date(e.繳費年月).getMonth() + 1))]);
    document.querySelector('#head').innerText = `國立嘉義大學近5年度用水情形${month != 1 ? `(1月至${month1}月)` : '(1月)'}`;
    let filtermonth = []; for (let i = 1; i <= month1; i++) { filtermonth.push(i + '月') };
    let filteryear = [0, -1, -2, -3, -4].map(e => e + year + '年');
    result = JSON.parse(JSON.stringify(wresults));
    result.forEach(e => {
        e.水費年 = new Date(e.繳費年月).getFullYear() - 1911 + '年';
        e.水費月 = new Date(e.繳費年月).getMonth() + 1 + '月';
        e.校區 = waterprop.find(e1 => e1.水號 == e.水號)?.校區;
        e.供水區 = waterprop.find(e1 => e1.水號 == e.水號)?.供水區;
    });
    result = result.filter(list => !waterexcludelist.includes(list.水號));
    result = result.filter(e => filteryear.includes(e.水費年));
    result = result.filter(e => filtermonth.includes(e.水費月));
    $("#output")
        .pivot(result, {
            dataClass: $.pivotUtilities.SubtotalPivotData,
            rows: ["校區", "供水區", "水費年"],
            cols: ["水費月"],
            aggregator: $.pivotUtilities.aggregators["Integer Sum"](["用水度數"]),
            sorters: {
                "校區": $.pivotUtilities.sortAs(["蘭潭", "民雄", "新民", "林森"]),
            },
            renderer: $.pivotUtilities.subtotal_renderers["Table With Subtotal Row Heatmap"],
            renderers: $.extend(
                $.pivotUtilities.subtotal_renderers,
                $.pivotUtilities.plotly_renderers,
                $.pivotUtilities.d3_renderers,
                $.pivotUtilities.export_renderers
            ),
            rendererOptions: {
                rowSubtotalDisplay: {
                    disableAfter: 1
                },
                colSubtotalDisplay: {
                    disableAfter: 0
                },
            }
        });
}
function 所有年度用水() {
    let month1 = Math.max(...[...new Set(wresults.filter(e => new Date(e.繳費年月).getFullYear() - 1911 == year).map(e => new Date(e.繳費年月).getMonth() + 1))]);
    document.querySelector('#head').innerText = `國立嘉義大學所有年度用水情形${month != 1 ? `(1月至${month1}月)` : '(1月)'}`;
    let filtermonth = []; for (let i = 1; i <= month1; i++) { filtermonth.push(i + '月') };
    result = JSON.parse(JSON.stringify(wresults));
    result.forEach(e => {
        e.水費年 = new Date(e.繳費年月).getFullYear() - 1911 + '年';
        e.水費月 = new Date(e.繳費年月).getMonth() + 1 + '月';
        e.校區 = waterprop.find(e1 => e1.水號 == e.水號)?.校區;
        e.供水區 = waterprop.find(e1 => e1.水號 == e.水號)?.供水區;
    });
    result = result.filter(e => filtermonth.includes(e.水費月));
    result = result.filter(list => !waterexcludelist.includes(list.水號));
    $("#output")
        .pivot(result, {
            dataClass: $.pivotUtilities.SubtotalPivotData,
            rows: ["校區", "供水區", "水費年"],
            cols: ["水費月"],
            aggregator: $.pivotUtilities.aggregators["Integer Sum"](["用水度數"]),
            sorters: {
                "校區": $.pivotUtilities.sortAs(["蘭潭", "民雄", "新民", "林森"]),
            },
            renderer: $.pivotUtilities.subtotal_renderers["Table With Subtotal Row Heatmap"],
            renderers: $.extend(
                $.pivotUtilities.subtotal_renderers,
                $.pivotUtilities.plotly_renderers,
                $.pivotUtilities.d3_renderers,
                $.pivotUtilities.export_renderers
            ),
            rendererOptions: {
                rowSubtotalDisplay: {
                    disableAfter: 1
                },
                colSubtotalDisplay: {
                    disableAfter: 0
                },
            }
        });
}

function 用水自行定義() {
    //let month1=Math.max(...[...new Set(wresults.filter(e=>e.水費年==year).map(e=>e.水費月))]);
    document.querySelector('#head').innerText = `國立嘉義大學近用水情形自行定義報表`;
    result = JSON.parse(JSON.stringify(wresults));
    result.forEach(e => {
        e.水費年 = new Date(e.繳費年月).getFullYear() - 1911 + '年';
        e.水費月 = new Date(e.繳費年月).getMonth() + 1 + '月';
        e.校區 = waterprop.find(e1 => e1.水號 == e.水號)?.校區;
        e.供水區 = waterprop.find(e1 => e1.水號 == e.水號)?.供水區;
    });

    $("#output")
        .pivotUI(result, {
            dataClass: $.pivotUtilities.SubtotalPivotData,
            rows: ["校區", "供水區", "水費年"],
            cols: ["水費月"],
            aggregator: $.pivotUtilities.aggregators["Integer Sum"](["用水度數"]),
            sorters: {
                "校區": $.pivotUtilities.sortAs(["蘭潭", "民雄", "新民", "林森"]),
            },
            renderer: $.pivotUtilities.subtotal_renderers["Table With Subtotal Row Heatmap"],
            renderers: $.extend(
                $.pivotUtilities.subtotal_renderers,
                $.pivotUtilities.plotly_renderers,
                $.pivotUtilities.d3_renderers,
                $.pivotUtilities.export_renderers
            ),
            rendererOptions: {
                rowSubtotalDisplay: {
                    disableAfter: 1
                },
                colSubtotalDisplay: {
                    disableAfter: 0
                },
            }
        });
}

function 今年用電() {
    let month1 = Math.max(...[...new Set(tresults.filter(e => new Date(e.收費月份).getFullYear() - 1911 == year).map(e => new Date(e.收費月份).getMonth() + 1))]);
    document.querySelector('#head').innerText = `國立嘉義大學本年度用電情形${month != 1 ? `(1月至${month1}月)` : '(1月)'}`;
    result = JSON.parse(JSON.stringify(tresults));
    result.forEach(e => {
        e.收費年 = new Date(e.收費月份).getFullYear() - 1911 + '年';
        e.收費月 = new Date(e.收費月份).getMonth() + 1 + '月';
        e.電號別名 = tpwrprop.find(e1 => e1.電號 == e.電號)?.電號別名;
        e.校區 = tpwrprop.find(e1 => e1.電號 == e.電號)?.校區;
    });
    result = result.filter(list => IDs.includes(list.電號));
    result = result.filter(word => word['收費年'] == year + '年');

    $("#output")
        .pivot(result, {
            dataClass: $.pivotUtilities.SubtotalPivotData,
            rows: ["校區", "電號別名"],
            cols: ["收費月"],
            aggregator: $.pivotUtilities.aggregators["Integer Sum"](["用電度數"]),
            sorters: {
                "校區": $.pivotUtilities.sortAs(["蘭潭", "民雄", "新民", "林森"]),
            },
            renderer: $.pivotUtilities.subtotal_renderers["Table With Subtotal Row Heatmap"],
            renderers: $.extend(
                $.pivotUtilities.subtotal_renderers,
                $.pivotUtilities.plotly_renderers,
                $.pivotUtilities.d3_renderers,
                $.pivotUtilities.export_renderers
            ),
            rendererOptions: {
                rowSubtotalDisplay: {
                    disableAfter: 1
                },
                colSubtotalDisplay: {
                    disableAfter: 0
                },
            }
        });
}
function 用電與去年相比() {
    let month1 = Math.max(...[...new Set(tresults.filter(e => new Date(e.收費月份).getFullYear() - 1911 == year).map(e => new Date(e.收費月份).getMonth() + 1))]);
    document.querySelector('#head').innerText = `國立嘉義大學本年度用電情形與去年相比${month != 1 ? `(1月至${month1}月)` : '(1月)'}`;
    let filtermonth = []; for (let i = 1; i <= month1; i++) { filtermonth.push(i + '月') };
    let filteryear = [0, -1].map(e => e + year + '年');
    result = JSON.parse(JSON.stringify(tresults));
    result.forEach(e => {
        e.收費年 = new Date(e.收費月份).getFullYear() - 1911 + '年';
        e.收費月 = new Date(e.收費月份).getMonth() + 1 + '月';
        e.電號別名 = tpwrprop.find(e1 => e1.電號 == e.電號)?.電號別名;
        e.校區 = tpwrprop.find(e1 => e1.電號 == e.電號)?.校區;
    });
    result = result.filter(list => IDs.includes(list.電號));
    result = result.filter(e => filteryear.includes(e.收費年));
    result = result.filter(e => filtermonth.includes(e.收費月));
    $("#output")
        .pivot(result, {
            dataClass: $.pivotUtilities.SubtotalPivotData,
            rows: ["校區", "電號別名", "收費年"],
            cols: ["收費月"],
            aggregator: $.pivotUtilities.aggregators["Integer Sum"](["用電度數"]),
            sorters: {
                "校區": $.pivotUtilities.sortAs(["蘭潭", "民雄", "新民", "林森"]),
            },
            renderer: $.pivotUtilities.subtotal_renderers["Table With Subtotal Row Heatmap"],
            renderers: $.extend(
                $.pivotUtilities.subtotal_renderers,
                $.pivotUtilities.plotly_renderers,
                $.pivotUtilities.d3_renderers,
                $.pivotUtilities.export_renderers
            ),
            rendererOptions: {
                rowSubtotalDisplay: {
                    disableAfter: 1
                },
                colSubtotalDisplay: {
                    disableAfter: 0
                },
            }
        });
}
function 近5年度用電() {
    let month1 = Math.max(...[...new Set(tresults.filter(e => new Date(e.收費月份).getFullYear() - 1911 == year).map(e => new Date(e.收費月份).getMonth() + 1))]);
    document.querySelector('#head').innerText = `國立嘉義大學近5年度用電情形${month != 1 ? `(1月至${month1}月)` : '(1月)'}`;
    let filtermonth = []; for (let i = 1; i <= month1; i++) { filtermonth.push(i + '月') };
    let filteryear = [0, -1, -2, -3, -4].map(e => e + year + '年');
    result = JSON.parse(JSON.stringify(tresults));
    result.forEach(e => {
        e.收費年 = new Date(e.收費月份).getFullYear() - 1911 + '年';
        e.收費月 = new Date(e.收費月份).getMonth() + 1 + '月';
        e.電號別名 = tpwrprop.find(e1 => e1.電號 == e.電號)?.電號別名;
        e.校區 = tpwrprop.find(e1 => e1.電號 == e.電號)?.校區;
    });
    result = result.filter(list => IDs.includes(list.電號));
    result = result.filter(e => filteryear.includes(e.收費年));
    result = result.filter(e => filtermonth.includes(e.收費月));

    $("#output")
        .pivot(result, {
            dataClass: $.pivotUtilities.SubtotalPivotData,
            rows: ["校區", "電號別名", '收費年'],
            cols: ["收費月"],
            aggregator: $.pivotUtilities.aggregators["Integer Sum"](["用電度數"]),
            sorters: {
                "校區": $.pivotUtilities.sortAs(["蘭潭", "民雄", "新民", "林森"]),
            },
            renderer: $.pivotUtilities.subtotal_renderers["Table With Subtotal Row Heatmap"],
            renderers: $.extend(
                $.pivotUtilities.subtotal_renderers,
                $.pivotUtilities.plotly_renderers,
                $.pivotUtilities.d3_renderers,
                $.pivotUtilities.export_renderers
            ),
            rendererOptions: {
                rowSubtotalDisplay: {
                    disableAfter: 1
                },
                colSubtotalDisplay: {
                    disableAfter: 0
                },
            }
        });
}
function 所有年度用電() {
    let month1 = Math.max(...[...new Set(tresults.filter(e => new Date(e.收費月份).getFullYear() - 1911 == year).map(e => new Date(e.收費月份).getMonth() + 1))]);
    document.querySelector('#head').innerText = `國立嘉義大學所有年度用電情形${month != 1 ? `(1月至${month1}月)` : '(1月)'}`;
    let filtermonth = []; for (let i = 1; i <= month1; i++) { filtermonth.push(i + '月') };
    result = JSON.parse(JSON.stringify(tresults));
    result.forEach(e => {
        e.收費年 = new Date(e.收費月份).getFullYear() - 1911 + '年';
        e.收費月 = new Date(e.收費月份).getMonth() + 1 + '月';
        e.電號別名 = tpwrprop.find(e1 => e1.電號 == e.電號)?.電號別名;
        e.校區 = tpwrprop.find(e1 => e1.電號 == e.電號)?.校區;
    });
    result = result.filter(list => IDs.includes(list.電號));
    result = result.filter(e => filtermonth.includes(e.收費月));

    $("#output")
        .pivot(result, {
            dataClass: $.pivotUtilities.SubtotalPivotData,
            rows: ["校區", "電號別名", "收費年"],
            cols: ["收費月"],
            aggregator: $.pivotUtilities.aggregators["Integer Sum"](["用電度數"]),
            sorters: {
                "校區": $.pivotUtilities.sortAs(["蘭潭", "民雄", "新民", "林森"]),
            },
            renderer: $.pivotUtilities.subtotal_renderers["Table With Subtotal Row Heatmap"],
            renderers: $.extend(
                $.pivotUtilities.subtotal_renderers,
                $.pivotUtilities.plotly_renderers,
                $.pivotUtilities.d3_renderers,
                $.pivotUtilities.export_renderers
            ),
            rendererOptions: {
                rowSubtotalDisplay: {
                    disableAfter: 1
                },
                colSubtotalDisplay: {
                    disableAfter: 0
                },
            }
        });
}
function 用電自行定義() {
    document.querySelector('#head').innerText = `國立嘉義大學所有年度用電情形自行定義報表`;
    let result = JSON.parse(JSON.stringify(tresults));
    result.forEach(e => {
        e.收費年 = new Date(e.收費月份).getFullYear() - 1911 + '年';
        e.收費月 = new Date(e.收費月份).getMonth() + 1 + '月';
        e.電號別名 = tpwrprop.find(e1 => e1.電號 == e.電號)?.電號別名;
        e.校區 = tpwrprop.find(e1 => e1.電號 == e.電號)?.校區;
    });
    $("#output")
        .pivotUI(result, {
            dataClass: $.pivotUtilities.SubtotalPivotData,
            rows: ["校區", "電號別名", "收費年"],
            cols: ["收費月"],
            aggregator: $.pivotUtilities.aggregators["Sum"](["用電度數"]),
            sorters: {
                "校區": $.pivotUtilities.sortAs(["蘭潭", "民雄", "新民", "林森"]),
            },
            renderer: $.pivotUtilities.subtotal_renderers["Table With Subtotal Row Heatmap"],
            renderers: $.extend(
                $.pivotUtilities.subtotal_renderers,
                $.pivotUtilities.plotly_renderers,
                $.pivotUtilities.d3_renderers,
                $.pivotUtilities.export_renderers
            ),
            rendererOptions: {
                rowSubtotalDisplay: {
                    disableAfter: 1
                },
                colSubtotalDisplay: {
                    disableAfter: 0
                },
            }
        });
}












