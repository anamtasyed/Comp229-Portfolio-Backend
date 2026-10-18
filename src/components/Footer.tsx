const currentYear = new Date().getFullYear();

function Footer() {

    return (
        <footer className="footer">
          <div>
             <h3>My Portfolio</h3>
             <p>Software Engineering - Artificial Intelligence Student.</p>
             <p>&copy; {currentYear} My Portfolio</p>
          </div>
        </footer>
    );
}
export default Footer;