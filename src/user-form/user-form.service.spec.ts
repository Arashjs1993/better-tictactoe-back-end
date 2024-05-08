import { Test, TestingModule } from '@nestjs/testing';
import { UserFormService } from './user-form.service';

describe('UserFormService', () => {
  let service: UserFormService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserFormService],
    }).compile();

    service = module.get<UserFormService>(UserFormService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
