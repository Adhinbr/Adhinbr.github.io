// Listen for scrolling events on the page
window.onscroll = function() {
    updateProgressBar();
};

function updateProgressBar() {
    // Get the current scroll position
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    
    // Calculate the total scrollable height
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    // Calculate the percentage scrolled
    let scrolled = (winScroll / height) * 100;
    
    // Update the width of the progress bar
    document.getElementById("myBar").style.width = scrolled + "%";
}