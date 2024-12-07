import { db } from "../js/firebase.js"
import {
    addDoc, collection,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js"


// Configuration: rows and columns of the train
const rows = 5;
const cols = 5;
const occupiedSeats = [3, 7, 13]; // Example: pre-occupied seat IDs

// DOM Elements
const seatMap = document.querySelector(".seat-map");
const selectedSeatsDisplay = document.getElementById("selected-seats");
const bookNowButton = document.getElementById("book-now");

let selectedSeats = [];

// Initialize seat map
function createSeatMap() {
    for (let i = 0; i < rows * cols; i++) {
        const seat = document.createElement("div");
        seat.classList.add("seat");
        seat.dataset.seatId = i + 1;

        if (occupiedSeats.includes(i + 1)) {
            seat.classList.add("occupied");
        } else {
            seat.addEventListener("click", toggleSeatSelection);
        }

        seat.textContent = i + 1; // Display seat number
        seatMap.appendChild(seat);
    }
}

// Toggle seat selection
function toggleSeatSelection(e) {
    const seat = e.target;
    const seatId = parseInt(seat.dataset.seatId);

    if (seat.classList.contains("selected")) {
        seat.classList.remove("selected");
        selectedSeats = selectedSeats.filter(id => id !== seatId);
    } else {
        seat.classList.add("selected");
        selectedSeats.push(seatId);
    }

    updateSelectedSeats();
}

// Update selected seats display
function updateSelectedSeats() {
    selectedSeatsDisplay.textContent = selectedSeats.length
        ? selectedSeats.join(", ")
        : "None";
}

// Booking button action
bookNowButton.addEventListener("click", () => {
    const email = document.getElementById("email").value;

    if (!email) {
        alert("Please enter a valid email address.");
        return;
    }

    if (selectedSeats.length === 0) {
        alert("Please select at least one seat.");
        return;
    }

    // Prepare booking data
    const bookingData = {
        email,
        selectedSeats,
        bookingDate: new Date().toISOString(),
        trainName: "Train A" // Example: Replace with dynamic train name if available
    };

    // Save booking data to Firebase
    addDoc(collection(db, "bookings"), bookingData)
        .then(() => {
            // Optionally, send email confirmation using EmailJS or Firebase
            sendEmail(email, selectedSeats, bookingData.trainName);
            selectedSeats = []; // Clear selected seats
            alert("Booking successful!");
            updateSelectedSeats(); // Update UI
        })
        .catch((error) => {
            console.error("Error saving booking data:", error);
            alert("Failed to book seats. Please try again.");
        });
});

// Initialize
createSeatMap();


(function () {
    emailjs.init("Ua1NXpyicExbdqIvZ"); // Replace YOUR_USER_ID with your EmailJS User ID
})();

// Example of sending an email


function sendEmail(email, selectedSeats, trainName) {
    const templateParams = {
        user_email: email,
        seats: selectedSeats.join(", "),
        train_name: trainName,
    };

    emailjs
        .send("service_4m687ka", "template_tv4ueeq", templateParams) // Replace with your Service ID and Template ID
        .then(
            function (response) {
                alert("Email sent!");
                console.log("SUCCESS!", response.status, response.text);
            },
            function (error) {
                alert("Failed to send email. Please try again.");
                console.error("FAILED...", error);
            }
        );
}

function renderSelectedTrain() {
    const trainName = localStorage.getItem("selectedTrain");

    if (trainName) {
        // Render the train name in a specific HTML element
        document.getElementById("train-name").textContent = trainName;
    } else {
        // Handle case where no train is selected
        document.getElementById("train-name").textContent = "No train selected.";
    }
}

// Call the function when the page loads
document.addEventListener("DOMContentLoaded", renderSelectedTrain);
