// elements

mainCardEl = document.getElementById("main-card");
hiddenCardEl = document.getElementById("hidden-card");
btnEl = document.getElementById("btn");
btnBackEl = document.getElementById("back");




// add Eventlisteners
btnEl.addEventListener("click",function() {
  mainCardEl.style.display = 'none';
  hiddenCardEl.style.display = 'block';

  
});

btnBackEl.addEventListener("click",function() {
  mainCardEl.style.display = 'block';
  hiddenCardEl.style.display = 'none';
});


