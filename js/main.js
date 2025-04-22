// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {  // Check if href is not empty or just '#'
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Animate elements on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.project-card, .skill-category, .contact-card');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Initial animation state
    document.querySelectorAll('.project-card, .skill-category, .contact-card').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);

    // PC Build Modal Functionality
    const modal = document.getElementById('buildModal');
    const modalImg = document.getElementById('buildImage');
    const viewButtons = document.querySelectorAll('.view-pc-btn');

    // Function to open modal
    function openModal(imageSrc) {
        modal.style.display = 'flex';
        modalImg.src = imageSrc;
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    }

    // Function to close modal
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    }

    // Add click event to all view buttons
    viewButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const imageSrc = this.getAttribute('data-image');
            if (imageSrc) {
                openModal(imageSrc);
            }
        });
    });

    // Close modal when clicking outside the image
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            closeModal();
        }
    });

    // Add project card hover effect
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
            card.style.boxShadow = '0 15px 30px rgba(139, 0, 139, 0.3)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = '0 5px 15px rgba(139, 0, 139, 0.2)';
        });
    });

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalBtnText = submitBtn.innerHTML;
            
            // Add loading animation
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            try {
                const formData = new FormData(contactForm);
                
                const response = await fetch('php/contact.php', {
                    method: 'POST',
                    body: formData
                });
                
                const result = await response.json();
                
                if (result.success) {
                    // Show success message
                    submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
                    submitBtn.style.backgroundColor = '#4CAF50';
                    
                    // Reset form
                    contactForm.reset();
                    
                    // Reset button after 2 seconds
                    setTimeout(() => {
                        submitBtn.innerHTML = originalBtnText;
                        submitBtn.style.backgroundColor = 'var(--primary-color)';
                        submitBtn.disabled = false;
                    }, 2000);
                } else {
                    // Show error message
                    submitBtn.innerHTML = '<i class="fas fa-exclamation-circle"></i> Error!';
                    submitBtn.style.backgroundColor = '#f44336';
                    
                    // Reset button after 2 seconds
                    setTimeout(() => {
                        submitBtn.innerHTML = originalBtnText;
                        submitBtn.style.backgroundColor = 'var(--primary-color)';
                        submitBtn.disabled = false;
                    }, 2000);
                    
                    // Show error message to user
                    alert(result.message || 'Failed to send message. Please try again later.');
                }
            } catch (error) {
                console.error('Error:', error);
                submitBtn.innerHTML = '<i class="fas fa-exclamation-circle"></i> Error!';
                submitBtn.style.backgroundColor = '#f44336';
                
                // Reset button after 2 seconds
                setTimeout(() => {
                    submitBtn.innerHTML = originalBtnText;
                    submitBtn.style.backgroundColor = 'var(--primary-color)';
                    submitBtn.disabled = false;
                }, 2000);
                
                alert('An error occurred. Please try again later.');
            }
        });
    }
});

// Add typing effect to hero section
const heroText = document.querySelector('.pirate-bio');
const text = heroText.textContent;
heroText.textContent = '';

let i = 0;
const typeWriter = () => {
    if (i < text.length) {
        heroText.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
};

// Start typing effect when page loads
window.addEventListener('load', () => {
    setTimeout(typeWriter, 1000);
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    hero.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
});

// Add skill tag hover effect
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', () => {
        tag.style.transform = 'scale(1.1)';
    });
    
    tag.addEventListener('mouseleave', () => {
        tag.style.transform = 'scale(1)';
    });
});

// Luffy's arm stretch animation for page transitions
function createStretchAnimation() {
    const stretchArm = document.createElement('div');
    stretchArm.className = 'stretch-arm';
    document.body.appendChild(stretchArm);
    
    // Add the arm to the page
    stretchArm.style.position = 'fixed';
    stretchArm.style.top = '0';
    stretchArm.style.left = '0';
    stretchArm.style.width = '100%';
    stretchArm.style.height = '100%';
    stretchArm.style.background = 'var(--primary-color)';
    stretchArm.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0 100%)';
    stretchArm.style.zIndex = '9999';
    
    // Animate the arm
    stretchArm.style.animation = 'stretch 1s ease-in-out forwards';
    
    // Remove the arm after animation
    setTimeout(() => {
        stretchArm.remove();
    }, 1000);
}

// Add the stretch animation to navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        createStretchAnimation();
        
        // Navigate after animation
        setTimeout(() => {
            window.location.href = link.getAttribute('href');
        }, 500);
    });
});

// Add CSS for the stretch animation
const style = document.createElement('style');
style.textContent = `
    @keyframes stretch {
        0% {
            clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
        }
        50% {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        }
        100% {
            clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
        }
    }
`;
document.head.appendChild(style);

// Parallax effect for the wave animation
window.addEventListener('scroll', () => {
    const wave = document.querySelector('.wave-animation');
    const scrolled = window.pageYOffset;
    wave.style.transform = `translateX(${scrolled * 0.5}px)`;
}); 