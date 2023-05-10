import { GnCarousel } from "../libraries/slick";
import { responsiveSliderNumL, BREAKPOINTS } from "../libraries/utils";

// const numbersSlider = responsiveSliderNumL (5);

const SELECTORS = {
  component: ".js-main-slider",
};

const sliderInstance = [...document.querySelectorAll(SELECTORS.component)];

if (sliderInstance) {
  const OPTIONS = {
    arrows: true,
    autoplay: true,
    autoplaySpeed: 6000,
    dots: true,
    infinite: true,
    mobileFirst: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    variableHeight: true,
  };

  sliderInstance.forEach((slider) => {
    const parent = slider.parentElement;
    const slickInstance = new GnCarousel(slider, OPTIONS, parent);

    slickInstance.initCarousel();
  });
}
