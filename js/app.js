//HEADER//
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
    searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
    searchEl.classList.add("focused");
    searchInputEl.setAttribute("placeholder", "통합검색"); //Attribute: css 속성
});

searchInputEl.addEventListener("blur", function () {
    searchEl.classList.remove("focused");
    searchInputEl.setAttribute("placeholder", ""); //Attribute: css 속성
});


//BADGE & TO TOP//
const badgeEl = document.querySelector("header .badges");
const toTopEl = document.querySelector("#to-top");

window.addEventListener("scroll", _.throttle(function () {
    if (window.scrollY > 500) {
        //gsap.to(elemanet, duration, option);
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: "none",
        });
        gsap.to(toTopEl, .2, {
            x: 0,
        });
    } else {
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: "block",
        });
        gsap.to(toTopEl, .2, {
            x: 100,
        });
    }
}, 300)); 
//0.3초의 부하를 적용하여 함수 호출 사이사이에 0.3초의 간격을 둠

toTopEl.addEventListener("click", function () {
    gsap.to(window, .7, {
        scrollTo: 0,
    });
});

//SECTION//

const fadeEls = document.querySelectorAll(".visual .fade-in");

fadeEls.forEach(function (fadeEl, index) {
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7,  //0.7 1.4 2.1 2.7
        opacity: 1,
    });
});


//SLIDER//
//new Swiper(선택자, 옵션);
const swiper = new Swiper(".notice-line .swiper", {
    direction: "vertical",
    loop: true,
    autoplay: {
        delay: 3000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
    },
});

//PROMOTION:SLIDER

const promotion = new Swiper(".promotion .swiper", {
    // direction: "horizontal", default
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    // autoplay: {
    //     delay: 3000,
    //     pauseOnMouseEnter: true,
    //     disableOnInteraction: false,
    // },
    pagination: {
        el: ".promotion .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".promotion .swiper-button-next",
        prevEl: ".promotion .swiper-button-prev",
    }
});

new Swiper(".awards .swiper", {
    slidesPerView: 5,
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    navigation: {
        nextEl: ".awards .swiper-next",
        prevEl: ".awards .swiper-prev",
    },
});


//HIDDEN//
const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
const promotionBtnIcon = promotionToggleBtn.querySelector(".material-icons");

let isHidePromotion = false;
promotionToggleBtn.addEventListener("click", function () {
    isHidePromotion = !isHidePromotion;
    if (isHidePromotion) {
        promotionEl.classList.toggle("hide");
        promotionBtnIcon.innerText = "get_app";
    } else {
        promotionEl.classList.toggle("hide");
        promotionBtnIcon.innerText = "upload";
    }
});

//FLOATING OBJECT//

function random(min, max) {
    return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, size) {
    gsap.to(selector, random(1.5, 2.5), {
        y: size,
        repeat: -1,
        yoyo: true,
        ease: Power1.easeInOut,
        delay: random(0, delay),
    });
};

floatingObject(".floating1", 1, 15);
floatingObject(".floating2", .5, 15);
floatingObject(".floating3", 1.5, 20);

//ScrollMagic//
//뷰포트 top 0 ~ bottom 1
const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
    new ScrollMagic
        .Scene({
            triggerElement: spyEl, //보여짐 여부를 감시할 요소 저장
            triggerHook: .8, //뷰포트의 0.8부분을 트리거 훅으로 설정
        })
        .setClassToggle(spyEl, "show")
        .addTo(new ScrollMagic.Controller());
});


//YEAR//

const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();