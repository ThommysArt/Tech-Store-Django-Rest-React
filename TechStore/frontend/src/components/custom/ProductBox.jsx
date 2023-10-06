import { AspectRatio, 
  Blockquote, 
  Box, 
  Button, 
  Flex,
  Text,
  Dialog,
  Heading,
  TextField,
} from "@radix-ui/themes";

export default function ProductBox ({product, index}) {

    function changeImagePath(product) {
        let filePath = product.image;
        const imgIndex = filePath.indexOf("img");
        if (imgIndex !== -1) {
          return filePath.substring(imgIndex);
        }
        return filePath;
    }

    return (
        <Box p='3'>
            <AspectRatio ratio={16/10}>
              <img
                  src={changeImagePath(product)}
                  alt={product.name}
                  style={{
                      objectFit: 'cover',
                      width: '100%',
                      height: '100%',
                      borderRadius: 'var(--radius-2)',
                    }}
                  />
            </AspectRatio>
            <Flex gap='2'>
              <Blockquote size='5'>{product.name}</Blockquote>
              <Blockquote size='4'>{'$' + product.unit_price}</Blockquote>
            </Flex>
            <Flex gap='4'>
              <Dialog.Root>
                <Dialog.Trigger>
                  <Button color='indigo' radius='medium' style={{ width: '100px'}}>Add to Cart</Button>
                </Dialog.Trigger>
                <Dialog.Content>
                  <Dialog.Title>{product.name}</Dialog.Title>
                  <Flex gap='3' direction='column'>
                    <Blockquote size='4'>{'Price: $' + product.unit_price}</Blockquote>
                    <Blockquote size='4'>{'Units: ' +product.qty}</Blockquote>
                    <Flex gap='3'>
                      <Text>Quantity</Text>
                      <TextField.Root>
                        <TextField.Input radius="medium" placeholder="1"></TextField.Input>
                    </TextField.Root>
                    </Flex>
                    <Button radius="medium">Add To Cart</Button>
                  </Flex>
                </Dialog.Content>
              </Dialog.Root>

              <Dialog.Root>
                <Dialog.Trigger>
                  <Button color='indigo' radius='medium' style={{ width: '100px'}}>Details...</Button>
                </Dialog.Trigger>
                <Dialog.Content>
                  <Flex direction='column' gap='4'>
                    <Dialog.Title>{product.name}</Dialog.Title>
                    <Blockquote size='4'>{'Price: $' + product.unit_price}</Blockquote>
                    <Blockquote size='4'>{'Units: ' +product.qty}</Blockquote>
                    <Heading as='h6' size='5'>Description</Heading>
                    <Text>{product.description}</Text>
                    <Button radius="medium">Add to Cart</Button>
                  </Flex>
                </Dialog.Content>
              </Dialog.Root>
            </Flex>
        </Box>
    )
}