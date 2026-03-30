"use client";

import dynamic from "next/dynamic";

const PDFDownloader = dynamic(() => import("./PDFDownloader"), {
  ssr: false,
});

export default function DownloadSection() {
  return <PDFDownloader />;
}
