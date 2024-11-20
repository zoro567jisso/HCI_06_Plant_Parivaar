let cart = [];

function navigateToCart() {
    document.getElementById('product-details').style.display = 'none';
    document.getElementById('shop').style.display = 'none';
    document.getElementById('cart').style.display = 'block';

    showCart();
}

function showProductDetails(productType) {
    const productDetails = document.getElementById('product-details');

    // Clear existing content
    productDetails.innerHTML = '';
    document.getElementById('cart').style.display = 'none';
    document.getElementById('shop').style.display = 'none';
    productDetails.style.display = 'block';

    if (productType === 'flowering') {
        productDetails.innerHTML = `
            <h3>Flowering Plants</h3>
            <div class="plant-container">
                   <div class="plant">
                    <h4>Rose</h4>
                    <img src="rose.jpg" alt="Rose">
                    <p>A beautiful flowering plant with colorful blooms.</p>
                    <p>Price: $15.00</p>
                    <button onclick="addToCart('Rose', 15)">Add to Cart</button>
                </div>
                <div class="plant">
                    <h4>Tulip</h4>
                    <img src="tulip.jpg" alt="Tulip">
                    <p>Vibrant and perfect for spring gardens.</p>
                    <p>Price: $12.00</p>
                    <button onclick="addToCart('Tulip', 12)">Add to Cart</button>
                </div>
                <div class="plant">
                    <h4>Sunflower</h4>
                    <img src="sunflower.jpg" alt="Sunflower">
                    <p>Bright yellow flowers that follow the sun.</p>
                    <p>Price: $10.00</p>
                    <button onclick="addToCart('Sunflower', 10)">Add to Cart</button>
                </div>
                <div class="plant">
                    <h4>Lily</h4>
                    <img src="lily.jpg" alt="Lily">
                    <p>Elegant and fragrant flowers for gardens.</p>
                    <p>Price: $14.00</p>
                    <button onclick="addToCart('Lily', 14)">Add to Cart</button>
                </div>
                <div class="plant">
                    <h4>Daisy</h4>
                    <img src="daisy.jpg" alt="Daisy">
                    <p>Simple yet charming flowers for any occasion.</p>
                    <p>Price: $8.00</p>
                    <button onclick="addToCart('Daisy', 8)">Add to Cart</button>
                </div>
                <div class="plant">
                    <h4>Orchid</h4>
                    <img src="orchid.jpg" alt="Orchid">
                    <p>Exquisite and luxurious blooms for special events.</p>
                    <p>Price: $25.00</p>
                    <button onclick="addToCart('Orchid', 25)">Add to Cart</button>
                </div>
                <div class="plant">
                    <h4>Petunia</h4>
                    <img src="petunia.jpg" alt="Petunia">
                    <p>Colorful flowers ideal for hanging baskets.</p>
                    <p>Price: $9.00</p>
                    <button onclick="addToCart('Petunia', 9)">Add to Cart</button>
                </div>
                <div class="plant">
                    <h4>Marigold</h4>
                    <img src="marigold.jpg" alt="Marigold">
                    <p>Golden blooms that brighten any space.</p>
                    <p>Price: $7.00</p>
                    <button onclick="addToCart('Marigold', 7)">Add to Cart</button>
                </div>
                <div class="plant">
                    <h4>Hibiscus</h4>
                    <img src="hibiscus.jpg" alt="Hibiscus">
                    <p>Tropical flowers with vibrant hues.</p>
                    <p>Price: $13.00</p>
                    <button onclick="addToCart('Hibiscus', 13)">Add to Cart</button>
                </div>
                <div class="plant">
                    <h4>Begonia</h4>
                    <img src="begonia.jpg" alt="Begonia">
                    <p>Lovely flowers for shaded gardens.</p>
                    <p>Price: $11.00</p>
                    <button onclick="addToCart('Begonia', 11)">Add to Cart</button>
                </div>
            </div>
        `;
    } else if (productType === 'indoor') {
        productDetails.innerHTML = `
            <h3>Indoor Plants</h3>
            <div class="plant-container">
                <div class="plant">
                    <h4>Fern</h4>
                    <img src="fern.jpg" alt="Fern">
                    <p>Thrives in shade, perfect for indoor greenery.</p>
                    <p>Price: $20.00</p>
                    <button onclick="addToCart('Fern', 20)">Add to Cart</button>
                </div>
                <div class="plant">
                    <h4>Snake Plant</h4>
                    <img src="snakeplant.jpg" alt="Snake Plant">
                    <p>Low-maintenance, improves indoor air quality.</p>
                    <p>Price: $15.00</p>
                    <button onclick="addToCart('Snake Plant', 15)">Add to Cart</button>
                </div>
                <div class="plant">
                    <h4>Peace Lily</h4>
                    <img src="peacelily.jpg" alt="Peace Lily">
                    <p>Elegant plant that thrives in low light.</p>
                    <p>Price: $18.00</p>
                    <button onclick="addToCart('Peace Lily', 18)">Add to Cart</button>
                </div>
                <div class="plant">
                    <h4>Spider Plant</h4>
                    <img src="spiderplant.jpg" alt="Spider Plant">
                    <p>Popular for its air-purifying properties.</p>
                    <p>Price: $12.00</p>
                    <button onclick="addToCart('Spider Plant', 12)">Add to Cart</button>
                </div>
                <div class="plant">
                    <h4>Rubber Plant</h4>
                    <img src="rubberplant.jpg" alt="Rubber Plant">
                    <p>Stylish plant with glossy green leaves.</p>
                    <p>Price: $22.00</p>
                    <button onclick="addToCart('Rubber Plant', 22)">Add to Cart</button>
                </div>
                <div class="plant">
                    <h4>Money Plant</h4>
                    <img src="moneyplant.jpg" alt="Money Plant">
                    <p>Believed to bring good luck and prosperity.</p>
                    <p>Price: $10.00</p>
                    <button onclick="addToCart('Money Plant', 10)">Add to Cart</button>
                </div>
                <div class="plant">
                    <h4>Areca Palm</h4>
                    <img src="arecapalm.jpg" alt="Areca Palm">
                    <p>A lush, decorative indoor plant.</p>
                    <p>Price: $25.00</p>
                    <button onclick="addToCart('Areca Palm', 25)">Add to Cart</button>
                </div>
                <div class="plant">
                    <h4>Boston Fern</h4>
                    <img src="bostonfern.jpg" alt="Boston Fern">
                    <p>Classic fern ideal for hanging baskets.</p>
                    <p>Price: $16.00</p>
                    <button onclick="addToCart('Boston Fern', 16)">Add to Cart</button>
                </div>
                <div class="plant">
                    <h4>Dracaena</h4>
                    <img src="dracaena.jpg" alt="Dracaena">
                    <p>Perfect for corners and large pots.</p>
                    <p>Price: $30.00</p>
                    <button onclick="addToCart('Dracaena', 30)">Add to Cart</button>
                </div>
                <div class="plant">
                    <h4>ZZ Plant</h4>
                    <img src="zzplant.jpg" alt="ZZ Plant">
                    <p>Durable plant that requires minimal care.</p>
                    <p>Price: $19.00</p>
                    <button onclick="addToCart('ZZ Plant', 19)">Add to Cart</button>
                </div>
            </div>
        `;
    } else if (productType === 'succulent') {
        productDetails.innerHTML = `
            <h3>Succulents</h3>
            <div class="plant-container">
                <div class="plant">
                    <h4>Aloe Vera</h4>
                    <img src="aloevera.jpg" alt="Aloe Vera">
                    <p>Known for its medicinal properties.</p>
                    <p>Price: $8.00</p>
                    <button onclick="addToCart('Aloe Vera', 8)">Add to Cart</button>
                </div>
                <div class="plant">
                    <h4>Jade Plant</h4>
                    <img src="jadeplant.jpg" alt="Jade Plant">
                    <p>Symbol of prosperity and luck.</p>
                    <p>Price: $12.00</p>
                    <button onclick="addToCart('Jade Plant', 12)">Add to Cart</button>
                </div>
                <div class="plant">
                    <h4>Echeveria</h4>
                    <img src="echeveria.jpg" alt="Echeveria">
                    <p>Attractive rosette-shaped succulent.</p>
                    <p>Price: $10.00</p>
                    <button onclick="addToCart('Echeveria', 10)">Add to Cart</button>
                </div>
                <div class="plant">
                    <h4>Cactus</h4>
                    <img src="cactus.jpg" alt="Cactus">
                    <p>Hardy succulent for low-maintenance spaces.</p>
                    <p>Price: $9.00</p>
                    <button onclick="addToCart('Cactus', 9)">Add to Cart</button>
                </div>
                <div class="plant">
                    <h4>Burro’s Tail</h4>
                    <img src="burrostail.jpg" alt="Burro’s Tail">
                    <p>Trailing succulent ideal for hanging pots.</p>
                    <p>Price: $15.00</p>
                    <button onclick="addToCart('Burro’s Tail', 15)">Add to Cart</button>
                </div>
                <div class="plant">
                    <h4>String of Pearls</h4>
                    <img src="stringofpearls.jpg" alt="String of Pearls">
                    <p>Unique trailing succulent with pearl-like leaves.</p>
                    <p>Price: $20.00</p>
                    <button onclick="addToCart('String of Pearls', 20)">Add to Cart</button>
                </div>
                <div class="plant">
                    <h4>Panda Plant</h4>
                    <img src="pandaplant.jpg" alt="Panda Plant">
                    <p>Furry leaves resembling a panda’s paw.</p>
                    <p>Price: $14.00</p>
                    <button onclick="addToCart('Panda Plant', 14)">Add to Cart</button>
                </div>
                <div class="plant">
                    <h4>Hens and Chicks</h4>
                    <img src="hensandchicks.jpg" alt="Hens and Chicks">
                    <p>Compact rosettes ideal for rock gardens.</p>
                    <p>Price: $7.00</p>
                    <button onclick="addToCart('Hens and Chicks', 7)">Add to Cart</button>
                </div>
                <div class="plant">
                    <h4>Agave</h4>
                    <img src="agave.jpg" alt="Agave">
                    <p>Large and dramatic succulent for patios.</p>
                    <p>Price: $30.00</p>
                    <button onclick="addToCart('Agave', 30)">Add to Cart</button>
                </div>
                <div class="plant">
                    <h4>Ice Plant</h4>
                    <img src="iceplant.jpg" alt="Ice Plant">
                    <p>Ground-cover succulent with vibrant flowers.</p>
                    <p>Price: $18.00</p>
                    <button onclick="addToCart('Ice Plant', 18)">Add to Cart</button>
                </div>
            </div>
        `;
    }
}

function addToCart(plantName, price) {
    cart.push({ name: plantName, price });
    document.getElementById('cart-count').textContent = cart.length;
    alert(`${plantName} has been added to your cart!`);
}

function showCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ''; // Clear current cart display

    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cart.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.innerHTML = `<p>${item.name} - $${item.price} 
                <button onclick="removeFromCart(${index})">Remove</button>
            </p>`;
            cartItems.appendChild(itemElement);
        });
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    document.getElementById('cart-count').textContent = cart.length;
    showCart();
}
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty. Please add items to your cart before checking out.');
        return;
    }

    let totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
    alert(`Your total is $${totalPrice}. Thank you for your purchase!`);

    // Optionally clear the cart after checkout
    cart = [];
    document.getElementById('cart-count').textContent = cart.length;
    showCart(); // Refresh cart display
}

