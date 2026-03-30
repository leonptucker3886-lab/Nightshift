"use client";

import { useEffect, useState } from "react";
import { pdf } from "@react-pdf/renderer";
import NightShiftBundlePDF from "./NightShiftBundlePDF";

function DownloadButtonInner({ blobUrl }: { blobUrl: string }) {
  return (
    <a
      href={blobUrl}
      download="2026-Night-Shift-Nurse-Survival-Bundle.pdf"
      className="inline-flex items-center gap-2 px-8 py-4 bg-[#1A7A6D] hover:bg-[#15685D] text-white rounded-lg text-lg font-semibold transition-colors"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
      Download Full Bundle (8 Pages)
    </a>
  );
}

function GeneratingState() {
  return (
    <button
      disabled
      className="inline-flex items-center gap-2 px-8 py-4 bg-[#1A7A6D]/70 text-white rounded-lg text-lg font-semibold cursor-wait"
    >
      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
        />
      </svg>
      Generating PDF...
    </button>
  );
}

export default function PDFDownloader() {
  const [blobUrl, setBlobUrl] = useState<string | null>(null);
  const [generating, setGenerating] = useState(false);

  const handleGenerate = async () => {
    setGenerating(true);
    try {
      const blob = await pdf(<NightShiftBundlePDF />).toBlob();
      const url = URL.createObjectURL(blob);
      setBlobUrl(url);
    } catch (err) {
      console.error("PDF generation failed:", err);
    } finally {
      setGenerating(false);
    }
  };

  useEffect(() => {
    return () => {
      if (blobUrl) URL.revokeObjectURL(blobUrl);
    };
  }, [blobUrl]);

  if (blobUrl) {
    return <DownloadButtonInner blobUrl={blobUrl} />;
  }

  if (generating) {
    return <GeneratingState />;
  }

  return (
    <button
      onClick={handleGenerate}
      className="inline-flex items-center gap-2 px-8 py-4 bg-[#1A7A6D] hover:bg-[#15685D] text-white rounded-lg text-lg font-semibold transition-colors cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
      Generate & Download Full Bundle
    </button>
  );
}
