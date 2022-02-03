import { Injectable } from '@nestjs/common';
import { <%= classify(name) %>Repository } from './<%= classify(name) %>Repository';

@Injectable()
export class <%= classify(name) %>RepositoryImpl extends <%= classify(name) %>Repository {}
