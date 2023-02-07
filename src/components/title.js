const title = (props) => {
	const { first, last } = props;
	return (
		<div className="section-title">
			<h2>
				{first}
				<span>{last}</span>
			</h2>
		</div>
	);
};
export default title;
