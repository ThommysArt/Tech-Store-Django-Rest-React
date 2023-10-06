import { 
    Flex, 
    Button,
    Box,
    Separator,
    Heading,
    TextField,
    Link,
} from '@radix-ui/themes';
import ProductSearch from './ProductSearch';


export default function TopBar1 () {

    return (
        <Box width="100%" height='1'>
            <Flex gap="9" align="center">
                <Heading as="h2">Thommy's Store</Heading>
                <Flex gap='9'></Flex>
                <Flex gap='9'></Flex>
                <Flex>
                    <ProductSearch/>
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


