import * as React from "react";
import {
	Flex,
	Text,
	Collapse,
	Image,
	keyframes,
	IconButton,
	useDisclosure,
} from "@chakra-ui/react";
import { ChevronRightIcon, ChevronDownIcon } from "@chakra-ui/icons";

//Component to create a new generic question and answer on the faq, fed by the faq context

export default function IndividualQuestionUpdated({ id, question }) {
	const q = useDisclosure();

	return (
		<Flex
			id={id}
			onClick={q.onToggle}
			direction={"column"}
			cursor={"pointer"}
			border={"3px solid white"}
			bg={"rgba(365,365,365,0.8)"}
			color={"black"}
			width={["80vw", "80vw", "70vw", "60vw"]}
		>
			<Flex
				fontWeight={"bold"}
				bg={"rgba(365,365,365,0.5)"}
				padding={"5px"}
				justifyContent={"space-between"}
				cursor={"pointer"}
			>
				<Text overflow="hidden">{question.name}</Text>
				<IconButton
					cursor={"pointer"}
					w={"25px"}
					h={"25px"}
					colorScheme={"white"}
					aria-label="Open question"
					icon={
						q.isOpen ? (
							<ChevronDownIcon w={"30px"} h={"30px"} color={"black"} />
						) : (
							<ChevronRightIcon w={"30px"} h={"30px"} color={"black"} />
						)
					}
				/>
			</Flex>
			<Collapse in={q.isOpen}>
				<Flex padding={"5px"}>
					<Text overflow="hidden">
						{question.d1}
						<br />
						{question.d2}
						<br />
						{question.d3}
						<br />
						{question.d4}
					</Text>
				</Flex>
			</Collapse>
		</Flex>
	);
}
