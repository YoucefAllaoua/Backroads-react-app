import { socialLinks } from "../data";
import SocialLink from "./SocialLink";
const SocialLinks = (props) => {
	const { className } = props;
	return socialLinks.map((ele) => {
		const { id } = ele;
		return <SocialLink {...ele} key={id} className={className}></SocialLink>;
	});
};
export default SocialLinks;
