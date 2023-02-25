import React from "react";
import { FaBars } from "react-icons/fa";
import logo from "./images/logo.svg";
import { useGlobalContext } from "./context";

function Navbar() {
	// деструктуризацией получаем нужные нам приколы из контекста
	const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

	// хендлер - при наведении мышкой на одну из ссылок нав-бара
	const displaySubmenu = (e) => {
		// получаем надпись
		const page = e.target.textContent;
		// получаем нужные координаты, чтобы потом по ним спозиционировать сабменю
		// ? честно говоря подробности позиционирования вплетены наполовину в css и обычное вычесление положения
		// ? элемента по координатам - так что я опущу эти детали
		const tempBtn = e.target.getBoundingClientRect();
		const center = (tempBtn.left + tempBtn.right) / 2;
		const bottom = tempBtn.bottom - 3;
		// отправляем полученные данные в нужный сетМетод
		openSubmenu(page, { center, bottom });
	};

	// если в навбаре мы проводим мышью по чему угодно кроме этих ссылок - закрываем тултип/сабменю
	const handleSubmenu = (e) => {
		if (!e.target.classList.contains("link-btn")) {
			closeSubmenu();
		}
	};
	// а так кроме всего прочего, средставми стилей на малых экранах появляется бургер с функционалом открыть/закрыть сайдбар
	return (
		<nav className="nav" onMouseOver={handleSubmenu}>
			<div className="nav-center">
				<div className="nav-header">
					<img src={logo} className="nav-logo" alt="aboba" />
					<button className="btn toggle-btn" onClick={openSidebar}>
						<FaBars />
					</button>
				</div>
				<ul className="nav-links">
					<li>
						<button className="link-btn" onMouseOver={displaySubmenu}>
							products
						</button>
					</li>
					<li>
						<button className="link-btn" onMouseOver={displaySubmenu}>
							developers
						</button>
					</li>
					<li>
						<button className="link-btn" onMouseOver={displaySubmenu}>
							company
						</button>
					</li>
				</ul>
				<div className="btn signin-btn">sign in</div>
			</div>
		</nav>
	);
}

export default Navbar;
