function control_h(line){
    /*control if 4 circle are in line(horizontal)*/
    for (let сell in line){
        if (line[сell]===1 && line[++сell]===1 && line[++сell]===1 && line[++сell]===1){
            return true
        } else if(line[сell]===2 && line[++сell]===2 && line[++сell]===2 && line[++сell]===2){
            return true
        }
    }
}

function control_v(line1,line2,line3,line4,line5,line6){
    /*control if 4 circle are in line(vertically)*/
    for (let cicle=0;cicle<=7 ;cicle++){
        if (line1[cicle]===1 && line2[cicle]===1 && line3[cicle]===1 && line4[cicle]===1 || line2[cicle]===1 && line3[cicle]===1 && line4[cicle]===1 && line5[cicle]===1 || line3[cicle]===1 && line4[cicle]===1 && line5[cicle]===1 && line6[cicle]===1){
            return true
        }else if(line1[cicle]===2 && line2[cicle]===2 && line3[cicle]===2 && line4[cicle]===2 || line2[cicle]===2 && line3[cicle]===2 && line4[cicle]===2 && line5[cicle]===2 || line3[cicle]===2 && line4[cicle]===2 && line5[cicle]===2 && line6[cicle]===2) {
            return true
        }
    }
}


function control_d(line1,line2,line3,line4){
    for (let cicle=0;cicle<=7 ;cicle++){
        if (line1[cicle]===1 && line2[cicle+1]===1 && line3[cicle+2]===1  && line4[cicle+3]===1 || line4[cicle]===1 && line3[cicle+1]===1 && line2[cicle+2]===1  && line1[cicle+3]===1){
                return true
        
        }else if(line1[cicle]===2 && line2[cicle+1]===2 && line3[cicle+2]===2  && line4[cicle+3]===2 || line4[cicle]===2 && line3[cicle+1]===2 && line2[cicle+2]===2  && line1[cicle+3]===2){
            return true
        }
    }
}   
line1=[0,0,0,1,0,0,0]
line2=[0,0,1,0,0,0,0]
line3=[0,0,0,0,0,0,1]
line4=[1,0,0,0,0,1,0]
line5=[0,0,0,0,1,0,0]
line6=[0,0,0,1,0,0,0]

control_d(line1,line2,line3,line4)
control_d(line2,line3,line4,line5)
control_d(line3,line4,line5,line6)
/*
document.addEventListener("DOMContentLoaded", () => {
    let circle=document.getElementById("first_line_1coin")
    circle.classList.add("circle_red")
  });

function user_button(el){
    let circle=document.getElementById("sixth_line_1coin")
    circle.classList.add("circle_red")
    circle.classList.remove('cicle')
    if (circle.getAttribute("value")==="OH"){
        console.log("OK")
    }else{
        console.log("error in function user_button1")
    }
}
*/
/*
function control_table(){
    let list=[2]
    let element=document.getElementById("1_line_1coin")
    console.log(element)
    let value=element.getAttribute("value")
    list[0]=circle
    console.log(list)
}
console.log(control_table())
*/