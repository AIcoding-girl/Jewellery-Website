// Animations
window.sr = ScrollReveal();

sr.reveal('.navbar', {
    duration: 1000,
    origin: 'bottom'
});
sr.reveal('#front-page-left', {
    duration: 2000,
    origin: 'top',
    distance: '300px'
});
sr.reveal('.front-page-right', {
    duration: 2000,
    origin: 'right',
});
sr.reveal('.showcase-btn', {
    delay: 2000,
    duration: 2000,
    origin: 'bottom'
});
sr.reveal('#testimonial div', {
    delay: 1000,
    duration: 2000,
    origin: 'bottom'
});
sr.reveal('.info-left', {
    duration: 2000,
    origin: 'left',
    viewFactor: 0.2
});
sr.reveal('.info-right', {
    duration: 2000,
    origin: 'right',
    viewFactor: 0.2
});


// jQuery Smooth Scroll
$('.navbar-nav a').on('click', function (e) {
    if (this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top
            },
            800
        );
    }
});

// Counter panel
const counters = document.querySelectorAll('.counter');
const speed = 250;

// Counter called when element visible
window.addEventListener("scroll", function () {
    var element = document.getElementById('info2');
    if (window.scrollY >= element.offsetTop) {
        counterPanel();
    }
});

// counterPanel();
function counterPanel() {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 100);
            } else {
                count.innerText = target;
            }
        }
        updateCount();
    });
};

// Enable Button, Message Validation still needed

$(document).ready(function () {
    validate();
    $("input").on('keyup', validate);
});

function validate() {

    $("input").each(function () {
        if ($(this).val().length > 0) {
            $("#submit-btn").prop("disabled", false);
        }
        else {
            $("#submit-btn").prop("disabled", true);
        };
    });
};

// Modal Message

const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    $('#modal-example').modal('show');
    form.reset();
    $("#submit-btn").prop("disabled", true);
});