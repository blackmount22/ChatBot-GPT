import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class BotService {
  private readonly apiUrl = 'https://api.openai.com/v1/';

  async generateText(prompt: string): Promise<string> {
    const response = await axios({
      method: 'post',
      url: `${this.apiUrl}engines/davinci-codex/completions`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${"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"}`,
      },
      data: {
        prompt,
        max_tokens: 50,
        n: 1,
        stop: ['\n'],
      },
    });
    return response.data.choices[0].text.trim();
  }
}