
// Loader
window.addEventListener('load', ()=>{
  setTimeout(() => {
    if(document.querySelector('.loader-m')){
      $('.loader-m').fadeOut(700);
    }
  }, 500);
})

// Go To Up
let upBtn = document.querySelector('.up-btn');
let NavBar = document.querySelector('.navbar-m');

window.addEventListener('scroll', function(){
    // Go To UpBtn Show
    if( window.scrollY > 80){
        upBtn.style.bottom = `${15}px`;
        upBtn.style.opacity = `${1}`;
        // NavBar.classList.add('active')
      }else{
        upBtn.style.opacity = 0;
        upBtn.style.bottom = `${-100}px`;
        // NavBar.classList.remove('active')
    }
});

// clicked to top
upBtn.addEventListener('click', function(){
    window.scrollTo(0,0);
});

// Show And Hide NavBar collapse
$(document).ready(function(){
  $('.coll-open').click(function(e){
    e.preventDefault()
    if($(this).parent('.nav-collapse').hasClass('active')){
      $(this).next(".collapse-content").slideUp();
      $(this).parent('.nav-collapse').removeClass('active');
    } else{
      $('.nav-collapse').removeClass('active');
      $('.collapse-content').slideUp();
      $(this).parent('.nav-collapse').addClass('active');
      $(this).next('.collapse-content').slideDown();
    }
  })
});

// Show And Hide NavBar
const showSideBar = document.querySelector('.coll-icon');
const SideBar = document.querySelector('.links-container');

showSideBar.addEventListener('click', ()=>{
  SideBar.classList.toggle('active');
  showSideBar.classList.toggle('active');
});

// Show And Hide Search Navbar
let searchIcon = document.querySelector('.search-mobile');
let searchBox = document.querySelector('.search');

searchIcon.addEventListener('click' , ()=>{
  searchBox.classList.toggle('active');
  searchIcon.classList.toggle('active');
})

// PassWord Show In Login Page
const iconsPassSet = document.querySelectorAll('.input-g .password-me');

if(iconsPassSet){
  iconsPassSet.forEach((ic) =>{
    ic.addEventListener('click', function(){
      let input = ic.parentElement.querySelector('input');
      showPassword(input, ic);
    });
  });
}

// Function To Show And Hide Password
function showPassword(input, icon){
  if(input.type == 'password'){
    input.setAttribute('type', 'text');
    icon.innerHTML = `<i class="fa-regular fa-eye-slash"></i>`;
  } else{
    input.setAttribute('type', 'password');
    icon.innerHTML = `<i class="fa-regular fa-eye"></i>`;
  }
}

// Upload File
const fileShInputs = document.querySelectorAll('.input-file .fileJop');

if(fileShInputs){
  fileShInputs.forEach(input =>{
    input.onchange = ()=>{
      if(input.files[0]){
        const fileText = input.closest('.input-file').querySelector('.file-text');
        fileText.innerHTML = `
          <span class='file-name'>
              <input type='hidden' value='${input.files[0].name}' >
              ${input.files[0].name}
              <span class='remove-file'><i class="fa-solid fa-xmark"></i></span>
          </span>
        `;

        fileText.querySelector('.remove-file').addEventListener('click', function(){
          this.closest('.file-name').remove();
        });
      }
    }
  })
}

// Toggle dropDown
let dropMenu = document.querySelectorAll('.dropdown-active');

document.body.addEventListener('click', (e)=>{

  if(e.target.closest('.active-m') || e.target.classList.contains('active-m')){

    removeAllActive()
    closeAllDrop()

  } else if (e.target.classList.contains('show-drop') || e.target.closest('.show-drop')){

    removeAllActive()
    e.target.parentElement.classList.add('active-m');

    closeAllDrop();

    for(let i =0; i < dropMenu.length; i++){
      if(dropMenu[i].getAttribute('data-drop') == e.target.getAttribute('data-drop') || dropMenu[i].getAttribute('data-drop') == e.target.closest('.show-drop').getAttribute('data-drop')){
        dropMenu[i].classList.add('active-drop');
      }
    }

  } else{

    closeAllDrop()
    removeAllActive()
  }
})

function closeAllDrop(){
  dropMenu.forEach((drop) =>{
    drop.classList.remove('active-drop');
  })
}

function removeAllActive(){
  let activeM = document.querySelectorAll('.active-m');
  activeM.forEach((ac) =>{
    ac.classList.remove('active-m');
  });
}