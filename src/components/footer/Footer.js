import * as React from "react";
import { Flex, Text } from "@chakra-ui/react";

export default function Footer() {
	return (
		<Flex
			gap={["0px", null, "30px"]}
			padding={["10px", null, "20px"]}
			justify={["center"]}
			align={"center"}
			bg="black"
			direction={["column", null, "row"]}
			h={["20vh", "15vh", "10vh", "10vh", "10vh"]}
		>
			<Text align={"center"} color="white" fontSize="xl" fontWeight="semibold">
				All rights reserved to{" "}
				<a target="_blank" href="https://projectmoon.studio/">
					<u>ProjectMoon</u>
				</a>
			</Text>
			<Text align={"center"} color="white" fontSize="xl" fontWeight="semibold">
				Coded by{" "}
				<a target="_blank" href="https://github.com/victorpbp">
					<u>Victor</u>
				</a>
			</Text>
			<Text align={"center"} color="white" fontSize="xl" fontWeight="semibold">
				Designed by{" "}
				<a target="_blank" href="https://github.com/Musicii-bit">
					<u>Musicii</u>
				</a>
			</Text>
		</Flex>
	);
}
