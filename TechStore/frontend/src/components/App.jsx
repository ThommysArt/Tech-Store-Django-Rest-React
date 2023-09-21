import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import HomePage from './HomePage';

export default function App() {
    console.log("The javascript works!")
    return (
        <Theme
            accentColor="indigo"
            grayColor="gray"
            panelBackground="translucent"
            scaling="100%"
            radius="full"
            appearance='dark'>
            <HomePage />
        </Theme>
    )
}