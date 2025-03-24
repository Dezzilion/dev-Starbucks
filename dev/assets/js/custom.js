const burger = document.querySelector('#btn-burger')
const mobileContainer = document.querySelector('#mobile-container')

burger.addEventListener('click', ()=> {
    burger.classList.toggle('active')
    mobileContainer.classList.toggle('show')
})

const btnTriggerProcess = document.querySelector('[data-triger-modal="proccess"]');

function ShowOverlay() {
    alert('Hello eorldf');
}