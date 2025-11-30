document.getElementById("bookingForm").addEventListener("submit", function(event) {
        event.preventDefault();

        document.getElementById("message").innerHTML =
            "✔ Your trip has been successfully booked! We will contact you soon.";
    });
