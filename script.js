function load() {
	let rootE = document.getElementById("root")
	let myObjects = [
		{
			tag: "h1",
			content: "Dani"
		},
		{
			tag: "p",
			content: "Frontend Developer"
		}
	];
	//console.log(myObjects)

	// for (let i = 0; i < myObjects.length; i++) {
	//	valtozoba eltárolnánk egy tömböt, ketto darab objektumot kell létrehozni, két kulcs tag:"h1", content:"Pugner Dániel key2 tag: p content: "frontend-developer"
		
	// };
	console.log(myObjects.length);

	for (myObject of myObjects){
		console.log(myObject);

		console.log(myObjects.tag);

		rootE.insertAdjacentHTML("beforeend", `
			<${myObject.tag}>${myObject.content}</${myObject.tag}>
		`);
	}
	rootE.addEventListener("click", function(){
		rootE.classList.toggle("clicked");
	});
}
window.addEventListener("load", load);