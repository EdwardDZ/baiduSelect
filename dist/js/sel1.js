$(document).ready(function() {  
            $("#powerset").select2({  
                theme: "bootstrap",  
                allowClear: true,  
                language : 'zh-CN',  
                placeholder: {collectorId:"2", collectorName:"李飞"},  
  
                query: function (query){  
                    var url = 'http://localhost:3010/collector/getByname';  
                    var param = {collectorName:query.term}; // 查询参数，query.term为用户在select2中的输入内容.  
                    var type="jsonp";  
                    var data = { results: [] };  
                    $.get(url, param, function(datas){  
                       for(var i= 0, len=datas.length;i<len;i++){  
                            var land = datas[i];  

                                var option = {"collectorId":land.collectorId, "collectorName": land.collectorName};  
                                data.results.push(option);  
                           }  
                       query.callback(data);  
                       alert(data);
                    }, type);  
                      
                },  
                escapeMarkup: function (markup) {return markup; },  
                minimumInputLength: 2,  
                formatResult:function(data){return '<div class="select2-user-result">' + data.collectorName + '</div>'},  
                formatSelection: function(data){  
                    console.log("选中option");  
                    console.log(data.collectorId + data.collectorName);  
            return data.collectorName;  
        },  
        initSelection:function(data, cb){console.log(data); cb(data);}  
    }); // select2方法结束.  
  // 赋初始值，placeholder中的id值要此处相等。  
  $("powerset").select2("data", {"collectorId":"2", "collectorName":"text_123456abc"});  
  
});  