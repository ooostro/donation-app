var totalDonations = 0;
var numberOfDonations = 0;
var errorText = document.getElementById("errorText");

function donate() {

    var donation = Number(document.getElementById("donation").value);

    // make sure input is valid and in increments of 50

    if (isNaN(donation) || !donation) {
        errorText.innerHTML = "Please enter a valid number.";
    } else if (donation % 50 != 0) {
        errorText.innerHTML = "Donations must be in increments of $50.";
    } else {

        // remove error text (if there was any)
        errorText.innerHTML = "";

        // update number of donors in text
        numberOfDonations++;
        document.getElementById("numberOfDonations").innerHTML = numberOfDonations;

        // update total value of donations
        totalDonations += donation;

        // cap out donations if over $5000
        if (totalDonations > 5000) {
            submitButton = document.getElementById("submitButton");
            submitButton.disabled = true;
            submitButton.style.backgroundColor = "#ddd";
        }

        // update progress bar color fill
        var progressBar = document.getElementById("progressBarFill");
        var percentFill = (100 * totalDonations / 5000);

        if (percentFill < 100) {
            progressBar.style.width = percentFill + "%";
        } else {
            progressBar.style.width = "100%";
        }

        // change progress bar color to green when goal met
        if (percentFill >= 100) {
            progressBar.style.backgroundColor = "#8cbe0f";
        }

        // update remaining donations required
        remainingValue = 5000 - totalDonations;
        document.getElementById("remainingAmount").innerHTML = "$" + remainingValue;

        if (remainingValue >= 0) {
            document.getElementById("remainingAmount").innerHTML = "$" + remainingValue;
        } else {
            document.getElementById("remainingAmount").innerHTML = "$" + 0;
        }
    }

}