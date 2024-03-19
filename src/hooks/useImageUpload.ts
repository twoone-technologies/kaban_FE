import { ChangeEvent, useState } from 'react'

export type ImageFile = {
  id?: number;
  name: string;
  type: string;
  size: number;
  lastModified?: number;
  lastModifiedDate?: Date;
  url?: string | undefined;
  webkitRelativePath: string;
};

export default function useImageUpload() {
  const [coverImage, setCoverImage] = useState<ImageFile[]>([]);
  const [images, setImages] = useState<ImageFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    const files: FileList | null = e.target.files;
    if (!files || files.length === 0) return;
    for (let i = 0; i < files.length; i++) {
      const file: ImageFile = files[i];
      if (file.type.split('/')[0] !== 'image') continue;
      if (!images.some((e) => e.name === file.name)) {
        setImages((prev) => [
          ...prev,
          {
            id: i,
            name: file.name,
            url: URL.createObjectURL(file as unknown as Blob),
            size: file.size,
            type: file.type,
            lastModified: file.lastModified,
            lastModifiedDate: file.lastModifiedDate,
            webkitRelativePath: file.webkitRelativePath,
          },
        ]);
      }
    }
  };

  const handleCoverImg = (e: ChangeEvent<HTMLInputElement>) => {
    const files: FileList | null = e.target.files;
    if (!files || files.length === 0) return;
    const file: ImageFile = files[0];
    setCoverImage([{
      name: file.name,
      url: URL.createObjectURL(file as unknown as Blob),
      size: file.size,
      type: file.type,
      lastModified: file.lastModified,
      lastModifiedDate: file.lastModifiedDate,
      webkitRelativePath: file.webkitRelativePath,
    }]);
  };

  const deleteImage = (id?: number) => {
    setImages((prev) => prev.filter((_, idx) => idx !== id));
    setCoverImage([]);
  };

  function onDragOver(e: {
    preventDefault: () => void;
    dataTransfer: { dropEffect: string };
  }) {
    e.preventDefault();
    setIsDragging(true);
    e.dataTransfer.dropEffect = 'copy';
  }

  function onDragLeave(e: { preventDefault: () => void }) {
    e.preventDefault();
    setIsDragging(false);
  }

  function onDrop(e: {
    preventDefault: () => void;
    dataTransfer: { files: FileList };
  }) {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files.length === 0) return;
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split('/')[0] !== 'image') continue;
      if (!images.some((e) => e.name === files[i].name)) {
        setImages((prev) => [
          ...prev,
          {
            id: i,
            name: files[i].name,
            url: URL.createObjectURL(files[i]),
            size: files[i].size,
            type: files[i].type,
            lastModified: files[i].lastModified,
            webkitRelativePath: files[i].webkitRelativePath,
          },
        ]);
      }
    }
  }

  return { coverImage, images, isDragging, handleImage, handleCoverImg, deleteImage, onDragOver, onDragLeave, onDrop }
}