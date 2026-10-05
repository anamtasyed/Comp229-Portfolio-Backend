function Contact() {
    return (
        <section className="page-section">
            <div className="section-header">
                <p>Get In Touch </p>
                <h1>Contact Me</h1>
            </div>
            <div className="contact-container">
                <div className="contact-indo">
                    <h2>Let's Connect</h2>
                    <p>I would love to hear from you. Feel free to reach out if you have any questions, opportunities, or would like to connect. </p>
                    <p>
                        <strong>Email:</strong>your-email@example.com
                    </p>
                    <p>
                        <strong>Location:</strong> Toronto, Ontario, Canada
                    </p>
                </div>
                <div className="contact-form">
                    <h2>Send Me a Message</h2>
                    <form>
                        <label htmlFor="name">Name</label>
                        <input type="text"
                               id="email"
                               name="email"
                               placeholder="Enter your email"
                            />
                        <label htmlFor="message">Message</label>
                        <textarea id="message" 
                                  name="message"
                                  rows={5}
                                  placeholder="Enter your message"
                        ></textarea>
                        <button type="submit">Send Message</button>

                    </form>
                </div>
            </div>
        </section>
    );
}
export default Contact;