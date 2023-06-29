import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
    bumbleBotSaysHi(): string { return 'BumbleBot says Hi! <3' }
}
