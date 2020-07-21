let line1 = [0,0,0,0,0,0,0]
let line2 = [0,0,0,1,0,0,0]
let line3 = [0,0,0,1,0,0,0]
let line4 = [0,0,0,1,0,0,0]
let line5 = [0,0,0,1,0,0,0]
let line6 = [0,0,1,1,0,0,0]



function control(line,number){
	if (line[number] === 0){
		line[number] = 1
		return line
	} else {
		return false
	}

}

number = 1

if (!(control(line6,number))){
	if (!(control(line5,number))){
		if (!(control(line4,number))){
			if (!(control(line3,number))){
				if (!(control(line2,number))){
					if (!(control(line1,number))){
						print("ERROR")
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
