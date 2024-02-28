//Context used for the cityIntroduction section

import React, { createContext, useState, useContext } from "react";

const CityInfoContext = createContext();

export function useCityInfo() {
	return useContext(CityInfoContext);
}

export function CityInfoProvider({ children }) {
	const [cityInfo, setCityInfo] = useState([
		{
			name: "The City", //Explain about the Head, Districts, Nests, Backstreers, mention Wings and Fingers
			image:
				"https://www.dropbox.com/scl/fi/jf3g9fxtp8pdxuilgf1c2/City_map.webp?rlkey=c7768cdjdu4xrsbgdop9kr0kj&raw=1",
			d1: "The City is a large, densely populated urban sprawl divided in 26 Districts; District 26 is not visible on any maps of the city. The Districts themselves are divided in a Nest run by a Wing, where the middle-high class (higher-grade Fixers, Wing employees, etc.) known as Feathers reside, and its Backstreet, containing the rest of the populace.",
			d2: "It also is surrounded by a region of lawless squalor known as The Outskirts, which intersect with The Black Forest at the city's southwest region. Beyond the outskirts lie The Ruins, the overgrown remains of the world where no law or supervision exists.",
			d3: "The City is governed by the tri-factor that are A. Corp., B Corp., and C Corp., Wings which are primarily lead by the Head, the Eye and the Claw, respectively.",
		},
		{
			name: "Wings", //Explain about them and refer to the scheme of work in the City
			image:
				"https://www.dropbox.com/scl/fi/y73enh6ai3anvgzpxt4io/1000.png?rlkey=ei6oeibslpq5v3yr67n4yy90q&raw=1",
			d1: "The Wings, also known as the Wings of the World, are a group of the 26 largest, most powerful conglomerates in the City. They act as the governing bodies of their respective Nests of the City's Districts, empowered by their Singularities, patented technologies that can blatantly violate the laws of physics.",
			d2: "The Wings are directly ruled by the Head, the Eye, and the Claw, the enigmatic supreme authority of the City.",
			d3: "Each Wing has a letter of the alphabet designated to them. Wings are usually just reffered by their acronym letter, such as: 'L. Corp.' reffering to 'Lobotomy Corporation'.",
			d4: " However, it is worth noting that, when a Wing falls, another will take its place sooner or later, also inheriting its letter, but not the word.",
		},
		{
			name: "Singularities", //Explain about them and how it links to Wings
			image:
				"https://www.dropbox.com/scl/fi/4ngqgib1glwkzw3zgma1k/image.png?rlkey=6oyzhhebz0hzr1bhj6dpm4qkh&raw=1",
			d1: "A Singularity is the unique, fantastical technology a Wing possesses which seemingly defies all known laws of physics. The corporation exploits its singularity in order to conduct business.",
			//d2: "Prided as the precious Egg (알, al) to be protected by the Wing's Nest and 'Feathers', the Singularities possess absurd capabilities and often appear to break conventional laws of physics to consumers, such as providing trains capable of teleportation and time travel to produce time loops.",
			d3: "Every Wing personally owns at least one Singularity, as patenting such technology through approval from the Head is absolutely necessary for becoming a Wing in the first place. Wings rarely use only one Singularity, often possessing multiple patents in conjunction to their main Singularity.",
			d4: "When a Wing is destroyed for whatever reason, the patent to their Singularity becomes public domain and is free to be bought up by any other party, that is assuming the Singularity in question is even able to be reacquired and replicable in the first place.",
		},
		{
			name: "Lobotomy Corporation", //Explain its normal goal and about Abnormalities and how it links to Singularities
			image:
				"https://www.dropbox.com/scl/fi/neus7nfytb7hgd28ayenr/97af49c1dbfb37ac7fafd13e60fcc8ff6778e9ae.png?rlkey=xakipuxk999a8zw90705qktvx&raw=1",
			d1: "FACE THE FEAR, BUILD THE FUTURE",
			d2: "Lobotomy Corporation is a Wing residing in the 12th District. Its main job is to be an energy producer. Marketing itself as an eco-friendly producer coming from the means to which the energy was produced and harvasted, all made possible by their Singularity.",
			d3: "Unravel what their intentions are, how it is that they are able to produce energy, and what the true nature of their Singularity.",
			d4: "Find out what impacts Lobotomy Corporation has on the City and its people.",
		},
		{
			name: "Abnormalities", //Explain how powerful and versatile they can be with the right researchers
			image:
				"https://www.dropbox.com/scl/fi/q8ofvwe5queqhk9wv2253/abnos.png?rlkey=1yhhu2yxdb87i889jrrnr1ule&raw=1",
			d1: "Abnormalities are, as their name suggests, a type of abnormal entity that can be used to generate power. Each is given a classification via letters and numbers, as well as a nickname based on their appearances and abilities.",
			d2: "Lobotomy Corporation possesses a variety of Abnormalities, using them for study, power generation, and the harvest of E.G.O. gear. Each is ranked on a threat scale, and the ways they can harm humans are summarized into color-based types.",
			d3: "Before Lobotomy Corporation discovered Cogito and began mass-producing Abnormalities, these kinds of entities were one of the numerous types of 'monsters' native to the Outskirts and Ruins: the wastelands beyond the safety of the City.",
			//d4: "",
		},
		{
			name: "Fixers", //Explain about Syndicates, Associations, Offices as well as their grades
			image:
				"https://www.dropbox.com/scl/fi/jafrwogtnhhgxdaj43ozh/latest.png?rlkey=ergrwa6t2x4eo4jpl4ngfte3u&raw=1",
			d1: "Fixers are hired hands who perform a multitude of tasks ranging from dangerous activities like combat, assassination, or expeditions to the Ruins, to less directly violent tasks like negotiating contracts or gathering intelligence.",
			d2: "Hierarchy is built on meritocracy, where more capable Fixers are granted increased work options, pay, and recognition. All Fixers and Offices are assigned a numerical grade ranging from 9 to 1 by the Hana Association, where Grade 9 is the lowest and Grade 1 is the highest.",
			d3: "Most Fixers belong to an Office, which is a formal business entity that handles requests for multiple Fixers under its ranks. ",
			d4: "The Twelve Associations, which are major Fixer organizations that manage and regulate all their lines of business. The Hana Association leads the Associations and sets the model for how a Fixer should act, as well as handling the licensing and grading of Fixers, Offices, and requests.",
		},
		{
			name: "Colors", //Explain that they are Fixers but on a whole another level, the strongest that there are
			image:
				"https://www.dropbox.com/scl/fi/ktcf51gef4n27ctq3vpvi/410.png?rlkey=ohszmi5kmbkxnttrdhbsqkshp&raw=1",
			d1: "Rarely, there are Grade 1 Fixers who greatly surpass others in some way, whether it is strength, intellect, or some other form of prowess. In such cases, the Fixer may be assigned a special title by the Hana Association to distinguish them as the optimal choices for felling Stars of the City, serving as a model for the ideal Fixer.",
			d2: "The Color Fixers are the only Fixers who truly have the freedom that Fixers wish for, being able to act more or less independently and with more of a choice in what they choose to accomplish. Because of this, every Fixer who dreams of freedom wishes to attain the rank of a Color, though there are only a select few who will ever reach such a height.",
			d3: " Still, not every Fixer may be happy to be a Color, but if they qualify, they do not have a say. The Hana Association will forcibly give them the title with no way to refuse. And even with their greater freedom, they still must work within the confines of the City's status quo, or face being marked for elimination.",
		},
	]);

	return (
		<CityInfoContext.Provider value={cityInfo}>
			{children}
		</CityInfoContext.Provider>
	);
}
