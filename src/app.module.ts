import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MicrosoftTeamsModule } from './modules/microsoft-teams/microsoft-teams.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), MicrosoftTeamsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
