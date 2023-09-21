import {
    Tabs,
    Box,
} from '@radix-ui/themes';

import GeneralPage from './GeneralPage';


export default function CategoryTabs () {
    return (
        <Tabs.Root defaultValue='shop_all'>
            <Tabs.List>
                <Tabs.Trigger value="shop_all">Shop All</Tabs.Trigger>
                <Tabs.Trigger value="computers">Computers</Tabs.Trigger>
                <Tabs.Trigger value="tablets">Tablets</Tabs.Trigger>
                <Tabs.Trigger value="drones&cameras">Drones & Cameras</Tabs.Trigger>
                <Tabs.Trigger value="audio">Audio</Tabs.Trigger>
                <Tabs.Trigger value="mobile">Mobile</Tabs.Trigger>
                <Tabs.Trigger value="tv&home_cinema">TV & Home Cinema</Tabs.Trigger>
            </Tabs.List>

            <Box px="4" pt="3" pb="2">
                <Tabs.Content value='shop_all'>
                    <GeneralPage />
                </Tabs.Content>
            </Box>
        </Tabs.Root>
    )
}