import * as React from "react";
import {
	Flex,
	Image,
	keyframes,
	IconButton,
	useDisclosure,
} from "@chakra-ui/react";
import { ChevronRightIcon, ChevronDownIcon } from "@chakra-ui/icons";

//Component to pair alongside some common code on the parent to make up a customizable question including bolds, links... etc

export default function IndividualQuestion({ isActive, children }) {
	const q = useDisclosure();

	return (
		<Flex
			fontWeight={"bold"}
			bg={"rgba(365,365,365,0.5)"}
			padding={"5px"}
			justifyContent={"space-between"}
			cursor={"pointer"}
		>
			{children}
			<IconButton
				cursor={"pointer"}
				w={"25px"}
				h={"25px"}
				colorScheme={"white"}
				aria-label="Open question"
				icon={
					isActive ? (
						<ChevronDownIcon w={"30px"} h={"30px"} color={"black"} />
					) : (
						<ChevronRightIcon w={"30px"} h={"30px"} color={"black"} />
					)
				}
			/>
		</Flex>
	);
}
