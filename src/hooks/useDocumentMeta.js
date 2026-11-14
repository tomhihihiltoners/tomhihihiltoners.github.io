import { useEffect } from 'react';

export function useDocumentMeta(title, description) {
  useEffect(() => {
    const baseTitle = 'Дмитрий Давыдов - Портфолио';
    document.title = title ? `${title} | ${baseTitle}` : baseTitle;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description ?? 'Creative portfolio website.');
    } else {
      const descriptionTag = document.createElement('meta');
      descriptionTag.name = 'description';
      descriptionTag.content = description ?? 'Creative portfolio website.';
      document.head.appendChild(descriptionTag);
    }
  }, [title, description]);
}
