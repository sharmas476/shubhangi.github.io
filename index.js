document.addEventListener('DOMContentLoaded', () => {
    const startDate = new Date('2022-01-01').getTime();
    
    const updateTimer = () => {
        const now = new Date().getTime();
        const difference = now - startDate;
        
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        const timer = document.querySelector('#timer-text');
        if (timer)
            timer.textContent = 
            `Designing Since ${days} Days, ${hours} Hours, ${seconds} Seconds`;
    };
    
    updateTimer();
    setInterval(updateTimer, 1000);
});

function copyEmailId() {
  var copyText = "shubhisharma0708gmail.com";
  navigator.clipboard.writeText(copyText);
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied";
}

function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
}
