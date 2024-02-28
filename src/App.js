import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import { SelectGameProvider } from "./context/SelectGameContext";
import { CharacterInfoProvider } from "./context/CharacterInfoContext";
import { CityInfoProvider } from "./context/CityInfoContext";
import { FaqInfoProvider } from "./context/FaqInfoContext";
import GamesIntroductions from "./components/gamesIntroductions/GamesIntroductions";
import CharactersIntroductions from "./components/charactersIntroductions/CharactersIntroductions";
import CityIntroduction from "./components/cityIntroduction/CityIntroduction";
import Faq from "./components/faq/Faq";

export default function App() {
	return (
		<ChakraProvider>
			<SelectGameProvider>
				<CharacterInfoProvider>
					<CityInfoProvider>
						<FaqInfoProvider>
							<Header />
							<GamesIntroductions />
							<CityIntroduction />
							<CharactersIntroductions />
							<Faq />
							<Footer />
						</FaqInfoProvider>
					</CityInfoProvider>
				</CharacterInfoProvider>
			</SelectGameProvider>
		</ChakraProvider>
	);
}
