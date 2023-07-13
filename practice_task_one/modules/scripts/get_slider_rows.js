function getSliderRows() {
    if (window.screen.width >= 360 && window.screen.width <= 799) return 1;
    if (window.screen.width >= 800 && window.screen.width <= 1099) return 2;
    if (window.screen.width >= 1100 && window.screen.width <= 1900) return 3;
    return 4;
}

export default getSliderRows;