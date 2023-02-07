import img from "../images/logo.svg";
import PageLinks from "./PageLinks";
import SocialLinks from "./SocialLinks";
const nav = () => {
	return (
		<nav className="navbar">
			<div className="nav-center">
				<div className="nav-header">
					<img src={img} className="nav-logo" alt="backroads" />
					<button type="button" className="nav-toggle" id="nav-toggle">
						<i className="fas fa-bars"></i>
					</button>
				</div>
				{/* <!-- left this comment on purpose --> */}
				<ul className="nav-links" id="nav-links">
					<PageLinks className="nav-link"></PageLinks>
				</ul>

				<ul className="nav-icons">
					<SocialLinks className="nav-icon" />
				</ul>
			</div>
		</nav>
	);
};
export default nav;
