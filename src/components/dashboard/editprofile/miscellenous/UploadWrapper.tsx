import { ChangeEventHandler } from 'react';
import { fileUploadIcon } from '~/assets/icons';
import styles from '~/components/dashboard/editprofile/miscellenous/pages.module.css';
import Svg from '~/components/reusable/Svg';

type Props = {
  inputId: string;
  idx: number;
  header: string;
  dragging: boolean;
  uploadInfo: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export default function UploadWrapper({
  idx,
  inputId,
  header,
  dragging,
  uploadInfo,
  onChange,
}: Props) {
  return (
    <div className="flex flex-col space-between gap-1">
      <div className={styles.inputHeader}>
        <h4>{header}*</h4>
        <span>{uploadInfo}</span>
      </div>
      <div
        className={`flex w-full f-column pad-block-2 pad-inline-1 b-radius align-x align-y ${styles.uploadWrap}`}
      >
        <Svg href={fileUploadIcon} />
        <div className={styles.upload}>
          {dragging ? (
            <span>Drop Image here</span>
          ) : (
            <label className="cursor-pointer" htmlFor={inputId}>
              <b>Click here to upload</b> or drag and drop
            </label>
          )}
          <input
            hidden
            type="file"
            id={inputId}
            name={inputId}
            onChange={onChange}
            required={idx === 3}
            accept=".jpg, .jpeg, .png"
          />
        </div>
        <span>PNG, JPG (max. 1440x900px)</span>
      </div>
    </div>
  );
}
