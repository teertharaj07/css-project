burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')
button = document.querySelector('#button')
form =document.querySelector("#form")



burger.addEventListener('click', () => {
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp')
})


button.addEventListener('click', () => {
    alert("search functionality under contruction")
})
form.addEventListener('click', () => {
    alert("your message sent to iEducate")
})