// Product Database - Version 2 (Amazon Haul / Temu Style Prices)
const productsV2 = {
    outfit: [
        { id: 'out1', name: 'Casual T-Shirt', description: 'Comfortable cotton tee', price: 4.99, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop', category: 'outfit' },
        { id: 'out2', name: 'Denim Jeans', description: 'Classic blue jeans', price: 12.99, image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=300&fit=crop', category: 'outfit' },
        { id: 'out3', name: 'Sneakers', description: 'Comfortable walking shoes', price: 15.99, image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=300&h=300&fit=crop', category: 'outfit' },
        { id: 'out4', name: 'Hoodie', description: 'Warm and cozy hoodie', price: 9.99, image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300&h=300&fit=crop', category: 'outfit' },
        { id: 'out5', name: 'Baseball Cap', description: 'Stylish cap', price: 3.99, image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=300&h=300&fit=crop', category: 'outfit' },
        { id: 'out6', name: 'Backpack', description: 'Daily carry backpack', price: 11.99, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop', category: 'outfit' }
    ],
    home: [
        { id: 'hom1', name: 'Throw Pillow', description: 'Decorative cushion', price: 5.99, image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=300&h=300&fit=crop', category: 'home' },
        { id: 'hom2', name: 'Wall Art', description: 'Modern canvas print', price: 8.99, image: 'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=300&h=300&fit=crop', category: 'home' },
        { id: 'hom3', name: 'Table Lamp', description: 'Ambient lighting', price: 12.99, image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=300&h=300&fit=crop', category: 'home' },
        { id: 'hom4', name: 'Throw Blanket', description: 'Soft cozy blanket', price: 7.99, image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&h=300&fit=crop', category: 'home' },
        { id: 'hom5', name: 'Plant Pot', description: 'Ceramic planter', price: 4.99, image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=300&h=300&fit=crop', category: 'home' },
        { id: 'hom6', name: 'Candle Set', description: 'Scented candles', price: 6.99, image: 'https://images.unsplash.com/photo-1602874801006-e24aa9f9e22c?w=300&h=300&fit=crop', category: 'home' }
    ],
    desk: [
        { id: 'dsk1', name: 'Desk Organizer', description: 'Multi-compartment holder', price: 3.99, image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=300&h=300&fit=crop', category: 'desk' },
        { id: 'dsk2', name: 'Notebook Set', description: 'Premium notebooks', price: 5.99, image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=300&h=300&fit=crop', category: 'desk' },
        { id: 'dsk3', name: 'Pen Holder', description: 'Stylish pen organizer', price: 2.99, image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=300&h=300&fit=crop', category: 'desk' },
        { id: 'dsk4', name: 'Desk Lamp', description: 'LED task lighting', price: 9.99, image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=300&h=300&fit=crop', category: 'desk' },
        { id: 'dsk5', name: 'Cable Organizer', description: 'Cable management', price: 1.99, image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=300&h=300&fit=crop', category: 'desk' },
        { id: 'dsk6', name: 'Mouse Pad', description: 'Large gaming pad', price: 4.99, image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop', category: 'desk' }
    ],
    gift: [
        { id: 'gif1', name: 'Gift Box Set', description: 'Luxury gift packaging', price: 3.99, image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=300&h=300&fit=crop', category: 'gift' },
        { id: 'gif2', name: 'Chocolate Box', description: 'Premium chocolates', price: 6.99, image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=300&h=300&fit=crop', category: 'gift' },
        { id: 'gif3', name: 'Greeting Cards', description: 'Handmade cards set', price: 2.99, image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=300&h=300&fit=crop', category: 'gift' },
        { id: 'gif4', name: 'Gift Bag', description: 'Reusable gift bag', price: 1.99, image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=300&h=300&fit=crop', category: 'gift' },
        { id: 'gif5', name: 'Ribbon Set', description: 'Decorative ribbons', price: 2.49, image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=300&h=300&fit=crop', category: 'gift' },
        { id: 'gif6', name: 'Gift Tags', description: 'Personalized tags', price: 1.49, image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=300&h=300&fit=crop', category: 'gift' }
    ],
    hobby: [
        { id: 'hob1', name: 'Yoga Mat', description: 'Non-slip exercise mat', price: 6.99, image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=300&h=300&fit=crop', category: 'hobby' },
        { id: 'hob2', name: 'Water Bottle', description: 'Insulated bottle', price: 5.99, image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=300&h=300&fit=crop', category: 'hobby' },
        { id: 'hob3', name: 'Resistance Bands', description: 'Fitness bands set', price: 4.99, image: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=300&h=300&fit=crop', category: 'hobby' },
        { id: 'hob4', name: 'Sports Bag', description: 'Gym duffel bag', price: 8.99, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop', category: 'hobby' },
        { id: 'hob5', name: 'Exercise Gloves', description: 'Workout gloves', price: 3.99, image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=300&h=300&fit=crop', category: 'hobby' },
        { id: 'hob6', name: 'Jump Rope', description: 'Speed jump rope', price: 2.99, image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=300&h=300&fit=crop', category: 'hobby' }
    ]
};

// Category Info
const categoryInfo = {
    outfit: { title: '👔 Build Your Outfit', emoji: '👔' },
    home: { title: '🏠 Furnish Your House', emoji: '🏠' },
    desk: { title: '📝 Organize Your Desk', emoji: '📝' },
    gift: { title: '🎁 Make a Gift', emoji: '🎁' },
    hobby: { title: '⚽ Hobbies', emoji: '⚽' }
};

// Discount Tiers
const discountTiers = [
    { items: 3, discount: 10 },
    { items: 5, discount: 15 },
    { items: 7, discount: 20 }
];

// Game State
let bundleState = {
    currentCategory: 'outfit',
    cart: []
};

// Navigation
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

function startBundling() {
    showPage('bundle-page');
    renderProducts();
    updateCartUI();
}

function showCart() {
    showPage('cart-page');
    renderCart();
}

function backToShopping() {
    showPage('bundle-page');
}

// Category Management
function switchCategory(category) {
    bundleState.currentCategory = category;
    
    // Update active tab
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Update title and render products
    document.getElementById('category-title').textContent = categoryInfo[category].title;
    renderProducts();
}

// Render Products
function renderProducts() {
    const productGrid = document.getElementById('product-grid');
    const products = productsV2[bundleState.currentCategory];
    
    productGrid.innerHTML = products.map(product => {
        const inCart = bundleState.cart.some(item => item.id === product.id);
        return `
            <div class="product-card ${inCart ? 'in-cart' : ''}" data-product-id="${product.id}">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-name">${product.name}</div>
                <div class="product-description">${product.description}</div>
                <div class="product-price">€${product.price.toFixed(2)}</div>
                <button class="add-to-bundle-btn ${inCart ? 'added' : ''}" 
                        onclick="toggleProduct('${product.id}')">
                    ${inCart ? '✓ Added to Bundle' : '+ Add to Bundle'}
                </button>
            </div>
        `;
    }).join('');
}

// Toggle Product in Cart
function toggleProduct(productId) {
    const existingIndex = bundleState.cart.findIndex(item => item.id === productId);
    
    if (existingIndex > -1) {
        // Remove from cart
        bundleState.cart.splice(existingIndex, 1);
    } else {
        // Add to cart
        const product = Object.values(productsV2)
            .flat()
            .find(p => p.id === productId);
        
        if (product) {
            bundleState.cart.push(product);
        }
    }
    
    renderProducts();
    updateCartUI();
}

// Update Cart UI
function updateCartUI() {
    const itemCount = bundleState.cart.length;
    const subtotal = bundleState.cart.reduce((sum, item) => sum + item.price, 0);
    
    // Update counts
    document.getElementById('cart-count').textContent = itemCount;
    document.getElementById('cart-count-btn').textContent = itemCount;
    document.getElementById('cart-total').textContent = subtotal.toFixed(2);
    
    // Update discount indicator
    const discountIndicator = document.getElementById('discount-indicator');
    const currentDiscount = getDiscountPercent(itemCount);
    const nextTier = discountTiers.find(tier => tier.items > itemCount);
    
    if (currentDiscount > 0) {
        discountIndicator.textContent = `🎉 ${currentDiscount}% OFF Applied!`;
        discountIndicator.style.background = 'linear-gradient(135deg, #4caf50 0%, #8bc34a 100%)';
    } else if (nextTier) {
        discountIndicator.textContent = `Add ${nextTier.items - itemCount} more for ${nextTier.discount}% OFF`;
        discountIndicator.style.background = 'linear-gradient(135deg, #ffd700 0%, #ffed4e 100%)';
    } else {
        discountIndicator.textContent = 'Start adding items!';
    }
}

// Get Discount Percent
function getDiscountPercent(itemCount) {
    let discount = 0;
    for (const tier of discountTiers) {
        if (itemCount >= tier.items) {
            discount = tier.discount;
        }
    }
    return discount;
}

// Render Cart
function renderCart() {
    const cartItems = document.getElementById('cart-items');
    const itemCount = bundleState.cart.length;
    
    if (itemCount === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">🛒</div>
                <h3>Your bundle is empty</h3>
                <p>Start adding items to build your bundle!</p>
            </div>
        `;
    } else {
        cartItems.innerHTML = bundleState.cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-category">${categoryInfo[item.category].emoji} ${categoryInfo[item.category].title}</div>
                </div>
                <div class="cart-item-price">€${item.price.toFixed(2)}</div>
                <button class="remove-btn" onclick="removeFromCart('${item.id}')">Remove</button>
            </div>
        `).join('');
    }
    
    updateCartSummary();
}

// Remove from Cart
function removeFromCart(productId) {
    bundleState.cart = bundleState.cart.filter(item => item.id !== productId);
    renderCart();
    updateCartUI();
}

// Update Cart Summary
function updateCartSummary() {
    const itemCount = bundleState.cart.length;
    const subtotal = bundleState.cart.reduce((sum, item) => sum + item.price, 0);
    const discountPercent = getDiscountPercent(itemCount);
    const discountAmount = subtotal * (discountPercent / 100);
    const total = subtotal - discountAmount;
    
    document.getElementById('summary-count').textContent = itemCount;
    document.getElementById('summary-subtotal').textContent = subtotal.toFixed(2);
    document.getElementById('summary-discount-percent').textContent = discountPercent;
    document.getElementById('summary-discount').textContent = discountAmount.toFixed(2);
    document.getElementById('summary-total').textContent = total.toFixed(2);
    
    // Update discount message and progress
    const discountMessage = document.getElementById('discount-message');
    const progressFill = document.getElementById('progress-fill');
    const nextTier = discountTiers.find(tier => tier.items > itemCount);
    
    if (discountPercent === 20) {
        discountMessage.textContent = '🎉 Maximum discount unlocked!';
        progressFill.style.width = '100%';
    } else if (nextTier) {
        const itemsNeeded = nextTier.items - itemCount;
        discountMessage.textContent = `Add ${itemsNeeded} more item${itemsNeeded > 1 ? 's' : ''} to unlock ${nextTier.discount}% OFF`;
        const progress = (itemCount / nextTier.items) * 100;
        progressFill.style.width = `${progress}%`;
    } else {
        discountMessage.textContent = `You're getting ${discountPercent}% OFF!`;
        progressFill.style.width = '100%';
    }
}

// Checkout
function proceedToCheckout() {
    if (bundleState.cart.length === 0) {
        alert('Your bundle is empty! Add some items first.');
        return;
    }
    
    const itemCount = bundleState.cart.length;
    const subtotal = bundleState.cart.reduce((sum, item) => sum + item.price, 0);
    const discountPercent = getDiscountPercent(itemCount);
    const total = subtotal * (1 - discountPercent / 100);
    
    alert(`🎉 Bundle Complete!\n\nItems: ${itemCount}\nDiscount: ${discountPercent}%\nTotal: €${total.toFixed(2)}\n\nProceeding to checkout...`);
}

// Share Bundle
function shareBundle() {
    const itemCount = bundleState.cart.length;
    const discountPercent = getDiscountPercent(itemCount);
    const text = `I just built an amazing bundle with ${itemCount} items and unlocked ${discountPercent}% OFF! Build your own bundle and save big!`;
    
    if (navigator.share) {
        navigator.share({
            title: 'My Bundle',
            text: text,
            url: window.location.href
        }).catch(err => console.log('Error sharing:', err));
    } else {
        navigator.clipboard.writeText(text + ' ' + window.location.href);
        alert('Bundle details copied to clipboard!');
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    showPage('home-page');
});
