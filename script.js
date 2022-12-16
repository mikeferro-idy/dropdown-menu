const btn_1= document.querySelector(".dropdown_desktop_icon button");
const btn_2= document.querySelector(".dropdown_desktop button");
const btn_3= document.querySelector(".dropdown_mobile button");

btn_1.addEventListener('click', (e) =>  {e.target.classList.toggle('active');} )
btn_2.addEventListener('click', (e) =>  {e.target.classList.toggle('active');} )
btn_3.addEventListener('click', (e) =>  {e.target.classList.toggle('active');} )