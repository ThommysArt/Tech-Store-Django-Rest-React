import { 
    Flex,
} from '@radix-ui/themes';

import TopBar1 from './custom/TopBar1';
import TopBar2 from './custom/TopBar2';
import CategoryTabs from './custom/CategoryTabs';

export default function HomePage () {
    return (
        <Flex direction="column" gap='7'>
            <TopBar1 />
            <TopBar2 />
            <CategoryTabs />
        </Flex>
    )
}