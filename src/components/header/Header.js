import * as React from "react";
import { Box, Center, Image, Flex, Badge, Text } from "@chakra-ui/react";

export default function Header() {
	return (
		// Project Moon name alongside logo
		<Center h={["10vh", null, null, null, "12vh"]} bg="black">
			<Image
				h={["6vh", null, null, null, "8vh"]}
				src="https://www.dropbox.com/scl/fi/cnryrs1yxfov8s407cgdj/bARF2Xhg_400x400.jpg?rlkey=h45imsbgn7g8h5onk8sf46ve7&raw=1"
			/>
			<Box>
				<Text
					color="white"
					fontSize={["3xl", null, null, null, "3xl"]}
					fontWeight="bold"
				>
					Project Moon
				</Text>
			</Box>
		</Center>
	);
}
