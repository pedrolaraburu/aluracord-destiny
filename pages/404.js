import { Box} from '@skynexui/components';
import appConfig from "../config.json";
export default function ChatPage() {
    return (
        <Box
          styleSheet={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backgroundColor: appConfig.theme.colors.primary[500],
            backgroundImage: 'url(https://media.tenor.com/images/50ec3cc86e3c455277806fc249838e0e/tenor.gif)',
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: '',
          }}
          
          ></Box>
          
    )
}