let line1 = [0,0,0,0,0,0,0]
let line2 = [0,0,0,1,0,0,0]
let line3 = [0,0,0,1,0,0,0]
let line4 = [0,0,0,1,0,0,0]
let line5 = [0,0,0,1,0,0,0]
let line6 = [0,0,1,1,0,0,0]



function input_for_user(line,number){
	/*puts a circle in the selected cell*/
	if (line[number] === 0){
		line[number] = 1
		return line
	} else {
		return false
	}

}

number = 1


/*Control if possible put circle in the column predefinite*/
if (!(input_for_user(line6,number))){
    if (!(input_for_user(line5,number))){
		if (!(input_for_user(line4,number))){
			if (!(input_for_user(line3,number))){
				if (!(input_for_user(line2,number))){
					if (!(input_for_user(line1,number))){
                        print("TOO MUCH")
					}
				}
			}
		}
	}
}

console.log(line1)
console.log(line2)
console.log(line3)
console.log(line4)
console.log(line5)
console.log(line6)
