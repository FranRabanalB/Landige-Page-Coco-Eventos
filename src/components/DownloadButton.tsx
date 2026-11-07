import { useState, useEffect } from 'react';

export default function DownloadButton() {
  const [downloadUrl, setDownloadUrl] = useState('https://github.com/FranRabanalB/Coco-Eventos-FreeVersion/releases/latest');
  const [isLoadingLink, setIsLoadingLink] = useState(true);

  useEffect(() => {
    async function fetchLatestRelease() {
      try {
        const response = await fetch('https://api.github.com/repos/FranRabanalB/Coco-Eventos-FreeVersion/releases/latest');
        if (response.ok) {
          const data = await response.json();
          const apkAsset = data.assets.find((asset: any) => asset.name.endsWith('.apk'));
          if (apkAsset) {
            setDownloadUrl(apkAsset.browser_download_url);
          }
        }
      } catch (error) {
        console.error("Error obteniendo el link de descarga:", error);
      } finally {
        setIsLoadingLink(false);
      }
    }
    fetchLatestRelease();
  }, []);

  return (
    <a
      href={downloadUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1 bg-coco-coralStrong text-white px-8 py-3.5 rounded-full font-bold shadow-lg shadow-coco-coralStrong/30 hover:bg-coco-coral transition transform hover:-translate-y-1 flex items-center justify-center gap-2"
    >
      {isLoadingLink ? 'Cargando enlace...' : 'Descargar Android'}
    </a>
  );
}