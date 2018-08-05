import { CustomerModule } from './customer.module';

describe('CustomerModule', () => {
  let customerModuleModule: CustomerModule;

  beforeEach(() => {
    customerModuleModule = new CustomerModule();
  });

  it('should create an instance', () => {
    expect(customerModuleModule).toBeTruthy();
  });
});
