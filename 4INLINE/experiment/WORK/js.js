function active(){
	let element=document.getElementById("first-ID")
	console.log(element.getAttribute("value"))
	element.value = "I'm a changed button";
	console.log(element.getAttribute("value"))
}