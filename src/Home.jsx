import React from "react";
import accountingIcon from "./assets/accounting.png";
import supportIcon from "./assets/support.png";
import codingIcon from "./assets/coding.png";
import networkIcon from "./assets/network.png";
import salesIcon from "./assets/sales.png";
import Banner from "./assets/Banner_1.png"; 

// Example category and card data
const categories = [
	{
		name: "Accounting & Finance",
		icon: accountingIcon,
		href: "#",
	},
	{
		name: "Customer Support",
		icon: supportIcon,
		href: "#",
	},
	{
		name: "Development & Engineering",
		icon: codingIcon,
		href: "#",
	},
	{
		name: "HR & People Management",
		icon: networkIcon,
		href: "#",
	},
	{
		name: "Sales & Marketing",
		icon: salesIcon,
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
		<div className="flex flex-col items-center w-full overflow-x-hidden">
			{/* Banner Area */}
			<div className="w-screen min-h-[340px] md:min-h-[500px] flex items-center justify-center bg-gradient-to-r from-[#e3f1fa] via-[#f5fafd] to-[#d0e7f7] overflow-x-hidden">
				<div className="flex flex-col-reverse md:flex-row items-center justify-between w-full md:max-w-5xl mx-auto
                  px-2 sm:px-4 md:px-0 gap-6 md:gap-0 py-8 md:py-0">
					{/* Left: Text and Button */}
					<div className="w-full md:flex-1 flex flex-col items-center md:items-start justify-center">
						<h1 className="text-2xl md:text-5xl font-bold text-primary mb-3 text-center md:text-left max-w-xl">
							Get All SaaS Application At One Stop
						</h1>
						<p className="text-secondary mb-6 max-w-lg text-center md:text-left text-xs md:text-lg">
							Discover, compare, and access the best SaaS tools for your business
							needs—all in one place.
						</p>
						<div className="learn-more-btn w-full flex justify-center md:justify-start">
							<button className="bg-primary text-accent rounded-lg font-semibold shadow hover:bg-primary-light transition text-base">
								Learn More
							</button>
						</div>
					</div>
					{/* Right: Banner Image */}
					<div className="w-full md:flex-1 flex justify-center md:justify-end">
						<img
							src={Banner}
							alt="Banner"
							className="w-4/5 max-w-[320px] md:max-w-[500px] h-[140px] md:h-[360px] object-contain rounded-xl"
							style={{ background: "rgba(255,255,255,0.1)" }}
						/>
					</div>
				</div>
			</div>
			<div className="w-full flex justify-center -mt-8 md:-mt-12 z-10">
				<form className="w-full max-w-full md:max-w-2xl px-2">
					<div className="flex items-center bg-white rounded-2xl border border-gray-200 shadow transition focus-within:shadow-lg focus-within:ring-2 focus-within:ring-primary px-2 py-2">
						<input
							type="text"
							placeholder="Search products, categories, or content..."
							className="flex-grow min-w-0 px-4 py-3 rounded-2xl outline-none bg-transparent text-sm md:text-base transition"
						/>
						<button
							type="submit"
							className="flex-shrink-0 p-3 text-primary bg-accent hover:bg-primary-light/10 rounded-2xl transition"
							aria-label="Search"
						>
							{/* Magnifying glass SVG */}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
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
			<div className="w-full max-w-full md:max-w-4xl mt-10 px-2 sm:px-6">
				<h2 className="text-lg md:text-2xl font-bold mb-5 text-secondary text-center">
					Popular Categories
				</h2>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center">
					{categories.map((cat) => (
						<div
							key={cat.name}
							className="flex flex-col items-center justify-center bg-background rounded-2xl shadow hover:shadow-lg transition cursor-pointer border border-gray-100 p-5 w-full max-w-[130px] group"
						>
							<img
								src={cat.icon}
								alt={cat.name}
								className="w-12 h-12 mb-2 object-contain transition-transform group-hover:scale-110"
							/>
							<span className="text-xs md:text-sm font-semibold text-secondary text-center mb-1">
								{cat.name}
							</span>
						</div>
					))}
				</div>
			</div>

			{/* Card Banners - Horizontal Scrollable Style */}
			<div className="w-full max-w-full md:max-w-7xl mt-12 px-2 sm:px-8">
				<div className="flex space-x-6 overflow-x-auto pb-4 hide-scrollbar">
					{cardBanners.map((card, idx) => (
						<div
							key={idx}
							className="min-w-[280px] max-w-sm flex-shrink-0 rounded-3xl flex flex-col justify-between shadow-xl bg-gradient-to-br from-[#e3f1fa] to-[#7ec6f6] relative"
						>
							<div className="p-6 flex flex-col h-full">
								<h3 className="font-bold text-lg text-primary mb-2">
									{card.title}
								</h3>
								<p className="text-main text-sm mb-3">{card.subtitle}</p>
								<ul className="mb-3 list-disc list-inside text-[13px] text-secondary space-y-1">
									{card.features.map((feature, i) => (
										<li key={i}>{feature}</li>
									))}
								</ul>
								<div className="font-bold text-primary mb-3 text-base">
									{card.price}
								</div>
								<button className="bg-[#ff5c1a] text-white px-4 py-2 rounded-xl font-bold shadow hover:bg-[#ff7c3a] transition w-max text-sm">
									{card.cta}
								</button>
							</div>
							<img
								src={card.img}
								alt={card.title}
								className="absolute right-4 bottom-4 w-20 h-20 object-contain rounded-xl shadow-md"
							/>
						</div>
					))}
				</div>
				<style>{`
                    .hide-scrollbar::-webkit-scrollbar { display: none; }
                    .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                `}</style>
			</div>
		</div>
	);
}