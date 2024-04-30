// document.getElementById('dark-mode-toggle').addEventListener('click', function() {
//     document.body.classList.toggle('dark-mode'); // Toggle the dark mode class on the body
// });

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     document.getElementById("scrollToTop").style.display = "block";
//   } else {
//     document.getElementById("scrollToTop").style.display = "none";
//   }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
// }

// When the user scrolls, show or hide the button based on their position
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  let sections = document.querySelectorAll("section"); // Select all sections
  let currentScrollPos = window.pageYOffset; // Get the current vertical position of the window

  // Loop through sections to find the current section user is viewing
  for (let i = 0; i < sections.length; i++) {
    let section = sections[i];
    if (section.offsetTop <= currentScrollPos && section.offsetTop + section.offsetHeight > currentScrollPos) {
      // Show the button if it's not the first section
      document.getElementById("scrollToTop").style.display = (i === 0) ? "none" : "block";
      break;
    }
  }
}

// Scroll to the previous section when the button is clicked
document.getElementById("scrollToTop").onclick = function() {
  let sections = document.querySelectorAll("section");
  let currentScrollPos = window.pageYOffset;

  for (let i = 0; i < sections.length; i++) {
    let section = sections[i];
    if (section.offsetTop < currentScrollPos) {
      window.scrollTo({ top: section.offsetTop, behavior: 'smooth' });
      break;
    }
  }
}
