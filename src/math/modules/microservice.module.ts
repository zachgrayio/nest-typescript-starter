import { Module } from 'nest.js/common/utils/decorators/module.decorator';
import { MathController } from './math.controller';

@Module({
    controllers: [ MathController ]
})
export class MicroserviceModule {}