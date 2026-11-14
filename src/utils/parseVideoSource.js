function isSafeUrl(value) {
  try {
    const url = new URL(value, 'https://portfolio.invalid');
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
}

function parseVideoSource(value) {
  if (typeof value !== 'string' || !value.trim()) {
    return null;
  }

  const input = value.trim();
  const iframeTag = input.match(/<iframe\b([^>]*)>/i);

  if (iframeTag) {
    const srcAttribute = iframeTag[1].match(
      /\bsrc\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+))/i,
    );
    const src = (srcAttribute?.[1] ?? srcAttribute?.[2] ?? srcAttribute?.[3] ?? '')
      .trim()
      .replace(/&amp;/gi, '&');

    return src && isSafeUrl(src) ? { type: 'embed', src } : null;
  }

  if (/^\s*<iframe\b/i.test(input)) {
    return null;
  }

  return isSafeUrl(input) ? { type: 'video', src: input } : null;
}

export default parseVideoSource;
