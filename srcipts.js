<script src="ścieżka/do/scripts.js"></script>
<script src="https://kit.fontawesome.com/2d10c1b7a7.js" crossorigin="anonymous"></script> // Biblioteka ikon FontAwesome.

<!-- Structured Data -->
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "WINNG - Twój partner w esporcie",
    "image": "",
    "url": "https://ibox14.github.io/MainPage/",
    "telephone": "",
    "priceRange": "$$",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "",
        "addressLocality": "",
        "postalCode": "",
        "addressCountry": "PL"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": "",
        "longitude": ""
    },
    "openingHoursSpecification": [{
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
    },{
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "15:00"
    }],
    "sameAs": [
        "https://www.facebook.com/",
        "https://www.instagram.com/",
        "https://www.youtube.com/"
    ]
}
</script>

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-CX932XHH7E"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-CX932XHH7E');
</script>

<!--  Hotjar Tracking Code for  -->
<script>
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:4958115,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
</script>

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

