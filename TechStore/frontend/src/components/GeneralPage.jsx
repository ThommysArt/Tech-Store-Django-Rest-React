import {
    Grid,
    Flex,
    Box,
    Button,
    Blockquote,
} from '@radix-ui/themes';

export default function GeneralPage () {

    return (
        <Box>
            <div style={{
                backgroundImage: 'url("imgs/photo-1580927752452-89d86da3fa0a.jpeg")',
                backgroundSize: 'cover',
                color: 'white',
                height: '500px',
                display: 'flex',
                borderRadius: '20px',
            }}>
                <p style={{fontSize: '40px', padding: '20px', paddingLeft: '80px'}}>
                    Find the best <br/>
                    Tech deals on <br/>
                    Smartphones, <br/>
                    Laptops, <br/>
                    Headphones <br/>
                    and more
                </p>
            </div>
            <Grid columns='2' gap='3' width='auto'>
                <div style={{
                    backgroundImage: 'url("imgs/Samsung-Galaxy-S23-Ultra-render-4RMD-1.jpg")',
                    backgroundSize: 'cover',
                    color: 'white',
                    margin: '20px',
                    padding: '20px',
                    width: '550px',
                    height: '400px',
                    borderRadius: '20px',
                }}>
                    <h6>Holiday deals</h6>
                    <p style={{fontSize: '32px', padding: '20px', paddingLeft: '20px'}}>
                        Up to 30%<br/>
                        off your<br/>
                        favourite<br/>
                        tech
                    </p>
                </div>

                <div style={{
                    backgroundImage: 'url("imgs/Best-gaming-headset-Razer-BlackShark_V2.jpg")',
                    backgroundSize: 'cover',
                    color: 'white',
                    margin: '20px',
                    padding: '20px',
                    width: '550px',
                    height: '400px',
                    borderRadius: '20px',
                }}>
                    <h6>New Arrivals</h6>
                    <p style={{fontSize: '32px', padding: '20px', paddingLeft: '20px'}}>
                        Take your<br/>
                        music<br/>
                        everywhere<br/>
                        you go!
                    </p>
                </div>
                <div style={{
                    backgroundImage: 'url("imgs/mchin_180905_4061_0009.jpg")',
                    backgroundSize: 'cover',
                    color: 'black',
                    margin: '20px',
                    padding: '20px',
                    width: '550px',
                    height: '400px',
                    borderRadius: '20px',
                }}>
                    <h6>Laptop deals</h6>
                    <p style={{fontSize: '32px', padding: '20px', paddingLeft: '20px'}}>
                        Get<br/>
                        The Peak<br/>
                        Productivity<br/>
                        Laptops<br/>
                        From Our<br/>
                        Tech Store
                    </p>
                </div>
                <div style={{
                    backgroundImage: 'url("imgs/Odyssey-G9_2.jpg")',
                    backgroundSize: 'cover',
                    color: 'black',
                    margin: '20px',
                    padding: '20px',
                    width: '550px',
                    height: '400px',
                    borderRadius: '20px',
                }}>
                    <h6>Top selling</h6>
                    <p style={{fontSize: '32px', padding: '20px', paddingLeft: '20px'}}>
                        Explore<br/>
                        The Limits<br/>
                        Of Curved<br/>
                        Monitors
                    </p>
                </div>


                <div style={{
                    backgroundImage: 'url("imgs/02wXwvXTDUOJQjGasSStPB3-1..v1648144429.jpg")',
                    backgroundSize: 'cover',
                    color: 'white',
                    margin: '20px',
                    padding: '20px',
                    width: '550px',
                    height: '400px',
                    borderRadius: '20px',
                }}>
                    <h6>Drones & Cameras</h6>
                    <p style={{fontSize: '32px', padding: '20px', paddingLeft: '20px'}}>
                        Highest End<br/>
                        Cameras<br/>
                        From<br/>
                        Sony<br/>
                        And Other<br/>
                        Brands
                    </p>
                </div>
                <div style={{
                    backgroundImage: 'url("imgs/Charge5.webp")',
                    backgroundSize: 'cover',
                    color: 'white',
                    margin: '20px',
                    padding: '20px',
                    width: '550px',
                    height: '400px',
                    borderRadius: '20px',
                }}>
                    <h6>Speakers</h6>
                    <p style={{fontSize: '32px', padding: '20px', paddingLeft: '20px'}}>
                        Full Base,<br/>
                        High Quality,<br/>
                        Peak Volume?<br/>
                        Our Speakers<br/>
                        Do All That!
                    </p>
                </div>

            </Grid>

            <Flex gap='6'>
                <Blockquote>Start ordering now!</Blockquote>
                <Button radius='medium'>Start Cart</Button>
                <Button radius='medium'>Search Product</Button>
                <Button radius='medium'>Contact Us</Button>
            </Flex>
        </Box>
    )
}

