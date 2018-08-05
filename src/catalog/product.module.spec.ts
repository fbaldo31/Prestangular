import { CatalogModule } from './catalog.module';

describe('ProductModule', () => {
  let catalogModule: CatalogModule;

  beforeEach(() => {
    catalogModule = new CatalogModule();
  });

  it('should create an instance', () => {
    expect(catalogModule).toBeTruthy();
  });
});
