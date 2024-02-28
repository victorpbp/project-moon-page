//Context used for the faq section

import React, { createContext, useState, useContext } from "react";

const FaqInfoContext = createContext();

export function useFaqInfo() {
	return useContext(FaqInfoContext);
}

export function FaqInfoProvider({ children }) {
	const [faqInfo, setFaqInfo] = useState([
		{
			name: "What order and is it necessary?",
			d1: "Lobotomy Corporation, Library of Ruina, Limbus Company.",
			d2: "Lobotomy's ending is a true centerpiece for both Library and Limbus.",
			d3: "Library's ending comes up after the events of Canto 4 in Limbus.",
			d4: "The recommended experience is to play each one in order, but, technically, you could play Lobotomy Corporation, then, Library of Ruina and Limbus but only play the story of Limbus up to where Intervallo 2 - S.E.A. - happens, then finish Library and continue Limbus.",
		},
		{
			name: "How does one avoid spoilers?",
			d1: "Funnily enough, try your best not to look up things regarding the game.",
			d2: "Many times the spoilers will come from recommended videos, posts or, if on fandom, from the tabs people most visit on the right side of the screen.",
			d3: "Try your best to look up resources that are careful on Spoiler Tagging, such as Guides on Steam and whatnot.",
			d4: "In case you do look it up on other platforms, make sure to do so on Incognito mode in order for the platform not to recommend you similar topics later.",
		},
		{
			name: "What is Lobotomy Corporation?",
			d1: "Lobotomy Corporation is a game where you are the manager of a company that deals with abnormalities, a myriad of skills will be tested during your stay.",
			d2: "Attention, focus, macro and micro management, assignments and more will be at the center of your experience.",
			d3: "This game can be really challenging, but we trust your caution and perseverance, manager.",
		},
		{
			name: "What is Library of Ruina?",
			d1: "Library of Ruina is a deckbuilding battle game, where you control the different floors and their librarians, 'receptioning' guests and freeing other librarians from books.",
			d2: "Ability to realize what all cards and passives do and how they might interact with each other is key.",
			d3: "This game, again, can be quite challenging, but we trust your decision making and reading, librarian.",
		},
		{
			name: "What is Limbus Company?",
			d1: "Limbus Company is a gacha dungeon crawler where you control a subset of your 12 sinners, each with their identities and E.G.O.",
			d2: "Noting weaknesses, strenghts and acting carefully with your resources between the many sinners to win battles will be your biggest challenge and reward.",
			d3: "This isn't surprising but, this game can be hard at times, but, as you should know by now... we trust your diligence and persistence, Dante.",
		},
		//Question 6 lies within Faq.js. It's there due to its special qualities such as having Bold and Links
	]);

	return (
		<FaqInfoContext.Provider value={faqInfo}>
			{children}
		</FaqInfoContext.Provider>
	);
}
