// FOOTER

const footerData = {
    address: "Block 1790, Al-Hamdy Street off Baron School Street, El-Mokattam",
    email: "contact@oneformedia.net",
    phone: "+20 106 6583 864",
    maps: "https://maps.app.goo.gl/1BqEwMyny8pzGkGh6",
    instagram: "https://www.instagram.com/oneformedia/",
    tiktok: "https://www.tiktok.com/@oneformedia",
    linkedin: "https://www.linkedin.com/company/oneformedia/",
    copyright: "&copy; One for Media 2023-2024"
};

// Update the address
document.getElementById('footer-address').innerHTML = `${footerData.address}`;

// Update the email
document.getElementById('footer-email').innerHTML = `${footerData.email}`;

// Update the phone
document.getElementById('footer-phone').innerHTML = `${footerData.phone}`;

// Update the links
document.getElementById('maps-link').href = footerData.maps;
document.getElementById('instagram-link').href = footerData.instagram;
document.getElementById('linkedin-link').href = footerData.linkedin;
document.getElementById('tiktok-link').href = footerData.tiktok;

// Update the copyright information
document.getElementById('footer-copyright').innerHTML = footerData.copyright;
