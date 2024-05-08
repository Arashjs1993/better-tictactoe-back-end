import { Module } from '@nestjs/common';
import { InfoModule } from './info/info.module';
import { UserFormModule } from './user-form/user-form.module';

@Module({
  imports: [InfoModule, UserFormModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
