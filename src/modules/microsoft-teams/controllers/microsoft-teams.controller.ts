import { Controller, Post, Req, Res } from '@nestjs/common';
import { MicrosoftTeamsListener } from '../listeners/microsoft-teams.listener';
import { Request, Response } from 'botbuilder';

@Controller('teams')
export class MicrosoftTeamsController {
  constructor(
    private readonly microsoftTeamsListener: MicrosoftTeamsListener,
  ) {}

  @Post('message')
  async message(@Req() req: Request, @Res() res: Response) {
    console.log(req);
    await this.microsoftTeamsListener
      .getAdapter()
      .process(req, res, (context) => this.microsoftTeamsListener.run(context));
  }
}
