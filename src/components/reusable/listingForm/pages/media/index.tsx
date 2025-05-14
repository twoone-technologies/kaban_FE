import { useEffect, useState } from 'react';
import FormControl, {
  InputErrors,
  Register,
} from '~/components/reusable/FormControl';
import { UseFormSetValue } from 'react-hook-form';
import { Inputs } from '~/components/reusable/listingForm';
import InputWrap from '~/components/dashboard/reusables/InputWrap';
import Carousel from '~/components/reusable/listingForm/pages/media/Carousel';
import UploadImages from '~/components/reusable/listingForm/pages/media/UploadImages';
import styles from '~/components/reusable/listingForm/pages/miscellenous/listingForm.module.css';
import useImageUpload from '~/hooks/useFileUpload';
import { Listing } from '~/utils/types/listing.types';

type MediaProps = {
  className: string;
  register: Register;
  listing: Listing;
  error: InputErrors;
  activeIndex: number;
  setValue: UseFormSetValue<Inputs>;
  setMinNum: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Media({
  className,
  register,
  error,
  listing,
  setValue,
  setMinNum,
  activeIndex,
}: MediaProps) {
  const {
    coverImage,
    images,
    setImages,
    isDragging,
    handleImage,
    setCoverImage,
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
    images.length >= 4 || listing?.images.length >= 4 && (coverImage.length > 0 || listing?.cover_image)
      ? setMinNum(true)
      : setMinNum(false);
  }, [coverImage, images, listing?.cover_image, listing?.images.length, setMinNum]);

  return (
    <div className={className}>
      <InputWrap>
        <div className="flex s-btw">
          <h3>Images</h3>
          {listing?.images.length > 0 || images.length > 0 ? <span>{`${activeImg + 1} / ${listing?.images.length +1 || images.length}`}</span> : ''}
        </div>
        <h4>Upload Images</h4>
        {images.length <= 4 || listing?.images.length <= 4 && <span className='text-red-500'>Please upload at least 6 images</span>}
        <Carousel
          listing={listing}
          imageArr={images}
          coverImage={coverImage}
          setCoverImg={setCoverImage}
          setListingImg={setImages}
          setActiveImg={setActiveImg}
          deleteImage={deleteImage}
        />
        <UploadImages
          error={error}
          image={images}
          setImg={setImages}
          idx={activeIndex}
          register={register}
          dragging={isDragging}
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          carouselHandler={handleImage}
          coverImageHandler={handleCoverImg}
          onDrop={(e) => onDrop(e, images, setImages)}
        />
        <FormControl
          as="input"
          type="text"
          name="videoUrl"
          register={register}
          labelText="Video URL"
          className={styles.input}
          defaultValue={listing?.videoLink}
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
