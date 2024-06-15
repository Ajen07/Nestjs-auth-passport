import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.startegy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.stratergy';

@Module({
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy,JwtStrategy],
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: 'secret',
    }),
  ],
  exports: [AuthService],
})
export class AuthModule {}
