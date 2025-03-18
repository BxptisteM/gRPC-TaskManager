import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: 'task',
      protoPath: join(__dirname, '../src/proto/task.proto'),
      url: '0.0.0.0:50051',
    },
  });

  await app.listen();
  console.log("✅ gRPC server is running on localhost:50051");
}

bootstrap();
