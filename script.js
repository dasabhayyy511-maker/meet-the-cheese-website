const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const menuItems = document.querySelectorAll('.nav-links a');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('open');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    menuItems.forEach((item) => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('open');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

const itemDetails = {
    'classic-zinger': {
        category: 'Zinger Favorite',
        name: 'Classic Zinger',
        price: 'AED 21 / 29',
        description: 'A crispy signature sandwich with a bold profile that works as one of the most recognizable picks on the menu.',
        bestFor: 'Customers looking for a familiar crowd-pleaser.',
        group: 'Zinger Favorites',
        style: 'Crispy, cheesy, and filling.'
    },
    'hollandise': {
        category: 'Zinger Favorite',
        name: 'Hollandise',
        price: 'AED 18 / 26',
        description: 'A richer zinger option made to feel heavier, saucier, and more indulgent.',
        bestFor: 'Customers who want a creamy loaded sandwich.',
        group: 'Zinger Favorites',
        style: 'Creamy, rich, and premium.'
    },
    'zingwich': {
        category: 'Zinger Favorite',
        name: 'Zingwich',
        price: 'AED 12 / 20',
        description: 'A more compact pick that still keeps the brand\'s bold zinger profile.',
        bestFor: 'Smaller cravings or a budget-friendly order.',
        group: 'Zinger Favorites',
        style: 'Compact, crispy, and fast.'
    },
    'buffalo-zinger-burger': {
        category: 'Zinger Burger',
        name: 'Buffalo Zinger Burger',
        price: 'AED 20 / 28',
        description: 'A spicier burger direction that adds more punch and heat to the zinger lineup.',
        bestFor: 'Customers who want a bolder flavor kick.',
        group: 'Zinger Burgers',
        style: 'Spicy, saucy, and layered.'
    },
    'three-star': {
        category: 'Smash & Beef',
        name: 'Three Star',
        price: 'AED 25 / 33',
        description: 'One of the strongest-looking smash burger options and a smart hero item for the brand.',
        bestFor: 'Signature burger promotion and homepage spotlight.',
        group: 'Smash & Beef',
        style: 'Stacked, juicy, and premium.'
    },
    'royal-feast': {
        category: 'Smash & Beef',
        name: 'Royal Feast',
        price: 'AED 20 / 28',
        description: 'A beef burger option that feels heavier and more indulgent in presentation.',
        bestFor: 'Customers wanting a fuller beef burger meal.',
        group: 'Smash & Beef',
        style: 'Rich, beefy, and satisfying.'
    },
    'mushroom-beef-burger': {
        category: 'Smash & Beef',
        name: 'Mushroom Beef Burger',
        price: 'AED 20 / 28',
        description: 'A beef burger variation that adds a creamy mushroom layer to the core burger profile.',
        bestFor: 'Customers who prefer a heavier premium-style burger.',
        group: 'Smash & Beef',
        style: 'Creamy, beefy, and rich.'
    },
    'classic-beef-burger': {
        category: 'Smash & Beef',
        name: 'Classic Beef Burger',
        price: 'AED 20 / 28',
        description: 'A straightforward burger choice that helps balance the menu with a familiar option.',
        bestFor: 'Customers looking for a simple beef burger pick.',
        group: 'Smash & Beef',
        style: 'Classic, balanced, and filling.'
    },
    'cheetos-punch': {
        category: 'Combo Meal',
        name: 'Cheetos Punch',
        price: 'AED 55',
        description: 'A high-impact combo built to stand out visually and attract attention on promotions.',
        bestFor: 'Sharing, social media posts, and premium combo marketing.',
        group: 'Combos & Meals',
        style: 'Loaded, shareable, and dramatic.'
    },
    'viral-combo': {
        category: 'Combo Meal',
        name: 'Viral Combo',
        price: 'AED 74',
        description: 'A larger meal setup designed to feel like a full event order rather than a quick snack.',
        bestFor: 'Groups, shared meals, and promotional bundles.',
        group: 'Combos & Meals',
        style: 'Large, loaded, and social.'
    },
    'biggy-meal': {
        category: 'Combo Meal',
        name: 'Biggy Meal',
        price: 'AED 58',
        description: 'A strong combo option that fits the brand\'s oversized and indulgent identity.',
        bestFor: 'Customers wanting a fuller combo than a regular meal.',
        group: 'Combos & Meals',
        style: 'Heavy, cheesy, and filling.'
    },
    'zinger-treat': {
        category: 'Combo Meal',
        name: 'Zinger Treat',
        price: 'AED 36',
        description: 'A zinger-focused meal option that feels more like a complete order than a standalone sandwich.',
        bestFor: 'Customers choosing a ready-made meal option.',
        group: 'Combos & Meals',
        style: 'Balanced, complete, and easy to order.'
    },
    'dynamite-shrimp': {
        category: 'Sides & Appetizers',
        name: 'Dynamite Shrimp',
        price: 'AED 25',
        description: 'A premium appetizer that adds range to the menu beyond burgers and wraps.',
        bestFor: 'Upselling and showcasing variety.',
        group: 'Sides & Drinks',
        style: 'Crispy, saucy, and premium.'
    },
    'cheese-fries': {
        category: 'Sides & Appetizers',
        name: 'Cheese Fries',
        price: 'AED 15',
        description: 'A reliable crowd favorite that fits perfectly with combo-heavy ordering behavior.',
        bestFor: 'Add-on orders and side upgrades.',
        group: 'Sides & Drinks',
        style: 'Cheesy, snackable, and shareable.'
    },
    'alfredo-shrimp-pasta': {
        category: 'Pasta',
        name: 'Alfredo Shrimp Pasta',
        price: 'AED 29',
        description: 'A creamy pasta option that gives the menu a more restaurant-style range beyond fast food.',
        bestFor: 'Customers who want a non-burger main option.',
        group: 'Sides & Drinks',
        style: 'Creamy, soft, and rich.'
    },
    'passion-fruit-mojito': {
        category: 'Drink',
        name: 'Passion Fruit Mojito',
        price: 'AED 13',
        description: 'A bright drink choice that adds color and freshness to the menu presentation.',
        bestFor: 'Drink upsells and visual menu balance.',
        group: 'Sides & Drinks',
        style: 'Fresh, citrusy, and vibrant.'
    },
    'mac-n-zinger-toast': {
        category: 'Toast & Sandwiches',
        name: 'Mac N Zinger Toast',
        price: 'Part of the toast selection',
        description: 'A heavier toast option combining crispy filling with a more layered, loaded bite.',
        bestFor: 'Customers looking for a richer sandwich-style pick.',
        group: 'Toast & Sandwiches',
        style: 'Loaded, toasted, and rich.'
    },
    'crunchy-toast': {
        category: 'Toast & Sandwiches',
        name: 'Crunchy Toast',
        price: 'Part of the toast selection',
        description: 'A crisp toast item that fits the brand\'s fast, indulgent menu style.',
        bestFor: 'Customers who want a snack-style sandwich option.',
        group: 'Toast & Sandwiches',
        style: 'Toasted, crispy, and quick.'
    },
    'cheetos-zinger': {
        category: 'Toast & Sandwiches',
        name: 'Cheetos Zinger',
        price: 'Part of the toast selection',
        description: 'A more playful and loaded variation designed to stand out visually on the menu.',
        bestFor: 'Customers attracted to bold topping combinations.',
        group: 'Toast & Sandwiches',
        style: 'Crunchy, spicy, and visual.'
    },
    'beef-steak-sandwich': {
        category: 'Toast & Sandwiches',
        name: 'Beef Steak Sandwich',
        price: 'AED 20 / 28',
        description: 'A sandwich option that adds variety beyond burgers and wraps while keeping the menu hearty.',
        bestFor: 'Customers looking for a fuller sandwich option.',
        group: 'Toast & Sandwiches',
        style: 'Hearty, savory, and filling.'
    },
    'spicy-twister': {
        category: 'Wraps',
        name: 'Spicy Twister',
        price: 'AED 12 / 20',
        description: 'A wrap option built for customers who want flavor and convenience in a lighter format.',
        bestFor: 'Fast takeaway orders and wrap lovers.',
        group: 'Wraps',
        style: 'Spicy, wrapped, and easy to eat.'
    },
    'cheetos-twister': {
        category: 'Wraps',
        name: 'Cheetos Twister',
        price: 'AED 12 / 20',
        description: 'A bolder wrap choice with a more playful crunch-forward identity.',
        bestFor: 'Customers choosing something more visual and indulgent.',
        group: 'Wraps',
        style: 'Crunchy, wrapped, and loaded.'
    },
    'classic-beef-wrap': {
        category: 'Wraps',
        name: 'Classic Beef Wrap',
        price: 'AED 12 / 20',
        description: 'A simpler wrap option that balances the menu with a more familiar beef profile.',
        bestFor: 'Customers wanting a straightforward wrap order.',
        group: 'Wraps',
        style: 'Classic, savory, and portable.'
    },
    'classic-chicken-wrap': {
        category: 'Wraps',
        name: 'Classic Chicken Wrap',
        price: 'AED 12 / 20',
        description: 'A flexible menu item that works well for quick lunch and takeaway orders.',
        bestFor: 'Customers preferring a lighter chicken-based wrap.',
        group: 'Wraps',
        style: 'Simple, wrapped, and balanced.'
    },
    'melted-cheddar-cheese': {
        category: 'Add On',
        name: 'Melted Cheddar Cheese',
        price: 'AED 3 / 5',
        description: 'An add-on that fits perfectly with burgers, fries, and combo upgrades.',
        bestFor: 'Upselling and customizing heavier meals.',
        group: 'Add Ons',
        style: 'Creamy, rich, and upgrade-friendly.'
    },
    'extra-patty-chicken': {
        category: 'Add On',
        name: 'Extra Patty Chicken',
        price: 'AED 5',
        description: 'A simple add-on that supports bigger builds and more filling burger orders.',
        bestFor: 'Customers customizing burgers for a heavier meal.',
        group: 'Add Ons',
        style: 'Extra, filling, and customizable.'
    },
    'potato-wedges': {
        category: 'Add On',
        name: 'Potato Wedges',
        price: 'AED 3',
        description: 'A side option that works across combos, burgers, and snack-style orders.',
        bestFor: 'Customers adding a side to complete the meal.',
        group: 'Add Ons',
        style: 'Crispy, warm, and shareable.'
    },
    'curly-fries': {
        category: 'Add On',
        name: 'Curly Fries',
        price: 'AED 3',
        description: 'A fun side that visually fits the bold and playful style of the brand.',
        bestFor: 'Snack add-ons and combo side upgrades.',
        group: 'Add Ons',
        style: 'Curly, crispy, and fun.'
    }
};

const triggers = document.querySelectorAll('.menu-trigger, .menu-link-trigger');
const detailSection = document.querySelector('#item-detail-section');
const detailCategory = document.querySelector('#detail-category');
const detailName = document.querySelector('#detail-name');
const detailPrice = document.querySelector('#detail-price');
const detailDescription = document.querySelector('#detail-description');
const detailBestFor = document.querySelector('#detail-best-for');
const detailGroup = document.querySelector('#detail-group');
const detailStyle = document.querySelector('#detail-style');

function updateItemDetail(itemKey) {
    const data = itemDetails[itemKey];
    if (!data || !detailName) return;

    detailCategory.textContent = data.category;
    detailName.textContent = data.name;
    detailPrice.textContent = data.price;
    detailDescription.textContent = data.description;
    detailBestFor.textContent = data.bestFor;
    detailGroup.textContent = data.group;
    detailStyle.textContent = data.style;

    triggers.forEach((trigger) => {
        trigger.classList.toggle('active', trigger.dataset.item === itemKey);
    });
}

triggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
        updateItemDetail(trigger.dataset.item);
        detailSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

const introOverlay = document.querySelector('#intro-overlay');
const introLogoWrap = document.querySelector('.intro-logo-wrap');
const introLogo = document.querySelector('.intro-logo');
const introGlow = document.querySelector('.intro-glow');
const navLogo = document.querySelector('#nav-logo');
const body = document.body;

function runIntroAnimation() {
    if (!introOverlay || !introLogoWrap || !introLogo || !navLogo || !body.classList.contains('has-intro')) {
        return;
    }

    body.classList.add('intro-playing');

    const moveLogo = () => {
        const introRect = introLogoWrap.getBoundingClientRect();
        const navRect = navLogo.getBoundingClientRect();
        const introCenterX = introRect.left + introRect.width / 2;
        const introCenterY = introRect.top + introRect.height / 2;
        const navCenterX = navRect.left + navRect.width / 2;
        const navCenterY = navRect.top + navRect.height / 2;
        const scale = Math.max(navRect.width / introRect.width, 0.12);

        introLogoWrap.style.setProperty('--intro-x', `${navCenterX - introCenterX}px`);
        introLogoWrap.style.setProperty('--intro-y', `${navCenterY - introCenterY}px`);
        introLogoWrap.style.setProperty('--intro-scale', `${scale}`);
        introLogoWrap.classList.add('is-moving');
    };

    requestAnimationFrame(() => {
        introLogo.classList.add('is-revealed');
        window.setTimeout(() => {
            introGlow?.classList.add('is-visible');
        }, 220);

        window.setTimeout(() => {
            moveLogo();
        }, 1250);

        window.setTimeout(() => {
            introOverlay.classList.add('is-hidden');
            body.classList.remove('intro-playing');
        }, 2200);
    });
}

if (document.readyState === 'complete') {
    runIntroAnimation();
} else {
    window.addEventListener('load', runIntroAnimation, { once: true });
}
