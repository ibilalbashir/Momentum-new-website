import { VideoBannerModule } from './video-banner.module';

describe('VideoBannerModule', () => {
  let videoBannerModule: VideoBannerModule;

  beforeEach(() => {
    videoBannerModule = new VideoBannerModule();
  });

  it('should create an instance', () => {
    expect(videoBannerModule).toBeTruthy();
  });
});
