//Context used for the gamesIntroductions section

import React, { createContext, useState, useContext } from "react";

const SelectGameContext = createContext();

export function useSelectGame() {
	return useContext(SelectGameContext);
}

export function SelectGameProvider({ children }) {
	const [gameInfo, setGameInfo] = useState([
		{
			name: "Lobotomy Corporation",
			intro: "Welcome, Manager.",
			description:
				"Lobotomy Corporation's Manager. This is your role. To complete your tasks, gather energy, reach deeper to other departments, meet all Sephìrahs, find out what happened, what exactly you're doing, why you're doing and for what purpose.",
			image:
				"https://www.dropbox.com/scl/fi/c1wpmd5kz5cpfcxknco8c/lobcorplogo.png?rlkey=dojqm2z81yrtxxwjkrxduodxy&raw=1",
			modalImage:
				"https://www.dropbox.com/scl/fi/wo19ohjec9mfo7wtveiua/image.png?rlkey=azhhpjlj7gahlq9h7xuyx4scv&raw=1",
			bg0: "green",
			bg1: "red",
			bg2: "yellow",
			platforms: [
				{
					name: "Steam",
					icon: "https://www.dropbox.com/scl/fi/tw12259mv9iejvcxxfoxb/Steam_icon_logo.svg?rlkey=pw757heqm4bwrm9mx87w9a5rb&raw=1",
					link: "https://store.steampowered.com/app/568220/Lobotomy_Corporation__Monster_Management_Simulation/",
				},
			],
		},
		{
			name: "Library of Ruina",
			intro: "May you find your book in this place.",
			description:
				"A Librarian's work is that of receiving guests and sorting books. Entertain guests as they come to seek and, inevitably, contribute. To reach the one perfect book. Meet the Patron Librarians, find out more about The City, its inhabitants, culture and organizations.",
			image:
				"https://www.dropbox.com/scl/fi/qq69b33eafpjswqxm1mqj/2e8d9bb041488a7790c15e08af646ef19eb62cbc.png?rlkey=muoiixva1rdhnjsrbku47ouhs&raw=1",
			modalImage:
				"https://www.dropbox.com/scl/fi/pm6h9v4n8l55c5pbvgj2r/armnf.webp?rlkey=1gj89xc674hlancjhnio8ap23&raw=1",
			bg0: "cyan",
			bg1: "cyan",
			bg2: "yellow",
			platforms: [
				{
					name: "Steam",
					icon: "https://www.dropbox.com/scl/fi/tw12259mv9iejvcxxfoxb/Steam_icon_logo.svg?rlkey=pw757heqm4bwrm9mx87w9a5rb&raw=1",
					link: "https://store.steampowered.com/app/1256670/Library_Of_Ruina/",
				},
				{
					name: "PSStore",
					icon: "https://www.dropbox.com/scl/fi/aqf28jk4mpeluoga6bwab/Ps_store_logo.png?rlkey=xnua5w8gt6c80zl66xskdrper&raw=1",
					link: "https://store.playstation.com/", //Placeholder while the game doesn't launch
				},
				{
					name: "NintendoStore",
					icon: "https://www.dropbox.com/scl/fi/gh95t0k87qcp60uqsenvi/Nintendo_Switch_logo.svg?rlkey=ounos2dhyuu8swegxqhylczvx&raw=1",
					link: "https://www.nintendo.com/", //Placeholder while the game doesn't launch
				},
			],
		},
		{
			name: "Limbus Company",
			intro: "All Hope Abandon Ye Who Enter Here.",
			description:
				"Not knowing what or who you are, lead a group of 12 sinners through the layers of hell that are the journeys to reach the Golden Boughs. Retrive them for a goal still unknown. Get to know all those around you, their stories and how deep this world truly goes, from the relations, companies, interests and intriguing events consistently taking place.",
			image:
				"https://www.dropbox.com/scl/fi/fujwtbuwjurjtd25jdyax/E52WpHDVcAcVlZ.jpg?rlkey=gaknqbymas7z27no7fay2plto&raw=1",
			modalImage:
				"https://www.dropbox.com/scl/fi/cm0izmj9dfd5f03etd2n0/maxresdefault.webp?rlkey=ywaroxl2g3cxqd0zpfgiromoc&raw=1",
			bg0: "gold", //or red or orange
			bg1: "yellow",
			bg2: "red",
			platforms: [
				{
					name: "Steam",
					icon: "https://www.dropbox.com/scl/fi/tw12259mv9iejvcxxfoxb/Steam_icon_logo.svg?rlkey=pw757heqm4bwrm9mx87w9a5rb&raw=1",
					link: "https://store.steampowered.com/app/1973530/Limbus_Company/",
				},
				{
					name: "Android",
					icon: "https://www.dropbox.com/scl/fi/gnbsbo0mmguw04yul3qex/images-1.webp?rlkey=h3oy2fp1mes2ij9wjm2gqbwu9&raw=1",
					link: "https://play.google.com/store/apps/details?id=com.ProjectMoon.LimbusCompany&hl=en_US",
				},
				{
					name: "iOS",
					icon: "https://www.dropbox.com/scl/fi/z8eb7rxvu6uuwlyxrwy3p/8e146e9e28baeb9b59c6004ed7b1343b.png?rlkey=ucpdwkguxfw52l2r9loq6cdkt&raw=1",
					link: "https://apps.apple.com/us/app/limbus-company/id6444112366",
				},
			],
		},
	]);

	return (
		<SelectGameContext.Provider value={gameInfo}>
			{children}
		</SelectGameContext.Provider>
	);
}
