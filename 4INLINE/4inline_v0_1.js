let line1 = [0,0,0,0,0,0,0]
let line2 = [0,0,0,0,0,0,0]
let line3 = [0,0,0,0,0,0,0]
let line4 = [0,0,0,0,0,0,0]
let line5 = [0,0,0,0,0,0,0]
let line6 = [0,0,1,1,1,0,0]

console.log(line1)
console.log(line2)
console.log(line3)
console.log(line4)
console.log(line5)
console.log(line6)
console.log("")
console.log("")

function input_for_user(line,number){
	/*puts a circle in the selected cell*/
	if (line[number] === 0){
		line[number] = 1
		return line
	} else {
		return false
	}

}



function control_h(line){
	/*control if 4 circle are in line(horizontal)*/
	for (let сell in line){
	if (line[сell]===1 && line[++сell]===1 && line[++сell]===1 && line[++сell]===1 ){
      return true
		} else{
			continue
		}
	}
}

let cycle = 0
while (cycle<10){	
	let number = prompt("Column № ? ", ""); 


	/*Control if possible put circle in the column predefinite*/
	if (!(input_for_user(line6,number))){
	    if (!(input_for_user(line5,number))){
			if (!(input_for_user(line4,number))){
				if (!(input_for_user(line3,number))){
					if (!(input_for_user(line2,number))){
						if (!(input_for_user(line1,number))){
	                        print("TOO MUCH")
						} else{
							console.log("---ERROR in control if possible put circle--- ")
						}
					}
				}
			}
		}
	}

	/*Control in all table if 4 coins are in line*/
	if (control_h(line1)===true || control_h(line2)===true || control_h(line3)===true || control_h(line4)===true || control_h(line5)===true || control_h(line6)===true){
	  console.log("YOU WIN")
	  cycle=20
	}



	console.log(line1)
	console.log(line2)
	console.log(line3)
	console.log(line4)
	console.log(line5)
	console.log(line6)
	console.log("")
	console.log("")
	cycle++
}