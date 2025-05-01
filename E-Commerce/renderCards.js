const renderCards = () => {
    const products = [
        { id: 1, name: "Product 1", description: "This is a description for product 1.", price: "$49.99", img: "/images/cable.webp" },
        { id: 2, name: "Product 2", description: "Product 2 has some cool features.", price: "$59.99", img: "/images/chakna.webp" },
        { id: 3, name: "Product 3", description: "Product 3 is perfect for outdoor use.", price: "$69.99", img: "/images/hair.webp" },
        { id: 4, name: "Product 4", description: "Best value product with amazing quality.", price: "$79.99", img: "/images/nuts.webp" }
    ];

    const cardsContainer = document.getElementById("card-container");

    if (!cardsContainer) {
        console.error("Card container not found!");
        return;
    }

    cardsContainer.innerHTML = ''; // Clear previous content

    products.forEach(product => {
        const card = `
            <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                <div class="card h-100 shadow-sm">
                    <img src="${product.img}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="card-text fw-bold">${product.price}</p>
                        <a href="#" class="btn btn-primary">View Product</a>
                    </div>
                </div>
            </div>
        `;
        cardsContainer.innerHTML += card;
    });
};

window.onload = () => {
    renderCards();
};
