const reviews = [
    {
        username: "Tom R.",
        profilePic: "https://img.freepik.com/premium-vector/young-black-man-face-with-beard-male-portrait-avatar-flat-style-front-view_497399-251.jpg",
        reviewText: "VietExpress exceeded my expectations. The train was well-maintained, and the onboard services were great. The Wi-Fi worked smoothly, and I had a comfortable trip. Booking was simple, and the ride was peaceful. I’ll definitely use this service again for my future trips across Vietnam!",
        rating: 4.5,
        travelDate: "2024-12-01",
        reviewDate: "2024-12-05",
        upvotes: 15,
        downvotes: 2,
    },
    {
        username: "John D.",
        profilePic: "https://static.vecteezy.com/system/resources/previews/004/773/704/non_2x/a-girl-s-face-with-a-beautiful-smile-a-female-avatar-for-a-website-and-social-network-vector.jpg",
        reviewText: "I had an amazing experience with VietExpress! The train was on time, clean, and comfortable. The staff were friendly, and the scenery was breathtaking. Booking was easy, and the whole journey was smooth. Highly recommend for anyone looking for a relaxing and reliable travel option!",
        rating: 3.8,
        travelDate: "2024-11-28",
        reviewDate: "2024-11-30",
        upvotes: 8,
        downvotes: 3,
    },
    {
        username: "Sarah L.",
        profilePic: "https://static.vecteezy.com/system/resources/previews/004/773/704/non_2x/a-girl-s-face-with-a-beautiful-smile-a-female-avatar-for-a-website-and-social-network-vector.jpg",
        reviewText: "The train was decent, but the delays were frustrating. While the staff were helpful, the seats were a bit uncomfortable for the long ride. It’s a convenient option if you’re not in a rush, but I was disappointed with the overall punctuality. Could use improvements",
        rating: 2.6,
        travelDate: "2024-10-04",
        reviewDate: "2024-10-10",
        upvotes: 8,
        downvotes: 3,
    },
];

function renderReviews() {
    const container = document.getElementById("reviews-container");

    reviews.forEach((review) => {
        // Create review card
        const reviewCard = document.createElement("div");
        reviewCard.className = "review-card";

        // Profile picture
        const profilePic = document.createElement("img");
        profilePic.className = "profile-pic";
        profilePic.src = review.profilePic;
        profilePic.alt = `${review.username}'s Profile Picture`;

        // Review content container
        const reviewContent = document.createElement("div");
        reviewContent.className = "review-content";

        // Username
        const username = document.createElement("h3");
        username.textContent = review.username;

        // Review text
        const reviewText = document.createElement("p");
        reviewText.className = "review-text";
        reviewText.textContent = review.reviewText;

        // Rating
        const rating = document.createElement("p");
        rating.className = "rating";
        rating.textContent = `Rating: ⭐${"⭐".repeat(Math.floor(review.rating))}${review.rating % 1 ? "" : ""}`;

        // Dates
        const reviewDate = document.createElement("p");
        reviewDate.className = "review-date";
        reviewDate.textContent = `Reviewed on: ${review.reviewDate}`;

        const travelDate = document.createElement("p");
        travelDate.className = "travel-date";
        travelDate.textContent = `Travel Date: ${review.travelDate}`;

        // Interactions
        const interaction = document.createElement("div");
        interaction.className = "interaction";
        interaction.innerHTML = `<span>👍 ${review.upvotes}</span> <span>👎 ${review.downvotes}</span>`;

        // Append all elements to the review content
        reviewContent.appendChild(username);
        reviewContent.appendChild(reviewText);
        reviewContent.appendChild(rating);
        reviewContent.appendChild(reviewDate);
        reviewContent.appendChild(travelDate);
        reviewContent.appendChild(interaction);

        // Append profile pic and content to the review card
        reviewCard.appendChild(reviewContent);

        // Append the review card to the container
        container.appendChild(reviewCard);
    });
}

// Call the function to render reviews
renderReviews();
