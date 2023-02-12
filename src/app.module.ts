import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { GameModule } from './game/game.module';
import { ProfileModule } from './profile/profile.module';
import { GenreModule } from './genre/genre.module';
import { GameGenreModule } from './game-genre/game-genre.module';

@Module({
  imports: [UserModule, PrismaModule, GameModule, ProfileModule, GenreModule, GameGenreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
