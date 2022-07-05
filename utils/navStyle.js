const navStyle = () => {
  const sections = document.querySelectorAll("section");
  const links = document.querySelectorAll(".link");
  const nav = document.querySelector(".nav");

  window.onscroll = () => {
    if (sections[0].getBoundingClientRect().top <= 0 && sections[0].getBoundingClientRect().bottom > 0) {
      links[0].classList.add("bg-main");
      nav.classList.add("bg-mainDark");
    } else {
      links[0].classList.remove("bg-main");
      nav.classList.remove("bg-mainDark");
    }

    if (sections[1].getBoundingClientRect().top <= 0 && sections[1].getBoundingClientRect().bottom > 1) {
      links[1].classList.add("bg-projects");
      nav.classList.add("bg-projectsDark");
    } else {
      links[1].classList.remove("bg-projects");
      nav.classList.remove("bg-projectsDark");
    }

    if (sections[2].getBoundingClientRect().top <= 1 && sections[2].getBoundingClientRect().bottom > 1) {
      links[2].classList.add("bg-skills");
      nav.classList.add("bg-skillsDark");
    } else {
      links[2].classList.remove("bg-skills");
      nav.classList.remove("bg-skillsDark");
    }

    if (sections[3].getBoundingClientRect().top <= 1 && sections[3].getBoundingClientRect().bottom > 1) {
      links[3].classList.add("bg-about");
      nav.classList.add("bg-aboutDark");
    } else {
      links[3].classList.remove("bg-about");
      nav.classList.remove("bg-aboutDark");
    }

    if (sections[4].getBoundingClientRect().top <= 0.515625 && sections[4].getBoundingClientRect().bottom > 0) {
      links[4].classList.add("bg-contact");
      nav.classList.add("bg-contactDark");
    } else {
      links[4].classList.remove("bg-contact");
      nav.classList.remove("bg-contactDark");
    }
  };
};

module.exports = navStyle;
