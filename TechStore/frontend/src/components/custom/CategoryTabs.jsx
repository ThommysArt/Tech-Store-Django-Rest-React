import {
    Tabs,
    Box,
    Separator,
    TabsContent,
} from '@radix-ui/themes';

import HomeTab from '../tabs/HomeTab';
import LaptopsTab from '../tabs/LaptopsTab';
import DesktopTab from '../tabs/DesktopTab';
import TabletsTab from '../tabs/TabletsTab';
import DronesTab from '../tabs/DronesTab'
import CamerasTab from '../tabs/CamerasTab';
import AudioTab from '../tabs/AudioTab';
import MobileTab from '../tabs/MobileTab';
import TvTab from '../tabs/TvTab';



export default function CategoryTabs () {
    return (
        <Tabs.Root defaultValue='shop_all'>
            <Tabs.List>
                <Tabs.Trigger value="shop_all">Shop All</Tabs.Trigger>
                <Tabs.Trigger value="laptops">Laptops</Tabs.Trigger>
                <Tabs.Trigger value="desktop">Desktops</Tabs.Trigger>
                <Tabs.Trigger value="drones">Drones</Tabs.Trigger>
                <Tabs.Trigger value="cameras">Cameras</Tabs.Trigger>
                <Tabs.Trigger value="audio">Audio</Tabs.Trigger>
                <Tabs.Trigger value="tablets">Tablets</Tabs.Trigger> 
                <Tabs.Trigger value="mobile">Mobile</Tabs.Trigger>
                <Tabs.Trigger value="tv&home_cinema">TV & Home Cinema</Tabs.Trigger>
            </Tabs.List>

            <Box px="4" pt="3" pb="2">
                <Tabs.Content value='shop_all'>
                    <HomeTab />
                </Tabs.Content>
                <Tabs.Content value='laptops'>
                    <LaptopsTab />
                </Tabs.Content>
                <Tabs.Content value='desktop'>
                    <DesktopTab />
                </Tabs.Content>
                <Tabs.Content value='tablets'>
                    <TabletsTab />
                </Tabs.Content>
                <Tabs.Content value='drones'>
                    <DronesTab />
                </Tabs.Content>
                <Tabs.Content value='cameras'>
                    <CamerasTab />
                </Tabs.Content>
                <Tabs.Content value='audio'>
                    <AudioTab />
                </Tabs.Content>
                <Tabs.Content value='mobile'>
                    <MobileTab />
                </Tabs.Content>
                <Tabs.Content value='tv&home_cinema'>
                    <TvTab />
                </Tabs.Content>
            </Box>
        </Tabs.Root>
    )
}