import { AspectRatio, Blockquote, Box, Button, Flex } from "@radix-ui/themes";

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
            <AspectRatio ratio={16/8}>
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
            <Blockquote size='5'>{product.name}</Blockquote>
            <Flex gap='2'>
              <Button color='indigo' radius='medium'>Purchase</Button>
              <Button color='indigo' radius='medium'>Add to Cart</Button>
              <Button color='indigo' radius='medium'>More...</Button>
            </Flex>
        </Box>
    )
}