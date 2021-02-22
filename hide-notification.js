
// Hide the warning on the "Where to Look" page.
document.onload
let notice = document.getElementById("orion-visible-notice");
let btn = document.getElementById("orion-visible-btn");
btn.onclick = function() {
    notice.hidden = true;
}