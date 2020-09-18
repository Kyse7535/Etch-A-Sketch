let btn_clear = document.getElementById('clear');
let btn_black = document.getElementById('Btn-black');
let btn_colorful = document.getElementById('Btn-Color');

let grid_size = 16;
let container = document.createElement('div');

let color = "black";
let main = document.getElementById('main');
main.append(container);
setGridSize(grid_size);



btn_black.addEventListener('click', function(e) {
    let div = document.getElementsByClassName('case_div');
    div = Array.from(div);
    for (let i = 0; i < div.length; i++) {
        div[i].addEventListener('mouseover', function(e) {
            div[i].style.cssText = "background-color: black; border: 1px solid black";
            if (div[i].classList.contains('spray')) div[i].classList.remove('spray');
        });
    }
});

btn_colorful.addEventListener('click', function(e) {
    let div = document.getElementsByClassName('case_div');
    div = Array.from(div);
    for (let i = 0; i < div.length; i++) {
        div[i].addEventListener('mouseover', function(e) {
            let a = Math.round(Math.random() * 255);
            let b = Math.round(Math.random() * 255);
            let c = Math.round(Math.random() * 255);
            color = "rgb(" + a + ", " + b + ", " + c + ")";
            div[i].style.cssText = "background-color: " + color + "; border: 1px solid black";
        });
    }
});



btn_clear.addEventListener('click', function(e) {
    let div = document.getElementsByClassName('case_div');
    div = Array.from(div);
    for (let i = 0; i < grid_size * grid_size; i++) {
        div[i].style.cssText = "background-color: #fff; border: 1px solid black";
        if (div[i].classList.contains('spray')) div[i].classList.remove('spray');
    }
    do {
        grid_size = prompt("enter a grid size", 16);
    } while (grid_size == null);
    container.textContent = "";
    setGridSize(grid_size);
});

/*btn_spray.addEventListener('click', function(e) {
    let div = document.getElementsByClassName('case_div');
    div = Array.from(div);
    color = [];
    for (let i = 0; i < div.length; i++) {
        div[i].addEventListener('mouseover', function(e) {
            if (div[i].classList.contains('spray')) {
                color[i] -= 25;
                div[i].style.cssText = "background-color: " + rgb(color[i], color[i], color[i]);
            } else if (!(div[i].classList.contains('spray'))) {
                color[i] = 225;
                div[i].classList.add('spray');
                div[i].style.cssText = "background-color: " + rgb(color[i], color[i], color[i]);
            }
        });
    }
})
*/

function setGridSize(grid_size) {
    let css = "display: grid; grid-template-columns: repeat(" + grid_size + ", auto); grid-gap: 0px;  width: 500px; height: 600px; padding: 4% 0; margin: 0 auto;";
    container.style.cssText = css;
    container.classList.add('grille');
    for (let i = 0; i < grid_size * grid_size; i++) {
        let div = document.createElement('div');
        div.classList.add('case_div');
        div.style.cssText = "border: 1px solid black";
        div.addEventListener('mouseover', function(e) {
            div.style.cssText = "background-color: black";
        });
        container.append(div);
    }
}