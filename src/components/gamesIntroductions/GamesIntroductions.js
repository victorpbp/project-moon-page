import * as React from "react";
import { Flex, Text, Image, Link } from "@chakra-ui/react";

import { useSelectGame } from "../../context/SelectGameContext.js";

//The 1st main section of the website, after the header and before cityIntroduction

export default function GamesIntroductions() {
	const gameInfo = useSelectGame();

	const [game, setGame] = React.useState(0);

	return (
		<Flex
			align={["space-around", null, "flex-end"]} //or center -- How to make this be a little floaty on the upper side though?
			justify={["center", null]} //or space-around
			direction={"row"}
			h={["90vh", null, null, null, "88vh"]}
			bg="black" //Fallback and while loading purposes
			backgroundImage={gameInfo[game].modalImage} //Change the image depending on Desktop or Mobile
			backgroundRepeat="no-repeat"
			backgroundPosition="center"
			backgroundSize="cover"
			transition={"background-image 0.5s ease-in-out"}
		>
			{
				//Forcing pre-load for all images used in this section and not viewed immediatly
			}

			<Flex display={"none"}>
				<Image src={gameInfo[1].modalImage} />
				<Image src={gameInfo[2].modalImage} />

				{gameInfo[1].platforms.map((platform) => (
					<Image src={platform.icon} />
				))}
				{gameInfo[2].platforms.map((platform) => (
					<Image src={platform.icon} />
				))}
			</Flex>

			{
				//Dictates the bigger rectangle's behaviour
			}
			<Flex
				direction={["column", null, "row"]}
				align={["center", null, "flex-end"]}
				padding={["10px", null, "25px", null, "40px"]}
				paddingBottom={["20px", null, "40px", null, "50px"]}
				justify="space-between"
				boxSizing="border-box"
				w={["100%", null, "80%"]}
				gap={["40px"]}
			>
				{
					//Dictates the left side's behaviour
				}
				<Flex
					direction={"column"}
					justify={"center"}
					align={"center"}
					gap={"20px"}
					border={"3px solid white"}
					borderRadius={"10px"}
					bg={"rgba(0, 0, 0, 0.7)"}
					padding={["5px", null, "10px"]}
				>
					{
						//Dictates the bordered information behaviour
					}
					<Flex
						direction={"column"}
						align={"center"}
						justify={"center"}
						maxW={["80vw", "60vw", "40vw", "40vw", "25vw"]}
					>
						<Text
							fontSize={["2xl", null, null, null, "3xl"]}
							fontWeight="bold"
							color="white"
							textShadow="1px 1px 1px black"
						>
							{gameInfo[game].name}
						</Text>
						<Text
							as="i"
							align={"center"}
							fontSize={["xl", null, null, null, "2xl"]}
							fontWeight="bold"
							p="2"
							color="white"
						>
							&#8220;{gameInfo[game].intro}&#8221;
						</Text>
						<Text
							fontSize={["l", null, null, "xl"]}
							fontWeight="semibold"
							color="white"
							textShadow="1px 1px 1px black"
							align={"center"}
						>
							{gameInfo[game].description}
						</Text>
					</Flex>
					{
						//Dictates the chosen platforms behaviour
					}
					<Flex
						gap={"10px"}
						//border={"3px solid white"}
						//bg={"rgba(0, 0, 0, 0.7)"}
					>
						{gameInfo[game].platforms.map((platform, index) => (
							<Link href={platform.link} isExternal>
								<Image
									src={platform.icon}
									width={["30px", "40px", "50px"]}
									height={["30px", "40px", "50px"]}
								/>
							</Link>
						))}
					</Flex>
				</Flex>

				{
					//Dictates right side behaviour
				}
				<Flex
					boxSizing="border-box"
					gap={["10px", null, "20px"]}
					direction={["row", null, "column", null, "row"]}
				>
					{gameInfo.map((games, index) => (
						<Image
							width={["95px", "150px", "160px"]} //or 180px
							height={["70px", "80px", "80px"]} //or 100px
							key={index}
							src={games.image}
							onClick={() => setGame(index)}
							border={game === index ? "3px solid white" : "none"}
							borderRadius={game === index ? "10px" : "none"}
							bg={"rgba(0, 0, 0, 0.7)"}
							padding={["5px", null, "10px"]}
						/>
					))}
				</Flex>
			</Flex>
		</Flex>
	);
}
