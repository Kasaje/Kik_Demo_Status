const status1 = document.getElementById('status1');
const show = document.getElementById('show');
const free1 = document.getElementById('free1');
const unfree1 = document.getElementById('unfree1');
const unavailable1 = document.getElementById('unavailable1');
const area1 = document.getElementById('area1');

function show_status1(){
    show.innerHTML = `<div id="area_s1" onclick="update_status1()" style="cursor: pointer;">
    <p>status</p>
</div>`
}
function set_free1(){
    free1.innerHTML = `<p style="width: 20px; background-color:rgba(51, 255, 0, 1); border-radius: 50%; height: 20px;"></p>`
    unfree1.innerHTML = ``
    unavailable1.innerHTML = ``
    area1.innerHTML = ``
    show.innerHTML =``
}
function set_not_free1(){
    unfree1.innerHTML = `<p style="width: 20px; background-color:rgba(255, 0, 0, 1); border-radius: 50%; height: 20px;"></p>`
    free1.innerHTML = ``
    unavailable1.innerHTML = ``
    area1.innerHTML = ``
    show.innerHTML =``
}
function set_unavailable1(){
    unavailable1.innerHTML = `<p style="width: 20px; background-color:rgba(250, 255, 0, 1); border-radius: 50%; height: 20px;"></p>`
    free1.innerHTML = ``
    unfree1.innerHTML = ``
    area1.innerHTML = ``
    show.innerHTML =``
} 
function update_status1(){
    area1.innerHTML = `<div style="width: 90%; color: white; ">
    <div id="freecss" onclick="set_free1()" style="margin-top:5px;" >ว่าง</div>
    <div id="unfreecss" onclick="set_not_free1()">ไม่ว่าง</div>
    <div id="unvailablecss" onclick="set_unavailable1()">งดชั่วคราว</div>
</div>`
}
function reset_area1(){
    area1.innerHTML = ``
}

const free2 = document.getElementById('free2');
const unfree2 = document.getElementById('unfree2');
const unavailable2 = document.getElementById('unavailable2');
const area2 = document.getElementById('area2');

function set_free2(){
    free2.innerHTML = `<p style="width: 20px; background-color:rgba(51, 255, 0, 1); border-radius: 50%; height: 20px;"></p>`
    unfree2.innerHTML = ``
    unavailable2.innerHTML = ``
    area2.innerHTML = ``
}
function set_not_free2(){
    unfree2.innerHTML = `<p style="width: 20px; background-color:rgba(255, 0, 0, 1); border-radius: 50%; height: 20px;"></p>`
    free2.innerHTML = ``
    unavailable2.innerHTML = ``
    area2.innerHTML = ``
}
function set_unavailable2(){
    unavailable2.innerHTML = `<p style="width: 20px; background-color:rgba(250, 255, 0, 1); border-radius: 50%; height: 20px;"></p>`
    free2.innerHTML = ``
    unfree2.innerHTML = ``
    area2.innerHTML = ``
} 
function update_status2(){
    area2.innerHTML = `<div style="width: 90%; color: white; ">
    <div id="freecss" onclick="set_free2()" style="margin-top:5px;" >ว่าง</div>
    <div id="unfreecss" onclick="set_not_free2()">ไม่ว่าง</div>
    <div id="unvailablecss" onclick="set_unavailable2()">งดชั่วคราว</div>
</div>`
}
function reset_area1(){
    area1.innerHTML = ``
}
