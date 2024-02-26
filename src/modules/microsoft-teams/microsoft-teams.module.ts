import { Module } from '@nestjs/common';
import { MicrosoftTeamsController } from './controllers/microsoft-teams.controller';
import { MicrosoftTeamsListener } from './listeners/microsoft-teams.listener';

@Module({
  imports: [],
  controllers: [MicrosoftTeamsController],
  providers: [MicrosoftTeamsListener],
})
export class MicrosoftTeamsModule {}
