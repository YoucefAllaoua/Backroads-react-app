import Title from "./title";
import { services as servicesArray } from "../data";
import Service from "./Service";
const services = () => {
	return (
		<section className="section services" id="services">
			<Title first="our" last=" services"></Title>

			<div className="section-center services-center">
				{servicesArray.map((service) => {
					return <Service service={service} key={service.id}></Service>;
				})}
			</div>
		</section>
	);
};
export default services;
