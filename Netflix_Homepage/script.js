function toggleSearch() {
    var searchIcon = document.querySelector(".search-icon i");
    var searchForm = document.getElementById("searchForm");
    
    if (searchForm.style.display === "block") {
        searchForm.style.display = "none";
        searchIcon.style.display = "inline";
    } else {
        searchForm.style.display = "block";
        searchIcon.style.display = "none";
    }
}

function showSearchForm() {
    var searchIcon = document.querySelector(".search-icon i");
    var searchForm = document.getElementById("searchForm");
    searchForm.style.display = "block";
    searchIcon.style.display = "none";
}

function hideSearchForm() {
    var searchIcon = document.querySelector(".search-icon i");
    var searchForm = document.getElementById("searchForm");
    searchForm.style.display = "none";
    searchIcon.style.display = "inline";
}

function toggleProfileMenu() {
    var profileMenu = document.getElementById("profileMenu");
    if (profileMenu.style.display === "block") {
        profileMenu.style.display = "none";
    } else {
        profileMenu.style.display = "block";
    }
}

// Close the profile menu when clicking outside
document.addEventListener("click", function(event) {
    var searchIcon = document.querySelector(".search-icon i");
    var searchForm = document.getElementById("searchForm");
    var isSearchIconClicked = event.target.closest(".search-icon");
    var isSearchFormClicked = event.target.closest(".search-form");

    if (!isSearchFormClicked && !isSearchIconClicked) {
        searchForm.style.display = "none";
        searchIcon.style.display = "inline";
    }
    var profileMenu = document.getElementById("profileMenu");
    var profileIcon = document.querySelector(".profile i");
    var isProfileClicked = event.target.closest(".profile");

    if (!isProfileClicked) {
        profileMenu.style.display = "none";
    }
});
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.nav');
    navbar.classList.toggle('scrolled', window.scrollY > 0);
});

const slider = document.querySelector('.slider');
let isHoveringSlider = false;

// Get all movie slides
const movieSlides = document.querySelectorAll('.swiper-slide');

// Add event listeners for each movie slide
movieSlides.forEach(movieSlide => {
    movieSlide.addEventListener('mouseenter', function() {
        this.style.opacity = '1'; // Make the movie slide fully visible
    });

    movieSlide.addEventListener('mouseleave', function() {
        this.style.opacity = '0.5'; // Restore the original opacity
    });
});

