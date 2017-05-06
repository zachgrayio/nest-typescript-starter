import { GatewayMiddleware } from 'nest.js/websockets/interfaces/gateway-middleware.interface';
import { UsersService } from './users.service';
import { Middleware } from 'nest.js/index';

@Middleware()
export class ChatMiddleware implements GatewayMiddleware {
    public resolve(): (socket, next) => void {
        return (socket, next) => {
            console.log('Authorization...');
            next();
        };
    }
}