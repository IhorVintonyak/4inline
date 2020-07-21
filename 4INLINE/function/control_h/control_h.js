let line1 = [1,1,1,1,1,0,0]

function control_h(line){
	for (let i in line){
		if (line[i]===1 && line[i+1]===1){
			console.log("OJ")
		} else{
			console.log("NOTOK")
		}
	}
}


control_h(line1)

console.log(line1)