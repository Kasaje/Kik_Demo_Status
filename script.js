// เครื่องซักผ้าเครื่องที่ 1

const icon_status1 = document.getElementById('icon_status1');
const s1 = document.getElementById('s1');
const area1 = document.getElementById('area1');

function show_status1(){
    // เปลี่ยนตรง id="area_s..."
    s1.innerHTML = `<div id="area_s1" onclick="update_status1()" style="cursor: pointer;">
    <p>status</p>
</div>`
} 
function update_status1(){
    area1.innerHTML = `<div style="width: 90%; color: white; ">
    <div id="freecss" onclick="set_free1()" style="margin-top:5px;" >ว่าง</div>
    <div id="unfreecss" onclick="set_not_free1()">ไม่ว่าง</div>
    <div id="unvailablecss" onclick="set_unavailable1()">งดชั่วคราว</div>
</div>`
}
function set_free1(){
    icon_status1.innerHTML = `<p id="status_free"></P>`
    reset_area1();

}
function set_not_free1(){
    icon_status1.innerHTML =  `<p id="status_unfree"></P>`
    reset_area1();
}
function set_unavailable1(){
    icon_status1.innerHTML =  `<p id="status_unvailable"></P>`
    reset_area1();
}
function reset_area1(){
    area1.innerHTML = ``
    s1.innerHTML = ``
}

// เครื่องซักผ้าเครื่องที่ 2

const icon_status2 = document.getElementById('icon_status2');
const s2 = document.getElementById('s2');
const area2 = document.getElementById('area2');

function show_status2(){
    // เปลี่ยนตรง id="area_s..."
    s2.innerHTML = `<div id="area_s2" onclick="update_status2()" style="cursor: pointer;">
    <p>status</p>
</div>`
} 
function update_status2(){
    area2.innerHTML = `<div style="width: 90%; color: white; ">
    <div id="freecss" onclick="set_free2()" style="margin-top:5px;" >ว่าง</div>
    <div id="unfreecss" onclick="set_not_free2()">ไม่ว่าง</div>
    <div id="unvailablecss" onclick="set_unavailable2()">งดชั่วคราว</div>
</div>`
}
function set_free2(){
    icon_status2.innerHTML = `<p id="status_free"></P>`
    reset_area2();

}
function set_not_free2(){
    icon_status2.innerHTML =  `<p id="status_unfree"></P>`
    reset_area2();
}
function set_unavailable2(){
    icon_status2.innerHTML =  `<p id="status_unvailable"></P>`
    reset_area2();
}
function reset_area2(){
    area2.innerHTML = ``
    s2.innerHTML = ``
}


// เครื่องซักผ้าเครื่องที่ 3

const icon_status3 = document.getElementById('icon_status3');
const s3 = document.getElementById('s3');
const area3 = document.getElementById('area3');

function show_status3(){
    // เปลี่ยนตรง id="area_s..."
    s3.innerHTML = `<div id="area_s3" onclick="update_status3()" style="cursor: pointer;">
    <p>status</p>
</div>`
} 
function update_status3(){
    area3.innerHTML = `<div style="width: 90%; color: white; ">
    <div id="freecss" onclick="set_free3()" style="margin-top:5px;" >ว่าง</div>
    <div id="unfreecss" onclick="set_not_free3()">ไม่ว่าง</div>
    <div id="unvailablecss" onclick="set_unavailable3()">งดชั่วคราว</div>
</div>`
}
function set_free3(){
    icon_status3.innerHTML = `<p id="status_free"></P>`
    reset_area3();

}
function set_not_free3(){
    icon_status3.innerHTML =  `<p id="status_unfree"></P>`
    reset_area3();
}
function set_unavailable3(){
    icon_status3.innerHTML =  `<p id="status_unvailable"></P>`
    reset_area3();
}
function reset_area3(){
    area3.innerHTML = ``
    s3.innerHTML = ``
}

// เครื่องซักผ้าเครื่องที่ 4

const icon_status4 = document.getElementById('icon_status4');
const s4 = document.getElementById('s4');
const area4 = document.getElementById('area4');

function show_status4(){
    // เปลี่ยนตรง id="area_s..."
    s4.innerHTML = `<div id="area_s4" onclick="update_status4()" style="cursor: pointer;">
    <p>status</p>
</div>`
} 
function update_status4(){
    area4.innerHTML = `<div style="width: 90%; color: white; ">
    <div id="freecss" onclick="set_free4()" style="margin-top:5px;" >ว่าง</div>
    <div id="unfreecss" onclick="set_not_free4()">ไม่ว่าง</div>
    <div id="unvailablecss" onclick="set_unavailable4()">งดชั่วคราว</div>
</div>`
}
function set_free4(){
    icon_status4.innerHTML = `<p id="status_free"></P>`
    reset_area4();

}
function set_not_free4(){
    icon_status4.innerHTML =  `<p id="status_unfree"></P>`
    reset_area4();
}
function set_unavailable4(){
    icon_status4.innerHTML =  `<p id="status_unvailable"></P>`
    reset_area4();
}
function reset_area4(){
    area4.innerHTML = ``
    s4.innerHTML = ``
}

// เครื่องกดน้ำเครื่องที่ 1

const icon_status5 = document.getElementById('icon_status5');
const s5 = document.getElementById('s5');
const area5 = document.getElementById('area5');

function show_status5(){
    // เปลี่ยนตรง id="area_s..."
    s5.innerHTML = `<div id="area_s5" onclick="update_status5()" style="cursor: pointer;">
    <p>status</p>
</div>`
} 
function update_status5(){
    area5.innerHTML = `<div style="width: 90%; color: white; ">
    <div id="freecss" onclick="set_free5()" style="margin-top:5px;" >ว่าง</div>
    <div id="unfreecss" onclick="set_not_free5()">ไม่ว่าง</div>
    <div id="unvailablecss" onclick="set_unavailable5()">งดชั่วคราว</div>
</div>`
}
function set_free5(){
    icon_status5.innerHTML = `<p id="status_free"></P>`
    reset_area5();

}
function set_not_free5(){
    icon_status5.innerHTML =  `<p id="status_unfree"></P>`
    reset_area5();
}
function set_unavailable5(){
    icon_status5.innerHTML =  `<p id="status_unvailable"></P>`
    reset_area5();
}
function reset_area5(){
    area5.innerHTML = ``
    s5.innerHTML = ``
}

// เครื่องกดน้ำเครื่องที่ 2

const icon_status6 = document.getElementById('icon_status6');
const s6 = document.getElementById('s6');
const area6 = document.getElementById('area6');

function show_status6(){
    // เปลี่ยนตรง id="area_s..."
    s6.innerHTML = `<div id="area_s5" onclick="update_status6()" style="cursor: pointer;">
    <p>status</p>
</div>`
} 
function update_status6(){
    area6.innerHTML = `<div style="width: 90%; color: white; ">
    <div id="freecss" onclick="set_free6()" style="margin-top:5px;" >ว่าง</div>
    <div id="unfreecss" onclick="set_not_free6()">ไม่ว่าง</div>
    <div id="unvailablecss" onclick="set_unavailable6()">งดชั่วคราว</div>
</div>`
}
function set_free6(){
    icon_status6.innerHTML = `<p id="status_free"></P>`
    reset_area6();

}
function set_not_free6(){
    icon_status6.innerHTML =  `<p id="status_unfree"></P>`
    reset_area6();
}
function set_unavailable6(){
    icon_status6.innerHTML =  `<p id="status_unvailable"></P>`
    reset_area6();
}
function reset_area6(){
    area6.innerHTML = ``
    s6.innerHTML = ``
}

// เครื่องกดน้ำเครื่องที่ 3

const icon_status7 = document.getElementById('icon_status7');
const s7 = document.getElementById('s7');
const area7 = document.getElementById('area7');

function show_status7(){
    // เปลี่ยนตรง id="area_s..."
    s7.innerHTML = `<div id="area_s5" onclick="update_status7()" style="cursor: pointer;">
    <p>status</p>
</div>`
} 
function update_status7(){
    area7.innerHTML = `<div style="width: 90%; color: white; ">
    <div id="freecss" onclick="set_free7()" style="margin-top:5px;" >ว่าง</div>
    <div id="unfreecss" onclick="set_not_free7()">ไม่ว่าง</div>
    <div id="unvailablecss" onclick="set_unavailable7()">งดชั่วคราว</div>
</div>`
}
function set_free7(){
    icon_status7.innerHTML = `<p id="status_free"></P>`
    reset_area7();

}
function set_not_free7(){
    icon_status7.innerHTML =  `<p id="status_unfree"></P>`
    reset_area7();
}
function set_unavailable7(){
    icon_status7.innerHTML =  `<p id="status_unvailable"></P>`
    reset_area7();
}
function reset_area7(){
    area7.innerHTML = ``
    s7.innerHTML = ``
}

// เครื่องกดน้ำเครื่องที่ 4

const icon_status8 = document.getElementById('icon_status8');
const s8 = document.getElementById('s8');
const area8 = document.getElementById('area8');

function show_status8(){
    // เปลี่ยนตรง id="area_s..."
    s8.innerHTML = `<div id="area_s8" onclick="update_status8()" style="cursor: pointer;">
    <p>status</p>
</div>`
} 
function update_status8(){
    area8.innerHTML = `<div style="width: 90%; color: white; ">
    <div id="freecss" onclick="set_free8()" style="margin-top:5px;" >ว่าง</div>
    <div id="unfreecss" onclick="set_not_free8()">ไม่ว่าง</div>
    <div id="unvailablecss" onclick="set_unavailable8()">งดชั่วคราว</div>
</div>`
}
function set_free8(){
    icon_status8.innerHTML = `<p id="status_free"></P>`
    reset_area8();

}
function set_not_free8(){
    icon_status8.innerHTML =  `<p id="status_unfree"></P>`
    reset_area8();
}
function set_unavailable8(){
    icon_status8.innerHTML =  `<p id="status_unvailable"></P>`
    reset_area8();
}
function reset_area8(){
    area8.innerHTML = ``
    s8.innerHTML = ``
}