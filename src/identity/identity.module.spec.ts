import { IdentityModule } from './identity.module';

describe('IdentityModule', () => {
  let identityModule: IdentityModule;

  beforeEach(() => {
    identityModule = new IdentityModule();
  });

  it('should create an instance', () => {
    expect(identityModule).toBeTruthy();
  });
});
