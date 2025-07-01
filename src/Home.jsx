import React from "react";

// Example category and card data
const categories = [
	{
		name: "Accounting & Finance",
		icon: "src/assets/accounting.png",
		href: "#",
	},
	{
		name: "Customer Support",
		icon: "src/assets/support.png",
		href: "#",
	},
	{
		name: "Development & Engineering",
		icon: "src/assets/coding.png",
		href: "#",
	},
	{
		name: "HR & People Management",
		icon: "src/assets/network.png",
		href: "#",
	},
	{
		name: "Sales & Marketing",
		icon: "src/assets/sales.png",
		href: "#",
	},
];

const cardBanners = [
	{
		title: "Accounting & Finance",
		subtitle:
			"Automate your books, manage payroll, and gain real-time financial insights.",
		features: [
			"Automated invoicing",
			"Real-time dashboards",
			"Integrates with 100+ banks",
		],
		price: "Starting from ₹499/mo.",
		cta: "RENT NOW",
		img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80", // Dummy image
	},
	{
		title: "Customer Support",
		subtitle:
			"Delight your customers with fast, multi-channel support solutions.",
		features: [
			"Live chat & ticketing",
			"AI-powered helpdesk",
			"Analytics & reporting",
		],
		price: "Starting from ₹299/mo.",
		cta: "RENT NOW",
		img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", // Dummy image
	},
	{
		title: "Development & Engineering",
		subtitle:
			"Boost your workflow with top dev tools and seamless integrations.",
		features: ["Version control", "CI/CD pipelines", "Code collaboration"],
		price: "Starting from ₹599/mo.",
		cta: "RENT NOW",
		img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80", // Dummy image
	},
];

export default function Home() {
	return (
		<div className="flex flex-col items-center w-full">
			{/* Banner Area */}
			<div className="w-full min-h-[420px] md:min-h-[520px] flex items-center justify-center bg-gradient-to-r from-[#e3f1fa] via-[#f5fafd] to-[#d0e7f7]">
				<div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl mx-auto px-4 md:px-8">
					{/* Left: Text and Button */}
					<div className="flex-1 flex flex-col items-center md:items-start justify-center py-10 md:py-16">
						<h1 className="text-2xl md:text-3xl font-bold text-primary mb-3 text-center md:text-left max-w-xl">
							Get All SaaS Application At One Stop
						</h1>
						<p className="text-secondary mb-6 max-w-lg text-center md:text-left text-xs md:text-sm">
							Discover, compare, and access the best SaaS tools for your business
							needs—all in one place.
						</p>
						<div className="w-full flex justify-center md:justify-start">
							<button className="bg-primary text-accent px-6 py-2 rounded-lg font-semibold shadow hover:bg-primary-light transition text-base">
								Learn More
							</button>
						</div>
					</div>
					{/* Right: Banner Image */}
					<div className="flex-1 flex justify-center md:justify-end w-full mt-8 md:mt-0">
						<img
							src="src/assets/Banner_1.png"
							alt="Banner"
							className="w-full max-w-[320px] h-[180px] md:h-[260px] object-contain rounded-xl"
							style={{ background: "rgba(255,255,255,0.1)" }}
						/>
					</div>
				</div>
			</div>

			{/* Search Bar */}
			<div className="w-full flex justify-center -mt-8 md:-mt-12 z-10">
				<form className="w-11/12 max-w-lg">
					<div className="flex items-center bg-white rounded-xl border border-gray-200 shadow transition focus-within:shadow-lg focus-within:ring-2 focus-within:ring-primary">
						<input
							type="text"
							placeholder="Search products, categories, or content..."
							className="flex-grow px-4 py-2 rounded-xl outline-none bg-transparent text-xs md:text-sm transition"
						/>
						<button
							type="submit"
							className="p-2 text-primary bg-accent hover:bg-primary-light/10 rounded-xl transition"
							aria-label="Search"
						>
							{/* Magnifying glass SVG */}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-4 w-4"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
								/>
							</svg>
						</button>
					</div>
				</form>
			</div>

			{/* Popular Categories */}
			<div className="w-full max-w-3xl mt-8 px-4">
				<h2 className="text-base md:text-lg font-bold mb-3 text-secondary text-center">
					Popular Categories
				</h2>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 justify-items-center">
					{categories.map((cat) => (
						<div
							key={cat.name}
							className="flex flex-col items-center justify-center bg-background rounded-xl shadow hover:shadow-lg transition cursor-pointer border border-gray-100 p-3 w-full max-w-[110px] group"
						>
							<img
								src={cat.icon}
								alt={cat.name}
								className="w-8 h-8 mb-1 object-contain transition-transform group-hover:scale-110"
							/>
							<span className="text-[10px] font-semibold text-secondary text-center mb-1">
								{cat.name}
							</span>
						</div>
					))}
				</div>
			</div>

			{/* Card Banners - Horizontal Scrollable Style */}
			<div className="w-full max-w-4xl mt-8 px-2">
				<div className="flex space-x-4 overflow-x-auto pb-3 hide-scrollbar">
					{cardBanners.map((card, idx) => (
						<div
							key={idx}
							className="min-w-[240px] max-w-xs flex-shrink-0 rounded-2xl flex flex-col justify-between shadow-lg bg-gradient-to-br from-[#e3f1fa] to-[#7ec6f6] relative"
						>
							<div className="p-4 flex flex-col h-full">
								<h3 className="font-bold text-base text-primary mb-1">
									{card.title}
								</h3>
								<p className="text-main text-xs mb-2">{card.subtitle}</p>
								<ul className="mb-2 list-disc list-inside text-[11px] text-secondary space-y-1">
									{card.features.map((feature, i) => (
										<li key={i}>{feature}</li>
									))}
								</ul>
								<div className="font-bold text-primary mb-2 text-sm">
									{card.price}
								</div>
								<button className="bg-[#ff5c1a] text-white px-3 py-1 rounded-lg font-bold shadow hover:bg-[#ff7c3a] transition w-max text-xs">
									{card.cta}
								</button>
							</div>
							<img
								src={card.img}
								alt={card.title}
								className="absolute right-2 bottom-2 w-16 h-16 object-contain rounded-xl shadow-md"
							/>
						</div>
					))}
				</div>
			</div>

			<style>
				{`
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}
			</style>
		</div>
	);
}