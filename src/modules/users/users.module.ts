import { Module } from 'nest.js';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { AuthMiddleware } from './auth.middleware';
import { NestModule, MiddlewaresConsumer } from 'nest.js/common/index';
import { ChatGateway } from './chat.gateway';

@Module({
    controllers: [ UsersController ],
    components: [
        { provide: 'UsersService', useClass: UsersService },
        ChatGateway,
    ],
})
export class UsersModule implements NestModule {
    public configure(consumer: MiddlewaresConsumer) {
        consumer.apply(AuthMiddleware).forRoutes(UsersController);
    }
}
