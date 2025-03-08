document.addEventListener("DOMContentLoaded", (event) => {
  new Menu();
  new ScrollSmooth();
  const swiper = new Swiper(".swiper", {
    loop: true,
    effect: "fade",
    allowTouchMove: false,
    // autoplay: {
    //   delay: 5000,
    // },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});

class Menu {
  constructor() {
    this.trigger = document.querySelector(".hambuger");
    this.wrap = document.querySelector(".menu");

    this.trigger.addEventListener("click", this.handle.bind(this));
  }
  handle() {
    if (!this.trigger.classList.contains("active")) {
      this.open();
    } else {
      this.close();
    }
  }

  open() {
    this.trigger.classList.add("active");
    this.wrap.classList.add("active");
    document.body.style.overflow = "hidden";
  }
  close() {
    this.trigger.classList.remove("active");
    this.wrap.classList.remove("active");
    document.body.style.overflow = "";
  }
}
class ScrollSmooth {
  constructor() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  }
}
