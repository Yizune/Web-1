// Scroll Event for Header Transparency
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const mobileHeader = document.querySelector('.mobile-header');
    if (window.scrollY > 1) {
        header.classList.remove('transparent');
        mobileHeader.classList.remove('transparent');
    } else {
        header.classList.add('transparent');
        mobileHeader.classList.add('transparent');
    }
});

// Popup Toggle with Transition
function togglePopup() {
    const popup = $(".popup");
    popup.fadeIn(300); 
}

function closePopup() {
    $(".popup").fadeOut(300);
}

$(document).ready(function () {
    $(".popup button").on("click", function () {
        closePopup();
    });
});

$(document).ready(function () {
    $(".pop").on("click", function () {
        togglePopup();
    });
});

// Scroll to Top
$(document).ready(function () {
    function scrollToTop() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    }

    $(".button-scroll").on("click", function () {
        scrollToTop();
    });
});

// Adjust Message Input Width
$(document).ready(function () {
    const inputRow = $('.input-row');
    const messageInput = $('.message');

    function adjustMessageWidth() {
        const inputRowWidth = inputRow.outerWidth();
        messageInput.width(inputRowWidth - 24);
    }

    adjustMessageWidth();

    $(window).resize(function () {
        adjustMessageWidth();
    });
});

// Form Submission
window.onload = function () {
    document.getElementById("submit-form").addEventListener("click", (event) => {
        event.preventDefault();

        document.querySelector(".info-edit").style.display = "inline";

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const comment = document.getElementById("comment").value;

        if (email && password) {
            document.getElementById("output").innerHTML =
                `<li>Email: ${email}</li>
                 <li>Password: ${password}</li>
                 <li>Comment: ${comment}</li>`;
             
            document.getElementById("my-form").reset();
        } else {
            alert('Please fill in all fields');
        }
    });
};

//Hamburget Mobile Phone Menu
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menu-button');
    const mobileLink = document.querySelector('.mobile-link');
    
    if (menuButton && mobileLink) {
        menuButton.addEventListener('click', () => {
            mobileLink.classList.toggle('active');
            console.log('Menu toggled');
        });
    } else {
        console.log('Menu button or mobile link not found.');
    }
});

