// FOOTER

const footerData = {
    address: "Mokattam",
    email: "contact@oneformedia.net",
    phone: "+20 150 8565 466",
    instagram: "https://www.instagram.com/oneformedia/",
    tiktok: "https://www.tiktok.com/@hex_interactive",
    copyright: "&copy; One for Media 2023-2024"
};

// Update the address
document.getElementById('footer-address').innerHTML = `${footerData.address}`;

// Update the email
document.getElementById('footer-email').innerHTML = `${footerData.email}`;

// Update the phone
document.getElementById('footer-phone').innerHTML = `${footerData.phone}`;

// Update the social media links
document.getElementById('instagram-link').href = footerData.instagram;
document.getElementById('tiktok-link').href = footerData.tiktok;

// Update the copyright information
document.getElementById('footer-copyright').innerHTML = footerData.copyright;
