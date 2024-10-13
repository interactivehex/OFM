let valueDisplays = document.querySelectorAll(".num");

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-value"));
    let interval = parseInt(valueDisplay.getAttribute("interval"));
    let duration = Math.floor(interval / endValue);

    let counter = setInterval(() => {
        startValue += 7;
        valueDisplay.textContent = startValue.toLocaleString();

        if (startValue >= endValue) {
            clearInterval(counter);
        }
    }, duration);
});
