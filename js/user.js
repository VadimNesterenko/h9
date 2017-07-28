const post = []
for (let i = 0; i < 5; ++i ){
	post[i] = new Post(
    "Vadim Nesterenko",
    new Date().toLocaleDateString('en-GB', {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
								hour: "2-digit",
								minute: "2-digit",
								second: "2-digit"
              }),
		"img/like.png",
		"Conteiner",
    "It is a homework number 9,I did this with code Artema Matveeva ",
		"img/like.png"
	)
	post[i].articleElement.setAttribute("id", i + 1)
	post[i].add(document.getElementsByTagName("section")[0])
}

const timer = new Timer(1000)
timer.start(function () {
	let idArticle = Math.ceil(Math.random()*5)
	let randomCount = Math.ceil(Math.random()*99)
	if ( randomCount > 10) randomCount
	else {
		randomCount = 10
	}
	document.getElementById(idArticle)
		.getElementsByClassName("counter")[0]
		.innerText 
	= 
  parseInt(document.getElementById(idArticle)
		.getElementsByClassName("counter")[0]
		.innerText)
	+ 
	parseInt(randomCount)
		
	console.log(idArticle, randomCount)
})
  .stopAfter(15000, timer.stop.bind(timer))