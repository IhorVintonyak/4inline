let line1 = [0,0,1,1,1,0,0]
let line2 = [0,0,1,0,1,1,0]
let line3 = [0,0,0,0,0,0,0]
let line4 = [0,0,0,1,1,1,1]
let line5 = [0,0,1,1,1,0,1]
let line6 = [0,0,1,0,0,0,0]

function control_h(line){
  /*control if 4 circle are in line(horizontal)*/
  for (let i in line){
  if (line[i]===1 && line[++i]===1 && line[++i]===1 && line[++i]===1 ){
      return true
    } else{
      continue
    }
  }
}


/*Control in all table if 4 coins are in line*/
if (control_h(line1)===true || control_h(line2)===true || control_h(line3)===true || control_h(line4)===true || control_h(line5)===true || control_h(line6)===true){
  console.log("YOU WIN")
}
