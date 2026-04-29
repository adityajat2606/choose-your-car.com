"use client";

import { useState } from "react";
import { ContentImage } from "@/components/shared/content-image";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export function PhotoLightboxGallery({
  photos,
  title,
}: {
  photos: string[];
  title: string;
}) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!photos.length) return null;

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {photos.map((photo, index) => (
          <button
            key={`${photo}-${index}`}
            type="button"
            className="group relative aspect-[4/3] overflow-hidden rounded-md border border-slate-200 bg-slate-100"
            onClick={() => {
              setActiveIndex(index);
              setOpen(true);
            }}
          >
            <ContentImage
              src={photo}
              alt={`${title} photo ${index + 1}`}
              fill
              className="object-cover transition duration-300 group-hover:scale-105"
              intrinsicWidth={960}
              intrinsicHeight={720}
            />
          </button>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl border-slate-300 bg-black p-2 sm:p-3">
          <DialogTitle className="sr-only">{title} photo preview</DialogTitle>
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm bg-black">
            <ContentImage
              src={photos[activeIndex]}
              alt={`${title} enlarged photo ${activeIndex + 1}`}
              fill
              className="object-contain"
              intrinsicWidth={1920}
              intrinsicHeight={1200}
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

