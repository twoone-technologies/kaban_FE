import { useEffect, useState } from 'react';
import FormControl, {
  InputErrors,
  Register,
} from '~/components/reusable/FormControl';
import { UseFormSetValue } from 'react-hook-form';
import { Inputs } from '~/components/dashboard/postproperty';
import InputWrap from '~/components/dashboard/reusables/InputWrap';
import Carousel from '~/components/dashboard/postproperty/pages/media/Carousel';
import UploadImages from '~/components/dashboard/postproperty/pages/media/UploadImages';
import styles from '~/components/dashboard/postproperty/pages/miscellenous/post.module.css';
import useImageUpload from '~/hooks/useImageUpload';

type MediaProps = {
  className: string;
  register: Register;
  error: InputErrors;
  activeIndex: number;
  setValue: UseFormSetValue<Inputs>;
  setMinNum: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Media({
  className,
  register,
  error,
  setValue,
  setMinNum,
  activeIndex,
}: MediaProps) {
  const {
    coverImage,
    images,
    isDragging,
    handleImage,
    handleCoverImg,
    deleteImage,
    onDragOver,
    onDragLeave,
    onDrop,
  } = useImageUpload();
  setValue('listingImages', JSON.stringify(images));
  setValue('coverImage', JSON.stringify(coverImage));
  const [activeImg, setActiveImg] = useState<number>(1);

  useEffect(() => {
    images.length > 5 && coverImage.length > 0
      ? setMinNum(true)
      : setMinNum(false);
  }, [coverImage, images, setMinNum]);

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <InputWrap>
        <div className="flex s-btw">
          <h3>Media</h3>
          <span>{`${activeImg + 1} / ${images.length + 1}`}</span>
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
