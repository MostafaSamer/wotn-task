document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const headerLinks = document.getElementById('header-links');
    menuToggle.addEventListener('click', function () {
        headerLinks.classList.toggle('show');
    });
    const cardsContainer = document.getElementById('cards-container');


    // const numberOfCards = 5;
    // for (let i = 1; i <= numberOfCards; i++) {
    //     const card = document.createElement('div');
    //     card.className = 'card';
    //     card.textContent = 'Card ' + i;
    //     cardsContainer.appendChild(card);
    // }
});