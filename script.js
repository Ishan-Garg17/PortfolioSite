const sideIcon = document.getElementById('sideicon');
const sideMenu = document.getElementById('mobileMenu');
sideIcon.addEventListener('click',()=>{
    console.log("Click Hua Re Baba")
    sideMenu.classList.toggle('visible');
})