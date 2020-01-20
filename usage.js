var time=new Date();
const year=time.getFullYear()-1911;
const lastyear=year-1;
const month=time.getMonth();
//document.getElementById('btn1').innerText =year+ '年用電情形';
var results;
Papa.parse('usage.txt', {
    header: true,
    download: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    complete: function(r) {
       results=r.data; 
       與去年相比();      
    }
})

Papa.parse('water.txt', {
    header: true,
    download: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    complete: function(r) {
       wresults=r.data; 
       //與去年相比();      
    }
})

Papa.parse('tpwr.txt', {
    header: true,
    download: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    complete: function(r) {
       tresults=r.data;           
    }
})

function 所有年度(){

    /*$.getJSON('usage.json',function(data){
            var sum = $.pivotUtilities.aggregatorTemplates.sum;
            var numberFormat = $.pivotUtilities.numberFormat;
            var heatmap=$.pivotUtilities.renderers["Row Heatmap"];
            //var intFormat = numberFormat({digitsAfterecimal: 0});
            $("#output")
            .pivot(data, {
                rows: ["校區","公開報表序號","用電建築物","帳單年"],
                cols: ["帳單月"] ,
                aggregator: sum()(["總用電度"]),
                renderer: heatmap
            });
        });
        */
    //result=results.slice();
    result=JSON.parse(JSON.stringify(results));
    //var sum = $.pivotUtilities.aggregatorTemplates.sum;
    //var numberFormat = $.pivotUtilities.numberFormat;    
    var renderer = $.pivotUtilities.subtotal_renderers["Table With Subtotal Row Heatmap"];
    //var aggregator = $.pivotUtilities.subtotal_aggregators["Sum As Fraction Of Parent Row"](["總用電度"]);
    var aggregator = $.pivotUtilities.aggregators["Integer Sum"](["總用電度"]);
    var sortAs =$.pivotUtilities.sortAs
    
    
            //console.log(results);
            //data = results.data;
            //var lookupMonth = ["","1月","2月","3月","4月", "5月","6月","7月","8月","9月","10月","11月","12月"];
    result.forEach(function (element, index){
                /*rstflt=results.data.filter(word => 
                    [element["帳單年"]-1].includes(word['帳單年']) 
                    & [element["帳單月"]].includes(word['帳單月']) 
                    & [element["公開報表序號"]].includes(word['公開報表序號']) );
                if(rstflt.length==0){
                    element["上年度總用電度"]="";
                }else{
                    element["上年度總用電度"]=rstflt[0]['總用電度'];
                }
                */
                //element["帳單月"]=lookupMonth[element["帳單月"]];
        element["帳單月"]= element["帳單月"]+"月";
        element["公開報表序號"]=element["公開報表序號"]+" "+element["用電建築物"];
        element["帳單年"]=element["帳單年"]+"年";          
    })        
            
    $("#output")
        .pivot(result, {
            dataClass: $.pivotUtilities.SubtotalPivotData,                    
            rows: ["校區","公開報表序號","帳單年"],
            cols: ["帳單月"] ,
            aggregator: aggregator,
            sorters: {
                "校區": sortAs(["蘭潭","民雄","新民"]),
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
function 近5年度(){

    result=JSON.parse(JSON.stringify(results));    
    var renderer = $.pivotUtilities.subtotal_renderers["Table With Subtotal Row Heatmap"];    
    var aggregator = $.pivotUtilities.aggregators["Integer Sum"](["總用電度"]);
    var sortAs =$.pivotUtilities.sortAs;    
    result=result.filter(word=> word['帳單年']==year | word['帳單年']==year-1| word['帳單年']==year-2| word['帳單年']==year-3| word['帳單年']==year-4);
    result.forEach(function (element, index){    
        element["帳單月"]= element["帳單月"]+"月";
        element["公開報表序號"]=element["公開報表序號"]+" "+element["用電建築物"];
        element["帳單年"]=element["帳單年"]+"年";          
    })        
    $("#output")
        .pivot(result, {
            dataClass: $.pivotUtilities.SubtotalPivotData,                    
            rows: ["校區","公開報表序號","帳單年"],
            cols: ["帳單月"] ,
            aggregator: aggregator,
            sorters: {
                "校區": sortAs(["蘭潭","民雄","新民"]),            
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
                       
            }
    });   
}

function 自行定義(){
    result=JSON.parse(JSON.stringify(results));
    //sum = $.pivotUtilities.subtotal_aggregators["Sum As Fraction Of Parent Row"];
    $("#output")
        .pivotUI(result, {
            dataClass: $.pivotUtilities.SubtotalPivotData,            
            rows: ["校區","用電建築物","公開報表序號","帳單年"],
            cols: ["帳單月"] ,
            //aggregator: sum(["總用電度"]),
            //renderer:$.pivotUtilities.subtotal_renderers["Table With Subtotal Row Heatmap"],
            //renderers: $.pivotUtilities.subtotal_renderers,
            renderers:$.extend(
                $.pivotUtilities.subtotal_renderers,
                $.pivotUtilities.plotly_renderers,
                $.pivotUtilities.d3_renderers,
                $.pivotUtilities.export_renderers
                ),
            //rendererName: "Table With Subtotal"                    
        })      
}

function 與去年相比(){

    /*$.getJSON('usage.json',function(data){
            var sum = $.pivotUtilities.aggregatorTemplates.sum;
            var numberFormat = $.pivotUtilities.numberFormat;
            var heatmap=$.pivotUtilities.renderers["Row Heatmap"];
            //var intFormat = numberFormat({digitsAfterecimal: 0});
            $("#output")
            .pivot(data, {
                rows: ["校區","公開報表序號","用電建築物","帳單年"],
                cols: ["帳單月"] ,
                aggregator: sum()(["總用電度"]),
                renderer: heatmap
            });
        });
        */
    //result=results.slice();
    result=JSON.parse(JSON.stringify(results));
    //var sum = $.pivotUtilities.aggregatorTemplates.sum;
    //var numberFormat = $.pivotUtilities.numberFormat;    
    var renderer = $.pivotUtilities.subtotal_renderers["Table With Subtotal Row Heatmap"];
    //var aggregator = $.pivotUtilities.subtotal_aggregators["Sum As Fraction Of Parent Row"](["總用電度"]);
    var aggregator = $.pivotUtilities.aggregators["Integer Sum"](["總用電度"]);
    var sortAs =$.pivotUtilities.sortAs
    result=result.filter(word=>word['帳單年']==lastyear | word['帳單年']==year);    
            //console.log(results);
            //data = results.data;
            //var lookupMonth = ["","1月","2月","3月","4月", "5月","6月","7月","8月","9月","10月","11月","12月"];
    result.forEach(function (element, index){
                /*rstflt=results.data.filter(word => 
                    [element["帳單年"]-1].includes(word['帳單年']) 
                    & [element["帳單月"]].includes(word['帳單月']) 
                    & [element["公開報表序號"]].includes(word['公開報表序號']) );
                if(rstflt.length==0){
                    element["上年度總用電度"]="";
                }else{
                    element["上年度總用電度"]=rstflt[0]['總用電度'];
                }
                */
                //element["帳單月"]=lookupMonth[element["帳單月"]];
        element["帳單月"]= element["帳單月"]+"月";
        element["公開報表序號"]=element["公開報表序號"]+" "+element["用電建築物"];
        element["帳單年"]=element["帳單年"]+"年";          
    })        
            
    $("#output")
        .pivot(result, {
            dataClass: $.pivotUtilities.SubtotalPivotData,                    
            rows: ["校區","公開報表序號","帳單年"],
            cols: ["帳單月"],          
            aggregator: aggregator,
            sorters: {
                "校區": sortAs(["蘭潭","民雄","新民"]),
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
function 今年(){

    /*$.getJSON('usage.json',function(data){
            var sum = $.pivotUtilities.aggregatorTemplates.sum;
            var numberFormat = $.pivotUtilities.numberFormat;
            var heatmap=$.pivotUtilities.renderers["Row Heatmap"];
            //var intFormat = numberFormat({digitsAfterecimal: 0});
            $("#output")
            .pivot(data, {
                rows: ["校區","公開報表序號","用電建築物","帳單年"],
                cols: ["帳單月"] ,
                aggregator: sum()(["總用電度"]),
                renderer: heatmap
            });
        });
        */
    //result=results.slice();
    result=JSON.parse(JSON.stringify(results));
    //var sum = $.pivotUtilities.aggregatorTemplates.sum;
    //var numberFormat = $.pivotUtilities.numberFormat;    
    var renderer = $.pivotUtilities.subtotal_renderers["Table With Subtotal Row Heatmap"];
    //var aggregator = $.pivotUtilities.subtotal_aggregators["Sum As Fraction Of Parent Row"](["總用電度"]);
    var aggregator = $.pivotUtilities.aggregators["Integer Sum"](["總用電度"]);
    var sortAs =$.pivotUtilities.sortAs
    result=result.filter(word=>word['帳單年']==year);    
            //console.log(results);
            //data = results.data;
            //var lookupMonth = ["","1月","2月","3月","4月", "5月","6月","7月","8月","9月","10月","11月","12月"];
    result.forEach(function (element, index){
                /*rstflt=results.data.filter(word => 
                    [element["帳單年"]-1].includes(word['帳單年']) 
                    & [element["帳單月"]].includes(word['帳單月']) 
                    & [element["公開報表序號"]].includes(word['公開報表序號']) );
                if(rstflt.length==0){
                    element["上年度總用電度"]="";
                }else{
                    element["上年度總用電度"]=rstflt[0]['總用電度'];
                }
                */
                //element["帳單月"]=lookupMonth[element["帳單月"]];
        element["帳單月"]= element["帳單月"]+"月";
        element["公開報表序號"]=element["公開報表序號"]+" "+element["用電建築物"];
        element["帳單年"]=element["帳單年"]+"年";          
    })        
            
    $("#output")
        .pivot(result, {
            dataClass: $.pivotUtilities.SubtotalPivotData,                    
            rows: ["校區","公開報表序號"],
            cols: ["帳單月"],          
            aggregator: aggregator,
            sorters: {
                "校區": sortAs(["蘭潭","民雄","新民"]),
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

function 所有年度用水(){

    result=JSON.parse(JSON.stringify(wresults));   
    result.forEach(function (element, index){
        element["水費月"]= element["水費月"]+"月";
        element["水費年"]=element["水費年"]+"年";          
    })  
    $("#output")
        .pivot(result, {
            dataClass: $.pivotUtilities.SubtotalPivotData,                    
            rows: ["校區","供水區","水費年"],
            cols: ["水費月"] ,
            aggregator: $.pivotUtilities.aggregators["Integer Sum"](["用水度數"]),
            sorters: {
                "校區": $.pivotUtilities.sortAs(["蘭潭","民雄","新民","林森"]),
            },
            renderer: $.pivotUtilities.subtotal_renderers["Table With Subtotal Row Heatmap"],                    
            renderers:$.extend(
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

function 今年用水(){

    result=JSON.parse(JSON.stringify(wresults));  
    result=result.filter(word=>word['水費年']==year); 
    result.forEach(function (element, index){
        element["水費月"]= element["水費月"]+"月";
        element["水費年"]=element["水費年"]+"年";          
    })   
    
    $("#output")
        .pivot(result, {
            dataClass: $.pivotUtilities.SubtotalPivotData,                    
            rows: ["校區","供水區"],
            cols: ["水費月"] ,
            aggregator: $.pivotUtilities.aggregators["Integer Sum"](["用水度數"]),
            sorters: {
                "校區": $.pivotUtilities.sortAs(["蘭潭","民雄","新民","林森"]),
            },
            renderer: $.pivotUtilities.subtotal_renderers["Table With Subtotal Row Heatmap"],                    
            renderers:$.extend(
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

function 用水與去年相比(){

    result=JSON.parse(JSON.stringify(wresults));   
    result=result.filter(word=>word['水費年']==lastyear | word['水費年']==year); 
    result.forEach(function (element, index){
        element["水費月"]= element["水費月"]+"月";
        element["水費年"]=element["水費年"]+"年";          
    })        
    $("#output")
        .pivot(result, {
            dataClass: $.pivotUtilities.SubtotalPivotData,                    
            rows: ["校區","供水區","水費年"],
            cols: ["水費月"] ,
            aggregator: $.pivotUtilities.aggregators["Integer Sum"](["用水度數"]),
            sorters: {
                "校區": $.pivotUtilities.sortAs(["蘭潭","民雄","新民","林森"]),
            },
            renderer: $.pivotUtilities.subtotal_renderers["Table With Subtotal Row Heatmap"],                    
            renderers:$.extend(
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
function 近5年度用水(){

    result=JSON.parse(JSON.stringify(wresults));   
    result=result.filter(word=> word['水費年']==year | word['水費年']==year-1| word['水費年']==year-2| word['水費年']==year-3| word['水費年']==year-4);
    result.forEach(function (element, index){
        element["水費月"]= element["水費月"]+"月";
        element["水費年"]=element["水費年"]+"年";          
    })        
    $("#output")
        .pivot(result, {
            dataClass: $.pivotUtilities.SubtotalPivotData,                    
            rows: ["校區","供水區","水費年"],
            cols: ["水費月"] ,
            aggregator: $.pivotUtilities.aggregators["Integer Sum"](["用水度數"]),
            sorters: {
                "校區": $.pivotUtilities.sortAs(["蘭潭","民雄","新民","林森"]),
            },
            renderer: $.pivotUtilities.subtotal_renderers["Table With Subtotal Row Heatmap"],                    
            renderers:$.extend(
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

function 用水自行定義(){

    result=JSON.parse(JSON.stringify(wresults));   
    result.forEach(function (element, index){
        element["水費月"]= element["水費月"]+"月";
        element["水費年"]=element["水費年"]+"年";          
    })  
    $("#output")
        .pivotUI(result, {
            dataClass: $.pivotUtilities.SubtotalPivotData,                    
            rows: ["校區","供水區","水費年"],
            cols: ["水費月"] ,
            aggregator: $.pivotUtilities.aggregators["Integer Sum"](["用水度數"]),
            sorters: {
                "校區": $.pivotUtilities.sortAs(["蘭潭","民雄","新民","林森"]),
            },
            renderer: $.pivotUtilities.subtotal_renderers["Table With Subtotal Row Heatmap"],                    
            renderers:$.extend(
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

function 所有年度用電(){

    result=JSON.parse(JSON.stringify(tresults));   
    result.forEach(function (element, index){
        element["收費月"]= element["收費月"]+"月";
        element["收費年"]=element["收費年"]+"年";          
    })  
    $("#output")
        .pivot(result, {
            dataClass: $.pivotUtilities.SubtotalPivotData,                    
            rows: ["校區","校區電號別","收費年"],
            cols: ["收費月"] ,
            aggregator: $.pivotUtilities.aggregators["Integer Sum"](["用電數"]),
            sorters: {
                "校區": $.pivotUtilities.sortAs(["蘭潭","民雄","新民","林森"]),
            },
            renderer: $.pivotUtilities.subtotal_renderers["Table With Subtotal Row Heatmap"],                    
            renderers:$.extend(
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

function 今年用電(){

    result=JSON.parse(JSON.stringify(tresults));  
    result=result.filter(word=>word['收費年']==year); 
    result.forEach(function (element, index){
        element["收費月"]= element["收費月"]+"月";
        element["收費年"]=element["收費年"]+"年";          
    })    
    
    $("#output")
        .pivot(result, {
            dataClass: $.pivotUtilities.SubtotalPivotData,                    
            rows: ["校區","校區電號別"],
            cols: ["收費月"] ,
            aggregator: $.pivotUtilities.aggregators["Integer Sum"](["用電數"]),
            sorters: {
                "校區": $.pivotUtilities.sortAs(["蘭潭","民雄","新民","林森"]),
            },
            renderer: $.pivotUtilities.subtotal_renderers["Table With Subtotal Row Heatmap"],                    
            renderers:$.extend(
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
function 近5年度用電(){

    result=JSON.parse(JSON.stringify(tresults));      
    result=result.filter(word=> word['收費年']==year | word['收費年']==year-1| word['收費年']==year-2| word['收費年']==year-3| word['收費年']==year-4);
    result.forEach(function (element, index){
        element["收費月"]= element["收費月"]+"月";
        element["收費年"]=element["收費年"]+"年";          
    })    
    
    $("#output")
        .pivot(result, {
            dataClass: $.pivotUtilities.SubtotalPivotData,                    
            rows: ["校區","校區電號別",'收費年'],
            cols: ["收費月"] ,
            aggregator: $.pivotUtilities.aggregators["Integer Sum"](["用電數"]),
            sorters: {
                "校區": $.pivotUtilities.sortAs(["蘭潭","民雄","新民","林森"]),
            },
            renderer: $.pivotUtilities.subtotal_renderers["Table With Subtotal Row Heatmap"],                    
            renderers:$.extend(
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

function 用電與去年相比(){

    result=JSON.parse(JSON.stringify(tresults));   
    result=result.filter(word=>word['收費年']==lastyear | word['收費年']==year); 
    result.forEach(function (element, index){
        element["收費月"]= element["收費月"]+"月";
        element["收費年"]=element["收費年"]+"年";          
    })         
    $("#output")
        .pivot(result, {
            dataClass: $.pivotUtilities.SubtotalPivotData,                    
            rows: ["校區","校區電號別","收費年"],
            cols: ["收費月"] ,
            aggregator: $.pivotUtilities.aggregators["Integer Sum"](["用電數"]),
            sorters: {
                "校區": $.pivotUtilities.sortAs(["蘭潭","民雄","新民","林森"]),
            },
            renderer: $.pivotUtilities.subtotal_renderers["Table With Subtotal Row Heatmap"],                    
            renderers:$.extend(
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

function 用電自行定義(){

    result=JSON.parse(JSON.stringify(tresults));   
    result.forEach(function (element, index){
        element["收費月"]= element["收費月"]+"月";
        element["收費年"]=element["收費年"]+"年";          
    }) 
    $("#output")
        .pivotUI(result, {
            dataClass: $.pivotUtilities.SubtotalPivotData,                    
            rows: ["校區","校區電號別","收費年"],
            cols: ["收費月"] ,
            aggregator: $.pivotUtilities.aggregators["Integer Sum"](["用電數"]),
            sorters: {
                "校區": $.pivotUtilities.sortAs(["蘭潭","民雄","新民","林森"]),
            },
            renderer: $.pivotUtilities.subtotal_renderers["Table With Subtotal Row Heatmap"],                    
            renderers:$.extend(
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