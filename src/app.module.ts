import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SignupModule } from './signup/signup.module';
import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';
import { ProfileModule } from './profile/profile.module';
import { SearchModule } from './search/search.module';

@Module({
  imports: [SignupModule, LoginModule, HomeModule, ProfileModule, SearchModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
