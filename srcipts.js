<script src="ścieżka/do/scripts.js"></script>
<script src="https://kit.fontawesome.com/2d10c1b7a7.js" crossorigin="anonymous"></script> // Biblioteka ikon FontAwesome.

// Przeszukuje linki do usług
var serviceLinks = document.querySelectorAll('.service-link');

// Dodaje nasłuchiwanie na kliknięcie w linki
serviceLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
        // Zapobiegaj domyślnej akcji kliknięcia (przeładowanie strony)
        event.preventDefault();

        // Pobiera ścieżkę do szczegółowego opisu z atrybutu href
        var detailsPath = link.getAttribute('href');

        // Implementacja logiki otwierania szczegółowego opisu,
        console.log('Otwórz szczegółowy opis: ' + detailsPath);
    });
});

//Obsługa kliknięcia, najechania myszą elementów usługi. 
document.addEventListener('DOMContentLoaded', function () {
    var serviceItems = document.querySelectorAll('.service-item');

    serviceItems.forEach(function (item, index) {
        item.addEventListener('click', function () {
            var serviceDetails = item.querySelector('.service-details').innerHTML;
            var modalDetailsContainer = document.getElementById('serviceDetails' + (index + 1));
            modalDetailsContainer.innerHTML = serviceDetails;
        });
//Zmienia tło elementu, aby zaznaczyć że jest on interaktywny w tym wypadku ramka przy usługach.
        item.addEventListener('mouseover', function () {
            item.style.backgroundColor = 'rgba(6, 15, 104, 0.3)';
        });

        item.addEventListener('mouseout', function () {
            item.style.backgroundColor = 'transparent';
        });
    });
});

