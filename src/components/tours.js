import Title from "./title";
import { toursTable } from "../data";
import Tour from "./Tour";
const tours = () => {
	return (
		<section className="section" id="tours">
			<Title first="featured" last=" tours"></Title>

			<div className="section-center featured-center">
				{toursTable.map((ele) => {
					return <Tour tour={ele} key={ele.id}></Tour>;
				})}
			</div>
		</section>
	);
};
export default tours;
