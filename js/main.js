document.addEventListener( "DOMContentLoaded" ,() => {
    var glide = new Glide(".glide", {
        type: "carousel", 
        startAt: 0,
        animationTimingFunc: "ease-in-out",
        gap: 60,
        perView: 3,
        autoplay: 2000,
    }).mount()
    
     
});


