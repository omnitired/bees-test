import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';
import { CommandModule } from 'nestjs-command';
import { DataSeed } from './seed';
import { CategoryModule } from './category/category.module';
import { UserService } from './user/user.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    CommandModule,
    MongooseModule.forRoot('mongodb://localhost/nest'),
    ProductModule,
    CategoryModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [DataSeed, AppService],
})
export class AppModule {}
