import { Controller, Get, Query } from '@nestjs/common';
import { BotService } from './bot.service';

@Controller('Bot')
export class BotController {
  constructor(private readonly chatGptService: BotService) {}

  @Get('/')
  async generateText(@Query('prompt') prompt: string): Promise<string> {
    return this.chatGptService.generateText(prompt);
  }
}``