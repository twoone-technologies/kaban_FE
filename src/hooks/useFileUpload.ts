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

export default function useFileUpload() {
  const [coverImage, setCoverImage] = useState<ImageFile[]>([]);
  const [certificates, setCertificates] = useState<ImageFile[]>([]);
  const [images, setImages] = useState<ImageFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const handleImage = (e: ChangeEvent<HTMLInputElement>, imgArr: ImageFile[], setImgArr: React.Dispatch<React.SetStateAction<ImageFile[]>>) => {
    const files: FileList | null = e.target.files;
    console.log(files);
    if (!files || files.length === 0) return;
    for (let i = 0; i < files.length; i++) {
      const file: ImageFile = files[i];
      if (file.type.split('/')[0] === 'image' && !imgArr.some((e) => e.name === file.name)) {
        setImgArr((prev) => [
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
      if (file.type === 'application/pdf' && !imgArr.some((e) => e.name === file.name)) {
        setImgArr((prev) => [
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

  const deleteImage = (setImgArr: React.Dispatch<React.SetStateAction<ImageFile[]>>, id?: number) => {
    setImgArr((prev) => prev.filter((_, idx) => idx !== id))
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
  }, imgArr: ImageFile[], setImgArr: React.Dispatch<React.SetStateAction<ImageFile[]>>
  ) {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files.length === 0) return;
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split('/')[0] === 'image' && !imgArr.some((e) => e.name === files[i].name)) {
        setImgArr((prev) => [
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
      if (files[i].type === 'application/pdf' && !imgArr.some((e) => e.name === files[i].name)) {
        setImgArr((prev) => [
          ...prev,
          {
            id: i,
            name: files[i].name,
            url: URL.createObjectURL(files[i] as unknown as Blob),
            size: files[i].size,
            type: files[i].type,
            lastModified: files[i].lastModified,
            webkitRelativePath: files[i].webkitRelativePath,
          },
        ]);
      }
    }
  }

  return { coverImage, images, certificates, setImages, setCoverImage, setCertificates, isDragging, handleImage, handleCoverImg, deleteImage, onDragOver, onDragLeave, onDrop }
}