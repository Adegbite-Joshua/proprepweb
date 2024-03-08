'use client'

import { Inter } from 'next/font/google';
import { useEffect, useRef, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [downloaded, setDownloaded] = useState(false);
  const isMountedRef = useRef(true);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/proprep.apk';
    link.download = 'proprep.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDownloaded(true);
  };

  useEffect(() => {
    isMountedRef.current = true;

    if (isMountedRef.current) {
      handleDownload();
    }

    return () => {
      isMountedRef.current = false;
    };
  }, []);

  return (
    <div>
    <p>PROPREP</p>
      {downloaded && <p>Thanks for downloading</p>}
    </div>
  );
}
