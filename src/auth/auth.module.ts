import { Module } from "@nestjs/common"
import { PassportModule } from "@nestjs/passport"
import { LocalStrategy } from "src/dashboard/strategies/local.strategy"
import { UsersModule } from "src/users/users.module"
import { AuthService } from "./auth.service"
import { SessionSerializer } from "./session.serializer"

@Module({
  imports: [UsersModule, PassportModule.register({ session: true })],
  providers: [AuthService, LocalStrategy, SessionSerializer],
})
export class AuthModule {}