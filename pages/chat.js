import {Box} from '@skynexui/components';
import appConfig from "../config.json";
export default function ChatPage() {
    return (
        <Box
          styleSheet={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backgroundColor: appConfig.theme.colors.primary[500],
            backgroundImage: 'url(https://i.imgur.com/FZsCS0j.jpeg)',
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: '',
          }}
          ></Box>
    )
}