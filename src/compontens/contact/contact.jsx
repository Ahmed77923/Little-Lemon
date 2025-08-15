import './contact.css';

function ContactPage() {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>We’d love to hear from you! 🍋</p>

      <div className="contact-container">
        {/* Contact Form */}
        <form className="contact-form">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" placeholder="Enter your name" required />

          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" rows="5" placeholder="Write your message" required></textarea>

          <button type="submit">Send Message</button>
        </form>

        {/* Contact Info */}
        <div className="contact-info">
          <h3>Our Details</h3>
          <p>📍 123 Lemon Street, Chicago, IL</p>
          <p>📞 +1 (555) 123-4567</p>
          <p>📧 contact@littlelemon.com</p>

          {/* Map Embed */}
          <iframe
            title="Little Lemon Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.880156022203!2d-87.62317778440942!3d41.8818325792214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2ca6ebf50f01%3A0xdda1a50fbb2a1f6!2sChicago!5e0!3m2!1sen!2sus!4v1630542792242!5m2!1sen!2sus"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
