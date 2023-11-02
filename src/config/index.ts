export default {
	site: {
		branding: {
			name: "Evans Blog",
			description: "Explore the latest trends and techniques in Networking, Linux, and Web development.",
			icon: "logo",
			image: "/images/avatar.jpg",
		},
		twitter: "evanator77",
		copyright: `© ${new Date().getFullYear()} Wanga Evans.`,
		links: [
			{
				title: "Home",
				href: "/",
				priority: 1.0,
			},

			{
				title: "About",
				href: "/about",
				priority: 0.8,
			},
			{
				title: "Categories",
				href: "/categories",
				priority: 0.8,

			},
			{
				title: "Contact",
				href: "/contact",
				priority: 0.8,

			},
			
		],
	},
};
