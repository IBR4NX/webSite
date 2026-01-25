let el =document.querySelector(".scroll");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll",function(){
let  scrollTop = document.documentElement.scrollTop;
el.style.width=`${(scrollTop /height) * 100}%`;
});







 /*
document.addEventListener("visibilitychange", function() {
 if (!document.hidden) {
  location.reload() } })
  window.onload = () => {
    if (!sessionStorage.getItem("reloaded")) {
      sessionStorage.setItem("reloaded", "true");
      location.reload();
    } }; 
   */