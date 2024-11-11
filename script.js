"use strict";
// turn page wehn clink on next and prev button
const pageturnbtn = document.querySelectorAll(".nextprev-btn");
pageturnbtn.forEach((el, index) => {
    el.onclick = () => {
        const pageturnid = el.getAttribute("data-page");
        const pageturn = document.getElementById(pageturnid);
        if (pageturn.classList.contains("turn")) {
            pageturn.classList.remove("turn");
            setTimeout(() => {
                pageturn.style.zIndex = 20 - index;
            }, 500);
        }
        else {
            pageturn.classList.add("turn");
            setTimeout(() => {
                pageturn.style.zIndex = 20 + index;
            }, 500);
        }
    };
});
// contact are button when click
const pages = document.querySelectorAll(".book-page.page-right");
const contactmebtn = document.querySelector(".btn.contact-me");
contactmebtn.onclick = () => {
    pages.forEach((page, index) => {
        setTimeout(() => {
            page.classList.add("turn");
            setTimeout(() => {
                page.style.zIndex = 20 + index;
            }, 500);
        }, (index + 1) * 200 + 100);
    });
};
// create reverse index func
let totalpage = pages.length;
let pagenumber = 0;
function reverseindex() {
    pagenumber--;
    if (pagenumber < 0) {
        pagenumber = totalpage - 1;
    }
}
// back profile button when click
const backprofilebtn = document.querySelector(".back-profile");
backprofilebtn.onclick = () => {
    pages.forEach((_, index) => {
        setTimeout(() => {
            reverseindex();
            pages[pagenumber].classList.remove("turn");
            setTimeout(() => {
                reverseindex();
                pages[pagenumber].style.zIndex = 10 + index;
            }, 500);
        }, (index + 1) * 200 + 100);
    });
};
// opening animation book
const coverRight = document.querySelector(".cover.cover-right");
const pageleft = document.querySelector(".book-page.page-left");
// opening animation (cover right animation)
setTimeout(() => {
    coverRight.classList.add("turn");
}, 2100);
setTimeout(() => {
    coverRight.style.zIndex = -1;
}, 2800);
// opening animation (cover right animation)
setTimeout(() => {
    pageleft.style.zIndex = 20;
}, 3200);
// // opening all page left or profile page animation 
pages.forEach((_, index) => {
    setTimeout(() => {
        reverseindex();
        pages[pagenumber].classList.remove("turn");
        setTimeout(() => {
            reverseindex();
            pages[pagenumber].style.zIndex = 10 + index;
        }, 500);
    }, (index + 1) * 200 + 2100);
});
