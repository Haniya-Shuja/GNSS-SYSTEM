function toggleSidebar(){document.getElementById("sidebar")?.classList.toggle("open")}
function handleExit(){if(confirm("Exit the GNSS Monitoring Toolkit?")){window.close();}}
document.addEventListener("DOMContentLoaded",()=>{const path=location.pathname.replace(/\\/g,"/");document.querySelectorAll(".nav-item").forEach(a=>{const href=a.getAttribute("href");if(href&&path.endsWith(href.replace("../","/"))){a.classList.add("active")}});});
