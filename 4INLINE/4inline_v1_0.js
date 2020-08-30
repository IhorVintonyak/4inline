function buttonOff(){
    /*disable all input buttons */
    let buttonList = document.getElementsByClassName("button")
	for (let element in buttonList){
		buttonList[element].disabled = true
	}
}
function buttonOn(){
    /*active all input buttons */
    let buttonList = document.getElementsByClassName("button")
	for (let element in buttonList){
		buttonList[element].disabled = false
	}
}

function reset(){
    /*returns the original value of the variable*/
    let list = document.getElementsByClassName("circle")
    for (let cycle in list){
        if (cycle<42){
            let element = list[cycle]
            let value = element.getAttribute("value")
            if (value==="red" || value==="blue"){
                list[cycle].setAttribute("value","green")
                list[cycle].classList.remove("circle_red")
                list[cycle].classList.remove("circle_blue")
            buttonOn()
            document.getElementById("final_text").textContent=""
            }
        }
    }
}

function checkHorizontally(line){
    /*control if 4 circle are in line(horizontal)*/
    for (let сell in line){
        if (line[сell]===1 && line[++сell]===1 && line[++сell]===1 && line[++сell]===1){
            return true
        } else if(line[сell]===2 && line[++сell]===2 && line[++сell]===2 && line[++сell]===2){
            return true
        }
    }
}


function checkVertically(line1,line2,line3,line4,line5,line6){
    /*control if 4 circle are in line(vertically)*/
    for (let cycle=0;cycle<=7 ;cycle++){
        if (line1[cycle]===1 && line2[cycle]===1 && line3[cycle]===1 && line4[cycle]===1 || line2[cycle]===1 && line3[cycle]===1 && line4[cycle]===1 && line5[cycle]===1 || line3[cycle]===1 && line4[cycle]===1 && line5[cycle]===1 && line6[cycle]===1){
            return true
        }else if(line1[cycle]===2 && line2[cycle]===2 && line3[cycle]===2 && line4[cycle]===2 || line2[cycle]===2 && line3[cycle]===2 && line4[cycle]===2 && line5[cycle]===2 || line3[cycle]===2 && line4[cycle]===2 && line5[cycle]===2 && line6[cycle]===2) {
            return true
        }
    }
}

function checkDiagonally(line1,line2,line3,line4){
    /*control if 4 circle are in line(diagonally)*/
    for (let cycle=0;cycle<=7 ;cycle++){
        if (line1[cycle]===1 && line2[cycle+1]===1 && line3[cycle+2]===1  && line4[cycle+3]===1 || line4[cycle]===1 && line3[cycle+1]===1 && line2[cycle+2]===1  && line1[cycle+3]===1){
            return true
        
        }else if(line1[cycle]===2 && line2[cycle+1]===2 && line3[cycle+2]===2  && line4[cycle+3]===2 || line4[cycle]===2 && line3[cycle+1]===2 && line2[cycle+2]===2  && line1[cycle+3]===2){
            return true
        }
    }
}

function controlElement(inputElement){
    /*control if cell is empty or no*/
    let value = inputElement.getAttribute("value")
    if (value === "red" || value === "blue"){
        return false
    }else {
        return true
    }
}


function blueOrRed(cycle,cell){
    /*based on the number of repetitions determines the color of the player */
    if (cycle%2===1){
        cell.classList.add("circle_red")
        cell.setAttribute("value","red")
        table = document.getElementById("table")
        table.style.borderColor = "blue"
    }else{
        cell.classList.add("circle_blue")
        cell.setAttribute("value","blue")
        table = document.getElementById("table")
        table.style.borderColor = "red"
    }    
}

function numberFromValue(elementById){
    /*transform value in to the number 1 or 2*/
    if (elementById==="red"){
        elementById=1
        return elementById
    }else if (elementById==="blue"){
        elementById=2
        return elementById
    }else{
        elementById=0
        return elementById
    }
}

let table = document.getElementById("table")
let cycle=1
function clickOnButton(input){
    column=input.getAttribute("value")
    
    if (column==1){
        let cell = document.getElementById("6Line1Cell")
        if (controlElement(cell) === false){
            cell = document.getElementById("5Line1Cell")
            if (controlElement(cell) === false){
                cell = document.getElementById("4Line1Cell")
                if (controlElement(cell) === false){
                    cell = document.getElementById("3Line1Cell")
                    if (controlElement(cell) === false){
                        cell = document.getElementById("2Line1Cell")  
                        if (controlElement(cell) === false){
                            cell = document.getElementById("1Line1Cell")
                        }
                    }
                }       
            }
        }
        blueOrRed(cycle,cell)

    }else if (column==2){
        let cell = document.getElementById("6Line2Cell")
        if (controlElement(cell) === false){
            cell = document.getElementById("5Line2Cell")
            if (controlElement(cell) === false){
                cell = document.getElementById("4Line2Cell")
                if (controlElement(cell) === false){
                    cell = document.getElementById("3Line2Cell")
                    if (controlElement(cell) === false){
                        cell = document.getElementById("2Line2Cell")  
                        if (controlElement(cell) === false){
                            cell = document.getElementById("1Line2Cell")
                        }
                    }
                }       
            }
        }
        blueOrRed(cycle,cell)

    
    }else if (column==3){
        let cell = document.getElementById("6Line3Cell")
        if (controlElement(cell) === false){
            cell = document.getElementById("5Line3Cell")
            if (controlElement(cell) === false){
                cell = document.getElementById("4Line3Cell")
                if (controlElement(cell) === false){
                    cell = document.getElementById("3Line3Cell")
                    if (controlElement(cell) === false){
                        cell = document.getElementById("2Line3Cell")  
                        if (controlElement(cell) === false){
                            cell = document.getElementById("1Line3Cell")
                        }
                    }
                }       
            }
        }
        blueOrRed(cycle,cell)
    
    }else if (column==4){
        let cell = document.getElementById("6Line4Cell")
        if (controlElement(cell) === false){
            cell = document.getElementById("5Line4Cell")
            if (controlElement(cell) === false){
                cell = document.getElementById("4Line4Cell")
                if (controlElement(cell) === false){
                    cell = document.getElementById("3Line4Cell")
                    if (controlElement(cell) === false){
                        cell = document.getElementById("2Line4Cell")  
                        if (controlElement(cell) === false){
                            cell = document.getElementById("1Line4Cell")
                        }
                    }
                }       
            }
        }
        blueOrRed(cycle,cell)
    
    }else if (column==5){
        let cell = document.getElementById("6Line5Cell")
        if (controlElement(cell) === false){
            cell = document.getElementById("5Line5Cell")
            if (controlElement(cell) === false){
                cell = document.getElementById("4Line5Cell")
                if (controlElement(cell) === false){
                    cell = document.getElementById("3Line5Cell")
                    if (controlElement(cell) === false){
                        cell = document.getElementById("2Line5Cell")  
                        if (controlElement(cell) === false){
                            cell = document.getElementById("1Line5Cell")
                        }
                    }
                }       
            }
        }
        blueOrRed(cycle,cell)
    
    }else if (column==6){
        let cell = document.getElementById("6Line6Cell")
        if (controlElement(cell) === false){
            cell = document.getElementById("5Line6Cell")
            if (controlElement(cell) === false){
                cell = document.getElementById("4Line6Cell")
                if (controlElement(cell) === false){
                    cell = document.getElementById("3Line6Cell")
                    if (controlElement(cell) === false){
                        cell = document.getElementById("2Line6Cell")  
                        if (controlElement(cell) === false){
                            cell = document.getElementById("1Line6Cell")
                        }
                    }
                }       
            }
        }
        blueOrRed(cycle,cell)
    }else if (column==7){
        let cell = document.getElementById("6Line7Cell")
        if (controlElement(cell) === false){
            cell = document.getElementById("5Line7Cell")
            if (controlElement(cell) === false){
                cell = document.getElementById("4Line7Cell")
                if (controlElement(cell) === false){
                    cell = document.getElementById("3Line7Cell")
                    if (controlElement(cell) === false){
                        cell = document.getElementById("2Line7Cell")  
                        if (controlElement(cell) === false){
                            cell = document.getElementById("1Line7Cell")
                        }
                    }
                }       
            }
        }
        blueOrRed(cycle,cell)
    }


    let element1_1=document.getElementById("1Line1Cell").getAttribute("value")
    element1_1=numberFromValue(element1_1)
    let element1_2=document.getElementById("1Line2Cell").getAttribute("value")
    element1_2=numberFromValue(element1_2)
    let element1_3=document.getElementById("1Line3Cell").getAttribute("value")
    element1_3=numberFromValue(element1_3)
    let element1_4=document.getElementById("1Line4Cell").getAttribute("value")
    element1_4=numberFromValue(element1_4)
    let element1_5=document.getElementById("1Line5Cell").getAttribute("value")
    element1_5=numberFromValue(element1_5)
    let element1_6=document.getElementById("1Line6Cell").getAttribute("value")
    element1_6=numberFromValue(element1_6)
    let element1_7=document.getElementById("1Line7Cell").getAttribute("value")
    element1_7=numberFromValue(element1_7)

    let element2_1=document.getElementById("2Line1Cell").getAttribute("value")
    element2_1=numberFromValue(element2_1)
    let element2_2=document.getElementById("2Line2Cell").getAttribute("value")
    element2_2=numberFromValue(element2_2)
    let element2_3=document.getElementById("2Line3Cell").getAttribute("value")
    element2_3=numberFromValue(element2_3)
    let element2_4=document.getElementById("2Line4Cell").getAttribute("value")
    element2_4=numberFromValue(element2_4)
    let element2_5=document.getElementById("2Line5Cell").getAttribute("value")
    element2_5=numberFromValue(element2_5)
    let element2_6=document.getElementById("2Line6Cell").getAttribute("value")
    element2_6=numberFromValue(element2_6)
    let element2_7=document.getElementById("2Line7Cell").getAttribute("value")
    element2_7=numberFromValue(element2_7)

    let element3_1=document.getElementById("3Line1Cell").getAttribute("value")
    element3_1=numberFromValue(element3_1)
    let element3_2=document.getElementById("3Line2Cell").getAttribute("value")
    element3_2=numberFromValue(element3_2)
    let element3_3=document.getElementById("3Line3Cell").getAttribute("value")
    element3_3=numberFromValue(element3_3)
    let element3_4=document.getElementById("3Line4Cell").getAttribute("value")
    element3_4=numberFromValue(element3_4)
    let element3_5=document.getElementById("3Line5Cell").getAttribute("value")
    element3_5=numberFromValue(element3_5)
    let element3_6=document.getElementById("3Line6Cell").getAttribute("value")
    element3_6=numberFromValue(element3_6)
    let element3_7=document.getElementById("3Line7Cell").getAttribute("value")
    element3_7=numberFromValue(element3_7)

    let element4_1=document.getElementById("4Line1Cell").getAttribute("value")
    element4_1=numberFromValue(element4_1)
    let element4_2=document.getElementById("4Line2Cell").getAttribute("value")
    element4_2=numberFromValue(element4_2)
    let element4_3=document.getElementById("4Line3Cell").getAttribute("value")
    element4_3=numberFromValue(element4_3)
    let element4_4=document.getElementById("4Line4Cell").getAttribute("value")
    element4_4=numberFromValue(element4_4)
    let element4_5=document.getElementById("4Line5Cell").getAttribute("value")
    element4_5=numberFromValue(element4_5)
    let element4_6=document.getElementById("4Line6Cell").getAttribute("value")
    element4_6=numberFromValue(element4_6)
    let element4_7=document.getElementById("4Line7Cell").getAttribute("value")
    element4_7=numberFromValue(element4_7)

    let element5_1=document.getElementById("5Line1Cell").getAttribute("value")
    element5_1=numberFromValue(element5_1)
    let element5_2=document.getElementById("5Line2Cell").getAttribute("value")
    element5_2=numberFromValue(element5_2)
    let element5_3=document.getElementById("5Line3Cell").getAttribute("value")
    element5_3=numberFromValue(element5_3)
    let element5_4=document.getElementById("5Line4Cell").getAttribute("value")
    element5_4=numberFromValue(element5_4)
    let element5_5=document.getElementById("5Line5Cell").getAttribute("value")
    element5_5=numberFromValue(element5_5)
    let element5_6=document.getElementById("5Line6Cell").getAttribute("value")
    element5_6=numberFromValue(element5_6)
    let element5_7=document.getElementById("5Line7Cell").getAttribute("value")
    element5_7=numberFromValue(element5_7)

    let element6_1=document.getElementById("6Line1Cell").getAttribute("value")
    element6_1=numberFromValue(element6_1)
    let element6_2=document.getElementById("6Line2Cell").getAttribute("value")
    element6_2=numberFromValue(element6_2)
    let element6_3=document.getElementById("6Line3Cell").getAttribute("value")
    element6_3=numberFromValue(element6_3)
    let element6_4=document.getElementById("6Line4Cell").getAttribute("value")
    element6_4=numberFromValue(element6_4)
    let element6_5=document.getElementById("6Line5Cell").getAttribute("value")
    element6_5=numberFromValue(element6_5)
    let element6_6=document.getElementById("6Line6Cell").getAttribute("value")
    element6_6=numberFromValue(element6_6)
    let element6_7=document.getElementById("6Line7Cell").getAttribute("value")
    element6_7=numberFromValue(element6_7)

    line1=[element1_1,element1_2,element1_3,element1_4,element1_5,element1_6,element1_7]
    line2=[element2_1,element2_2,element2_3,element2_4,element2_5,element2_6,element2_7]
    line3=[element3_1,element3_2,element3_3,element3_4,element3_5,element3_6,element3_7]
    line4=[element4_1,element4_2,element4_3,element4_4,element4_5,element4_6,element4_7]
    line5=[element5_1,element5_2,element5_3,element5_4,element5_5,element5_6,element5_7]
    line6=[element6_1,element6_2,element6_3,element6_4,element6_5,element6_6,element6_7]
    
    var redWon="RED PLAYER WON"
    var blueWon="BLUE PLAYER WON"


    if (checkHorizontally(line1)===true || checkHorizontally(line2)===true || checkHorizontally(line3)===true || checkHorizontally(line4)===true || checkHorizontally(line5)===true || checkHorizontally(line6)===true){
        if(cycle%2===1){
            document.getElementById("final_text").textContent=redWon
        }else{
            document.getElementById("final_text").textContent=blueWon
        }
        buttonOff()
    }

    if (checkVertically(line1,line2,line3,line4,line5,line6)===true){
        if(cycle%2===1){
            document.getElementById("final_text").textContent=redWon
        }else{
            document.getElementById("final_text").textContent=blueWon
        }
        buttonOff()
    }
    if(checkDiagonally(line1,line2,line3,line4)===true || checkDiagonally(line2,line3,line4,line5)===true || checkDiagonally(line3,line4,line5,line6)){
        if(cycle%2===1){
            document.getElementById("final_text").textContent=redWon
        }else{
            document.getElementById("final_text").textContent=blueWon
        }
        buttonOff()
    }
    cycle++
}
