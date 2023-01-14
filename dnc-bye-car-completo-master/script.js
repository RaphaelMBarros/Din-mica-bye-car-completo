const motosArray = [
{
    title:"Scooter Elétrica Voltz EV1",
    paragrafo: "O câmbio de 5 marchas da Scooter Elétrica Voltz EV1 oferece maior confiança e performance na pilotagem, tornando as subidas de marcha mais leves e as reduções mais suaves!",
    img: "assets/img-card-1.png"
},

{
    title:"Honda CB 500X",
    paragrafo: "O câmbio de 6 marchas da CB 500X oferece maior confiança e performance na pilotagem, tornando as subidas de marcha mais leves e as reduções mais suaves!",
    img: "assets/img-card-2.png"

}];


const motosLi = document.querySelectorAll(".carousel-cards li") 
let index = 0
let modal = document.querySelector(".modal")

function show(increase) {
    index = index + increase
    index = Math.min(Math.max(index,0), motosLi.length -1)
    motosLi[index].scrollIntoView({behavior: "smooth"})
}

setInterval(() => {
    if (index === motosLi.length -1){
        show(index - 2);
    } else {
        show(index + 1);
    }
}, 5000);
        


function showModal(index) {
    modal.innerHTML = "";
    modal.innerHTML = `
        <div class = "modal-card">
            <h1>${motosArray[index].title}</h1>
            <p>${motosArray[index].paragrafo}</p>
            <img src="${motosArray[index].img}" alt="imagem da moto">
            <button><img src="assets/close-btn.png" onclick="closeModal()"</button>
            <button>Quero Assinar</button>
        </div>
    
    `    
    modal.style.visibility = "visible";
}
    
function closeModal(){
    modal.style.visibility = "hidden";
}
