import * as React from "react";
import {
	Flex,
	Text,
	Image,
	Button,
	Box,
	Divider,
	useDisclosure,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	ModalCloseButton,
	useMediaQuery,
} from "@chakra-ui/react";
import { useCharacterInfo } from "../../context/CharacterInfoContext.js";

//This is the 3rd main section of the website, after cityIntroduction and before faq

export default function CharactersIntroductions() {
	const charactersInfo = useCharacterInfo();

	const [selectedChar, setSelectedChar] = React.useState(0);

	const { isOpen, onOpen, onClose } = useDisclosure();

	const [isLesserThan990] = useMediaQuery("(max-width: 990px)");

	return (
		<Flex
			boxSizing="border-box"
			align={"center"}
			justify={"space-evenly"}
			direction={"column"}
			p="2"
			//bg="black" //Original
			bgImage={`linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('https://www.dropbox.com/scl/fi/te7d53vv3dlpodzh2wbsz/9f4lnfv0fbh51.png?rlkey=obndelie05omrmu3i7vk91i6d&raw=1')`}
			backgroundRepeat="no-repeat"
			backgroundPosition={["center top"]}
			backgroundSize="cover"
			maxW={["100vw", null, "100vw"]}
			h={["fit-content", null, "100vh"]}
		>
			{
				//Forcing pre-load for all images used in this section and not viewed immediatly
			}

			{charactersInfo.map((charInfo) => (
				<Flex display={"none"}>
					<Image src={charInfo.smallImage} />
					<Image src={charInfo.image} />
				</Flex>
			))}

			<Text color={"white"} fontSize={"5xl"} fontWeight={"semibold"}>
				Characters
			</Text>

			<Flex
				boxSizing="border-box"
				justify="space-evenly"
				align={"center"}
				direction={["column", null, "row"]}
				w={["90vw", null, "80vw"]}
				gap={["50px"]}
			>
				{
					//First Image - Left
					//Original Widths and Height for all Images: ["125px", "175px", "225px", "300px", "400px", "450px"]
				}
				<Image
					//Change the width and height to compare to a scale
					cursor={"pointer"}
					width={["100px", "150px", "200px", "250px", "350px", null]}
					height={["100px", "150px", "200px", "250px", "350px", null]}
					src={
						selectedChar === 0
							? charactersInfo[charactersInfo.length - 1].smallImage
							: charactersInfo[selectedChar - 1].smallImage
					}
					_hover={[
						null,
						null,
						{
							bg:
								selectedChar === 0
									? charactersInfo[charactersInfo.length - 1].bg
									: charactersInfo[selectedChar - 1].bg,
							transform: "scale(1.05)",
							transitionDuration: "2s",
							transitionProperty: "transform",
							transition: "background-color 500ms linear",
						},
					]}
					onClick={
						selectedChar === 0
							? () => setSelectedChar(charactersInfo.length - 1)
							: () => setSelectedChar(selectedChar - 1)
					}
				/>
				{
					//Second Image - Middle
				}
				<Image
					cursor={"pointer"}
					onClick={() => onOpen()}
					width={["150px", "200px", "275px", "325px", "400px", null]}
					height={["150px", "200px", "275px", "325px", "400px", null]}
					src={charactersInfo[selectedChar].smallImage}
					bg={charactersInfo[selectedChar].bg}
					padding={["0", null, "20px"]}
					transition={"background 0.5s ease-in-out"} //Not sure how good this is
					_hover={[
						null,
						null,
						{
							transform: "scale(1.05)",
							transitionDuration: "0.5s",
							transitionProperty: "transform",
						},
					]}
				/>

				{
					//Modal of the 2nd image
				}
				<Modal
					isCentered
					isOpen={isOpen}
					onClose={onClose}
					motionPreset="slideInTop"
					size={["sm", "md", "2xl", "3xl", "4xl", "6xl"]}
				>
					<ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
					<ModalContent
						color="blackAlpha.900"
						bg="whiteAlpha.700"
						align="center"
						padding={["0px", null, "20px", "30px"]}
						//h={[null, null, null, "100vh", "100vh", "100vh"]} //This line is causing the empty space to be pretty big on computers
						//This is being done to standardize the button placement and overall height of the modal
					>
						<ModalHeader fontSize="4xl" fontWeight="bold">
							{charactersInfo[selectedChar].name}{" "}
							{!isLesserThan990 && charactersInfo[selectedChar].department}
						</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							<Flex
								align={"center"}
								direction={["column", null, null, "row"]}
								gap={["0px", "10px", "20px", "50px"]}
							>
								<Image
									maxH={["250px", "300px", "375px", "450px"]}
									maxW={["150px", "125px", "150px", "150px"]}
									p="3"
									src={charactersInfo[selectedChar].image}
								/>

								<Divider
									h={["1px", null, null, "450px"]}
									borderStyle="solid"
									borderColor="black"
									orientation={isLesserThan990 ? "horizontal" : "vertical"}
								/>

								<Box maxW={["500px", "600px", "750px", "900px"]}>
									<Text
										as="i"
										fontSize={["xl", null, null, null, "2xl"]}
										fontWeight="bold"
										p="2"
									>
										&#8220;{charactersInfo[selectedChar].intro}&#8221;
									</Text>
									<Text fontSize="xl" fontWeight="semibold" p="2">
										{charactersInfo[selectedChar].description}
									</Text>
								</Box>
							</Flex>
						</ModalBody>

						<ModalFooter gap="20px">
							<Button bg={"black"} color={"white"} onClick={onClose}>
								To List
							</Button>
							<Button
								onClick={
									selectedChar === 0
										? () => setSelectedChar(charactersInfo.length - 1)
										: () => setSelectedChar(selectedChar - 1)
								}
							>
								Previous
							</Button>
							<Button
								onClick={
									selectedChar === charactersInfo.length - 1
										? () => setSelectedChar(0)
										: () => setSelectedChar(selectedChar + 1)
								}
							>
								Next
							</Button>
						</ModalFooter>
					</ModalContent>
				</Modal>
				{
					//Third Image - Right
				}
				<Image
					//Change the width and height to compare to a scale
					cursor={"pointer"}
					width={["100px", "150px", "200px", "250px", "350px", null]}
					height={["100px", "150px", "200px", "250px", "350px", null]}
					src={
						selectedChar === charactersInfo.length - 1
							? charactersInfo[0].smallImage
							: charactersInfo[selectedChar + 1].smallImage
					}
					_hover={[
						null,
						null,
						{
							bg:
								selectedChar === charactersInfo.length - 1
									? charactersInfo[0].bg
									: charactersInfo[selectedChar + 1].bg,
							transform: "scale(1.05)",
							transitionDuration: "2s",
							transitionProperty: "transform",
							transition: "background-color 500ms linear",
						},
					]}
					onClick={
						selectedChar === charactersInfo.length - 1
							? () => setSelectedChar(0)
							: () => setSelectedChar(selectedChar + 1)
					}
				/>
			</Flex>
		</Flex>
	);
}
