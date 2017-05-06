import { UsersService } from './users.service';
import { HttpException } from 'nest.js/core/exceptions/http-exception';
import { Middleware } from 'nest.js/common/utils';
import { NestMiddleware } from 'nest.js/core/middlewares/interfaces/nest-middleware.interface';

@Middleware()
export class AuthMiddleware implements NestMiddleware {
    constructor(private usersService: UsersService) {}

    public resolve() {
        return (req, res, next) => {
            const username = req.headers['x-access-token'];
            const users = this.usersService.getUsers();
            const user = users.find(({ name }) => name === username);
            if (!user) {
                throw new HttpException('User not found.', 401);
            }
            req.user = user;
            next();
        };
    }

}

