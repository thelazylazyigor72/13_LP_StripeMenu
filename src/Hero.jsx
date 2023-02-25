import React from "react";
import phoneImg from "./images/phone.svg";
import { useGlobalContext } from "./context";

function Hero() {
	const { closeSubmenu } = useGlobalContext();
	// если наводимся на херо - закрываем тултип/сабменю
	return (
		<section className="hero" onMouseOver={closeSubmenu}>
			<div className="hero-center">
				<article className="hero-info">
					<h1>Lorem ipsum dolor sit.</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
						harum hic impedit deleniti eos atque ex sapiente molestiae? Optio,
						dolorem.
					</p>
					<button className="btn">starrt now</button>
				</article>
				<article className="hero-images">
					<img src={phoneImg} className="phone-img" alt="phone" />
				</article>
			</div>
		</section>
	);
}

export default Hero;
