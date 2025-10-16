export const userAgentTests = {
  isAndroidMobile: () => /Android.+Mobile/.test(navigator.userAgent),
  isMobile: () => /iPhone|Android.+Mobile/.test(navigator.userAgent),
  isiOS: () => /iPhone|iPod/.test(navigator.userAgent),
  isiPadOS: () =>
    navigator.userAgent.includes('iPad') ||
    (navigator.userAgent.includes('Macintosh') && 'ontouchend' in document),
};
