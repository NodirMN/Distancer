var slider = document.getElementById("control");

    function upDown() {
    document.getElementById("world").style.marginTop = slider.value + "vh";
    document.getElementById("meters").innerText = slider.value + " KM";
    }

    function goToLevel(level) {
    slider.value = level;
    upDown();
    }

    document.body.addEventListener("wheel", function (e) {
    if (e.deltaY < 0) {
        slider.valueAsNumber += 10;
        upDown();
    } else {
        slider.value -= 10;
        upDown();
    }
    //e.preventDefault();
    e.stopPropagation();
    });
    document.body.addEventListener("click", function () {
    slider.focus();
    });

slider.focus();
