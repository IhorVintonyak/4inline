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
    /*control if 4 circle are in line(diagonally)*/
    for (let cicle=0;cicle<=7 ;cicle++){
        if (line1[cicle]===1 && line2[cicle+1]===1 && line3[cicle+2]===1  && line4[cicle+3]===1 || line4[cicle]===1 && line3[cicle+1]===1 && line2[cicle+2]===1  && line1[cicle+3]===1){
            return true
        
        }else if(line1[cicle]===2 && line2[cicle+1]===2 && line3[cicle+2]===2  && line4[cicle+3]===2 || line4[cicle]===2 && line3[cicle+1]===2 && line2[cicle+2]===2  && line1[cicle+3]===2){
            return true
        }
    }
}

/*CLICK BUTTON*/
let repeats=1
function user_button(element){
    column=el.getAttribute("value")
    
    if (column==1){
        let circle=document.getElementById("6_line_1coin")
        
        if (circle.getAttribute("value")==="red" || circle.getAttribute("value")==="blue" ){
            circle=document.getElementById("5_line_1coin")
            
            if (circle.getAttribute("value")==="red" || circle.getAttribute("value")==="blue" ){
                circle=document.getElementById("4_line_1coin")

                if (circle.getAttribute("value")==="red" || circle.getAttribute("value")==="blue" ){
                    circle=document.getElementById("3_line_1coin")

                    if (circle.getAttribute("value")==="red" || circle.getAttribute("value")==="blue" ){
                        circle=document.getElementById("4_line_1coin")
                        
                        if (circle.getAttribute("value")==="red" || circle.getAttribute("value")==="blue" ){
                            circle=document.getElementById("3_line_1coin")
                            
                            if (circle.getAttribute("value")==="red" || circle.getAttribute("value")==="blue" ){
                                circle=document.getElementById("2_line_1coin")

                                if (circle.getAttribute("value")==="red" || circle.getAttribute("value")==="blue" ){
                                    circle=document.getElementById("1_line_1coin")
                                }
                            }
                        }
                    }
                }
            }
        }
        if (repeats%2===1){
            circle.classList.add("circle_red")
            circle.setAttribute("value","red")
        }else{
            circle.classList.add("circle_blue")
            circle.setAttribute("value","blue")
        }


    }else if (column==2){
        let circle=document.getElementById("6_line_2coin")
        
        if (circle.getAttribute("value")==="red" || circle.getAttribute("value")==="blue" ){
            circle=document.getElementById("5_line_2coin")
            
            if (circle.getAttribute("value")==="red" || circle.getAttribute("value")==="blue" ){
                circle=document.getElementById("4_line_2coin")

                if (circle.getAttribute("value")==="red" || circle.getAttribute("value")==="blue" ){
                    circle=document.getElementById("3_line_2coin")

                    if (circle.getAttribute("value")==="red" || circle.getAttribute("value")==="blue" ){
                        circle=document.getElementById("4_line_2coin")
                        
                        if (circle.getAttribute("value")==="red" || circle.getAttribute("value")==="blue" ){
                            circle=document.getElementById("3_line_2coin")
                            
                            if (circle.getAttribute("value")==="red" || circle.getAttribute("value")==="blue" ){
                                circle=document.getElementById("2_line_2coin")

                                if (circle.getAttribute("value")==="red" || circle.getAttribute("value")==="blue" ){
                                    circle=document.getElementById("1_line_2coin")
                                }
                            }
                        }
                    }
                }
            }
        }
        if (repeats%2===1){
            circle.classList.add("circle_red")
            circle.setAttribute("value","red")
        }else{
            circle.classList.add("circle_blue")
            circle.setAttribute("value","blue")
        }
    
    }else if (column==3){
        let circle=document.getElementById("6_line_3coin")
        
        if (circle.getAttribute("value")==="red" || circle.getAttribute("value")==="blue" ){
            circle=document.getElementById("5_line_3coin")
            
            if (circle.getAttribute("value")==="red" || circle.getAttribute("value")==="blue" ){
                circle=document.getElementById("4_line_3coin")

                if (circle.getAttribute("value")==="red" || circle.getAttribute("value")==="blue" ){
                    circle=document.getElementById("3_line_3coin")

                    if (circle.getAttribute("value")==="red" || circle.getAttribute("value")==="blue" ){
                        circle=document.getElementById("4_line_3coin")
                        
                        if (circle.getAttribute("value")==="red" || circle.getAttribute("value")==="blue" ){
                            circle=document.getElementById("3_line_3coin")
                            
                            if (circle.getAttribute("value")==="red" || circle.getAttribute("value")==="blue" ){
                                circle=document.getElementById("2_line_3coin")

                                if (circle.getAttribute("value")==="red" || circle.getAttribute("value")==="blue" ){
                                    circle=document.getElementById("1_line_3coin")
                                }
                            }
                        }
                    }
                }
            }
        }
        if (repeats%2===1){
            circle.classList.add("circle_red")
            circle.setAttribute("value","red")
        }else{
            circle.classList.add("circle_blue")
            circle.setAttribute("value","blue")
        }
    
    }else if (column==4){
        let circle=document.getElementById("6_line_4coin")
        
        if (circle.getAttribute("value")==="red" || circle.getAttribute("value")==="blue" ){
            circle=document.getElementById("5_line_4coin")
            
            if (circle.getAttribute("value")==="red" || circle.getAttribute("value")==="blue" ){
                circle=document.getElementById("4_line_4coin")

                if (circle.getAttribute("value")==="red" || circle.getAttribute("value")==="blue" ){
                    circle=document.getElementById("3_line_4coin")

                    if (circle.getAttribute("value")==="red" || circle.getAttribute("value")==="blue" ){
                        circle=document.getElementById("4_line_4coin")
                        
                        if (circle.getAttribute("value")==="red" || circle.getAttribute("value")==="blue" ){
                            circle=document.getElementById("3_line_4coin")
                            
                            if (circle.getAttribute("value")==="red" || circle.getAttribute("value")==="blue" ){
                                circle=document.getElementById("2_line_4coin")

                                if (circle.getAttribute("value")==="red" || circle.getAttribute("value")==="blue" ){
                                    circle=document.getElementById("1_line_4coin")
                                }
                            }
                        }
                    }
                }
            }
        }
        if (repeats%2===1){
            circle.classList.add("circle_red")
            circle.setAttribute("value","red")
        }else{
            circle.classList.add("circle_blue")
            circle.setAttribute("value","blue")
        }
    
    }else if (column==5){
        let circle=document.getElementById("6_line_5coin")
        
        if (circle.getAttribute("value")==="red" || circle.getAttribute("value")==="blue" ){
            circle=document.getElementById("5_line_5coin")
            
            if (circle.getAttribute("value")==="red" || circle.getAttribute("value")==="blue" ){
                circle=document.getElementById("4_line_5coin")

                if (circle.getAttribute("value")==="red" || circle.getAttribute("value")==="blue" ){
                    circle=document.getElementById("3_line_5coin")

                    if (circle.getAttribute("value")==="red" || circle.getAttribute("value")==="blue" ){
                        circle=document.getElementById("4_line_5coin")
                        
                        if (circle.getAttribute("value")==="red" || circle.getAttribute("value")==="blue" ){
                            circle=document.getElementById("3_line_5coin")
                            
                            if (circle.getAttribute("value")==="red" || circle.getAttribute("value")==="blue" ){
                                circle=document.getElementById("2_line_5coin")

                                if (circle.getAttribute("value")==="red" || circle.getAttribute("value")==="blue" ){
                                    circle=document.getElementById("1_line_5coin")
                                }
                            }
                        }
                    }
                }
            }
        }
        if (repeats%2===1){
            circle.classList.add("circle_red")
            circle.setAttribute("value","red")
        }else{
            circle.classList.add("circle_blue")
            circle.setAttribute("value","blue")
        }
    
    }else if (column==6){
        let circle=document.getElementById("6_line_6coin")
        
        if (circle.getAttribute("value")==="red" || circle.getAttribute("value")==="blue" ){
            circle=document.getElementById("5_line_6coin")
            
            if (circle.getAttribute("value")==="red" || circle.getAttribute("value")==="blue" ){
                circle=document.getElementById("4_line_6coin")

                if (circle.getAttribute("value")==="red" || circle.getAttribute("value")==="blue" ){
                    circle=document.getElementById("3_line_6coin")

                    if (circle.getAttribute("value")==="red" || circle.getAttribute("value")==="blue" ){
                        circle=document.getElementById("4_line_6coin")
                        
                        if (circle.getAttribute("value")==="red" || circle.getAttribute("value")==="blue" ){
                            circle=document.getElementById("3_line_6coin")
                            
                            if (circle.getAttribute("value")==="red" || circle.getAttribute("value")==="blue" ){
                                circle=document.getElementById("2_line_6coin")
                                
                                if (circle.getAttribute("value")==="red" || circle.getAttribute("value")==="blue" ){
                                    circle=document.getElementById("1_line_6coin")
                                }
                            }
                        }
                    }
                }
            }
        }
        if (repeats%2===1){
            circle.classList.add("circle_red")
            circle.setAttribute("value","red")
        }else{
            circle.classList.add("circle_blue")
            circle.setAttribute("value","blue")
        }

    }else if (column==7){
        let circle=document.getElementById("6_line_7coin")
        
        if (circle.getAttribute("value")==="red" || circle.getAttribute("value")==="blue" ){
            circle=document.getElementById("5_line_7coin")
            
            if (circle.getAttribute("value")==="red" || circle.getAttribute("value")==="blue" ){
                circle=document.getElementById("4_line_7coin")

                if (circle.getAttribute("value")==="red" || circle.getAttribute("value")==="blue" ){
                    circle=document.getElementById("3_line_7coin")

                    if (circle.getAttribute("value")==="red" || circle.getAttribute("value")==="blue" ){
                        circle=document.getElementById("4_line_7coin")
                        
                        if (circle.getAttribute("value")==="red" || circle.getAttribute("value")==="blue" ){
                            circle=document.getElementById("3_line_7coin")
                            
                            if (circle.getAttribute("value")==="red" || circle.getAttribute("value")==="blue" ){
                                circle=document.getElementById("2_line_7coin")

                                if (circle.getAttribute("value")==="red" || circle.getAttribute("value")==="blue" ){
                                    circle=document.getElementById("1_line_7coin")
                                }
                            }
                        }
                    }
                }
            }
        }

        if (repeats%2===1){
            circle.classList.add("circle_red")
            circle.setAttribute("value","red")
        }else{
            circle.classList.add("circle_blue")
            circle.setAttribute("value","blue")
        }
    }


    let element2_1=0
    let element2_2=0
    let element2_3=0
    let element2_4=0
    let element2_5=0
    let element2_6=0
    let element2_7=0

    let element3_1=0
    let element3_2=0
    let element3_3=0
    let element3_4=0
    let element3_5=0
    let element3_6=0
    let element3_7=0

    let element4_1=0
    let element4_2=0
    let element4_3=0
    let element4_4=0
    let element4_5=0
    let element4_6=0
    let element4_7=0

    let element5_1=0
    let element5_2=0
    let element5_3=0
    let element5_4=0
    let element5_5=0
    let element5_6=0
    let element5_7=0

    let element6_1=0
    let element6_2=0
    let element6_3=0
    let element6_4=0
    let element6_5=0
    let element6_6=0
    let element6_7=0


    element1_1=document.getElementById("1_line_1coin").getAttribute("value")
        if (element1_1==="red"){
            element1_1=1
        }else if (element1_1==="blue"){
            element1_1=2
        }else{
            element1_1=0
        }
    element1_2=document.getElementById("1_line_2coin").getAttribute("value")
        if (element1_2==="red"){
            element1_2=1
        }else if (element1_2==="blue"){
            element1_2=2
        }else{
            element1_2=0
        }
    element1_3=document.getElementById("1_line_3coin").getAttribute("value")
        if (element1_3==="red"){
            element1_3=1
        }else if (element1_3==="blue"){
            element1_3=2
        }else{
            element1_3=0
        }
    element1_4=document.getElementById("1_line_4coin").getAttribute("value")
        if (element1_4==="red"){
            element1_4=1
        }else if (element1_4==="blue"){
            element1_4=2
        }else{
            element1_4=0
        }
    element1_5=document.getElementById("1_line_5coin").getAttribute("value")
        if (element1_5==="red"){
            element1_5=1
        }else if (element1_5==="blue"){
            element1_5=2
        }else{
            element1_5=0
        }
    element1_6=document.getElementById("1_line_6coin").getAttribute("value")
        if (element1_6==="red"){
            element1_6=1
        }else if (element1_6==="blue"){
            element1_6=2
        }else{
            element1_6=0
        }
    element1_7=document.getElementById("1_line_7coin").getAttribute("value")
        if (element1_7==="red"){
            element1_7=1
        }else if (element1_7==="blue"){
            element1_7=2
        }else{
            element1_7=0
        }



    element2_1=document.getElementById("2_line_1coin").getAttribute("value")
        if (element2_1==="red"){
            element2_1=1
        }else if (element2_1==="blue"){
            element2_1=2
        }else{
            element2_1=0
        }
    element2_2=document.getElementById("2_line_2coin").getAttribute("value")
        if (element2_2==="red"){
            element2_2=1
        }else if (element2_2==="blue"){
            element2_2=2
        }else{
            element2_2=0
        }
    element2_3=document.getElementById("2_line_3coin").getAttribute("value")
        if (element2_3==="red"){
            element2_3=1
        }else if (element2_3==="blue"){
            element2_3=2
        }else{
            element2_3=0
        }
    element2_4=document.getElementById("2_line_4coin").getAttribute("value")
        if (element2_4==="red"){
            element2_4=1
        }else if (element2_4==="blue"){
            element2_4=2
        }else{
            element2_4=0
        }
    element2_5=document.getElementById("2_line_5coin").getAttribute("value")
        if (element2_5==="red"){
            element2_5=1
        }else if (element2_5==="blue"){
            element2_5=2
        }else{
            element2_5=0
        }
    element2_6=document.getElementById("2_line_6coin").getAttribute("value")
        if (element2_6==="red"){
            element2_6=1
        }else if (element2_6==="blue"){
            element2_6=2
        }else{
            element2_6=0
        }
    element2_7=document.getElementById("2_line_7coin").getAttribute("value")
        if (element2_7==="red"){
            element2_7=1
        }else if (element2_7==="blue"){
            element2_7=2
        }else{
            element2_7=0
        }



    element3_1=document.getElementById("3_line_1coin").getAttribute("value")
        if (element3_1==="red"){
            element3_1=1
        }else if (element3_1==="blue"){
            element3_1=2
        }else{
            element3_1=0
        }
    element3_2=document.getElementById("3_line_2coin").getAttribute("value")
        if (element3_2==="red"){
            element3_2=1
        }else if (element3_2==="blue"){
            element3_2=2
        }else{
            element3_2=0
        }
    element3_3=document.getElementById("3_line_3coin").getAttribute("value")
        if (element3_3==="red"){
            element3_3=1
        }else if (element3_3==="blue"){
            element3_3=2
        }else{
            element3_3=0
        } 
    element3_4=document.getElementById("3_line_4coin").getAttribute("value")
        if (element3_4==="red"){
            element3_4=1
        }else if (element3_4==="blue"){
            element3_4=2
        }else{
            element3_4=0
        }
    element3_5=document.getElementById("3_line_5coin").getAttribute("value")
        if (element3_5==="red"){
            element3_5=1
        }else if (element3_5==="blue"){
            element3_5=2
        }else{
            element3_5=0
        }
    element3_6=document.getElementById("3_line_6coin").getAttribute("value")
        if (element3_6==="red"){
            element3_6=1
        }else if (element3_6==="blue"){
            element3_6=2
        }else{
            element3_6=0
        }
    element3_7=document.getElementById("3_line_7coin").getAttribute("value")
        if (element3_7==="red"){
            element3_7=1
        }else if (element3_7==="blue"){
            element3_7=2
        }else{
            element3_7=0
        }



    element4_1=document.getElementById("4_line_1coin").getAttribute("value")
        if (element4_1==="red"){
            element4_1=1
        }else if (element4_1==="blue"){
            element4_1=2
        }else{
            element4_1=0
        }
    element4_2=document.getElementById("4_line_2coin").getAttribute("value")
        if (element4_2==="red"){
            element4_2=1
        }else if (element4_2==="blue"){
            element4_2=2
        }else{
            element4_2=0
        }
    element4_3=document.getElementById("4_line_3coin").getAttribute("value")
        if (element4_3==="red"){
            element4_3=1
        }else if (element4_3==="blue"){
            element4_3=2
        }else{
            element4_3=0
        }
    element4_4=document.getElementById("4_line_4coin").getAttribute("value")
        if (element4_4==="red"){
            element4_4=1
        }else if (element4_4==="blue"){
            element4_4=2
        }else{
            element4_4=0
        }
    element4_5=document.getElementById("4_line_5coin").getAttribute("value")
        if (element4_5==="red"){
            element4_5=1
        }else if (element4_5==="blue"){
            element4_5=2
        }else{
            element4_5=0
        }
    element4_6=document.getElementById("4_line_6coin").getAttribute("value")
        if (element4_6==="red"){
            element4_6=1
        }else if (element4_6==="blue"){
            element4_6=2
        }else{
            element4_6=0
        }
    element4_7=document.getElementById("4_line_7coin").getAttribute("value")
        if (element4_7==="red"){
            element4_7=1
        }else if (element4_7==="blue"){
            element4_7=2
        }else{
            element4_7=0
        }


    element5_1=document.getElementById("5_line_1coin").getAttribute("value")
        if (element5_1==="red"){
            element5_1=1
        }else if (element5_1==="blue"){
            element5_1=2
        }else{
            element5_1=0
        }
    element5_2=document.getElementById("5_line_2coin").getAttribute("value")
        if (element5_2==="red"){
            element5_2=1
        }else if (element5_2==="blue"){
            element5_2=2
        }else{
            element5_2=0
        }
    element5_3=document.getElementById("5_line_3coin").getAttribute("value")
        if (element5_3==="red"){
            element5_3=1
        }else if (element5_3==="blue"){
            element5_3=2
        }else{
            element5_3=0
        }
    element5_4=document.getElementById("5_line_4coin").getAttribute("value")
        if (element5_4==="red"){
            element5_4=1
        }else if (element5_4==="blue"){
            element5_4=2
        }else{
            element5_4=0
        }
    element5_5=document.getElementById("5_line_5coin").getAttribute("value")
        if (element5_5==="red"){
            element5_5=1
        }else if (element5_5==="blue"){
            element5_5=2
        }else{
            element5_5=0
        }
    element5_6=document.getElementById("5_line_6coin").getAttribute("value")
        if (element5_6==="red"){
            element5_6=1
        }else if (element5_6==="blue"){
            element5_6=2
        }else{
            element5_6=0
        }
    element5_7=document.getElementById("5_line_7coin").getAttribute("value")
        if (element5_7==="red"){
            element5_7=1
        }else if (element5_7==="blue"){
            element5_7=2
        }else{
            element5_7=0
        }



    element6_1=document.getElementById("6_line_1coin").getAttribute("value")
        if (element6_1==="red"){
            element6_1=1
        }else if (element6_1==="blue"){
            element6_1=2
        }else{
            element6_1=0
        }
    element6_2=document.getElementById("6_line_2coin").getAttribute("value")
        if (element6_2==="red"){
            element6_2=1
        }else if (element6_2==="blue"){
            element6_2=2
        }else{
            element6_2=0
        }
    element6_3=document.getElementById("6_line_3coin").getAttribute("value")
        if (element6_3==="red"){
            element6_3=1
        }else if (element6_3==="blue"){
            element6_3=2
        }else{
            element6_3=0
        }
    element6_4=document.getElementById("6_line_4coin").getAttribute("value")
        if (element6_4==="red"){
            element6_4=1
        }else if (element6_4==="blue"){
            element6_4=2
        }else{
            element6_4=0
        }
    element6_5=document.getElementById("6_line_5coin").getAttribute("value")
        if (element6_5==="red"){
            element6_5=1
        }else if (element6_5==="blue"){
            element6_5=2
        }else{
            element6_5=0
        }
    element6_6=document.getElementById("6_line_6coin").getAttribute("value")
        if (element6_6==="red"){
            element6_6=1
        }else if (element6_6==="blue"){
            element6_6=2
        }else{
            element6_6=0
        }
    element6_7=document.getElementById("6_line_7coin").getAttribute("value")
        if (element6_7==="red"){
            element6_7=1
        }else if (element6_7==="blue"){
            element6_7=2
        }else{
            element6_7=0
        }

    line1=[element1_1,element1_2,element1_3,element1_4,element1_5,element1_6,element1_7]
    line2=[element2_1,element2_2,element2_3,element2_4,element2_5,element2_6,element2_7]
    line3=[element3_1,element3_2,element3_3,element3_4,element3_5,element3_6,element3_7]
    line4=[element4_1,element4_2,element4_3,element4_4,element4_5,element4_6,element4_7]
    line5=[element5_1,element5_2,element5_3,element5_4,element5_5,element5_6,element5_7]
    line6=[element6_1,element6_2,element6_3,element6_4,element6_5,element6_6,element6_7]
    console.log(line1)
    console.log(line2)
    console.log(line3)
    console.log(line4)
    console.log(line5)
    console.log(line6)
    
    var red_won="RED PLAYER WON"
    var blue_won="BLUE PLAYER WON"


    if (control_h(line1)===true || control_h(line2)===true || control_h(line3)===true || control_h(line4)===true || control_h(line5)===true || control_h(line6)===true){
        if(repeats%2===1){
            document.getElementById("final_text").textContent=red_won
        }else{
            document.getElementById("final_text").textContent=blue_won
        }
    }

    if (control_v(line1,line2,line3,line4,line5,line6)===true){
        if(repeats%2===1){
            document.getElementById("final_text").textContent=red_won
        }else{
            document.getElementById("final_text").textContent=blue_won
        }

    }
    if(control_d(line1,line2,line3,line4)===true || control_d(line2,line3,line4,line5)===true || control_d(line3,line4,line5,line6)){
      if(repeats%2===1){
            document.getElementById("final_text").textContent=red_won
        }else{
            document.getElementById("final_text").textContent=blue_won
        }  
    }
    console.log(repeats)
    repeats++
}
