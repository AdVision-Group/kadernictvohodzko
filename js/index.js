
var mobileMenuShowing = false;

//header animation

function animateHeader() {
    if (!mobileMenuShowing) {
        var offset = window.pageYOffset;

        if (offset > 100) {
            document.getElementById("header").childNodes[1].style.backgroundColor = "rgb(35, 35, 35)";
            document.getElementById("header").childNodes[1].style.padding = "10px";
            document.getElementById("header").childNodes[1].style.paddingRight = "30px";

            // color of menu items
            document.getElementById("header").childNodes[1].childNodes[3].childNodes[3].style.color = "white";
            document.getElementById("header").childNodes[1].childNodes[3].childNodes[5].style.color = "white";
            document.getElementById("header").childNodes[1].childNodes[3].childNodes[7].style.color = "white";
            document.getElementById("header").childNodes[1].childNodes[3].childNodes[9].style.color = "white";
            document.getElementById("header").childNodes[1].childNodes[3].childNodes[11].style.color = "white";
        } else {
            document.getElementById("header").childNodes[1].style.backgroundColor = "transparent";
            document.getElementById("header").childNodes[1].style.padding = "30px";

            // color of menu items
            document.getElementById("header").childNodes[1].childNodes[3].childNodes[3].style.color = "rgb(200, 200, 200)";
            document.getElementById("header").childNodes[1].childNodes[3].childNodes[5].style.color = "rgb(200, 200, 200)";
            document.getElementById("header").childNodes[1].childNodes[3].childNodes[7].style.color = "rgb(200, 200, 200)";
            document.getElementById("header").childNodes[1].childNodes[3].childNodes[9].style.color = "rgb(200, 200, 200)";
            document.getElementById("header").childNodes[1].childNodes[3].childNodes[11].style.color = "rgb(200, 200, 200)";
        }
    }
}

//menu animation

function animateMenu() {
    var y = document.getElementById("header").offsetHeight;

    if (document.getElementById("home").getBoundingClientRect().top <= y && document.getElementById("services").getBoundingClientRect().top >= y) {
        document.getElementById("underline-0").style.width = "100%";
    } else {
        document.getElementById("underline-0").style.width = "0";
    }

    if (document.getElementById("services").getBoundingClientRect().top <= y && document.getElementById("services").getBoundingClientRect().bottom >= y) {
        document.getElementById("underline-1").style.width = "100%";
    } else {
        document.getElementById("underline-1").style.width = "0";
    }

    if (document.getElementById("team").getBoundingClientRect().top <= y && document.getElementById("hours").getBoundingClientRect().bottom >= y) {
        document.getElementById("underline-2").style.width = "100%";
    } else {
        document.getElementById("underline-2").style.width = "0";
    }

    if (document.getElementById("gallery").getBoundingClientRect().top <= y && document.getElementById("gallery").getBoundingClientRect().bottom >= y) {
        document.getElementById("underline-3").style.width = "100%";
    } else {
        document.getElementById("underline-3").style.width = "0";
    }

    if (document.getElementById("references").getBoundingClientRect().top <= y && document.getElementById("references").getBoundingClientRect().bottom >= y) {
        document.getElementById("underline-4").style.width = "100%";
    } else {
        document.getElementById("underline-4").style.width = "0";
    }

    if (document.getElementById("contact").getBoundingClientRect().top <= y && document.getElementById("contact").getBoundingClientRect().bottom >= y) {
        document.getElementById("underline-5").style.width = "100%";
    } else {
        document.getElementById("underline-5").style.width = "0";
    }
}

//gallery animation


//galeria swipe 
document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;
var yDown = null;

function getTouches(evt) {
    return evt.touches || // browser API
        evt.originalEvent.touches; // jQuery
}

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
};

function handleTouchMove(evt) {
    if (!xDown || !yDown) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        /*most significant*/
        if (xDiff > 0) {
            changeSlides(currentSlide + 1)
        } else {
            changeSlides(currentSlide - 1)
        }
    }
    xDown = null;
    yDown = null;
};

let currentSlide = 0
let numberOfSlides = $('.galleryc').children('.button').length


function changeSlides(index) {
    let mq = window.matchMedia('(max-width:900px)')
    currentSlide = index
    let offset = 1200
    let slideOffset = 0
    let iterations = numberOfSlides/3
    if (currentSlide == -1) {
        currentSlide = numberOfSlides-1
    }
    
    
    else if (currentSlide == numberOfSlides){
        currentSlide = 0
    }
    
    
    if (mq.matches) {
        offset = 400
        iterations = numberOfSlides
        slideOffset = 1
    }
    document.getElementById("slides").style.marginLeft = ((-currentSlide+slideOffset) * offset).toString() + "px";

    for (let i = 0; i < iterations; i++) {
        document.getElementById("gallery-button-" + i).style.backgroundColor = "lightgray";
    }

    document.getElementById("gallery-button-" + currentSlide).style.backgroundColor = "#333333";
}

//references animation

let currentReference = 0;
let referenceCooldown = false
let timer
window.setInterval(()=>{
        changeReference(currentReference + 1,false)
}, 8000);


function changeReference(index,shouldCooldown) {
    if(referenceCooldown && !shouldCooldown){return}
    if (shouldCooldown){
        clearTimeout(timer)
        referenceCooldown = true;
        timer = window.setTimeout(()=>{referenceCooldown=false},7000)
    }
    currentReference=index
    if (currentReference>4){
        currentReference=0
    }

    for (let i = 0; i < 5; i++) {
        document.getElementById("reference-item-" + i).style.opacity = "0";
    }

    document.getElementById("reference-list").style.marginLeft = (-currentReference * 800) + "px";

    document.getElementById("reference-item-" + currentReference).style.opacity = "1";

    for (let i = 0; i < 5; i++) {
        document.getElementById("reference-button-" + i).style.backgroundColor = "white";
    }

    document.getElementById("reference-button-" + currentReference).style.backgroundColor = "#333333";
}

//menu hover animation

for (let i = 0; i < 6; i++) {
    document.getElementById("menu-item-" + i).onmouseover = function () {
        document.getElementById("underline-" + i).style.width = "100%";
    }

    document.getElementById("menu-item-" + i).onmouseout = function () {
        document.getElementById("underline-" + i).style.width = "0";
        animateMenu();
    }
}

// services animation

function animateServices() {
    var y = document.getElementById("header").offsetHeight;

    if (document.getElementById("services").getBoundingClientRect().top <= y + 300) {
        document.getElementById("service-list").style.opacity = "1";

        document.getElementById("service-1").style.margin = "20px";
        document.getElementById("service-2").style.margin = "20px";
        document.getElementById("service-3").style.margin = "20px";
        document.getElementById("service-4").style.margin = "20px";
    }
}

//onscroll

window.onscroll = function () {
    animateHeader();
    animateMenu();
    animateServices();
}

//links scrolling

function smoothScroll(button) {
    $(button).on("click", function (e) {
        if ("" !== this.hash) {
            e.preventDefault();
            var offset = $(this).hasClass('home') ? 0 : -80;
            //var offset = -document.getElementById("header").offsetHeight + 2;
            var t = this.hash;
            $("html, body").animate({
                scrollTop: $(t).offset().top + offset
            }, 800, function () {})
        }
    })
}

function smoothScrollMobileMenu(button) {
    $(button).on("click", function (e) {
        if ("" !== this.hash) {
            e.preventDefault();
            var offset = $(this).hasClass('home') ? 0 : -80;
            //var offset = -document.getElementById("header").offsetHeight + 2;
            var t = this.hash;

            hideMenu();

            setTimeout(function() {
                $("html, body").animate({
                    scrollTop: $(t).offset().top + offset
                }, 800, function () {})
            }, 300);
        }
    })
}

smoothScroll("#header .content .menu .menu-item");
smoothScroll("#home .content .button");
smoothScrollMobileMenu("#mobile-menu .content .mobile-menu-item");

function showMenu() {
    var offset = window.pageYOffset;

    if (offset <= 100) {
        document.getElementById("header").childNodes[1].style.backgroundColor = "rgb(35, 35, 35)";
    }

    document.getElementById("mobile-menu").style.right = "0";
    document.getElementById("mobile-menu").style.top = document.getElementById("header").offsetHeight - 1 + "px";

    document.getElementById("mobile-menu-button").setAttribute("onclick", "hideMenu()");

    mobileMenuShowing = true;
}

function hideMenu() {
    var offset = window.pageYOffset;

    if (offset <= 100) {
        document.getElementById("header").childNodes[1].style.backgroundColor = "transparent";
    }

    document.getElementById("mobile-menu").style.right = "-100%";

    document.getElementById("mobile-menu-button").setAttribute("onclick", "showMenu()");

    mobileMenuShowing = false;
}

function showPricing() {
    document.getElementById("pricing").style.display = "flex";
    setTimeout(function() {
        document.getElementById("pricing").style.opacity = "1";
    }, 1);
}

function hidePricing() {
    document.getElementById("pricing").style.opacity = "0";
    setTimeout(function() {
        document.getElementById("pricing").style.display = "none";
    }, 500);
}

function showImage(image) {
    document.getElementById("gallery-image-panel").style.display = "flex";
    document.getElementById("gallery-image").src = image;

    document.getElementById("gallery-image").style.display = "inline-block";
    setTimeout(function() {
        document.getElementById("gallery-image-panel").style.opacity = "1";
    }, 1);
}

function hideImage() {
    document.getElementById("gallery-image-panel").style.opacity = "0";
    setTimeout(function() {
        document.getElementById("gallery-image-panel").style.display = "none";
    }, 300);
}