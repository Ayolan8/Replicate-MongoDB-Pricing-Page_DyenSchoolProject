// declarations and initialisations of elements
// const header = document.getElementById("header");
const rightNav = document.getElementById('right-nav');
const leftNav = document.getElementById('left-nav');
const barBtn = document.getElementById('barBtn');
const header = document.getElementById("header");
const topGreenNewsInfo = document.getElementById('news-info');
const tryBtn = document.querySelector('.try-btn')
const signLink = document.querySelector('.signin-link');

// sticky header on scroll
function stickHeader(){
    const sticky = header.offsetTop;

    if (window.pageYOffset > sticky){
        header.classList.add("sticky");
    }else {
        header.classList.remove("sticky");
    }
}

window.onscroll = () => {
    stickHeader()
}

const verticalEl = document.getElementById("vertical-elipsis");
const showHiddenOnMediaMedia1285 = document.getElementById("mediaScreen1285");
// const barBtn = document.querySelector('.bar-btn');
function showDropdown() {
    showHiddenOnMediaMedia1285.innerHTML = `
    <div class="show-dropdown">
        <p>Support</p>
        <a href="#">Sign In</a>
        <button>Try Free</button>
    </div>
    `
}
 
verticalEl.addEventListener("click", function(){
    showHiddenOnMediaMedia1285.classList.toggle("hidden-on-media1285");
    showDropdown()
});


// toggle side nav bar on small device

function toggleDropdownNav(){
    if (rightNav.style.display === "flex" && leftNav.style.display === "flex"){
        rightNav.style.display = "none";
        rightNav.style.width = "0%";
        leftNav.style.display = "none";
        leftNav.style.width = "0%";
        header.style.height = "10vh"
        tryBtn.style.width = "0";
        signLink.style.width = "0";
        topGreenNewsInfo.classList.remove('hidden');
        document.body.style.overflow = "auto";
    }else {
        rightNav.style.display = "flex";
        rightNav.style.width = "100%";
        leftNav.style.display = "flex";
        leftNav.style.width = "100%";
        header.style.height = "100vh";
        tryBtn.style.width = "100%";
        signLink.style.width = "100%";
        topGreenNewsInfo.classList.add('hidden');
        document.body.style.overflow = "hidden";
    }
}

barBtn.addEventListener("click", function(){
    barBtn.classList.toggle('active');
    toggleDropdownNav();
    
}) 