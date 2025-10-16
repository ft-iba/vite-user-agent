export const getEnvInfo = () => {
  const info: Record<string, any> = {
    'navigator.userAgent': navigator.userAgent,
    'navigator.platform': navigator.platform,
    'navigator.vendor': navigator.vendor,
    'navigator.language': navigator.language,
    'navigator.maxTouchPoints': navigator.maxTouchPoints,
    'devicePixelRatio': window.devicePixelRatio,
    'viewport': `${window.innerWidth} × ${window.innerHeight}`,
    'document.referrer': document.referrer || '(なし)',
    'hasClipboard': 'clipboard' in navigator,
    'hasShareAPI': 'share' in navigator,
    'cookieEnabled': navigator.cookieEnabled,
    'touchEnabled': 'ontouchstart' in window,
  };

  return info;
};
