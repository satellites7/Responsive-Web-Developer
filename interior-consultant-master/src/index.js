let button = document.querySelectorAll('li')
let body = document.querySelector('body')

let page = document.querySelector('.page')
let mobile = document.querySelector('.mobile-menu')

function clear(button) {
    for  (item of button) {
        item.classList.remove('click');
    }
}

for (let btn of button) {
    btn.addEventListener('click',() => {
        clear(button);
        btn.classList.add('click')})
}


// let menu = document.querySelector('#menu');
// let back = document.querySelector('#back');
// window.onresize = function () {
//     if (window.innerWidth >= 1040) {
//         menu.style.display = 'none'
//         back.style.display = 'none'
//     }

//     if (window.innerWidth < 1040) {
//         menu.style.display = 'block'
//         back.style.display = 'none'
//     }
// }


menu.addEventListener('click',() => {

    page.style.display = 'none';
    mobile.style.display = 'block'
})
back.addEventListener('click', () => {
    page.style.display = 'block';
    mobile.style.display = 'none'
})
// back.addEventListener('click',() => {
//     menu.style.display = 'block'
//     back.style.display = 'none'

// })
