import * as React from "react";
import { useCityInfo } from "../../context/CityInfoContext.js";
import {
	Flex,
	Text,
	Image,
	Center,
	Box,
	Button,
	Step,
	StepDescription,
	StepIcon,
	StepIndicator,
	StepNumber,
	StepSeparator,
	StepStatus,
	StepTitle,
	Stepper,
	useSteps,
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

//The 2nd main section of the website, after the gamesIntroductions and before the charactersIntroductions

export default function CityIntroduction() {
	const cityInfo = useCityInfo();

	const { activeStep, setActiveStep } = useSteps({
		index: 0,
		count: cityInfo.length,
	});

	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Flex
			p={["10px", null, "20px", null, "30px"]}
			justify={"center"}
			boxSizing="border-box"
			bgImage={cityInfo[activeStep].image}
			backgroundRepeat="no-repeat"
			backgroundPosition="center"
			backgroundSize="cover"
			h={["100vh"]}
			transition={"background-image 0.5s ease-in-out"}
		>
			<Flex
				align={"flex-end"}
				justify={"center"}
				padding={["10px", null, "25px", null, "40px"]}
				marginBottom={["50px", null, "50px", null, "20px"]}
				boxSizing="border-box"
				maxW={["80%", null, "90%"]}
			>
				{
					//Component to display the trajectory on that section vertically and w/ checkpoints
				}
				<Stepper
					size={["sm", "md", "lg"]}
					index={activeStep}
					color={"white"}
					colorScheme="yellow"
					orientation="vertical"
					height="80vh"
					gap="0"
					w={["80vw"]}
				>
					{cityInfo.map((step, index) => (
						<Step
							key={index}
							cursor="pointer"
							onClick={() => setActiveStep(index)}
						>
							<StepIndicator>
								<StepStatus
									complete={<Image src={step.image} />}
									incomplete={<Image src={step.image} />}
									active={<Image src={step.image} />}
								/>
							</StepIndicator>

							<Box flexShrink="0">
								<StepTitle>{step.name}</StepTitle>
							</Box>

							<StepSeparator />
						</Step>
					))}
				</Stepper>

				{
					//Button to open up the modal for details
				}
				<Flex
					align={"center"}
					justify={"center"}
					padding={["10px"]}
					maxH="fit-content"
					w={["75vw", "65vw", "28vw", "20vw", "15vw", "12vw"]}
					bg={"rgba(365, 365, 365, 0.6)"}
					borderRadius={"md"}
					cursor={"pointer"}
					onClick={() => onOpen()}
				>
					<Text>Click for more Info</Text>
				</Flex>

				{
					//Inside the modal
				}
				<Modal
					isCentered
					isOpen={isOpen}
					onClose={onClose}
					motionPreset="slideInTop"
					size={["sm", "md", "2xl", "5xl", "6xl", "6xl"]}
				>
					<ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
					<ModalContent
						color="blackAlpha.900"
						bg="whiteAlpha.600"
						align="center"
						padding={["0px", null, "20px", "30px"]}
						//h={[null, null, null, "90vh", "100vh", "100vh"]} //This line is causing the empty space to be pretty big on computers
						//This is being done to standardize the button placement and overall height of the modal
					>
						<ModalHeader fontSize="4xl" fontWeight="bold">
							{cityInfo[activeStep].name}{" "}
						</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							<Flex
								align={"center"}
								direction={["column", null, null, "row"]}
								gap={["0px", "10px", "20px", "50px"]}
							>
								<Image
									maxH={["250px", "250px", "200px", "225px", "300px", "300px"]}
									max
									p="3"
									src={cityInfo[activeStep].image}
								/>

								<Box>
									<Text fontSize="xl" fontWeight="semibold" p="2">
										{cityInfo[activeStep].d1}
										<br />
										{cityInfo[activeStep].d2}
										<br />
										{cityInfo[activeStep].d3}
										<br />
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
									activeStep === 0
										? () => setActiveStep(cityInfo.length - 1)
										: () => setActiveStep(activeStep - 1)
								}
							>
								Previous
							</Button>
							<Button
								onClick={
									activeStep === cityInfo.length - 1
										? () => setActiveStep(0)
										: () => setActiveStep(activeStep + 1)
								}
							>
								Next
							</Button>
						</ModalFooter>
					</ModalContent>
				</Modal>
			</Flex>
		</Flex>
	);
}
