import * as React from "react";
import { Flex, Text, Collapse, useDisclosure } from "@chakra-ui/react";
import IndividualQuestion from "../individualQuestion/IndividualQuestion";
import IndividualQuestionUpdated from "../individualQuestionUpdated/IndividualQuestionUpdated.js";

import { useFaqInfo } from "../../context/FaqInfoContext.js";

//This is the 4th and last main component of the page, after charactersIntroductions and before the footer

export default function Faq() {
	const faqInfo = useFaqInfo();
	const q6 = useDisclosure(); //Exceptional question, needs bolds, links... etc, using individualQuestion instead of individualQuestionUpdated for flexibility

	return (
		<Flex
			p={["10px", null, "20px", null, "30px"]}
			boxSizing="border-box"
			bgImage={`linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url(https://www.dropbox.com/scl/fi/2ixy5phga51xi42csq8lj/image.png?rlkey=yk53rf3wl8ux1s503ycluoen6&raw=1)`}
			backgroundRepeat="no-repeat"
			backgroundPosition="center"
			backgroundSize="cover"
			minH={["fit-content", null, "90vh"]}
		>
			{
				//List of all questions
			}
			<Flex
				align={"center"}
				justify={"flex-start"}
				boxSizing="border-box"
				padding={["10px", null, "20px", null, "30px"]}
				gap={["10px", null, "20px"]}
				direction={"column"}
			>
				{
					//Mapping all questions through the component - Except the 6th, this one is different
				}

				{faqInfo.map((question, index) => {
					return <IndividualQuestionUpdated id={index} question={question} />;
				})}

				{
					//Question 6 - Not in the normal flow due to having external links and bold elements
				}
				<Flex
					id="5"
					onClick={q6.onToggle}
					direction={"column"}
					border={"3px solid white"}
					bg={"rgba(365,365,365,0.8)"}
					color={"black"}
					width={["80vw", "80vw", "70vw", "60vw"]}
				>
					<IndividualQuestion isActive={q6.isOpen ? true : false}>
						<Text overflow="hidden">How to experience the story?</Text>
					</IndividualQuestion>

					<Collapse in={q6.isOpen}>
						<Flex padding={"5px"}>
							<Text overflow="hidden">
								{" "}
								You can play the games, however, as we understand it can be
								quite time consuming and hard, there is another way.
								<br />
								<b>For Lobotomy Corporation</b>, you may watch a youtube
								playlist with all Story content and visit playthroughs of the
								game to experience how it's like to be the manager.
								<br />
								Personally,{" "}
								<Text
									as={"a"}
									textDecoration={"underline"}
									fontWeight={"bold"}
									href="https://www.youtube.com/watch?v=0Rv9Ik5GnXo&list=PLp7X4oweH213OWovvX-1TgSUorFxVySqT"
									target="_blank"
								>
									this playlist is my recommendation
								</Text>
								<br />
								<b>For Library of Ruina</b>, there is another youtube playlist,
								this time, with the gameplay integrated with the story
								completely, you may choose to skip gameplay at parts or see all
								throughout.
								<br />
								Personally,{" "}
								<Text
									as={"a"}
									textDecoration={"underline"}
									fontWeight={"bold"}
									href="https://www.youtube.com/watch?v=UPxrTUnHfMQ&list=PLQwViT4TB0lf5hZKEmWyhZULSZLOz64TL"
									target="_blank"
								>
									this playlist is my recommendation
								</Text>
								<br />
								<b>For Limbus Company</b>, there is yet another youtube
								playlist, this one also shows gameplay and story integrated,
								giving a great experience of how things come together.
								<br />
								Personally,{" "}
								<Text
									as={"a"}
									textDecoration={"underline"}
									fontWeight={"bold"}
									href="https://www.youtube.com/watch?v=mqheLts_-70&list=PL9Zcuy-8soxzz3xpUBheFFGyHgAeC7A0K"
									target="_blank"
								>
									this playlist is my recommendation
								</Text>
								<br />I do recommend you to, while watching, have it be on
								Incognito mode or with your History turned off during watching,
								that is simply a precaution for youtube not to recommend any
								spoilers.
							</Text>
						</Flex>
					</Collapse>
				</Flex>
			</Flex>
		</Flex>
	);
}
