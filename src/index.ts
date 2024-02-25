import { server } from './server/Server';
import {PORT} from './enviroment';


server.listen(PORT, () => console.log(`Running in PORT ${PORT}`));
process.env.NODE_ENV

