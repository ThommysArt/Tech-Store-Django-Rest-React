import { 
    Flex, 
    Text, 
    Box,
    Link,
    Separator,
} from '@radix-ui/themes';


export default function TopBar1 () {
    return (
        <Box width="100%" height="2">
            <Flex gap="9" align="center">
                <Text>Free shipping for orders over $100</Text>
                <Flex gap='9'></Flex>
                <Flex gap='9'></Flex>
                <Flex gap='9'></Flex>
                <Flex gap='9'></Flex>
                <Flex gap='9'></Flex>
                <Flex gap='9'></Flex>
                <Flex gap='9'></Flex>
                <Flex gap="5">
                    <Separator orientation="vertical" />
                    <Link color="indigo" href="#">
                    About
                    </Link>
                    <Separator orientation="vertical" />
                    <Link color="indigo" href="#">
                    Contact Us
                    </Link>
                    <Separator orientation="vertical" />
                    <Link color="indigo" href="#">
                    Report
                    </Link>
                </Flex>
            </Flex>
            <Separator my="3" size="4" />
        </Box>
    )
}