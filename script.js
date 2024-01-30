
let caturl = 'https://catfact.ninja/fact';
let cbtn = document.querySelector("#catfact")
cbtn.addEventListener("click", async function(){
let facts= await getfacts()
let p = document.querySelector("p")
p.innerText=facts;
})

async function getfacts(){
let res= await axios.get(caturl);
return res.data.fact;
}
