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

    const openModalBtns = document.querySelectorAll('.openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modal = document.getElementById('myModal');

    function openModal() {
        modal.style.display = 'flex';
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    openModalBtns.forEach(function (btn) {
        btn.addEventListener('click', openModal);
    });

    closeModalBtn.addEventListener('click', closeModal);

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});