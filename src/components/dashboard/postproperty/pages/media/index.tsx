import { ChangeEvent, useEffect, useState } from 'react';
import FormControl, {
  InputErrors,
  Register,
} from '~/components/reusable/FormControl';
import { Inputs } from '~/components/dashboard/postproperty';
import Carousel from '~/components/dashboard/postproperty/pages/media/Carousel';
import UploadImages from '~/components/dashboard/postproperty/pages/media/UploadImages';
import InputWrap from '~/components/dashboard/reusables/InputWrap';
import styles from '~/components/dashboard/postproperty/pages/miscellenous/post.module.css';
import { UseFormSetValue } from 'react-hook-form';

type MediaProps = {
  className: string;
  register: Register;
  error: InputErrors;
  activeIndex: number;
  setMinNum: React.Dispatch<React.SetStateAction<boolean>>;
  setValue: UseFormSetValue<Inputs>;
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
  register,
  error,
  setValue,
  setMinNum,
  activeIndex,
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
  const [activeImg, setActiveImg] = useState<number>(1);
  const [isDragging, setIsDragging] = useState(false);
  setValue('listingImages', JSON.stringify(images));

  useEffect(() => {
    images.length > 5 && coverImage.name != ''
      ? setMinNum(true)
      : setMinNum(false);
  }, [coverImage.name, images, setMinNum]);

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
        <div className="flex s-btw">
          <h3>Media</h3>
          <span>{`${activeImg} / ${images.length}`}</span>
        </div>
        <Carousel
          imageArr={images}
          setActiveImg={setActiveImg}
          coverImage={coverImage}
          deleteImage={deleteImage}
        />
        <UploadImages
          error={error}
          onDrop={onDrop}
          idx={activeIndex}
          register={register}
          dragging={isDragging}
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          carouselHandler={handleImage}
          coverImageHandler={handleCoverImg}
        />
        <FormControl
          as="input"
          type="text"
          name="videoUrl"
          register={register}
          labelText="Video URL"
          className={styles.input}
          registerOptions={{
            pattern: {
              value:
                /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/(?!.*watch\?)(.+)/,
              message:
                'Please enter a valid YouTube link (e.g., https://youtu.be/vdZVPS-jLpA)',
            },
          }}
          placeholder="Example: https://youtu.be/vdZVPS-jLpA"
          error={error.videoUrl && error.videoUrl.message}
          containerClass={`gap-0 f-column ${styles.areaSuffix} ${styles.inputWrap}`}
        />
      </InputWrap>
    </div>
  );
}
