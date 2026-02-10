// This file helps update navigation - run manually if needed
const fs = require('fs');
const files = ['index.html', 'about.html', 'batmya.html', 'gallery.html', 'leadership.html', 'contact.html'];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    // Remove language toggle
    content = content.replace(/<div class="lang-toggle-container">[\s\S]*?<\/div>\s*<\/div>/m, '');

    // Update navigation
    content = content.replace(
        /<nav>[\s\S]*?<\/nav>/m,
        `<nav>
        <button class="hamburger" id="hamburger" aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
        </button>
        <ul id="navMenu">
            <li><a href="index.html"><i class="fas fa-home"></i> मुख्यपृष्ठ</a></li>
            <li><a href="about.html"><i class="fas fa-info-circle"></i> आमच्याबद्दल</a></li>
            <li><a href="leadership.html"><i class="fas fa-users"></i> नेतृत्व</a></li>
            <li><a href="batmya.html"><i class="fas fa-fist-raised"></i> बातम्या</a></li>
            <li><a href="gallery.html"><i class="fas fa-images"></i> गॅलरी</a></li>
            <li><a href="contact.html"><i class="fas fa-phone-alt"></i> संपर्क</a></li>
        </ul>
    </nav>`
    );

    fs.writeFileSync(file, content);
});

console.log('Updated all files!');
