import { MomentumServicesModule } from './momentum-services.module';

describe('MomentumServicesModule', () => {
  let momentumServicesModule: MomentumServicesModule;

  beforeEach(() => {
    momentumServicesModule = new MomentumServicesModule();
  });

  it('should create an instance', () => {
    expect(momentumServicesModule).toBeTruthy();
  });
});
