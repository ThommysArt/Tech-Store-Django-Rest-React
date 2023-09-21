import { 
    Flex, 
    Text, 
    Button,
    Container,
    Section,
    Box,
    Link,
    Separator,
    Heading,
    TextField,
 } from '@radix-ui/themes';

export default function HomePage () {
    return (
        <Box>
            <Box width='100%' height='2'>
                <Flex gap='9' align='stretch'>
                    <Text>Free shipping for orders over $100</Text>
                    <Flex gap='5'>
                        <Separator orientation='vertical' />
                        <Link color='indigo' href='#'>About</Link>
                        <Separator orientation='vertical' />
                        <Link color='indigo' href='#'>Contact Us</Link>
                        <Separator orientation='vertical' />
                        <Link color='indigo' href='#'>Report</Link>
                    </Flex>
                </Flex>
                <Separator my='3' size='4' />
            </Box>
            <Box width='100%'>
                <Flex gap='9'>
                    <Heading as='h2'>Thommy's Store</Heading>
                    <TextField.Root radius='medium' size='2'>
                        <TextField.Input placeholder='Search...' size='3'/>
                    </TextField.Root>
                </Flex>
            </Box>
        </Box>
    )
}