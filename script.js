let saturate = document.getElementById("saturate");
let contrast = document.getElementById("contrast");
let brightness = document.getElementById("brightness");
let sepia = document.getElementById("sepia");
let grayscale = document.getElementById("grayscale");
let blur = document.getElementById("blur");
let heuRotate = document.getElementById("heu-rotate");

let upload = document.getElementById("upload");
let download = document.getElementById("download");
let img = document.querySelector("img");

let reset = document.querySelector("span");
let imgBox = document.querySelector(".img-box");

window.onload = function() {
    download.style.display= 'none';
    reset.style.display= 'none';
    imgBox.style.display= 'none';
}

upload.onchange = function() {
    download.style.display= 'block';
    reset.style.display= 'block';
    imgBox.style.display= 'block';
    let file = new FileReader();
    file.readAsDataURL(upload.files[0]);
    file.onload = function() {
        img.src = file.result;
    }
}
let filters = document.querySelectorAll("ul li input");
filters.forEach(filter =>{
    filter.addEventListener('input', function() {
        img.style.filter = `
            saturate(${saturate.value}%)
            contrast(${contrast.value}%)
            sepia(${sepia.value}%)
            brightness(${brightness.value}%)
            grayscale(${grayscale.value})
            blur(${blur.value}px)
        `
    })
})

reset.onclick = function() {
    download.style.display= 'none';
    reset.style.display= 'none';
    imgBox.style.display= 'none';
}