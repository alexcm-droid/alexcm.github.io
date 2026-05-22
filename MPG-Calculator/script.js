function calculateMPG() {
    let miles = Number(document.getElementById("miles").value);
    let gallons = Number(document.getElementById("gallons").value);

    if (gallons <= 0) {
        document.getElementById("result").innerHTML =
            "Please enter a valid number of gallons.";
        return;
    }

    let mpg = miles / gallons;

    document.getElementById("result").innerHTML =
        "Miles per Gallon: " + mpg.toFixed(2);
}