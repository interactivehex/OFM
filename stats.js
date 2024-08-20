let valueDisplays = document.querySelectorAll(".num");
let interval = 2000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-value").replace(/,/g, '')); // Remove commas before parsing
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function() {
        startValue += 1;
        valueDisplay.textContent = startValue.toLocaleString(); // Add commas for thousands
        if(startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});
