import { useEffect, useState } from 'react';
import InputWrap from '../../reusables/InputWrap';
import UploadWrapper from '../miscellenous/UploadWrapper';
import useFileUpload from '~/hooks/useFileUpload';
import { Realtor } from '~/utils/types/realtor.types';
import { useAppSelector } from '~/api/hooks';
import { useGetRealtorQuery } from '~/api/features/realtor';
import Modal from '~/components/reusable/modal/Modal';
import styles from '~/components/dashboard/editprofile/miscellenous/pages.module.css';

type VerificationProps = {
  idx: number;
  realtor: Realtor | undefined;
  setMinNum: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Verification({
  idx,
  setMinNum,
}: VerificationProps) {
  const {
    coverImage,
    isDragging,
    certificate,
    handleCoverImg,
    handleDocuments,
  } = useFileUpload();

  const [preview, setPreview] = useState<{
    type: string;
    modalState: boolean;
  }>({ type: '', modalState: false });
  useEffect(() => {
    coverImage.length > 0 && certificate.length > 0
      ? setMinNum(true)
      : setMinNum(false);
  }, [certificate, coverImage, setMinNum]);
  const authState = useAppSelector((state) => state.auth);
  const { data } = useGetRealtorQuery(authState.realtor.id || '');

  const handleFiles = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    const inputElement = e.target as HTMLInputElement;
    const file = inputElement.id;
    setPreview({ type: file, modalState: true });
  };

  console.log(coverImage, certificate);

  return (
    <div className={`flex gap-1 flex-col`}>
      {(coverImage.length > 0 ||
        certificate.length > 0 ||
        data?.kyc.government_id ||
        data?.kyc.realtor_certification) && (
        <InputWrap>
          <h3>Docs</h3>
          <ul className='list-disc pl-4'>
            <li
              onClick={handleFiles}
              id={data?.kyc.government_id}
              className="cursor-pointer text-base"
            >
              {coverImage[0]?.name || 'Government Id'}
            </li>
            <li
              onClick={handleFiles}
              id={data?.kyc.realtor_certification}
              className="cursor-pointer text-base"
            >
              {certificate[0]?.name || 'Realtor Certification'}
            </li>
          </ul>
        </InputWrap>
      )}
      <Modal
        isVisible={preview.modalState}
        className={styles.unset}
        closeModal={() => setPreview({ ...preview, modalState: false })}
      >
        <h3 className="mb-1 text-lg">
          {preview.type.split('/')[8] === 'government_id'
            ? 'Government Identification'
            : 'Realtor Certification'}
        </h3>
        <img src={preview.type} alt="id" />
      </Modal>
      <InputWrap>
        <h3>Upload Verification Documents</h3>
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-1 flex-col`}>
          <UploadWrapper
            idx={idx}
            dragging={isDragging}
            inputId="government_id"
            header={'Govt. Issued ID'}
            uploadInfo={
              'CAC Document, National ID Card, Voter’s Card, Driver’s License, NIN Slip.'
            }
            onChange={handleCoverImg}
          />
          <UploadWrapper
            idx={idx}
            inputId="realtor_certification"
            header={'Realtor’s Certification'}
            dragging={isDragging}
            uploadInfo={
              'Real estate training certificate from a credible institution, REDAN, ESVARBON, NIESV, ERCAAN.'
            }
            onChange={handleDocuments}
          />
        </div>
      </InputWrap>
    </div>
  );
}
