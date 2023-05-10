import { GnCarousel } from "../libraries/slick";
import { responsiveSliderNumL, BREAKPOINTS } from "../libraries/utils";
// const numbersSlider = responsiveSliderNumL (5);
const SELECTORS = {
  product: ".js-slider-producto-destacado",
};
const sliderInstance = [...document.querySelectorAll(SELECTORS.product)];
if (sliderInstance) {
  const OPTIONS = {
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    appendDots: $("#js-slider-destacados"),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          autoplay: false,
        },
      },
    ],
  };
  sliderInstance.forEach((slider) => {
    const parent = slider.parentElement;
    const slickInstance = new GnCarousel(slider, OPTIONS, parent);

    slickInstance.initCarousel();
  });
}
