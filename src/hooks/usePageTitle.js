import { useEffect } from 'react';

export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | Omni TI` : 'Omni TI | Partner tecnológico integral en Chile';
  }, [title]);
}
