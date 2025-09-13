// Flipkart Clone JavaScript

// Sample product data with reliable image URLs
const productsData = [
    {
        id: 1,
        title: "Samsung Galaxy S23 Ultra 5G",
        price: 124999,
        originalPrice: 149999,
        category: "mobiles",
        rating: 4.5,
        reviews: 1250,
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop&crop=center",
        description: "Experience the ultimate smartphone with 200MP camera, S Pen, and powerful performance."
    },
    {
        id: 2,
        title: "Apple iPhone 14 Pro Max",
        price: 129900,
        originalPrice: 159900,
        category: "mobiles",
        rating: 4.7,
        reviews: 2100,
        image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&h=400&fit=crop&crop=center",
        description: "The most advanced iPhone with A16 Bionic chip and Pro camera system."
    },
    {
        id: 3,
        title: "MacBook Air M2",
        price: 89999,
        originalPrice: 109999,
        category: "electronics",
        rating: 4.8,
        reviews: 850,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop&crop=center",
        description: "Supercharged by M2 chip with 8-core CPU and 10-core GPU."
    },
    {
        id: 4,
        title: "Sony WH-1000XM4 Headphones",
        price: 24990,
        originalPrice: 29990,
        category: "electronics",
        rating: 4.6,
        reviews: 3200,
        image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop&crop=center",
        description: "Industry-leading noise canceling with 30-hour battery life."
    },
    {
        id: 5,
        title: "Nike Air Max 270",
        price: 12995,
        originalPrice: 15995,
        category: "fashion",
        rating: 4.4,
        reviews: 1800,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&crop=center",
        description: "Comfortable running shoes with Max Air cushioning."
    },
    {
        id: 6,
        title: "Adidas Originals T-Shirt",
        price: 1299,
        originalPrice: 1999,
        category: "fashion",
        rating: 4.2,
        reviews: 950,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&crop=center",
        description: "Classic cotton t-shirt with three stripes design."
    },
    {
        id: 7,
        title: "Samsung 55-inch 4K Smart TV",
        price: 52999,
        originalPrice: 69999,
        category: "appliances",
        rating: 4.5,
        reviews: 2100,
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop&crop=center",
        description: "Crystal UHD 4K Smart TV with Tizen OS and Voice Remote."
    },
    {
        id: 8,
        title: "LG 7kg Front Load Washing Machine",
        price: 35999,
        originalPrice: 42999,
        category: "appliances",
        rating: 4.3,
        reviews: 1500,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center",
        description: "Energy efficient washing machine with 6 Motion DD technology."
    },
    {
        id: 9,
        title: "IKEA Malm Bed Frame",
        price: 12999,
        originalPrice: 15999,
        category: "home",
        rating: 4.1,
        reviews: 750,
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center",
        description: "Minimalist bed frame with storage drawers."
    },
    {
        id: 10,
        title: "Urban Ladder Sofa Set",
        price: 45999,
        originalPrice: 59999,
        category: "home",
        rating: 4.4,
        reviews: 920,
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center",
        description: "Comfortable 3-seater sofa with premium fabric upholstery."
    },
    {
        id: 11,
        title: "Lakme Face Wash",
        price: 299,
        originalPrice: 399,
        category: "beauty",
        rating: 4.0,
        reviews: 2800,
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop&crop=center",
        description: "Gentle face wash for all skin types with natural ingredients."
    },
    {
        id: 12,
        title: "Harry Potter Complete Collection",
        price: 2999,
        originalPrice: 3999,
        category: "books",
        rating: 4.9,
        reviews: 4500,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=center",
        description: "All 7 books of the magical Harry Potter series in one set."
    },
    // Additional products with more variety
    {
        id: 13,
        title: "OnePlus 11 5G",
        price: 56999,
        originalPrice: 61999,
        category: "mobiles",
        rating: 4.6,
        reviews: 3200,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop&crop=center",
        description: "Flagship smartphone with Snapdragon 8 Gen 2 and 100W SuperVOOC charging."
    },
    {
        id: 14,
        title: "Dell XPS 13 Laptop",
        price: 89999,
        originalPrice: 109999,
        category: "electronics",
        rating: 4.7,
        reviews: 1800,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop&crop=center",
        description: "Premium ultrabook with InfinityEdge display and Intel Core i7 processor."
    },
    {
        id: 15,
        title: "Bose QuietComfort 45",
        price: 28990,
        originalPrice: 34990,
        category: "electronics",
        rating: 4.8,
        reviews: 2500,
        image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop&crop=center",
        description: "Industry-leading noise canceling headphones with 24-hour battery life."
    },
    {
        id: 16,
        title: "Puma RS-X Sneakers",
        price: 8999,
        originalPrice: 11999,
        category: "fashion",
        rating: 4.3,
        reviews: 1200,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&crop=center",
        description: "Retro-inspired sneakers with modern comfort technology."
    },
    {
        id: 17,
        title: "Levi's 501 Jeans",
        price: 3999,
        originalPrice: 4999,
        category: "fashion",
        rating: 4.5,
        reviews: 2800,
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=400&fit=crop&crop=center",
        description: "Classic straight-fit jeans with original button fly."
    },
    {
        id: 18,
        title: "Whirlpool Refrigerator",
        price: 45999,
        originalPrice: 52999,
        category: "appliances",
        rating: 4.4,
        reviews: 1600,
        image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400&h=400&fit=crop&crop=center",
        description: "350L frost-free double door refrigerator with 6th Sense technology."
    },
    {
        id: 19,
        title: "Godrej Air Purifier",
        price: 12999,
        originalPrice: 15999,
        category: "appliances",
        rating: 4.2,
        reviews: 950,
        image: "https://images.unsplash.com/photo-1581578731548-c6a0c3f2fcc0?w=400&h=400&fit=crop&crop=center",
        description: "HEPA filter air purifier with smart sensors and mobile app control."
    },
    {
        id: 20,
        title: "Wooden Dining Table",
        price: 25999,
        originalPrice: 32999,
        category: "home",
        rating: 4.6,
        reviews: 750,
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center",
        description: "Solid wood dining table for 6 people with modern design."
    }
];

// Global variables
let currentProducts = [...productsData];
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentBannerSlide = 0;
let isLoggedIn = false;

// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const loginBtn = document.getElementById('loginBtn');
const cartCount = document.getElementById('cartCount');
const cartModal = document.getElementById('cartModal');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');
const productsGrid = document.getElementById('productsGrid');
const productCount = document.getElementById('productCount');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const productModal = document.getElementById('productModal');
const closeProduct = document.getElementById('closeProduct');
const productModalBody = document.getElementById('productModalBody');
const loginModal = document.getElementById('loginModal');
const closeLogin = document.getElementById('closeLogin');
const loginSubmitBtn = document.getElementById('loginSubmitBtn');
const notification = document.getElementById('notification');
const notificationText = document.getElementById('notificationText');

// Filter elements
const categoryFilter = document.getElementById('categoryFilter');
const priceFilter = document.getElementById('priceFilter');
const priceValue = document.getElementById('priceValue');
const sortFilter = document.getElementById('sortFilter');

// Banner elements
const bannerSlides = document.querySelectorAll('.banner-slide');
const bannerPrev = document.getElementById('bannerPrev');
const bannerNext = document.getElementById('bannerNext');

// Category items
const categoryItems = document.querySelectorAll('.category-item');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    preloadImages();
});

// Preload images for better performance
function preloadImages() {
    const imageUrls = [
        ...productsData.map(product => product.image),
        'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=400&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=400&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=400&fit=crop&crop=center'
    ];

    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

function initializeApp() {
    setupEventListeners();
    setupNavigation();
    displayProducts(currentProducts);
    updateCartCount();
    updatePriceDisplay();
    startBannerSlider();
    loadCartItems();
}

// Event Listeners Setup
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', handleSearch);
    searchBtn.addEventListener('click', handleSearch);

    // Login functionality
    loginBtn.addEventListener('click', openLoginModal);
    closeLogin.addEventListener('click', closeLoginModal);
    loginSubmitBtn.addEventListener('click', handleLogin);

    // Cart functionality
    closeCart.addEventListener('click', closeCartModal);
    checkoutBtn.addEventListener('click', handleCheckout);
    document.querySelector('.cart-container').addEventListener('click', openCartModal);

    // Product modal
    closeProduct.addEventListener('click', closeProductModal);

    // Filters
    priceFilter.addEventListener('input', updatePriceDisplay);
    priceFilter.addEventListener('change', applyFilters);
    sortFilter.addEventListener('change', applyFilters);

    // Quick filters
    document.querySelectorAll('.quick-filter-item').forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            document.querySelectorAll('.quick-filter-item').forEach(i => i.classList.remove('active'));
            // Add active class to clicked item
            this.classList.add('active');
            
            const category = this.dataset.category;
            if (category === 'all') {
                currentProducts = [...productsData];
            } else {
                currentProducts = productsData.filter(product => product.category === category);
            }
            applyFilters();
            showNotification(`Filtered by ${category === 'all' ? 'All Products' : category.charAt(0).toUpperCase() + category.slice(1)}`);
        });
    });

    // Advanced filters toggle
    document.getElementById('filterToggleBtn').addEventListener('click', function() {
        const advancedFilters = document.getElementById('advancedFilters');
        advancedFilters.classList.toggle('show');
        
        if (advancedFilters.classList.contains('show')) {
            this.innerHTML = '<i class="fas fa-sliders-h"></i> Hide Advanced Filters';
        } else {
            this.innerHTML = '<i class="fas fa-sliders-h"></i> Advanced Filters';
        }
    });

    // Load more
    loadMoreBtn.addEventListener('click', loadMoreProducts);

    // Banner navigation
    bannerPrev.addEventListener('click', previousBanner);
    bannerNext.addEventListener('click', nextBanner);

    // Category filters
    categoryItems.forEach(item => {
        item.addEventListener('click', () => {
            const category = item.dataset.category;
            filterByCategory(category);
        });
    });

    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === cartModal) closeCartModal();
        if (e.target === productModal) closeProductModal();
        if (e.target === loginModal) closeLoginModal();
    });

    // Login tabs
    document.querySelectorAll('.login-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            document.querySelectorAll('.login-tab').forEach(t => t.classList.remove('active'));
            e.target.classList.add('active');
        });
    });
}

// Search functionality
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    // Clear active navigation
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    document.querySelectorAll('.quick-filter-item').forEach(i => i.classList.remove('active'));
    
    if (searchTerm === '') {
        currentProducts = [...productsData];
        showNotification('Showing all products');
    } else {
        currentProducts = productsData.filter(product =>
            product.title.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm)
        );
        
        if (currentProducts.length === 0) {
            showNotification(`No products found for "${searchTerm}"`, 'warning');
        } else {
            showNotification(`Found ${currentProducts.length} products for "${searchTerm}"`);
        }
    }
    applyFilters();
}

// Filter functionality
function applyFilters() {
    let filteredProducts = [...currentProducts];

    // Price filter
    const maxPrice = parseInt(priceFilter.value);
    filteredProducts = filteredProducts.filter(product => product.price <= maxPrice);

    // Sort filter
    const sortBy = sortFilter.value;
    switch (sortBy) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            filteredProducts.sort((a, b) => b.rating - a.rating);
            break;
        case 'newest':
            filteredProducts.sort((a, b) => b.id - a.id);
            break;
        default:
            // Popularity (default)
            filteredProducts.sort((a, b) => b.reviews - a.reviews);
    }

    displayProducts(filteredProducts);
}

// Category filter
function filterByCategory(category) {
    // Update quick filter active state
    document.querySelectorAll('.quick-filter-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.category === category) {
            item.classList.add('active');
        }
    });

    if (category === 'all') {
        currentProducts = [...productsData];
    } else {
        currentProducts = productsData.filter(product => product.category === category);
    }
    applyFilters();
    showNotification(`Filtered by ${category === 'all' ? 'All Products' : category.charAt(0).toUpperCase() + category.slice(1)}`);
}

// Update price display
function updatePriceDisplay() {
    const maxPrice = parseInt(priceFilter.value);
    priceValue.textContent = `₹0 - ₹${maxPrice.toLocaleString()}`;
}

// Display products
function displayProducts(products) {
    if (products.length === 0) {
        productsGrid.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-search"></i>
                <h3>No products found</h3>
                <p>Try adjusting your search or filter criteria</p>
            </div>
        `;
        productCount.textContent = 'Showing 0 products';
        return;
    }

    productsGrid.innerHTML = products.map(product => `
        <div class="product-card" data-id="${product.id}">
            <div class="image-container">
                <img src="${product.image}" 
                     alt="${product.title}" 
                     class="product-image" 
                     loading="lazy"
                     onload="this.style.opacity='1'"
                     onerror="this.src='https://via.placeholder.com/300x300/2874f0/ffffff?text=${encodeURIComponent(product.title.split(' ')[0])}'">
                <div class="image-loading">
                    <div class="loading-spinner"></div>
                </div>
            </div>
            <div class="product-title">${product.title}</div>
            <div class="product-rating">
                <div class="stars">${generateStars(product.rating)}</div>
                <span class="rating-text">(${product.reviews})</span>
            </div>
            <div class="product-price">
                <span class="current-price">₹${product.price.toLocaleString()}</span>
                <span class="original-price">₹${product.originalPrice.toLocaleString()}</span>
                <span class="discount">${Math.round((1 - product.price / product.originalPrice) * 100)}% off</span>
            </div>
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                Add to Cart
            </button>
        </div>
    `).join('');

    // Add click event to product cards
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (!e.target.classList.contains('add-to-cart-btn')) {
                const productId = parseInt(card.dataset.id);
                openProductModal(productId);
            }
        });
    });

    // Add image load event listeners
    document.querySelectorAll('.product-image').forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
            const loadingSpinner = this.parentElement.querySelector('.image-loading');
            if (loadingSpinner) {
                loadingSpinner.style.display = 'none';
            }
        });
        
        img.addEventListener('error', function() {
            const loadingSpinner = this.parentElement.querySelector('.image-loading');
            if (loadingSpinner) {
                loadingSpinner.style.display = 'none';
            }
        });
    });

    productCount.textContent = `Showing ${products.length} products`;
}

// Generate star rating
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';

    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }

    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }

    return stars;
}

// Cart functionality
function addToCart(productId) {
    const product = productsData.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
        showNotification(`${product.title} quantity updated in cart!`);
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
        showNotification(`${product.title} added to cart!`);
    }

    updateCartCount();
    saveCartToStorage();
    
    // Add animation to cart button
    const cartContainer = document.querySelector('.cart-container');
    cartContainer.style.transform = 'scale(1.2)';
    setTimeout(() => {
        cartContainer.style.transform = 'scale(1)';
    }, 200);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    saveCartToStorage();
    loadCartItems();
    showNotification('Item removed from cart');
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartCount();
            saveCartToStorage();
            loadCartItems();
        }
    }
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
}

function loadCartItems() {
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-shopping-cart"></i>
                <h3>Your cart is empty</h3>
                <p>Add some products to get started</p>
            </div>
        `;
        cartTotal.textContent = '0';
        return;
    }

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.title}" class="cart-item-image">
            <div class="cart-item-details">
                <div class="cart-item-title">${item.title}</div>
                <div class="cart-item-price">₹${item.price.toLocaleString()}</div>
            </div>
            <div class="cart-item-controls">
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                <span class="quantity">${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                <button class="remove-item" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total.toLocaleString();
}

function saveCartToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Modal functions
function openCartModal() {
    loadCartItems();
    cartModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeCartModal() {
    cartModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function openProductModal(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;

    productModalBody.innerHTML = `
        <img src="${product.image}" 
             alt="${product.title}" 
             class="product-detail-image"
             onerror="this.src='https://via.placeholder.com/500x400/2874f0/ffffff?text=${encodeURIComponent(product.title.split(' ')[0])}'">
        <div class="product-detail-title">${product.title}</div>
        <div class="product-detail-price">₹${product.price.toLocaleString()}</div>
        <div class="product-detail-description">${product.description}</div>
        <div class="product-rating">
            <div class="stars">${generateStars(product.rating)}</div>
            <span class="rating-text">${product.rating} (${product.reviews} reviews)</span>
        </div>
        <div class="product-detail-actions">
            <button class="add-to-cart-detail-btn" onclick="addToCart(${product.id}); closeProductModal();">
                Add to Cart
            </button>
            <button class="buy-now-btn" onclick="buyNow(${product.id})">
                Buy Now
            </button>
        </div>
    `;

    productModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeProductModal() {
    productModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function openLoginModal() {
    loginModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeLoginModal() {
    loginModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function handleLogin() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (!email || !password) {
        showNotification('Please fill in all fields', 'error');
        return;
    }

    // Show loading
    const submitBtn = document.getElementById('loginSubmitBtn');
    const originalText = submitBtn.textContent;
    submitBtn.innerHTML = '<div class="loading-spinner"></div> Logging in...';
    submitBtn.disabled = true;

    // Simulate login process
    setTimeout(() => {
        isLoggedIn = true;
        loginBtn.innerHTML = '<i class="fas fa-user"></i> Welcome!';
        loginBtn.style.background = '#4caf50';
        closeLoginModal();
        showNotification('Successfully logged in! Welcome to Flipkart!', 'success');
        
        // Reset form
        document.getElementById('loginEmail').value = '';
        document.getElementById('loginPassword').value = '';
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
}

// Banner slider
function startBannerSlider() {
    setInterval(nextBanner, 5000); // Auto-advance every 5 seconds
}

function nextBanner() {
    bannerSlides[currentBannerSlide].classList.remove('active');
    currentBannerSlide = (currentBannerSlide + 1) % bannerSlides.length;
    bannerSlides[currentBannerSlide].classList.add('active');
}

function previousBanner() {
    bannerSlides[currentBannerSlide].classList.remove('active');
    currentBannerSlide = (currentBannerSlide - 1 + bannerSlides.length) % bannerSlides.length;
    bannerSlides[currentBannerSlide].classList.add('active');
}

// Load more products (simulate pagination)
function loadMoreProducts() {
    showNotification('Loading more products...');
    setTimeout(() => {
        // In a real app, this would fetch more products from an API
        showNotification('All products loaded!');
        loadMoreBtn.style.display = 'none';
    }, 1000);
}

// Checkout function
function handleCheckout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!', 'warning');
        return;
    }

    if (!isLoggedIn) {
        closeCartModal();
        openLoginModal();
        showNotification('Please login to proceed with checkout', 'warning');
        return;
    }

    showNotification('Redirecting to checkout...', 'warning');
    setTimeout(() => {
        // Simulate checkout process
        cart = [];
        updateCartCount();
        saveCartToStorage();
        closeCartModal();
        showNotification('Order placed successfully!', 'success');
    }, 2000);
}

// Buy now function
function buyNow(productId) {
    const product = productsData.find(p => p.id === productId);
    
    if (!isLoggedIn) {
        closeProductModal();
        openLoginModal();
        showNotification('Please login to proceed with purchase', 'warning');
        return;
    }

    showNotification(`Proceeding to buy ${product.title}...`, 'warning');
    setTimeout(() => {
        closeProductModal();
        showNotification('Purchase completed successfully!', 'success');
    }, 2000);
}

// Notification system
function showNotification(message, type = 'success') {
    notificationText.textContent = message;
    notification.className = `notification ${type}`;
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Utility functions
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

// Performance optimization: Debounce search
const debouncedSearch = debounce(handleSearch, 300);
searchInput.addEventListener('input', debouncedSearch);

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeCartModal();
        closeProductModal();
        closeLoginModal();
    }
});

// Lazy loading for images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.src;
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
lazyLoadImages();

// Add loading states
function showLoading(element) {
    element.innerHTML = '<div class="loading-spinner"></div>';
}

function hideLoading(element, content) {
    element.innerHTML = content;
}

// Navigation functionality
function setupNavigation() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.textContent.trim();
            
            // Remove active class from all nav links
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            this.classList.add('active');
            
            // Handle different navigation items
            if (category === 'All') {
                currentProducts = [...productsData];
                showNotification('Showing all products');
            } else if (category === 'Mobiles') {
                filterByCategory('mobiles');
            } else if (category === 'Fashion') {
                filterByCategory('fashion');
            } else if (category === 'Home & Furniture') {
                filterByCategory('home');
            } else if (category === 'Electronics') {
                filterByCategory('electronics');
            } else if (category === 'Appliances') {
                filterByCategory('appliances');
            } else if (category === 'Travel') {
                showNotification('Travel section coming soon!', 'warning');
            } else if (category === 'Top Offers') {
                showTopOffers();
            } else if (category === 'Beauty, Toys & More') {
                filterByCategory('beauty');
            } else if (category === 'Two Wheelers') {
                showNotification('Two Wheelers section coming soon!', 'warning');
            }
            
            // Scroll to products section
            setTimeout(() => {
                document.querySelector('.products-section').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 100);
        });
    });
}

// Top offers functionality
function showTopOffers() {
    // Show products with highest discounts
    currentProducts = productsData.filter(product => {
        const discount = Math.round((1 - product.price / product.originalPrice) * 100);
        return discount >= 30; // Show products with 30% or more discount
    });
    
    // Sort by discount percentage
    currentProducts.sort((a, b) => {
        const discountA = Math.round((1 - a.price / a.originalPrice) * 100);
        const discountB = Math.round((1 - b.price / b.originalPrice) * 100);
        return discountB - discountA;
    });
    
    applyFilters();
    showNotification('Showing top offers with maximum discounts!', 'success');
}

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation classes when elements come into view
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe product cards and other elements
document.addEventListener('DOMContentLoaded', () => {
    const elementsToObserve = document.querySelectorAll('.product-card, .category-item, .banner-slide');
    elementsToObserve.forEach(el => observer.observe(el));
});

console.log('Flipkart Clone loaded successfully!');

// Show welcome message
setTimeout(() => {
    showNotification('Welcome to Flipkart Clone! 🛍️ Images loaded successfully!', 'success');
}, 1000);