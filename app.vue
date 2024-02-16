<template>
  <div style="display: flex; box-shadow: 0 5px 10px grey;">
    <div style="margin: 0 0 0 90px;">
      <img src="/img/logo.png" width="80px" alt="">
    </div>
    <div style="display: flex; margin: 0 0 0 300px; justify-content: space-around; width: 30%;">
      <p>หน้าแรก</p>
      <p>การชำระเงิน</p>
      <p>ติดต่อเรา</p>
      <p>เกี่ยวกับเรา</p>
    </div>
    <div style="margin: 0 0 0 250px;">
      <img src="/img/ms.png" width="80px" alt="">
    </div>
    <div style="margin: 10px 0 0 0px;">
      <img src="/img/pe.png" width="60px" alt="">
    </div>
  </div>

      <!-- สถานะสิ่งอำนวยความสะดวก -->
      <div style="display: flex; justify-content: center;">
        <p style="position: absolute; background-color: black; margin-top: 105px ; width: 5px; height: 80%; border-radius: 25px;"></p>
    </div>

    <div style="display: flex; justify-content: center; font-size: xx-large;"><p>สถานะสิ่งอำนวยความสะดวก</p></div>
    <div style="display: flex; justify-content: center;">
        <div style="width: 45%; height: 40px; font-size: x-large; padding-top: 0.5%; background-color: rgb(83, 152, 255); margin-right: 2%; text-align: center;">
            เครื่องซักผ้า
        </div>
        <div style="width: 45%; height: 40px; font-size: x-large; padding-top: 0.5%; background-color: rgb(83, 152, 255); margin-left: 2%; text-align: center;">
            เครื่องกดน้ำ
        </div>
    </div>
    <!-- เครื่องซักผ้าถังที่ 1 -->
    <div style="position: absolute; margin: 0 0 0 160px;">
        <div v-if="menu1 == true">
          <div  id="s1" style=" position: absolute; margin: 180px 0 0 150px;"  ref="s1">
          <div style="width: 90%; color: white; width: 90px;">
            <div id="freecss" @click="set_free1()" style="margin-top:5px;">ว่าง</div>
            <div id="unfreecss" @click="set_not_free1()">ไม่ว่าง</div>
            <div id="unvailablecss" @click="set_unavailable1()">งดชั่วคราว</div>
          </div>
        </div>
        </div>
        <div id="area1" v-if="status1 == true" ref="area1" style="margin: 150px 0 0 150px; display: flex; justify-content: center; position: absolute; width: 93px; background-color: rgb(162, 250, 255); border-radius: 10px;  ">
          <div id="area_s1" @click="update_status1()" style="cursor: pointer;"><p>status</p></div>
        </div>
        <div style="display: flex;">
            <div style="margin-top: 15vh; display: flex; ">
                <img style="cursor: pointer;" @click="show_status1()" src="/img/ซัก.png" width="120px" alt="">
                <div ref="show_status_light1">
                </div>
            </div>
        </div>
    </div>

    <!-- เครื่องซักผ้าถังที่ 2 -->
    <div style="position: absolute; margin: 0 0 0 470px;">
        <div v-if="menu2 == true">
          <div  id="s2" style=" position: absolute; margin: 180px 0 0 150px;"  ref="s1">
          <div style="width: 90%; color: white; width: 90px;">
            <div id="freecss" @click="set_free2()" style="margin-top:5px;">ว่าง</div>
            <div id="unfreecss" @click="set_not_free2()">ไม่ว่าง</div>
            <div id="unvailablecss" @click="set_unavailable2()">งดชั่วคราว</div>
          </div>
        </div>
        </div>
        <div id="area2" v-if="status2 == true" ref="area2" style="margin: 150px 0 0 150px; display: flex; justify-content: center; position: absolute; width: 93px; background-color: rgb(162, 250, 255); border-radius: 10px;  ">
          <div id="area_s2" @click="update_status2()" style="cursor: pointer;"><p>status</p></div>
        </div>
        <div style="display: flex;">
            <div style="margin-top: 15vh; display: flex; ">
                <img style="cursor: pointer;" @click="show_status2()" src="/img/ซัก.png" width="120px" alt="">
                <div ref="show_status_light2" id="icon_status1">
                </div>
            </div>
        </div>
    </div>


        <!-- เครื่องซักผ้าถังที่ 3 -->

        <div style="position: absolute; margin: 230px 0 0 160px;">
        <div v-if="menu3 == true">
          <div  id="s3" style=" position: absolute; margin: 180px 0 0 150px;"  ref="s2">
          <div style="width: 90%; color: white; width: 90px;">
            <div id="freecss" @click="set_free3()" style="margin-top:5px;">ว่าง</div>
            <div id="unfreecss" @click="set_not_free3()">ไม่ว่าง</div>
            <div id="unvailablecss" @click="set_unavailable3()">งดชั่วคราว</div>
          </div>
        </div>
        </div>
        <div id="area3" v-if="status3 == true" ref="area3" style="margin: 150px 0 0 150px; display: flex; justify-content: center; position: absolute; width: 93px; background-color: rgb(162, 250, 255); border-radius: 10px;  ">
          <div id="area_s3" @click="update_status3()" style="cursor: pointer;"><p>status</p></div>
        </div>
        <div style="display: flex;">
            <div style="margin-top: 15vh; display: flex; ">
                <img style="cursor: pointer;" @click="show_status3()" src="/img/ซัก.png" width="120px" alt="">
                <div ref="show_status_light3" id="icon_status1">
                </div>
            </div>
        </div>
    </div>

        <!-- เครื่องซักผ้าถังที่ 4 -->
        <div style="position: absolute; margin: 230px 0 0 470px;">
        <div v-if="menu4 == true">
          <div  id="s4" style=" position: absolute; margin: 180px 0 0 150px;"  ref="s4">
          <div style="width: 90%; color: white; width: 90px;">
            <div id="freecss" @click="set_free4()" style="margin-top:5px;">ว่าง</div>
            <div id="unfreecss" @click="set_not_free4()">ไม่ว่าง</div>
            <div id="unvailablecss" @click="set_unavailable4()">งดชั่วคราว</div>
          </div>
        </div>
        </div>
        <div id="area4" v-if="status4 == true" ref="area4" style="margin: 150px 0 0 150px; display: flex; justify-content: center; position: absolute; width: 93px; background-color: rgb(162, 250, 255); border-radius: 10px;  ">
          <div id="area_s4" @click="update_status4()" style="cursor: pointer;"><p>status</p></div>
        </div>
        <div style="display: flex;">
            <div style="margin-top: 15vh; display: flex; ">
                <img style="cursor: pointer;" @click="show_status4()" src="/img/ซัก.png" width="120px" alt="">
                <div ref="show_status_light4" id="icon_status1">
                </div>
            </div>
        </div>
    </div>

            <!-- เครื่องกดน้ำ -->

    <!-- เครื่องกดน้ำที่ 1 -->

    <div style="position: absolute; margin: -35px 0 0 850px;">
        <div v-if="menu5 == true">
          <div  id="s5" style=" position: absolute; margin: 180px 0 0 190px;"  ref="s5">
          <div style="width: 90%; color: white; width: 90px;">
            <div id="freecss" @click="set_free5()" style="margin-top:5px;">ว่าง</div>
            <div id="unfreecss" @click="set_not_free5()">ไม่ว่าง</div>
            <div id="unvailablecss" @click="set_unavailable5()">งดชั่วคราว</div>
          </div>
        </div>
        </div>
        <div id="area5" v-if="status5 == true" ref="area5" style="margin: 150px 0 0 190px; display: flex; justify-content: center; position: absolute; width: 93px; background-color: rgb(162, 250, 255); border-radius: 10px;  ">
          <div id="area_s5" @click="update_status5()" style="cursor: pointer;"><p>status</p></div>
        </div>
        <div style="display: flex;">
            <div style="margin-top: 15vh; display: flex; ">
                <img style="cursor: pointer;" @click="show_status5()" src="/img/น้ำ.png" width="250px" alt="">
                <div ref="show_status_light5" style="margin-left: -85px; margin-top: 16%;" id="icon_status1">
                </div>
            </div>
        </div>
    </div>



    <!-- เครื่องซักผ้าถังที่ 2 -->

    <div style="position: absolute; margin: -35px 0 0 1150px;">
        <div v-if="menu6 == true">
          <div  id="s6" style=" position: absolute; margin: 180px 0 0 190px;"  ref="s6">
          <div style="width: 90%; color: white; width: 90px;">
            <div id="freecss" @click="set_free6()" style="margin-top:5px;">ว่าง</div>
            <div id="unfreecss" @click="set_not_free6()">ไม่ว่าง</div>
            <div id="unvailablecss" @click="set_unavailable6()">งดชั่วคราว</div>
          </div>
        </div>
        </div>
        <div id="area6" v-if="status6 == true" ref="area6" style="margin: 150px 0 0 190px; display: flex; justify-content: center; position: absolute; width: 93px; background-color: rgb(162, 250, 255); border-radius: 10px;  ">
          <div id="area_s6" @click="update_status6()" style="cursor: pointer;"><p>status</p></div>
        </div>
        <div style="display: flex;">
            <div style="margin-top: 15vh; display: flex; ">
                <img style="cursor: pointer;" @click="show_status6()" src="/img/น้ำ.png" width="250px" alt="">
                <div ref="show_status_light6" style="margin-left: -85px; margin-top: 16%;" id="icon_status1">
                </div>
            </div>
        </div>
    </div>

        <!-- เครื่องกดน้ำที่ 3 -->

        
    <div style="position: absolute; margin: 200px 0 0 1150px;">
        <div v-if="menu7 == true">
          <div  id="s7" style=" position: absolute; margin: 180px 0 0 190px;"  ref="s7">
          <div style="width: 90%; color: white; width: 90px;">
            <div id="freecss" @click="set_free7()" style="margin-top:5px;">ว่าง</div>
            <div id="unfreecss" @click="set_not_free7()">ไม่ว่าง</div>
            <div id="unvailablecss" @click="set_unavailable7()">งดชั่วคราว</div>
          </div>
        </div>
        </div>
        <div id="area7" v-if="status7 == true" ref="area7" style="margin: 150px 0 0 190px; display: flex; justify-content: center; position: absolute; width: 93px; background-color: rgb(162, 250, 255); border-radius: 10px;  ">
          <div id="area_s7" @click="update_status7()" style="cursor: pointer;"><p>status</p></div>
        </div>
        <div style="display: flex;">
            <div style="margin-top: 15vh; display: flex; ">
                <img style="cursor: pointer;" @click="show_status7()" src="/img/น้ำ.png" width="250px" alt="">
                <div ref="show_status_light7" style="margin-left: -85px; margin-top: 16%;" id="icon_status1">
                </div>
            </div>
        </div>
    </div>
    
<!-- เครื่องซักผ้าถังที่ 4 -->

        
<div style="position: absolute; margin: 200px 0 0 850px;">
        <div v-if="menu8 == true">
          <div  id="s8" style=" position: absolute; margin: 180px 0 0 190px;"  ref="s8">
          <div style="width: 90%; color: white; width: 90px;">
            <div id="freecss" @click="set_free8()" style="margin-top:5px;">ว่าง</div>
            <div id="unfreecss" @click="set_not_free8()">ไม่ว่าง</div>
            <div id="unvailablecss" @click="set_unavailable8()">งดชั่วคราว</div>
          </div>
        </div>
        </div>
        <div id="area8" v-if="status8 == true" ref="area8" style="margin: 150px 0 0 190px; display: flex; justify-content: center; position: absolute; width: 93px; background-color: rgb(162, 250, 255); border-radius: 10px;  ">
          <div id="area_s8" @click="update_status8()" style="cursor: pointer;"><p>status</p></div>
        </div>
        <div style="display: flex;">
            <div style="margin-top: 15vh; display: flex; ">
                <img style="cursor: pointer;" @click="show_status8()" src="/img/น้ำ.png" width="250px" alt="">
                <div ref="show_status_light8" style="margin-left: -85px; margin-top: 16%;" id="icon_status1">
                </div>
            </div>
        </div>
    </div>

</template>
<script>
export default{
  data() {
    return {
      status1 : false,
      menu1 : false,
      status2 : false,
      menu2 : false,
      status3 : false,
      menu3 : false,
      status4 : false,
      menu4 : false,
      status5 : false,
      menu5 : false,
      status6 : false,
      menu6 : false,
      status7 : false,
      menu7 : false,
      status8 : false,
      menu8 : false,

    }
  },
  methods:{
show_status1(){
  this.status1 = true
},
update_status1(){
  this.menu1 = true
},
set_free1(){
  this.$refs.show_status_light1.innerHTML = `<p id="status_free"></P>`
    this.reset_area1();

},
set_not_free1(){
  this.$refs.show_status_light1.innerHTML =  `<p id="status_unfree"></P>`
    this.reset_area1();
},
set_unavailable1(){
  this.$refs.show_status_light1.innerHTML =  `<p id="status_unvailable"></P>`
    this.reset_area1();
},
reset_area1(){
  this.status1 = false
  this.menu1 = false
},

// เครื่องซักผ้าเครื่องที่ 2

show_status2(){
  this.status2 = true
},
update_status2(){
  this.menu2 = true
},
set_free2(){
  this.$refs.show_status_light2.innerHTML = `<p id="status_free"></P>`
    this.reset_area2();

},
set_not_free2(){
  this.$refs.show_status_light2.innerHTML =  `<p id="status_unfree"></P>`
    this.reset_area2();
},
set_unavailable2(){
  this.$refs.show_status_light2.innerHTML =  `<p id="status_unvailable"></P>`
    this.reset_area2();
},
reset_area2(){
  this.status2 = false
  this.menu2 = false
},

// เครื่องซักผ้าเครื่องที่ 3

show_status3(){
  this.status3 = true
},
update_status3(){
  this.menu3 = true
},
set_free3(){
  this.$refs.show_status_light3.innerHTML = `<p id="status_free"></P>`
    this.reset_area3();

},
set_not_free3(){
  this.$refs.show_status_light3.innerHTML =  `<p id="status_unfree"></P>`
    this.reset_area3();
},
set_unavailable3(){
  this.$refs.show_status_light3.innerHTML =  `<p id="status_unvailable"></P>`
    this.reset_area3();
},
reset_area3(){
  this.status3 = false
  this.menu3 = false
},


// เครื่องซักผ้าเครื่องที่ 4


show_status4(){
  this.status4 = true
},
update_status4(){
  this.menu4 = true
},
set_free4(){
  this.$refs.show_status_light4.innerHTML = `<p id="status_free"></P>`
    this.reset_area4();

},
set_not_free4(){
  this.$refs.show_status_light4.innerHTML =  `<p id="status_unfree"></P>`
    this.reset_area4();
},
set_unavailable4(){
  this.$refs.show_status_light4.innerHTML =  `<p id="status_unvailable"></P>`
    this.reset_area4();
},
reset_area4(){
  this.status4 = false
  this.menu4 = false
},

// เครื่องกดน้ำเครื่องที่ 1

show_status5(){
  this.status5 = true
},
update_status5(){
  this.menu5 = true
},
set_free5(){
  this.$refs.show_status_light5.innerHTML = `<p id="status_free"></P>`
    this.reset_area5();

},
set_not_free5(){
  this.$refs.show_status_light5.innerHTML =  `<p id="status_unfree"></P>`
    this.reset_area5();
},
set_unavailable5(){
  this.$refs.show_status_light5.innerHTML =  `<p id="status_unvailable"></P>`
    this.reset_area5();
},
reset_area5(){
  this.status5 = false
  this.menu5 = false
},

// เครื่องกดน้ำเครื่องที่ 2


show_status6(){
  this.status6 = true
},
update_status6(){
  this.menu6 = true
},
set_free6(){
  this.$refs.show_status_light6.innerHTML = `<p id="status_free"></P>`
    this.reset_area6();

},
set_not_free6(){
  this.$refs.show_status_light6.innerHTML =  `<p id="status_unfree"></P>`
    this.reset_area6();
},
set_unavailable6(){
  this.$refs.show_status_light6.innerHTML =  `<p id="status_unvailable"></P>`
    this.reset_area6();
},
reset_area6(){
  this.status6 = false
  this.menu6 = false
},

// เครื่องกดน้ำเครื่องที่ 3
 
show_status7(){
  this.status7 = true
},
update_status7(){
  this.menu7 = true
},
set_free7(){
  this.$refs.show_status_light7.innerHTML = `<p id="status_free"></P>`
    this.reset_area7();

},
set_not_free7(){
  this.$refs.show_status_light7.innerHTML =  `<p id="status_unfree"></P>`
    this.reset_area7();
},
set_unavailable7(){
  this.$refs.show_status_light7.innerHTML =  `<p id="status_unvailable"></P>`
    this.reset_area7();
},
reset_area7(){
  this.status7 = false
  this.menu7 = false
},


// เครื่องกดน้ำเครื่องที่ 4

show_status8(){
  this.status8 = true
},
update_status8(){
  this.menu8 = true
},
set_free8(){
  this.$refs.show_status_light8.innerHTML = `<p id="status_free"></P>`
    this.reset_area8();

},
set_not_free8(){
  this.$refs.show_status_light8.innerHTML =  `<p id="status_unfree"></P>`
    this.reset_area8();
},
set_unavailable8(){
  this.$refs.show_status_light8.innerHTML =  `<p id="status_unvailable"></P>`
    this.reset_area8();
},
reset_area8(){
  this.status8 = false
  this.menu8 = false
},

  }
}
</script>
<style>
#freecss{
    cursor: pointer; border-radius: 10px; padding-left: 5px; background-color: rgb(73, 170, 255); margin-bottom: 5%; 
}

#freecss:hover{
    background-color:  rgb(0, 91, 171);
}
#unfreecss{
    cursor: pointer; border-radius: 10px; padding-left: 5px; background-color: rgb(73, 170, 255); margin-bottom: 5%;
}
#unfreecss:hover{
    background-color:  rgb(0, 91, 171);
}
#unvailablecss{
    margin-bottom: 5px; cursor: pointer; border-radius: 10px; padding-left: 5px; background-color: rgb(73, 170, 255);
}
#unvailablecss:hover{
    background-color:  rgb(0, 91, 171);
}
#area_s1{
    display: flex; align-items: center; justify-content: center; width: 92px; height: 25px; background-color: rgb(162, 250, 255); border-radius: 20px;
}
#area_s1::after{
    margin-top: 3px;
    content: ' \25BE';
}
#area_s1:hover{
    color:white;
    background-color:  rgb(75, 164, 242);
}

#status_free{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: rgba(51, 255, 0, 1);
}
#status_unfree{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: rgba(255, 0, 0, 1);
}
#status_unvailable{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color:rgba(250, 255, 0, 1);
}

#area_s2{
    display: flex; align-items: center; justify-content: center; width: 92px; height: 25px; background-color: rgb(162, 250, 255); border-radius: 20px;
}
#area_s2::after{
    margin-top: 3px;
    content: ' \25BE';
}
#area_s2:hover{
    color:white;
    background-color:  rgb(75, 164, 242);
}

#area_s3{
    display: flex; align-items: center; justify-content: center; width: 92px; height: 25px; background-color: rgb(162, 250, 255); border-radius: 20px;
}
#area_s3::after{
    margin-top: 3px;
    content: ' \25BE';
}
#area_s3:hover{
    color:white;
    background-color:  rgb(75, 164, 242);
}

#area_s4{
    display: flex; align-items: center; justify-content: center; width: 92px; height: 25px; background-color: rgb(162, 250, 255); border-radius: 20px;
}
#area_s4::after{
    margin-top: 3px;
    content: ' \25BE';
}
#area_s4:hover{
    color:white;
    background-color:  rgb(75, 164, 242);
}

#area_s5{
    display: flex; align-items: center; justify-content: center; width: 92px; height: 25px; background-color: rgb(162, 250, 255); border-radius: 20px;
}
#area_s5::after{
    margin-top: 3px;
    content: ' \25BE';
}
#area_s5:hover{
    color:white;
    background-color:  rgb(75, 164, 242);
}

#area_s6{
    display: flex; align-items: center; justify-content: center; width: 92px; height: 25px; background-color: rgb(162, 250, 255); border-radius: 20px;
}
#area_s6::after{
    margin-top: 3px;
    content: ' \25BE';
}
#area_s6:hover{
    color:white;
    background-color:  rgb(75, 164, 242);
}


#area_s7{
    display: flex; align-items: center; justify-content: center; width: 92px; height: 25px; background-color: rgb(162, 250, 255); border-radius: 20px;
}
#area_s7::after{
    margin-top: 3px;
    content: ' \25BE';
}
#area_s7:hover{
    color:white;
    background-color:  rgb(75, 164, 242);
}


#area_s8{
    display: flex; align-items: center; justify-content: center; width: 92px; height: 25px; background-color: rgb(162, 250, 255); border-radius: 20px;
}
#area_s8::after{
    margin-top: 3px;
    content: ' \25BE';
}
#area_s8:hover{
    color:white;
    background-color:  rgb(75, 164, 242);
}
</style>