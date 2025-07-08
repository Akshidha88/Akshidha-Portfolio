// ==========================
// CERTIFICATE MODAL FUNCTIONALITY
// ==========================

function openModal(img) {
  const modal = document.getElementById("certModal");
  const modalImg = document.getElementById("modalImg");

  modal.style.display = "block";
  modalImg.src = img.src;
}

function closeModal() {
  document.getElementById("certModal").style.display = "none";
}

// Close modal when clicking outside the image
window.addEventListener("click", function (event) {
  const modal = document.getElementById("certModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// ==========================
// INTERNSHIP SCROLL CONTROL
// ==========================



// home animation

  const roles = [
    "ML Engineer",
    "Full Stack Developer",
    "AI Engineer",
    "Data Analyst",
    "Software Engineer"
  ];

  let index = 0;
  let charIndex = 0;
  let isDeleting = false;
  let currentText = '';
  let typingSpeed = 100;
  let waitAfterTyping = 1000;

  const typingElement = document.getElementById('typing-text');

  function typeEffect() {
    const fullText = roles[index];

    if (isDeleting) {
      currentText = fullText.substring(0, charIndex--);
    } else {
      currentText = fullText.substring(0, charIndex++);
    }

    typingElement.textContent = currentText;

    if (!isDeleting && charIndex === fullText.length + 1) {
      isDeleting = true;
      setTimeout(typeEffect, waitAfterTyping);
      return;
    }

    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      index = (index + 1) % roles.length;
    }

    setTimeout(typeEffect, isDeleting ? 60 : 100);
  }

  typeEffect();


  // side bar content

function showSidebar() {
  document.getElementById("sidebar").classList.add("active");
}

function hideSidebar() {
  document.getElementById("sidebar").classList.remove("active");
}



// contact

      document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const serviceID = 'service_dvoqvik'; // Replace with your actual Service ID
    const templateID = 'template_lhl84qp'; // Replace with your actual Template ID

    const templateParams = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        comment: document.getElementById('comment').value
    };

    console.log('Template Params:', templateParams); // Debugging statement to log the input values

    emailjs.send(serviceID, templateID, templateParams)
        .then(() => {
            alert('Email sent successfully!');
            
        }, (err) => {
            alert('Failed to send email. Please try again.');
            console.error('Error:', err);
        });
});
