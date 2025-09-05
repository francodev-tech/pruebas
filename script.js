document.addEventListener('DOMContentLoaded', () => {

    // --- Tab Navigation ---
    const categoryTabs = document.querySelectorAll('.category-tab');
    const menuSections = document.querySelectorAll('.menu-section');

    categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Deactivate all tabs
            categoryTabs.forEach(t => t.classList.remove('active'));
            // Activate clicked tab
            tab.classList.add('active');

            const targetCategory = tab.getAttribute('data-category');

            // Hide all sections and show the target one
            menuSections.forEach(section => {
                if (section.id === targetCategory) {
                    section.style.display = 'grid';
                } else {
                    section.style.display = 'none';
                }
            });
        });
    });

    // --- Quantity Selectors & Cart Counter ---
    const quantitySelectors = document.querySelectorAll('.quantity-selector');
    const cartCountElement = document.querySelector('.cart-count');

    const updateTotalCartCount = () => {
        let totalItems = 0;
        document.querySelectorAll('.quantity').forEach(quantityElement => {
            totalItems += parseInt(quantityElement.textContent, 10);
        });
        cartCountElement.textContent = totalItems;
    };

    quantitySelectors.forEach(selector => {
        const minusBtn = selector.querySelector('.minus');
        const plusBtn = selector.querySelector('.plus');
        const quantitySpan = selector.querySelector('.quantity');

        plusBtn.addEventListener('click', () => {
            let currentQuantity = parseInt(quantitySpan.textContent, 10);
            quantitySpan.textContent = currentQuantity + 1;
            updateTotalCartCount();
        });

        minusBtn.addEventListener('click', () => {
            let currentQuantity = parseInt(quantitySpan.textContent, 10);
            if (currentQuantity > 0) {
                quantitySpan.textContent = currentQuantity - 1;
                updateTotalCartCount();
            }
        });
    });

    // Initial cart count update on page load
    updateTotalCartCount();

});
