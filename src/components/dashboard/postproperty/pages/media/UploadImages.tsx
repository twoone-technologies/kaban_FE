import { ChangeEvent } from 'react';
import Svg from '~/components/reusable/Svg';
import { uploadImgIcon } from '~/assets/icons';
import { useActionData } from 'react-router-dom';
import { ErrorObj } from '~/components/dashboard/postproperty';
import styles from '~/components/dashboard/postproperty/pages/miscellenous/post.module.css';

type Props = {
  dragging: boolean;
  carouselHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  coverImageHandler: (e: ChangeEvent<HTMLInputElement>) => void;
} & React.ComponentProps<'div'> 

export default function UploadImages({
  dragging,
  carouselHandler,
  coverImageHandler,
  ...rest
}: Props) {
  const errors = useActionData() as ErrorObj;
  return (
    <div {...rest}>
      <span>Upload Images</span>
      <p className="text-red-600">
        {errors?.coverImg != undefined ? errors.coverImg[0] : ''}
      </p>
      <p className="text-red-600">
        {errors?.listingImg != undefined ? errors.listingImg[0] : ''}
      </p>
      <div
        className={`flex f-column pad-block-2 pad-inline-1 b-radius align-x align-y ${styles.uploadWrap}`}
      >
        <Svg href={uploadImgIcon} />
        <div className={styles.upload}>
          {dragging ? (
            <span>Drop Image here</span>
          ) : (
            <span>
              <b>Click here to upload</b> or drag and drop <br />
              <b>Click here to set cover image</b>
            </span>
          )}
          <input
            multiple
            className={styles.fileInput}
            name="listingImg"
            accept=".jpg, .jpeg, .png"
            type="file"
            onChange={carouselHandler}
          />
          <input
            className={styles.coverFileInput}
            name="coverImg"
            accept=".jpg, .jpeg, .png"
            type="file"
            onChange={coverImageHandler}
          />
        </div>
        <span>PNG, JPG (max. 1440x900px)</span>
      </div>
    </div>
  );
}
