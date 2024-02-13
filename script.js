var rect = document.querySelector("#center");
rect.addEventListener("mousemove", function (details) {
    var rectangleLocation = rect.getBoundingClientRect();
    var insiderectVal=(Math.floor
        (details.clientX - rectangleLocation.left) + 1);
    if (insiderectVal < rectangleLocation.width / 2) {
        var redColor = gsap.utils.mapRange(0, rectangleLocation.width / 2, 255, 0, insiderectVal);
        gsap.to(rect, {
            backgroundColor: `rgb(${redColor},0,0)`,
            ease:Power4,
        })
    }
    else {
        var blueColor = gsap.utils.mapRange( rectangleLocation.width / 2, rectangleLocation.width , 0, 255, insiderectVal);
        gsap.to(rect, {
            backgroundColor: `rgb(0,0,${blueColor})`,
            ease:Power4,
        })
    }
})
