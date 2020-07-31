function user_button(el){
    column=el.getAttribute("value")
    console.log(column)
    
    if (column==1){
        let circle=document.getElementById("6_line_1coin")
        console.log(circle.getAttribute("value"))
        circle.value = "I'm a changed button";
        console.log(circle.getAttribute("value"))
        circle.classList.add("circle_red")
        circle.classList.remove('cicle')
    
    }else if (column==2){
        let circle=document.getElementById("6_line_2coin")
        circle.classList.add("circle_red")
        circle.classList.remove('cicle')
   	
    }else if (column==3){
        let circle=document.getElementById("6_line_3coin")
        circle.classList.add("circle_red")
        circle.classList.remove('cicle')
    
    }else if (column==4){
        let circle=document.getElementById("6_line_4coin")
        circle.classList.add("circle_red")
        circle.classList.remove('cicle')
    
    }else if (column==5){
        let circle=document.getElementById("6_line_5coin")
        circle.classList.add("circle_red")
        circle.classList.remove('cicle')
    
    }else if (column==6){
        let circle=document.getElementById("6_line_6coin")
        circle.classList.add("circle_red")
        circle.classList.remove('cicle')
    }else if (column==7){
        let circle=document.getElementById("6_line_7coin")
        circle.classList.add("circle_red")
        circle.classList.remove('cicle')
    }



}

/*
function user_button(el){
    if (el===2){
    	console.log("NO")
        let circle=document.getElementById("_line_1coin")
        circle.classList.add("circle_red")
        circle.classList.remove('cicle')
    }else if(el===2){
    	console.log("s")
        let circle=document.getElementById("5_line_1coin")
        circle.classList.add("circle_red")
        circle.classList.remove('cicle')  
    }
}
*/