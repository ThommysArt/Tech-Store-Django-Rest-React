import { 
    Flex, 
    Button,
    Box,
    Separator,
    Heading,
    TextField,
    Link,
} from '@radix-ui/themes';


export default function TopBar1 () {
    return (
        <Box width="100%" height='1'>
            <Flex gap="9" align="center">
                <Heading as="h2">Thommy's Store</Heading>
                <Flex gap='9'></Flex>
                <Flex gap='9'></Flex>
                <Flex>
                    <TextField.Root radius="medium" size="3"  style={{ width: '300px'}}>
                        <TextField.Input placeholder="Search..." size="2" />
                    </TextField.Root>
                    <Button radius='medium' style={{ 
                    borderTopLeftRadius : '0',
                    borderBottomLeftRadius : '0',
                    }}>
                    Search
                    </Button>
                </Flex>
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


