// ========================================
// ENHANCED ALEXANDRIA DIGITAL LIBRARY
// Modern JavaScript with Smooth Interactions
// ========================================

// Mock Data for Search Functionality - EXPANDED COLLECTION
const mockBooks = [
    // Original 12 Books
    {
        title: "The Midnight Library",
        author: "Matt Haig",
        genre: "fiction",
        year: "2020-2022",
        description: "A dazzling novel about all the choices that go into a life well lived.",
        rating: 5
    },
    {
        title: "Educated",
        author: "Tara Westover",
        genre: "biography",
        year: "2010-2019",
        description: "A memoir about a young woman who, kept out of school, leaves her survivalist family.",
        rating: 5
    },
    {
        title: "Project Hail Mary",
        author: "Andy Weir",
        genre: "science-fiction",
        year: "2020-2022",
        description: "A lone astronaut must save Earth from disaster in this thrilling tale.",
        rating: 5
    },
    {
        title: "Where the Crawdads Sing",
        author: "Delia Owens",
        genre: "mystery",
        year: "2010-2019",
        description: "A coming-of-age story set in the coastal marshes of North Carolina.",
        rating: 4
    },
    {
        title: "Atomic Habits",
        author: "James Clear",
        genre: "non-fiction",
        year: "2010-2019",
        description: "An easy and proven way to build good habits and break bad ones.",
        rating: 5
    },
    {
        title: "The Seven Husbands of Evelyn Hugo",
        author: "Taylor Jenkins Reid",
        genre: "romance",
        year: "2010-2019",
        description: "Hollywood icon reveals her scandalous history to an unknown magazine reporter.",
        rating: 5
    },
    {
        title: "Sapiens",
        author: "Yuval Noah Harari",
        genre: "history",
        year: "2010-2019",
        description: "A brief history of humankind from the Stone Age to the modern age.",
        rating: 5
    },
    {
        title: "The Very Hungry Caterpillar",
        author: "Eric Carle",
        genre: "children",
        year: "classic",
        description: "A beloved children's classic about a caterpillar's transformation.",
        rating: 5
    },
    {
        title: "1984",
        author: "George Orwell",
        genre: "fiction",
        year: "classic",
        description: "A dystopian novel about totalitarianism and surveillance.",
        rating: 5
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "fiction",
        year: "classic",
        description: "A classic novel about racial injustice in the American South.",
        rating: 5
    },
    {
        title: "The Psychology of Money",
        author: "Morgan Housel",
        genre: "non-fiction",
        year: "2020-2022",
        description: "Timeless lessons on wealth, greed, and happiness.",
        rating: 5
    },
    {
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        genre: "children",
        year: "2000-2009",
        description: "The first book in the beloved Harry Potter series.",
        rating: 5
    },
    // NEW BOOKS - 27 Additional Books
    // Fiction
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "fiction",
        year: "classic",
        description: "A classic American novel about the Jazz Age, wealth, and the American Dream.",
        rating: 5
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        genre: "fiction",
        year: "classic",
        description: "A romantic novel of manners set in Georgian England.",
        rating: 5
    },
    {
        title: "The Kite Runner",
        author: "Khaled Hosseini",
        genre: "fiction",
        year: "2000-2009",
        description: "A powerful story of friendship, betrayal, and redemption set in Afghanistan.",
        rating: 5
    },
    {
        title: "The Book Thief",
        author: "Markus Zusak",
        genre: "fiction",
        year: "2000-2009",
        description: "A haunting tale of a young girl living in Nazi Germany, narrated by Death.",
        rating: 5
    },
    {
        title: "Normal People",
        author: "Sally Rooney",
        genre: "fiction",
        year: "2010-2019",
        description: "A nuanced exploration of love and class from adolescence to adulthood.",
        rating: 4
    },
    // Mystery/Thriller
    {
        title: "The Girl with the Dragon Tattoo",
        author: "Stieg Larsson",
        genre: "mystery",
        year: "2000-2009",
        description: "A gripping mystery involving a journalist and a computer hacker.",
        rating: 5
    },
    {
        title: "Gone Girl",
        author: "Gillian Flynn",
        genre: "mystery",
        year: "2010-2019",
        description: "A twisted psychological thriller about a marriage gone terribly wrong.",
        rating: 5
    },
    {
        title: "The Silent Patient",
        author: "Alex Michaelides",
        genre: "mystery",
        year: "2010-2019",
        description: "A woman's act of violence against her husband leads to a shocking revelation.",
        rating: 4
    },
    {
        title: "And Then There Were None",
        author: "Agatha Christie",
        genre: "mystery",
        year: "classic",
        description: "Ten strangers are lured to an island where they are accused of murder.",
        rating: 5
    },
    // Romance
    {
        title: "The Notebook",
        author: "Nicholas Sparks",
        genre: "romance",
        year: "2000-2009",
        description: "An emotional love story about enduring romance through the decades.",
        rating: 5
    },
    {
        title: "Beach Read",
        author: "Emily Henry",
        genre: "romance",
        year: "2020-2022",
        description: "Two writers with different genres challenge each other to write outside their comfort zones.",
        rating: 4
    },
    {
        title: "Red, White & Royal Blue",
        author: "Casey McQuiston",
        genre: "romance",
        year: "2010-2019",
        description: "A romance between the First Son of the United States and a British prince.",
        rating: 5
    },
    // Science Fiction
    {
        title: "Dune",
        author: "Frank Herbert",
        genre: "science-fiction",
        year: "classic",
        description: "An epic science fiction saga set on the desert planet Arrakis.",
        rating: 5
    },
    {
        title: "The Martian",
        author: "Andy Weir",
        genre: "science-fiction",
        year: "2010-2019",
        description: "An astronaut fights for survival after being stranded on Mars.",
        rating: 5
    },
    {
        title: "Ender's Game",
        author: "Orson Scott Card",
        genre: "science-fiction",
        year: "classic",
        description: "A gifted child is trained to defend Earth against an alien invasion.",
        rating: 5
    },
    {
        title: "Neuromancer",
        author: "William Gibson",
        genre: "science-fiction",
        year: "classic",
        description: "A groundbreaking cyberpunk novel about a washed-up hacker's final job.",
        rating: 4
    },
    // Biography
    {
        title: "Steve Jobs",
        author: "Walter Isaacson",
        genre: "biography",
        year: "2010-2019",
        description: "The authorized biography of the Apple co-founder and tech visionary.",
        rating: 5
    },
    {
        title: "Becoming",
        author: "Michelle Obama",
        genre: "biography",
        year: "2010-2019",
        description: "The memoir of the former First Lady of the United States.",
        rating: 5
    },
    {
        title: "The Diary of a Young Girl",
        author: "Anne Frank",
        genre: "biography",
        year: "classic",
        description: "The powerful diary of a Jewish girl hiding from the Nazis during WWII.",
        rating: 5
    },
    // Non-Fiction
    {
        title: "Thinking, Fast and Slow",
        author: "Daniel Kahneman",
        genre: "non-fiction",
        year: "2010-2019",
        description: "An exploration of the two systems that drive the way we think.",
        rating: 5
    },
    {
        title: "The Immortal Life of Henrietta Lacks",
        author: "Rebecca Skloot",
        genre: "non-fiction",
        year: "2010-2019",
        description: "The story of a woman whose cells revolutionized medical research.",
        rating: 5
    },
    {
        title: "Outliers",
        author: "Malcolm Gladwell",
        genre: "non-fiction",
        year: "2000-2009",
        description: "An examination of the factors that contribute to high levels of success.",
        rating: 5
    },
    // History
    {
        title: "Guns, Germs, and Steel",
        author: "Jared Diamond",
        genre: "history",
        year: "2000-2009",
        description: "An exploration of how geography and environment shaped human societies.",
        rating: 5
    },
    {
        title: "The Wright Brothers",
        author: "David McCullough",
        genre: "history",
        year: "2010-2019",
        description: "The dramatic story of the pioneers of flight and their historic achievement.",
        rating: 4
    },
    {
        title: "A Short History of Nearly Everything",
        author: "Bill Bryson",
        genre: "history",
        year: "2000-2009",
        description: "An accessible journey through science, history, and the universe.",
        rating: 5
    },
    // Children's Books
    {
        title: "Charlotte's Web",
        author: "E.B. White",
        genre: "children",
        year: "classic",
        description: "The story of a pig named Wilbur and his friendship with a spider named Charlotte.",
        rating: 5
    },
    {
        title: "The Giving Tree",
        author: "Shel Silverstein",
        genre: "children",
        year: "classic",
        description: "A touching story about selfless love and friendship between a boy and a tree.",
        rating: 5
    },
    {
        title: "Matilda",
        author: "Roald Dahl",
        genre: "children",
        year: "classic",
        description: "The story of an extraordinarily gifted girl with magical powers.",
        rating: 5
    },
    {
        title: "Wonder",
        author: "R.J. Palacio",
        genre: "children",
        year: "2010-2019",
        description: "A powerful story about a boy with facial differences who enters mainstream school.",
        rating: 5
    }
];

// ========================================
// Enhanced Header Scroll Effect
// ========================================
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ========================================
// Mobile Navigation Toggle
// ========================================
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');

mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileToggle.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileToggle.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target) && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        mobileToggle.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// ========================================
// Enhanced Search Functionality
// ========================================
const searchInput = document.getElementById('searchInput');
const genreFilter = document.getElementById('genreFilter');
const authorFilter = document.getElementById('authorFilter');
const yearFilter = document.getElementById('yearFilter');
const searchBtn = document.getElementById('searchBtn');
const searchResults = document.getElementById('searchResults');
const searchClear = document.getElementById('searchClear');

// Show/hide clear button
searchInput.addEventListener('input', () => {
    searchClear.style.display = searchInput.value ? 'block' : 'none';
});

// Clear search
searchClear.addEventListener('click', () => {
    searchInput.value = '';
    searchClear.style.display = 'none';
    searchInput.focus();
    performSearch();
});

// Perform search with enhanced animation
function performSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const selectedGenre = genreFilter.value;
    const authorTerm = authorFilter.value.toLowerCase().trim();
    const selectedYear = yearFilter.value;

    // Filter books based on all criteria
    const filteredBooks = mockBooks.filter(book => {
        const matchesSearch = !searchTerm ||
            book.title.toLowerCase().includes(searchTerm) ||
            book.author.toLowerCase().includes(searchTerm) ||
            book.description.toLowerCase().includes(searchTerm);

        const matchesGenre = !selectedGenre || book.genre === selectedGenre;
        const matchesAuthor = !authorTerm || book.author.toLowerCase().includes(authorTerm);
        const matchesYear = !selectedYear || book.year === selectedYear;

        return matchesSearch && matchesGenre && matchesAuthor && matchesYear;
    });

    displaySearchResults(filteredBooks);
}

// Display search results with enhanced styling
function displaySearchResults(books) {
    if (books.length === 0) {
        searchResults.innerHTML = `
            <div style="text-align: center; padding: 3rem; color: #7a6f65;">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin: 0 auto 1.5rem; opacity: 0.3;">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="M21 21l-4.35-4.35"/>
                </svg>
                <h3 style="margin-bottom: 0.75rem; color: #1e5245; font-family: 'Playfair Display', serif; font-size: 1.75rem;">No books found</h3>
                <p style="font-size: 1.05rem;">Try adjusting your search criteria or filters.</p>
            </div>
        `;
    } else {
        searchResults.innerHTML = books.map((book, index) => {
            const stars = '★'.repeat(book.rating) + '☆'.repeat(5 - book.rating);
            return `
                <div class="result-item" style="animation: fadeInUp 0.5s ease ${index * 0.1}s backwards;">
                    <h3 class="result-title">${book.title}</h3>
                    <p class="result-meta">
                        <strong style="color: #1e5245;">Author:</strong> ${book.author} |
                        <strong style="color: #1e5245;">Genre:</strong> ${book.genre.replace('-', ' ')} |
                        <span style="color: #d4af37; font-size: 1.05rem;">${stars}</span>
                    </p>
                    <p style="margin-top: 0.625rem; color: #4a4036; line-height: 1.8;">${book.description}</p>
                </div>
            `;
        }).join('');
    }

    searchResults.classList.add('active');

    // Smooth scroll to results
    setTimeout(() => {
        searchResults.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
}

// Event listeners for search
searchBtn.addEventListener('click', performSearch);

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        performSearch();
    }
});

// Live search with debounce
let searchTimeout;
searchInput.addEventListener('input', () => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(performSearch, 500);
});

// Filter changes
genreFilter.addEventListener('change', performSearch);
authorFilter.addEventListener('keyup', () => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(performSearch, 500);
});
yearFilter.addEventListener('change', performSearch);

// ========================================
// Category Cards Click Interaction
// ========================================
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
        const category = card.dataset.category;
        genreFilter.value = category;
        searchInput.value = '';
        authorFilter.value = '';
        yearFilter.value = '';
        performSearch();

        // Smooth scroll to search section
        document.getElementById('search').scrollIntoView({ behavior: 'smooth' });
    });
});

// ========================================
// Enhanced Recommendations Slider
// ========================================
const slider = document.getElementById('recommendationsSlider');
const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');

if (prevBtn && nextBtn && slider) {
    const scrollAmount = 320;

    prevBtn.addEventListener('click', () => {
        slider.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    nextBtn.addEventListener('click', () => {
        slider.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    // Update button states based on scroll position
    slider.addEventListener('scroll', updateSliderButtons);

    function updateSliderButtons() {
        const isAtStart = slider.scrollLeft <= 0;
        const isAtEnd = slider.scrollLeft >= slider.scrollWidth - slider.clientWidth - 1;

        prevBtn.style.opacity = isAtStart ? '0.5' : '1';
        prevBtn.style.cursor = isAtStart ? 'default' : 'pointer';
        nextBtn.style.opacity = isAtEnd ? '0.5' : '1';
        nextBtn.style.cursor = isAtEnd ? 'default' : 'pointer';
    }

    updateSliderButtons();
}

// ========================================
// Enhanced Membership Form
// ========================================
const membershipForm = document.getElementById('membershipForm');
const formSuccess = document.getElementById('formSuccess');

membershipForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Clear previous errors
    document.querySelectorAll('.form-group').forEach(group => {
        group.classList.remove('error');
        const errorMsg = group.querySelector('.error-message');
        if (errorMsg) errorMsg.textContent = '';
    });

    let isValid = true;

    // Validate Full Name
    const fullName = document.getElementById('fullName');
    if (fullName.value.trim().length < 2) {
        showError(fullName, 'Please enter your full name (at least 2 characters)');
        isValid = false;
    }

    // Validate Email
    const email = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
        showError(email, 'Please enter a valid email address');
        isValid = false;
    }

    // Validate Phone
    const phone = document.getElementById('phone');
    const phoneRegex = /[\d\s\-\+\(\)]+/;
    if (phone.value.trim().length < 10 || !phoneRegex.test(phone.value)) {
        showError(phone, 'Please enter a valid phone number (at least 10 digits)');
        isValid = false;
    }

    // Validate Address
    const address = document.getElementById('address');
    if (address.value.trim().length < 10) {
        showError(address, 'Please enter your complete address (at least 10 characters)');
        isValid = false;
    }

    // Validate Membership Type
    const membershipType = document.getElementById('membershipType');
    if (!membershipType.value) {
        showError(membershipType, 'Please select a membership type');
        isValid = false;
    }

    // Validate Terms Checkbox
    const terms = document.getElementById('terms');
    if (!terms.checked) {
        showError(terms, 'You must agree to the terms and conditions');
        isValid = false;
    }

    if (isValid) {
        // Simulate form submission
        const formData = {
            fullName: fullName.value,
            email: email.value,
            phone: phone.value,
            address: address.value,
            membershipType: membershipType.value,
            newsletter: document.getElementById('newsletter').checked
        };

        console.log('Form submitted:', formData);

        // Show success message with animation
        membershipForm.style.display = 'none';
        formSuccess.style.display = 'block';

        // Scroll to success message
        formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // Optional: Reset form after delay
        setTimeout(() => {
            membershipForm.reset();
        }, 1000);
    } else {
        // Scroll to first error
        const firstError = document.querySelector('.form-group.error');
        if (firstError) {
            firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
});

function showError(input, message) {
    const formGroup = input.closest('.form-group');
    formGroup.classList.add('error');
    const errorMsg = formGroup.querySelector('.error-message');
    if (errorMsg) {
        errorMsg.textContent = message;
    }

    // Add shake animation
    formGroup.style.animation = 'shake 0.5s ease';
    setTimeout(() => {
        formGroup.style.animation = '';
    }, 500);
}

// Add shake animation
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
`;
document.head.appendChild(style);

// Real-time validation feedback
document.querySelectorAll('.form-group input, .form-group textarea, .form-group select').forEach(field => {
    field.addEventListener('blur', () => {
        const formGroup = field.closest('.form-group');
        if (formGroup.classList.contains('error') && field.value.trim()) {
            formGroup.classList.remove('error');
            const errorMsg = formGroup.querySelector('.error-message');
            if (errorMsg) errorMsg.textContent = '';
        }
    });
});

// ========================================
// Event Registration Buttons
// ========================================
document.querySelectorAll('.btn-event').forEach(btn => {
    btn.addEventListener('click', () => {
        // Create custom alert overlay
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            animation: fadeIn 0.3s ease;
        `;

        const modal = document.createElement('div');
        modal.style.cssText = `
            background: white;
            padding: 2.5rem;
            border-radius: 16px;
            max-width: 500px;
            text-align: center;
            box-shadow: 0 24px 64px rgba(0, 0, 0, 0.3);
            animation: fadeInUp 0.4s ease;
        `;

        modal.innerHTML = `
            <div style="width: 64px; height: 64px; margin: 0 auto 1.5rem; background: linear-gradient(135deg, #1e5245, #2a9d8f); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                    <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
            </div>
            <h3 style="font-family: 'Playfair Display', serif; font-size: 1.75rem; color: #1e5245; margin-bottom: 1rem; font-weight: 700;">Event Registration</h3>
            <p style="color: #4a4036; margin-bottom: 2rem; line-height: 1.8; font-size: 1.05rem;">Registration feature coming soon! You will be notified when registration opens for this event.</p>
            <button onclick="this.closest('div').parentElement.remove()" style="background: linear-gradient(135deg, #8b3a4f, #d4af37); color: white; padding: 0.875rem 2rem; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; font-size: 1rem; transition: all 0.3s ease;">
                Got It!
            </button>
        `;

        overlay.appendChild(modal);
        document.body.appendChild(overlay);

        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.remove();
            }
        });
    });
});

// ========================================
// Enhanced Back to Top Button
// ========================================
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 400) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ========================================
// Smooth Scroll for Navigation Links
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Enhanced Scroll Animations
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements with staggered animation
document.querySelectorAll('.category-card, .collection-card, .event-card, .book-card').forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
    el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(el);
});

// ========================================
// Loading Animation for Images
// ========================================
document.querySelectorAll('img[loading="lazy"]').forEach(img => {
    img.addEventListener('load', function() {
        this.style.animation = 'fadeIn 0.5s ease';
    });
});

// ========================================
// Enhanced Quick View for Book Cards
// ========================================
document.querySelectorAll('.book-quick-view').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();

        const bookCard = btn.closest('.book-card');
        const bookTitle = bookCard.querySelector('h4').textContent;
        const bookAuthor = bookCard.querySelector('.book-author').textContent;
        const bookDesc = bookCard.querySelector('.book-description').textContent;

        // Create quick view modal
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            animation: fadeIn 0.3s ease;
            padding: 1rem;
        `;

        const modal = document.createElement('div');
        modal.style.cssText = `
            background: white;
            padding: 2.5rem;
            border-radius: 16px;
            max-width: 600px;
            width: 100%;
            box-shadow: 0 24px 64px rgba(0, 0, 0, 0.3);
            animation: fadeInUp 0.4s ease;
        `;

        modal.innerHTML = `
            <h3 style="font-family: 'Playfair Display', serif; font-size: 2rem; color: #1e5245; margin-bottom: 0.5rem; font-weight: 700;">${bookTitle}</h3>
            <p style="color: #4a4036; margin-bottom: 1.5rem; font-size: 1.1rem;">by ${bookAuthor}</p>
            <p style="color: #4a4036; margin-bottom: 2rem; line-height: 1.8; font-size: 1.05rem;">${bookDesc}</p>
            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                <button onclick="alert('Borrow feature coming soon!')" style="flex: 1; background: linear-gradient(135deg, #1e5245, #2a9d8f); color: white; padding: 1rem 2rem; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; font-size: 1rem; min-width: 140px;">
                    Borrow Book
                </button>
                <button onclick="this.closest('div').parentElement.parentElement.remove()" style="flex: 1; background: #e8e5e0; color: #1a1614; padding: 1rem 2rem; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; font-size: 1rem; min-width: 140px;">
                    Close
                </button>
            </div>
        `;

        overlay.appendChild(modal);
        document.body.appendChild(overlay);

        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.remove();
            }
        });
    });
});

// ========================================
// Parallax Effect for Hero Section
// ========================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background img');

    if (heroBackground && scrolled < window.innerHeight) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ========================================
// Initialize on page load
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('Alexandria Digital Library - Enhanced Version Loaded');
    console.log(`Total books in library: ${mockBooks.length}`);

    // Add entrance animation to hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        setTimeout(() => {
            heroContent.style.transition = 'opacity 1s ease';
            heroContent.style.opacity = '1';
        }, 200);
    }

    // Preload critical images
    const criticalImages = document.querySelectorAll('.hero-background img, .category-image img');
    criticalImages.forEach(img => {
        const src = img.src;
        const preloadImg = new Image();
        preloadImg.src = src;
    });
});

// ========================================
// Performance Optimization
// ========================================
// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimized scroll handler
const optimizedScroll = debounce(() => {
    // Additional scroll-based features can be added here
}, 100);

window.addEventListener('scroll', optimizedScroll);
