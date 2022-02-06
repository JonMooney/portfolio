var formEl = document.getElementById("contact-form");

// Add or remove sticky header on scroll event
window.onscroll = function(e) {
    if(this.oldScroll > this.scrollY){
        document.getElementById('header').style.position = 'sticky';
    }else{
        document.getElementById('header').style.position = 'relative';
    }
    
    this.oldScroll = this.scrollY;
}

formEl.addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log("submit form")
})

