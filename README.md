# Pirate King of Code Portfolio

A unique and fun portfolio website themed around One Piece, showcasing your web development skills with a pirate twist!

## Features

- One Piece inspired design and animations
- Responsive layout that works on all devices
- Interactive treasure chest project showcase
- Den Den Mushi animated contact form
- Luffy's arm stretch page transitions
- Smooth scrolling and hover effects
- Contact form with PHP backend

## Setup Instructions

1. Clone this repository to your local machine
2. Make sure you have a web server with PHP support (XAMPP, WAMP, or similar)
3. Place the files in your web server's root directory
4. Update the contact form email in `php/contact.php` with your email address
5. Add your profile image to the `images` directory as `profile.jpg`
6. Customize the content in `index.html` with your information
7. Add your projects to the projects section

## Customization

### Colors
The color scheme can be easily modified in the `:root` section of `css/styles.css`:
- `--primary-color`: Main accent color (default: #FF6B00)
- `--secondary-color`: Secondary accent color (default: #FFD700)
- `--dark-color`: Background color (default: #1A1A1A)
- `--light-color`: Text color (default: #FFFFFF)
- `--ocean-blue`: Ocean theme color (default: #0066CC)

### Adding Projects
To add a new project, copy and paste the project card template in the projects section:
```html
<div class="project-card">
    <h3>Project Title</h3>
    <p>Project Description</p>
    <div class="project-links">
        <a href="#" class="project-link">View Live</a>
        <a href="#" class="project-link">Source Code</a>
    </div>
</div>
```

### Contact Form
The contact form uses PHP to send emails. Make sure to:
1. Update the `$to` variable in `php/contact.php` with your email
2. Ensure your server has PHP mail functionality enabled
3. Test the form to make sure emails are being sent correctly

## Technologies Used

- HTML5
- CSS3 (with animations and transitions)
- JavaScript (ES6+)
- PHP (for contact form)
- Font Awesome (for icons)
- Google Fonts (Pirata One and Roboto)

## Browser Support

The portfolio is compatible with all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## License

This project is open source and available under the MIT License.

## Credits

- One Piece is a trademark of Eiichiro Oda/Shueisha
- Font Awesome for icons
- Google Fonts for typography 