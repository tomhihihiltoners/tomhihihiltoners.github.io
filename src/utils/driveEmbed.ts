export function getDrivePreviewUrl(url: string): { embedUrl: string | null; fileId: string | null; error?: string } {
  if (!url || !url.trim()) {
    return { embedUrl: null, fileId: null, error: "Ссылка не указана" };
  }

  const cleanUrl = url.trim();

  if (cleanUrl.includes('drive.google.com/file/d/') && cleanUrl.endsWith('/preview')) {
    const match = cleanUrl.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
    return { embedUrl: cleanUrl, fileId: match ? match[1] : null };
  }

  const fileDMatch = cleanUrl.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (fileDMatch && fileDMatch[1]) {
    return {
      embedUrl: `https://drive.google.com/file/d/${fileDMatch[1]}/preview`,
      fileId: fileDMatch[1]
    };
  }

  const idParamMatch = cleanUrl.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (idParamMatch && idParamMatch[1]) {
    return {
      embedUrl: `https://drive.google.com/file/d/${idParamMatch[1]}/preview`,
      fileId: idParamMatch[1]
    };
  }

  if (/^[a-zA-Z0-9_-]{25,}$/.test(cleanUrl)) {
    return {
      embedUrl: `https://drive.google.com/file/d/${cleanUrl}/preview`,
      fileId: cleanUrl
    };
  }

  if (cleanUrl.startsWith('http://') || cleanUrl.startsWith('https://')) {
    return { embedUrl: cleanUrl, fileId: null };
  }

  return { embedUrl: null, fileId: null, error: "Некорректная ссылка" };
}
