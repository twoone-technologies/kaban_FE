import { ChangeEvent } from 'react';
import Svg from '~/components/reusable/Svg';
import { uploadImgIcon } from '~/assets/icons';
import styles from '~/components/dashboard/postproperty/pages/miscellenous/post.module.css';
import { InputErrors, Register } from '~/components/reusable/FormControl';

type Props = {
  idx: number;
  dragging: boolean;
  error: InputErrors;
  register: Register;
  carouselHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  coverImageHandler: (e: ChangeEvent<HTMLInputElement>) => void;
} & React.ComponentProps<'div'>;

export default function UploadImages({
  idx,
  error,
  dragging,
  register,
  carouselHandler,
  coverImageHandler,
  ...rest
}: Props) {
  return (
    <div {...rest}>
      <span>Upload Images</span>
      <p className="text-red-600">
        {error?.coverImage && error?.coverImage.message}
      </p>
      <p className="text-red-600">
        {error?.listingImages && error?.listingImages.message}
      </p>
      <div
        className={`flex f-column pad-block-2 pad-inline-1 b-radius align-x align-y ${styles.uploadWrap}`}
      >
        <Svg href={uploadImgIcon} />
        <div className={styles.upload}>
          {dragging ? (
            <span>Drop Image here</span>
          ) : (
            <>
              <label className="cursor-pointer" htmlFor="listingImg">
                <b>Click here to upload</b> or drag and drop
              </label>{' '}
              <br />
              <label className="cursor-pointer" htmlFor="coverImg">
                <b>Click here to set cover image</b>
              </label>
            </>
          )}
          <input
            hidden
            multiple
            id="listingImg"
            onChange={carouselHandler}
            accept=".jpg, .jpeg, .png"
            type="file"
          />
          <input type="text" required hidden {...register('listingImages')} />
          <input
            required={idx === 1}
            hidden
            id="coverImg"
            onChange={coverImageHandler}
            accept=".jpg, .jpeg, .png"
            type="file"
          />
          <input type="text" required hidden {...register('coverImage')} />
        </div>
        <span>PNG, JPG (max. 1440x900px)</span>
      </div>
    </div>
  );
}
