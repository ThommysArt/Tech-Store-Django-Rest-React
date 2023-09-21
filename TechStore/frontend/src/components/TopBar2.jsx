import { 
    Flex, 
    Button,
    Box,
    Separator,
    Heading,
    TextField,
} from '@radix-ui/themes';


export default function TopBar1 () {
    return (
        <Box width="100%" height='1'>
            <Flex gap="9" align="center">
                <Heading as="h2">Thommy's Store</Heading>
                <Flex gap='9'></Flex>
                <Flex gap='9'></Flex>
                <Flex gap='9'></Flex>
                <Flex gap='9'></Flex>
                <Flex gap='9'></Flex>
                <Flex gap='9'></Flex>
                <Flex gap='9'></Flex>
                <Flex gap='9'></Flex>
                <Flex gap='9'></Flex>
                <Flex>
                    <TextField.Root radius="medium" size="2">
                        <TextField.Input placeholder="Search..." size="2" />
                    </TextField.Root>
                    <Button color='indigo' radius='medium' height>Search</Button>
                </Flex>
            </Flex>
            <Separator my="3" size="4" />
        </Box>
    )
}


