import PageLinks from "./PageLinks";
import SocialLinks from "./SocialLinks";
const footer = () => {
	return (
		<footer className="section footer">
			<ul className="footer-links">
				<PageLinks className="footer-link"></PageLinks>
			</ul>
			<ul className="footer-icons">
				<SocialLinks className="footer-icon" />
			</ul>
			<p className="copyright">
				copyright &copy; Backroads travel tours company
				<span id="date">{new Date().getFullYear()}</span> all rights reserved
			</p>
		</footer>
	);
};
export default footer;
