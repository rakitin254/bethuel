     // Smooth scrolling effect
     const links = document.querySelectorAll('nav a');
     links.forEach(link => {
         link.addEventListener('click', (e) => {
             e.preventDefault();
             const targetId = link.getAttribute('href');
             const targetSection = document.querySelector(targetId);
             targetSection.scrollIntoView({ behavior: 'smooth' });
         });
     });
 
     // Scroll animation
     const sections = document.querySelectorAll('section');
     const observerOptions = {
         root: null,
         threshold: 0.1,
     };
     
     // Function to handle the scroll animation
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target); // Stop observing once it is visible
            }
        });
    };

    // Create an Intersection Observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe each section for the scroll animation
    sections.forEach(section => {
        observer.observe(section);
    });

    // Dark/Light mode toggle
    const toggleButton = document.getElementById('toggle-mode');
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
