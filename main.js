let textInput = document.querySelector("#textInput");
let resultImage = document.querySelector("#resultImage");
let genetare__btn = document.querySelector("#genetare__btn");


resultImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example"

genetare__btn.addEventListener("click",(e)=>{
    e.preventDefault();
    resultImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${textInput.value}`
})