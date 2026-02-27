// Product Database - Version 2 (Amazon Haul / Temu Style Prices)
const productsV2 = {
    outfit: [
        { id: 'out1', name: 'Casual T-Shirt', description: 'Comfortable cotton tee', price: 2.99, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop', category: 'outfit' },
        { id: 'out2', name: 'Denim Jeans', description: 'Classic blue jeans', price: 8.99, image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=300&fit=crop', category: 'outfit' },
        { id: 'out3', name: 'Sneakers', description: 'Comfortable walking shoes', price: 9.99, image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=300&fit=crop', category: 'outfit' },
        { id: 'out4', name: 'Hoodie', description: 'Warm and cozy hoodie', price: 6.99, image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300&h=300&fit=crop', category: 'outfit' },
        { id: 'out5', name: 'Baseball Cap', description: 'Stylish cap', price: 2.49, image: 'https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?w=300&h=300&fit=crop', category: 'outfit' },
        { id: 'out6', name: 'Backpack', description: 'Daily carry backpack', price: 7.99, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop', category: 'outfit' }
    ],
    home: [
        { id: 'hom1', name: 'Throw Pillow', description: 'Decorative cushion', price: 3.99, image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=300&h=300&fit=crop', category: 'home' },
        { id: 'hom2', name: 'Wall Art', description: 'Modern canvas print', price: 5.99, image: 'https://images.unsplash.com/photo-1582037928769-181f2644ecb7?w=300&h=300&fit=crop', category: 'home' },
        { id: 'hom3', name: 'Table Lamp', description: 'Ambient lighting', price: 7.99, image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=300&h=300&fit=crop', category: 'home' },
        { id: 'hom4', name: 'Throw Blanket', description: 'Soft cozy blanket', price: 4.99, image: 'https://images.unsplash.com/photo-1610714768018-4bd5d0c55c1e?w=300&h=300&fit=crop', category: 'home' },
        { id: 'hom5', name: 'Plant Pot', description: 'Ceramic planter', price: 2.99, image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=300&h=300&fit=crop', category: 'home' },
        { id: 'hom6', name: 'Candle Set', description: 'Scented candles', price: 3.99, image: 'https://images.unsplash.com/photo-1602874801006-e24aa9f9e22c?w=300&h=300&fit=crop', category: 'home' }
    ],
    desk: [
        { id: 'dsk1', name: 'Desk Organizer', description: 'Multi-compartment holder', price: 2.49, image: 'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=300&h=300&fit=crop', category: 'desk' },
        { id: 'dsk2', name: 'Notebook Set', description: 'Premium notebooks', price: 3.99, image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=300&h=300&fit=crop', category: 'desk' },
        { id: 'dsk3', name: 'Pen Holder', description: 'Stylish pen organizer', price: 1.99, image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=300&h=300&fit=crop', category: 'desk' },
        { id: 'dsk4', name: 'Desk Lamp', description: 'LED task lighting', price: 6.99, image: 'https://images.unsplash.com/photo-1565894937956-2c22e3f6f93e?w=300&h=300&fit=crop', category: 'desk' },
        { id: 'dsk5', name: 'Cable Organizer', description: 'Cable management', price: 1.49, image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=300&h=300&fit=crop', category: 'desk' },
        { id: 'dsk6', name: 'Mouse Pad', description: 'Large gaming pad', price: 2.99, image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=300&h=300&fit=crop', category: 'desk' }
    ],
    gift: [
        { id: 'gif1', name: 'Gift Box Set', description: 'Luxury gift packaging', price: 2.49, image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=300&h=300&fit=crop', category: 'gift' },
        { id: 'gif2', name: 'Chocolate Box', description: 'Premium chocolates', price: 4.99, image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=300&h=300&fit=crop', category: 'gift' },
        { id: 'gif3', name: 'Greeting Cards', description: 'Handmade cards set', price: 1.99, image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=300&h=300&fit=crop', category: 'gift' },
        { id: 'gif4', name: 'Gift Bag', description: 'Reusable gift bag', price: 1.49, image: 'https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=300&h=300&fit=crop', category: 'gift' },
        { id: 'gif5', name: 'Ribbon Set', description: 'Decorative ribbons', price: 1.99, image: 'https://images.unsplash.com/photo-1607083206325-caf1edba7a0f?w=300&h=300&fit=crop', category: 'gift' },
        { id: 'gif6', name: 'Gift Tags', description: 'Personalized tags', price: 0.99, image: 'https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=300&h=300&fit=crop', category: 'gift' }
    ],
    hobby: [
        { id: 'hob1', name: 'Yoga Mat', description: 'Non-slip exercise mat', price: 4.99, image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=300&h=300&fit=crop', category: 'hobby' },
        { id: 'hob2', name: 'Water Bottle', description: 'Insulated bottle', price: 3.99, image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=300&h=300&fit=crop', category: 'hobby' },
        { id: 'hob3', name: 'Resistance Bands', description: 'Fitness bands set', price: 2.99, image: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=300&h=300&fit=crop', category: 'hobby' },
        { id: 'hob4', name: 'Sports Bag', description: 'Gym duffel bag', price: 5.99, image: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?w=300&h=300&fit=crop', category: 'hobby' },
        { id: 'hob5', name: 'Exercise Gloves', description: 'Workout gloves', price: 2.49, image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=300&h=300&fit=crop', category: 'hobby' },
        { id: 'hob6', name: 'Jump Rope', description: 'Speed jump rope', price: 1.99, image: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=300&h=300&fit=crop', category: 'hobby' }
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
    { items: 6, discount: 15 },
    { items: 9, discount: 20 }
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
    
    // Update discount indicator with progress
    const discountIndicator = document.getElementById('discount-indicator');
    const currentDiscount = getDiscountPercent(itemCount);
    const nextTier = discountTiers.find(tier => tier.items > itemCount);
    
    if (currentDiscount === 20) {
        discountIndicator.textContent = `🎉 Maximum 20% OFF Unlocked!`;
        discountIndicator.style.background = 'linear-gradient(135deg, #4caf50 0%, #8bc34a 100%)';
    } else if (currentDiscount > 0 && nextTier) {
        const itemsNeeded = nextTier.items - itemCount;
        discountIndicator.textContent = `✅ ${currentDiscount}% OFF Applied! Add ${itemsNeeded} more for ${nextTier.discount}% OFF`;
        discountIndicator.style.background = 'linear-gradient(135deg, #4caf50 0%, #8bc34a 100%)';
    } else if (nextTier) {
        discountIndicator.textContent = `Add ${nextTier.items - itemCount} more for ${nextTier.discount}% OFF`;
        discountIndicator.style.background = 'linear-gradient(135deg, #ffd700 0%, #ffed4e 100%)';
    } else {
        discountIndicator.textContent = 'Start adding items!';
        discountIndicator.style.background = 'linear-gradient(135deg, #ffd700 0%, #ffed4e 100%)';
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
