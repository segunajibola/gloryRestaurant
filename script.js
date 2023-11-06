const currentYear = new Date().getFullYear();

document.getElementById("currentYear").textContent = currentYear;

function myFunction() {
    var x = document.getElementById("nav-items");
    if (x.className === "nav-items") {
        x.className += "  responsive"
    }
    else {
        x.className = "nav-items";
    }
}

console.log(new Date().getFullYear())