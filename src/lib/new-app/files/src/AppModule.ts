import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { getPrototypes } from '@kerthin/utils';
import { join } from 'path';

const graphql = GraphQLModule.forRoot({
  typePaths: [join(process.cwd(), 'src/**/*.graphql')]
});

const modules = getPrototypes(`${__dirname}/modules/**/*Module{.ts,.js}`);

@Module({
  imports: [
    graphql,
    ...modules
  ],
})
export class AppModule { }
