const products =["Netflix", "LinkedIn", "ProductHunt", "Spotify", "Duolingo", "Airbnb", "Uber", "Pinterest", "Tinder", "Yelp", "Amazon", "Etsy", "Coursera", "Slack", "Zoom", "Fiverr", "Shopify", "Asana", "Kickstarter", "Medium"];
const solutions = ["Creatives", "Programming", "Podcasts","Education", "Recipes", "Podcasts", "Networking", "Creative Portfolios", "Handmade Goods", "Doctors", "Freelancers", "Boat Rentals", "Child Transportation", "Art Galleries", "Language Learning", "Crowdfunding", "Meetups", "Project Management", "Virtual Tours", "Music Discovery", "Job Hunting", "Online Courses", "Fitness Coaching"];

let lockedProduct = false;
let lockedSolution = false;

// Function to generate a new challenge
function generateChallenge() {
    const unlockedProducts = lockedProduct ? [] : products;
    const unlockedSolutions = lockedSolution ? [] : solutions;

    const randomProduct = unlockedProducts[Math.floor(Math.random() * unlockedProducts.length)];
    const randomSolution = unlockedSolutions[Math.floor(Math.random() * unlockedSolutions.length)];

    // Update displays only if they are unlocked
    if (!lockedProduct) {
        document.getElementById('productDisplay').textContent = randomProduct;
    }
    if (!lockedSolution) {
        document.getElementById('solutionDisplay').textContent = randomSolution;
    }
}

// Locking functionality
document.getElementById('lockProduct').addEventListener('click', function() {
    lockedProduct = !lockedProduct; // Toggle lock state
    this.textContent = lockedProduct ? "🔒" : "🔓"; // Toggle lock icon
});

document.getElementById('lockSolution').addEventListener('click', function() {
    lockedSolution = !lockedSolution; // Toggle lock state
    this.textContent = lockedSolution ? "🔒" : "🔓"; // Toggle lock icon
});

// New Challenge button functionality
document.getElementById('newChallenge').addEventListener('click', generateChallenge);

// Initial challenge generation
generateChallenge();
