'use client'

import { Inter } from 'next/font/google'
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [downloaded, setDownloaded] = useState(false);
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
    handleDownload();
  }, [])
  return (
    <div>
      {downloaded && (<p>Thanks for downloading</p>)}
    </div>
  )
}
