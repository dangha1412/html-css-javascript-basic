const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function (e) {
const id = e.target.dataset.id
if (id){
//remove active from other button
 btns.forEach(function(btn){
 btn.classList.remove('active')
 e.target.classList.add('active')
 });
 //hide other article
 articles.forEach(function(article){
   article.classList.remove('active')
 })
 //active article
 const element = document.getElementById(id)
 element.classList.add('active')
}

});
