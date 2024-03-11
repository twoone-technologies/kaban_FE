import { ChangeEvent, useState } from 'react';
import { useActionData } from 'react-router-dom';
import FormControl from '~/components/reusable/FormControl';
import { ErrorObj } from '~/components/dashboard/postproperty';
import Carousel from '~/components/dashboard/postproperty/pages/media/Carousel';
import UploadImages from '~/components/dashboard/postproperty/pages/media/UploadImages';
import InputWrap from '~/components/dashboard/reusables/InputWrap';
import styles from '~/components/dashboard/postproperty/pages/miscellenous/post.module.css';
import ContinueOrCancel from '~/components/dashboard/postproperty/pages/miscellenous/ContinueOrCancel';

type MediaProps = {
  className: string;
  activeIndex: number;
  setNewIndex: (num: number) => void;
};

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

export default function Media({
  className,
  activeIndex,
  setNewIndex,
}: MediaProps) {
  const [coverImage, setCoverImage] = useState<ImageFile>({
    name: '',
    url: '',
    size: 0,
    type: '',
    lastModified: undefined,
    lastModifiedDate: undefined,
    webkitRelativePath: '',
  });
  const [images, setImages] = useState<ImageFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const errors = useActionData() as ErrorObj;

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    const files: FileList | null = e.target.files;
    console.log(files);
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
            cover: false,
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
    setCoverImage({
      ...file,
      name: file.name,
      url: URL.createObjectURL(file as unknown as Blob),
      size: file.size,
      type: file.type,
      lastModified: file.lastModified,
      lastModifiedDate: file.lastModifiedDate,
      webkitRelativePath: file.webkitRelativePath,
    });
  };

  const deleteImage = (id: number) => {
    setImages((prev) => prev.filter((_, idx) => idx !== id));
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
            cover: false,
            size: files[i].size,
            type: files[i].type,
            lastModified: files[i].lastModified,
            webkitRelativePath: files[i].webkitRelativePath,
          },
        ]);
      }
    }
  }

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <InputWrap>
        <h3>Media</h3>
        <Carousel
          imageArr={images}
          coverImage={coverImage}
          deleteImage={deleteImage}
        />
        <UploadImages
          onDrop={onDrop}
          dragging={isDragging}
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          carouselHandler={handleImage}
          coverImageHandler={handleCoverImg}
        />
        <h3>Video URL</h3>
        <FormControl
          as="input"
          type="text"
          name="videoUrl"
          className={styles.input}
          placeholder="Example: https://youtu.be/vdZVPS-jLpA"
          error={errors?.videoUrl != undefined ? errors.videoUrl[0] : ''}
          containerClass={`gap-0 f-column ${styles.areaSuffix} ${styles.inputWrap}`}
        />
      </InputWrap>
      <ContinueOrCancel activeIndex={activeIndex} setNewIndex={setNewIndex} />
    </div>
  );
}
