import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "src/app/app.controller";
import { AppService } from "src/app/app.service";
import { DatabaseModule } from "@/db/database.module";
import { DrinksModule } from "@/drinks/drinks.module";

@Module({
	imports: [
		DatabaseModule,
		DrinksModule,
		ConfigModule.forRoot({
			envFilePath: [".env.local", ".env"],
		}),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {
}
