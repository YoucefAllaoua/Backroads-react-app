import { pageLinks } from "../data";
import PageLink from "./PageLink";

const PageLinks = (prop) => {
	const { className } = prop;
	return pageLinks.map((ele) => {
		const { id } = ele;
		return <PageLink {...ele} key={id} className={className}></PageLink>;
	});
};
export default PageLinks;
