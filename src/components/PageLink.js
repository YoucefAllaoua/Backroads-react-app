const PageLink = ({ className, href, text }) => {
	return (
		<li>
			<a href={href} className={className}>
				{text}
			</a>
		</li>
	);
};
export default PageLink;
