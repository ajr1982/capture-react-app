export const pageAnimation = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,

		transition: {
			duration: 0.2,
			when: "beforeChildren",
			staggerChildren: 0.12,
		},
	},
	exit: {
		opacity: 0,
		transition: {
			duration: 0.75,
		},
	},
};

export const titleAnim = {
	hidden: { y: 200 },
	show: { y: 0, transition: { duration: 0.75, ease: "easeOut" } },
};
export const fade = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { duration: 0.5, ease: "easeOut" },
	},
};
export const photoAnim = {
	hidden: { scale: 1.3, opacity: 0 },
	show: {
		scale: 1,
		opacity: 1,
		transition: { duration: 0.8, ease: "easeOut" },
	},
};
export const lineAnim = {
	hidden: { width: "0%" },
	show: { width: "100%", transition: { duration: 1 } },
};
export const slider = {
	hidden: { x: "-130%", skew: "45deg" },
	show: {
		x: "160%",
		skew: "-45deg",
		transition: { duration: 1, ease: "easeOut" },
	},
};
