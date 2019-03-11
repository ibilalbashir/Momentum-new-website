import { MomentumPartnersModule } from './momentum-partners.module';

describe('MomentumPartnersModule', () => {
  let momentumPartnersModule: MomentumPartnersModule;

  beforeEach(() => {
    momentumPartnersModule = new MomentumPartnersModule();
  });

  it('should create an instance', () => {
    expect(momentumPartnersModule).toBeTruthy();
  });
});
