const sidebar = document.getElementById('sidebar')
const toggleMenu = document.getElementById('toggle-bar')
const closeMenu = document.getElementById('close-menu')
const fashionbar = document.getElementById('fashionbar')
const toggleFashionMenu = document.getElementById('fashion-toggle-bar')
const toggleClothesMenu = document.getElementById('clothes-toggle-bar')
const toggleFootwearMenu = document.getElementById('footwear-toggle-bar')
const FashionItembar = document.getElementById('fashionitembar')
const closeFashionMenu = document.getElementById('close-fashion-bar')
const closeFashionitemMenu = document.getElementById('close-fashion-item')
const accessoriesbar = document.getElementById('accessoriesbar')
const toggleAccessoriesMenu = document.getElementById('accessories-toggle-bar')
const closeAccessoriesMenu = document.getElementById('close-accessories-bar')
const toggleFragranceMenu = document.getElementById('fragrance-toggle-bar')
const toggleGiftsMenu = document.getElementById('gifts-toggle-bar')
const explorebar = document.getElementById('explorebar')
const toggleExploreMenu = document.getElementById('explore-toggle-bar')
const closeExploreMenu = document.getElementById('close-explore-bar')

toggleMenu.addEventListener('click', () => {
    sidebar.classList.add('show')
})

closeMenu.addEventListener('click', () => {
    sidebar.classList.remove('show')
})


toggleFashionMenu.addEventListener('click', () => {
    fashionbar.classList.add('show')
})

closeFashionMenu.addEventListener('click', () => {
    fashionbar.classList.remove('show')
})

toggleClothesMenu.addEventListener('click', () => {
    FashionItembar.classList.add('show')
})

toggleFootwearMenu.addEventListener('click', () => {
    FashionItembar.classList.add('show')
})

closeFashionitemMenu.addEventListener('click', () => {
    FashionItembar.classList.remove('show')
})

toggleAccessoriesMenu.addEventListener('click', () => {
    accessoriesbar.classList.add('show')
})

closeAccessoriesMenu.addEventListener('click', () => {
    accessoriesbar.classList.remove('show')
})

toggleFragranceMenu.addEventListener('click', () => {
    FashionItembar.classList.add('show')
})

closeFashionitemMenu.addEventListener('click', () => {
    FashionItembar.classList.remove('show')
})

toggleGiftsMenu.addEventListener('click', () => {
    FashionItembar.classList.add('show')
})

closeFashionitemMenu.addEventListener('click', () => {
    FashionItembar.classList.remove('show')
})

toggleExploreMenu.addEventListener('click', () => {
    explorebar.classList.add('show')
})

closeExploreMenu.addEventListener('click', () => {
    explorebar.classList.remove('show')
})



// const signin = document.getElementById('signin')
// const signup = document.getElementById('signup')
// const login = document.getElementById('login')
// const register = document.getElementById('register')
// const btn = document.getElementById('btn')

// signup.addEventListener('click', () => {

// })

// signin.addEventListener('click', () => {

// })

// function login(){
//     login.style.left="25px"
//     register.style.left="480px"
//     btn.style.left="0px"
// }

// function register(){
//     login.style.left="-480px"
//     register.style.left="25px"
//     btn.style.left="150px"
// }





// $(document).ready(function(){
//     $('.dropdown-submenu a.test').on("click", function(e){
//       $(this).next('ul').toggle();
//       e.stopPropagation();
//       e.preventDefault();
//     });
//   });



