//Context used for the charactersIntroductions section

import React, { createContext, useState, useContext } from "react";

const CharacterInfoContext = createContext();

export function useCharacterInfo() {
	return useContext(CharacterInfoContext);
}

export function CharacterInfoProvider({ children }) {
	const [characterInfo, setCharacterInfo] = useState([
		{
			name: "Angela",
			intro:
				"I am Angela, an AI. I am your assistant, your secretary, and someone to whom you can talk. I hope I can help make your time here a little more comfortable.",
			description:
				"At the start, Angela's personality is happy and upbeat, saying things like 'Good luck!' and giving the Player compliments such as 'it means that you are doing good work'. She still maintains this demeanor even under grotesque circumstances, such as when she pours a bottle of champagne to celebrate that the Player has killed an employee for the first time.",

			image:
				"https://static.wikia.nocookie.net/lobotomycorp/images/1/11/AngelaFullBody.png",
			smallImage:
				"https://static.wikia.nocookie.net/lobotomycorp/images/6/61/Angela_PortraitV01.png",
			bg: "#ADD8E6",
		},
		{
			name: "Malkuth",
			department: " - Control Team",
			intro:
				"I will try my best to help you to enhance the performance of this facility.",
			description:
				"Malkuth is cheerful, enthusiastic and somewhat impatient, with a clumsy demeanor. She maintains her positive personality even when discussing concerning topics with X and the other Sephiroth. During work, she always tries to bring out the best of herself, giving her all so as to not disappoint Angela or the Manager, as well explaining the rules in understandable but emphatic terms. Malkuth might also consider herself slow and forgetful, the reason for always having a 'to-do' list with her.",
			image:
				"https://static.wikia.nocookie.net/lobotomycorp/images/c/c0/MalkuthFullBody.png",
			smallImage:
				"https://static.wikia.nocookie.net/lobotomycorp/images/5/5e/Malkuth_PortraitV01.png",
			bg: "rgb(255, 225, 150)",
		},
		{
			name: "Yesod",
			department: " - Information Team",

			intro:
				"Manager, you are the head of this corporation. You are supposed to set an example for others, but that outfit would warrant at least 10 penalty points in our department.",
			description:
				"Yesod's personality is strict, uncaring and logical, but sometimes, he limits himself when he 'overacts'. He examines each situation meticulously and logically, believing that emotions and trust for his employees are unnecessary. Still, he tries to keep casualties minimized through prevention. Description of him by other workers, like 'devoid of emotions, cold-blooded...' are taken as compliments by him, because he believes that personally knowing someone or feeling emphatic can make his own employees exploit him.",
			image:
				"https://static.wikia.nocookie.net/lobotomycorp/images/4/4d/YesodFullBody.png",
			smallImage:
				"https://static.wikia.nocookie.net/lobotomycorp/images/4/41/Yesod_PortraitV01.png",
			bg: "purple",
		},
		{
			name: "Hod",
			department: " - Training Team",

			intro:
				"Umm, I’m not very skillful in many areas, but I’ll try not to be a hindrance, at least...!",
			description:
				"Hod seems endlessly helpful and cheerful. She appears to care deeply about her employees, even offering counseling for them to keep them sane. She is somewhat unsure of herself and responds well to validation from others. She wants to be acknowledged as a good Sephirah by her employees and the other Sephirah.",
			image:
				"https://static.wikia.nocookie.net/lobotomycorp/images/2/2a/Hod_fullbody.png",
			smallImage:
				"https://static.wikia.nocookie.net/lobotomycorp/images/3/3b/Hod_PortraitV01.png",
			bg: "orange",
		},
		{
			name: "Netzach",
			department: " - Safety Team",

			intro: "That’s right, I’ll be level with you. I don’t like my job.",
			description:
				"Netzach strongly dislikes his job at the Corporation. He feels helpless and responsible for the death of his employees. He is pessimistic and has no hope for the future. Netzach slacks on his work while he drinks beer and gets high on Enkephalin to escape from reality. He wishes he would be scrapped or replaced.",

			image:
				"https://static.wikia.nocookie.net/lobotomycorp/images/7/74/NetzachFullBody.png",
			smallImage:
				"https://static.wikia.nocookie.net/lobotomycorp/images/9/9b/Netzach_PortraitV01.png",
			bg: "green",
		},
		{
			name: "Tiphereth A",
			department: " - Central Command Team",

			intro: "Of course we are, isn’t it obvious? We’re twins.",
			description:
				"Tiphereth A is blunt and not afraid to speak her mind. She has high expectations for the manager and often criticizes the other Sephirot. She tends to expect bad results.",

			image:
				"https://static.wikia.nocookie.net/lobotomycorp/images/8/83/Tiphereth_fullbody_A.png",
			smallImage:
				"https://static.wikia.nocookie.net/lobotomycorp/images/e/e2/TiperethPortraitFemale.png",
			bg: "gold",
		},
		{
			name: "Tiphereth B",
			department: " - Central Command Team",

			intro: "Of course we are, isn’t it obvious? We’re twins.",
			description:
				"Tiphereth B is more soft-spoken and kind compared to his sister, encouraging the manager and the other Sephirot instead of insulting them. He is optimistic and hopes things will get better in the facility.",

			image:
				"https://static.wikia.nocookie.net/lobotomycorp/images/6/66/Tiphereth_fullbody_B.png",
			smallImage:
				"https://static.wikia.nocookie.net/lobotomycorp/images/1/10/TiperethPortraitMale.png",
			bg: "gold",
		},
		{
			name: "Gebura",
			department: " - Disciplinary Team",

			intro:
				"Ever heard of the saying, 'silence gives consent'? Consent enough for even hot lead to be embedded in your skull?",
			description:
				"Gebura has a tough and serious personality, considered more strict, aggressive or rude to most employees, even the Manager. She enforces the rules of the facility without mercy, having a great despise against cowards, employees who feel pity, and those who fear death. Along with that, she has the same disposition with Abnormalities, having a desire to make them suffer and never going 'soft' against them, as she knows the true nature of Abnormalities.",

			image:
				"https://static.wikia.nocookie.net/lobotomycorp/images/4/4b/GeburaFullBody.png",
			smallImage:
				"https://static.wikia.nocookie.net/lobotomycorp/images/c/c4/Gebura_Portrait.png",
			bg: "red",
		},
		{
			name: "Chesed",
			department: " - Welfare Team",

			intro:
				"Ah, that’s much better... I just can’t start my day without a fresh cup of coffee in the morning~",
			description:
				"Chesed is sleepy and enjoys coffee, despite the lack of a need to sleep. He is very easygoing, and lax with the members of his team, finding pride in the fact that his team has the best approval rating. Despite this, he has a rather cynical attitude, seeming to have come to terms with their eventual deaths due to being used by Angela. Previously, he was incredibly passionate and motivated, and believes that his past self would be ashamed of his current self. Chesed seeks to make members of his team comfortable before inevitable death.",

			image:
				"https://static.wikia.nocookie.net/lobotomycorp/images/d/dc/ChesedFull.png",
			smallImage:
				"https://static.wikia.nocookie.net/lobotomycorp/images/d/df/Chesed_Portrait.png",
			bg: "blue",
		},
		{
			name: "Binah",
			department: " - Extraction Team",

			intro:
				"Don't ask for my name. 'Binah' isn't the name of a person. It's a sad name of the place where one finds many graves.",
			description:
				"Binah has a somber and sadistic personality, showing no empathy with her lack of emotions and seeing herself as someone detached from humanity. She enjoys taunting with a condescending expression, adores pain and suffering as her source of satisfaction, and marks that what she does is only business, but all in a calm and eerie speech.",

			image:
				"https://static.wikia.nocookie.net/lobotomycorp/images/1/17/BinahFull.png",
			smallImage:
				"https://static.wikia.nocookie.net/lobotomycorp/images/6/6d/Binah_Portrait.png",
			bg: "#463500",
		},
		{
			name: "Hokma",
			department: " - Record Team",

			intro:
				"Time is like a scythe; it relentlessly attempts to trim, divide, and cleave in twain the clasped-together hands of those you love.",
			description:
				"Hokma is a collected person with a solemn and prudent personality. He shows a clear knowledge of time and the cycles, as well how time affect lives in many ways. Hokma shows care for A, explaining to him the work of time inside the facility while showing him that he wants to aid him while still trying to reach his goal. He is shown indifferent about the lives of others as he knows the regrets, the suffering and the fear, that inside there, are meaningless.",

			image:
				"https://static.wikia.nocookie.net/lobotomycorp/images/f/ff/HokmaFullBody.png",
			smallImage:
				"https://static.wikia.nocookie.net/lobotomycorp/images/b/bc/Hokma_Portrait.png",
			bg: "gray",
		},
	]);

	return (
		<CharacterInfoContext.Provider value={characterInfo}>
			{children}
		</CharacterInfoContext.Provider>
	);
}
