/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData(city,aqi) {
    aqiData[city]=aqi;
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    var aqitable=document.getElementById("aqi-table");
    var table='<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>';
    for (var i in aqiData){
        if (aqiData.hasOwnProperty(i)){
            table += '<tr><td>'+i+'</td><td>'+aqiData[i]+'</td><td><button onclick="delBtnHandle(\'' + i + '\')">删除</button></td></tr>';
        }
    }
    aqitable.innerHTML=table;
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    var city=document.getElementById("aqi-city-input").value.trim();
    var aqi=document.getElementById("aqi-value-input").value.trim();
    if (!city.match(/^[A-Za-z\u4E00-\u9FA5]+$/)){
        alert("城市名必须为中英文字符！");
    }
    else if (!aqi.match(/^\d+$/)){
        alert("空气质量指数必须为整数！");
    }
    else{
        addAqiData(city,aqi);
        renderAqiList();
    }
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(city) {
    // do sth.
    delete aqiData[city];
    renderAqiList();
}

function init() {

    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数

    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数

    var btn = document.getElementById("add-btn");
    btn.onclick=function(){addBtnHandle()};
}

init();

