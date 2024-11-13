// script.js
document.addEventListener('DOMContentLoaded', function () {
    const houseList = document.getElementById('house-list');

    const houses = [
        { id: 1, name: 'Motor Jepang Ke Inggrisan', price: 'IDR 150,000,000', img: '.jpg' },
        { id: 2, name: 'BSA 400', price: 'IDR 200,000,000', img: 'house2.jpg' },
        { id: 3, name: 'Yamaha', price: 'IDR 250,000,000', img: 'house3.jpg' },
        { id: 4, name: 'chopeer v4', price: 'IDR 300,000,000', img: 'house4.jpg' },
        { id: 5, name: 'Motor Inggris Ke jepangan', price: 'IDR 300,000,000', img: 'house1.jpg' },
        { id: 6, name: 'Harley da Byson', price: 'IDR 200,000,000', img: 'house2.jpg' },
        { id: 7, name: 'British Maksa', price: 'IDR 500,000,000', img: 'house3.jpg' },
        { id: 8, name: 'Copy Dangsdut', price: 'IDR 100,000,000', img: 'house4.jpg' }
    ];

    if (houseList) {
        houses.forEach(house => {
            const houseItem = document.createElement('div');
            houseItem.classList.add('house-item');

            const houseImg = document.createElement('img');
            houseImg.src = house.img;
            houseImg.alt = house.name;

            const houseName = document.createElement('h3');
            houseName.textContent = house.name;

            const housePrice = document.createElement('p');
            housePrice.textContent = house.price;

            const buyButton = document.createElement('button');
            buyButton.textContent = 'Beli';
            buyButton.classList.add('buy-button');
            buyButton.addEventListener('click', () => handlePurchase(house));

            houseItem.appendChild(houseImg);
            houseItem.appendChild(houseName);
            houseItem.appendChild(housePrice);
            houseItem.appendChild(buyButton);

            houseList.appendChild(houseItem);
        });
    }

    // Menambahkan kelas 'active' ke elemen navigasi yang sesuai
    const currentLocation = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentLocation) {
            link.classList.add('active');
        }
        link.addEventListener('click', function () {
            // Menghapus kelas 'clicked' dari semua link
            navLinks.forEach(navLink => navLink.classList.remove('clicked'));

            // Menambahkan kelas 'clicked' ke link yang di klik
            link.classList.add('clicked');
        });
    });
    // Background image slideshow
    const backgroundImages = [
        'url(d.jpg)',
        'url(ds.jpg)',
        'url(sa.jpg)',
        'url(u.jpg)',
        'url(bag.jpg)',

    ];

    let currentIndex = 0;

    function changeBackground() {
        document.body.style.backgroundImage = backgroundImages[currentIndex];
        currentIndex = (currentIndex + 1) % backgroundImages.length;
    }

    setInterval(changeBackground, 5000); // Change background every 5 seconds
    changeBackground(); // Initial background setup
});