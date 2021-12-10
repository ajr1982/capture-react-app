//Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import styled from "styled-components";

const ContactUs = () => {
	return (
		<ContactStyle
			variants={pageAnimation}
			initial="hidden"
			animate="show"
			exit="exit"
		>
			<Title>
				<Hide>
					<motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
				</Hide>
			</Title>
			<div>
				<Hide>
					<Social variants={titleAnim}>
						<Circle />
						<h2>Send Us A Message</h2>
					</Social>
				</Hide>
				<Hide>
					<Social variants={titleAnim}>
						<Circle />
						<h2>Social Media</h2>
					</Social>
				</Hide>
				<Hide>
					<Social variants={titleAnim}>
						<Circle />
						<h2>Email us</h2>
					</Social>
				</Hide>
			</div>
		</ContactStyle>
	);
};
const ContactStyle = styled(motion.div)`
	padding: 5rem 10rem;
	color: #353535;
	min-height: 90vh;
	background: #ffffff;
	@media (max-width: 1300px) {
		padding: 2rem;
		font-size: 1rem;
		margin-top: 15h;
	}
`;
const Title = styled.div`
	margin-bottom: 4rem;
	color: #000000;
`;
const Hide = styled.div`
	overflow: hidden;
`;
const Circle = styled.div`
	width: 3rem;
	min-width: 40px;
	height: 3rem;
	border-radius: 50%;
	background: #353535;
`;
const Social = styled(motion.div)`
	display: flex;
	align-items: center;
	h2 {
		margin: 2rem;
	}
`;
export default ContactUs;
