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
            </Flex>
            <Separator my="3" size="4" />
        </Box>
    )
}