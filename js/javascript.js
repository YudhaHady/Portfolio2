const plate = document.querySelector(".header .nav-bar .nav-list .plate");
const ul = document.querySelector(".header .nav-bar .nav-list ul");
const header = document.querySelector(".header.container");
const navBar = document.querySelector(".nav-bar");

plate.addEventListener("click", () => {
	plate.classList.toggle("active");
	ul.classList.toggle("active");
});

document.addEventListener("scroll", () => {
	header.classList.toggle("sticky", window.scrollY > 30);
	navBar.classList.toggle("sticky", window.scrollY > 30);
});

// document.addEventListener("scroll", () => {
// 	let scroll_position = window.scrollY;
// 	if (scroll_position > 50) {
// 		header.style.backgroundColor = "#29323c";
// 	} else {
// 		header.style.backgroundColor = "transparent";
// 	}
// });

// Scroll reveal
const sr = ScrollReveal({
	origin: "top",
	distance: "80px",
	duration: "2000",
	delay: "400",
	// reset: true;
});

sr.reveal(".section-title", { delay: 1, duration: 1000, origin: "left" });

sr.reveal(".interest-item", { interval: 200, delay: 200, origin: "top" });
sr.reveal(".contact-item", { interval: 200, delay: 200, origin: "top" });

sr.reveal(".interest-top p, .project-img", { delay: 200, duration: 1500, origin: "right" });
sr.reveal(".col-right h2, .col-right p", { delay: 100, duration: 1000, origin: "right" });
sr.reveal(".about-img", { delay: 100, duration: 1000, origin: "right" });

sr.reveal(".btn", { delay: 100, duration: 1000, origin: "left" });
sr.reveal(".project-info", { delay: 100, duration: 1000, origin: "left" });
sr.reveal("", { interval: 200, delay: 200, origin: "right" });
