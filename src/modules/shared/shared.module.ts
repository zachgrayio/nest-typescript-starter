import { Module } from 'nest.js/common/utils/decorators/module.decorator';
import { ChatGateway } from '../users/chat.gateway';

@Module({
    components: [ ChatGateway ],
    exports: [ ChatGateway ],
})
export class SharedModule {}