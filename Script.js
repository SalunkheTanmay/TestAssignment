function myFunction() {
    const loader = document.getElementById('loading');
    setTimeout(() => {
        loader.classList.add('loaded'); 
    }, 2000);
}

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const searchBar = document.querySelector('.search-bar');
    menuToggle.addEventListener('click', function() {
        if (menu.style.display === 'flex') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'flex';
        }
    });
});

function updateFlag() {
    var select = document.getElementById("country");
    var selectedOption = select.options[select.selectedIndex];
    var flagUrl = selectedOption.getAttribute("data-flag");
    document.getElementById("selected-flag").src = flagUrl;
}


document.querySelectorAll('.span-blue').forEach(item => {
    item.addEventListener('click', event => {
        const id = event.target.id.replace('faq', 'answer');
        const answer = document.getElementById(id);

        if (answer.style.display === 'none') {
            answer.style.display = 'block';
            event.target.textContent = '-';
        } else {
            answer.style.display = 'none';
            event.target.textContent = '+';
        }
    });
});

document.getElementById('sendEnquiry').addEventListener('click', function(event) {
    event.preventDefault();

    let valid = true;

    document.getElementById('fullNameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('treatmentError').textContent = '';

    const fullName = document.getElementById('fullName').value;
    const namePattern = /^[a-zA-Z\s]+$/;
    if (fullName.trim() === '') {
        document.getElementById('fullNameError').textContent = 'Full Name is required';
        valid = false;
    } else if (!namePattern.test(fullName)) {
        document.getElementById('fullNameError').textContent = 'Name should contain only letters and spaces';
        valid = false;
    }

    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email.trim() === '') {
        document.getElementById('emailError').textContent = 'Email is required';
        valid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid Email format';
        valid = false;
    }

    const phone = document.getElementById('phone').value;
    const phonePattern = /^\d{10}$/;
    if (phone.trim() === '') {
        document.getElementById('phoneError').textContent = 'Phone Number is required';
        valid = false;
    } else if (phone.length > 10) {
        document.getElementById('phoneError').textContent = 'Phone Number must be exactly 10 digits';
        valid = false;
    } else if (!phonePattern.test(phone)) {
        document.getElementById('phoneError').textContent = 'Phone Number must be exactly 10 digits';
        valid = false;
    }

    const treatmentRequirement = document.getElementById('treatmentRequirement').value;
    if (treatmentRequirement.trim() === '') {
        document.getElementById('treatmentError').textContent = 'Treatment Requirement is required';
        valid = false;
    }

    if (valid) {
        console.log("submit")
        alert('Form submitted successfully!');
    }
});