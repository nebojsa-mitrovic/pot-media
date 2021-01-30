/*
 * Main Javascript File
 */

// Displaying Homepage after 5 seconds
setTimeout(function loader() {
	document.querySelector("body").classList.add("loaded");
	$(".megaphone-img").fadeIn("slow");
}, 5000);

window.onload = function () {
	// AOS Init
	AOS.init();

	$(".megaphone-img").hide();

	// Cursor
	const $cursor = $(".cursor__ball--main"),
		$follow = $(".cursor__ball--follow"),
		$links = $("a");

	function moveCursor(e) {
		TweenLite.to($cursor, 0.3, {
			x: e.clientX,
			y: e.clientY,
		});
		TweenLite.to($follow, 0.5, {
			x: e.clientX,
			y: e.clientY,
		});
	}

	function hoverFunc(e) {
		TweenLite.to($cursor, 0.3, {
			opacity: 1,
			scale: 0,
		});
		TweenLite.to($follow, 0.3, {
			scale: 3,
		});
	}

	function unhoverFunc(e) {
		TweenLite.to($cursor, 0.3, {
			opacity: 1,
			scale: 1,
		});
		TweenLite.to($follow, 0.3, {
			scale: 1,
		});
	}

	$(window).on("mousemove", moveCursor);
	$links.on("hover", function () {
		hoverFunc, unhoverFunc;
	});

	// Menu Letter Animation
	const letterWrapClass = "letter-wrap";
	const letterWrapElements = document.getElementsByClassName(letterWrapClass);

	[...letterWrapElements].forEach((el) => {
		letterWrap(el, letterWrapClass);
		letterAnimation(el, letterWrapClass);
	});

	function letterWrap(el, cls) {
		const words = el.textContent.split(" ");
		const letters = [];

		cls = cls || "letter-wrap";

		words.forEach((word) => {
			let html = "";
			for (var letter in word) {
				html += `
          <span class="${cls}__char">
            <span class="${cls}__char-inner" data-letter="${word[letter]}">
              ${word[letter]}
            </span>
          </span>
        `;
			}

			let wrappedWords = `<span class="${cls}__word">${html}</span>`;
			letters.push(wrappedWords);
		});

		return (el.innerHTML = letters.join(" "));
	}

	function letterAnimation(el, cls) {
		var tl = new TimelineMax({ paused: true });
		const characters = el.querySelectorAll(`.${cls}__char-inner`);
		const duration = el.hasAttribute("data-duration") ? el.dataset.duration : 0.3;
		const stagger = el.hasAttribute("data-stagger") ? el.dataset.stagger : 0.03;

		el.animation = tl.staggerTo(
			characters,
			duration,
			{
				y: "-100%",
				ease: Power4.easeOut,
			},
			stagger
		);

		el.addEventListener("mouseenter", (event) => event.currentTarget.animation.play());
		el.addEventListener("mouseout", (event) => el.animation.reverse());
	}

	// Background Color Change
	const colors = ["primary-color loaded", "secondary-color loaded", "tertiary-color loaded", "quaternary-color loaded", "quinary-color loaded"];
	const sections = [...document.getElementsByClassName("section")];

	window.addEventListener("scroll", function () {
		const scrollFromTop = window.pageYOffset;

		for (let i = 0; sections.length > i; i++) {
			if (scrollFromTop <= sections[i].offsetTop) {
				document.body.className = colors[i];
				break;
			}
		}
	});

	// Contact page
	$(".contact-form__text-input").on("keyup", function () {
		if ($(this).val()) {
			$(this).addClass("has-value");
		} else {
			$(this).removeClass("has-value");
		}
	});
};
