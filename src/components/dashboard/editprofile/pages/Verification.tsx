import { useEffect, useState } from 'react';
import InputWrap from '../../reusables/InputWrap';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import UploadWrapper from '../miscellenous/UploadWrapper';
import useFileUpload, { ImageFile } from '~/hooks/useFileUpload';
import { UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { EditProfileInputs } from '..';
import Carousel from '~/components/reusable/listingForm/pages/media/Carousel';
import { Realtor } from '~/utils/types/realtor.types';

type VerificationProps = {
  idx: number;
  realtor: Realtor | undefined;
  register: UseFormRegister<EditProfileInputs>;
  setValue: UseFormSetValue<EditProfileInputs>;
  setMinNum: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Verification({
  idx,
  register,
  setMinNum,
  setValue,
  realtor
}: VerificationProps) {
  const {
    handleImage,
    images,
    setImages,
    deleteImage,
    certificates,
    setCertificates,
    isDragging,
  } = useFileUpload();

  const [pdf, setPdf] = useState<ImageFile>({} as ImageFile);
  setValue('govt_issued_id', JSON.stringify(images));
  setValue('realtors_certificates', JSON.stringify(certificates));
  useEffect(() => {
    images.length > 0 || certificates.length > 0
      ? setMinNum(true)
      : setMinNum(false);
  }, [certificates, images, setMinNum]);

  return (
    <div className={`flex gap-1 flex-col`}>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        {pdf.url && (
          <div
            style={{
              border: '1px solid rgba(0, 0, 0, 0.3)',
              height: '500px',
            }}
          >
            <Viewer fileUrl={pdf.url} />
          </div>
        )}
      </Worker>
      <Carousel
        setPdfFile={setPdf}
        imageArr={images}
        setListingImg={setImages}
        certArr={certificates}
        setCertImg={setCertificates}
        deleteImage={deleteImage}
      />
      <InputWrap>
        <h3>Upload Verification Documents</h3>
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-1 flex-col`}>
          <UploadWrapper
            idx={idx}
            register={register}
            dragging={isDragging}
            inputId="govt_issued_id"
            header={'Govt. Issued ID'}
            uploadInfo={
              'CAC Document, National ID Card, Voter’s Card, Driver’s License, NIN Slip.'
            }
            onChange={(e) => handleImage(e, images, setImages)}
          />
          <UploadWrapper
            idx={idx}
            register={register}
            inputId="realtors_certificates"
            header={'Realtor’s Certification'}
            dragging={isDragging}
            uploadInfo={
              'Real estate training certificate from a credible institution, REDAN, ESVARBON, NIESV, ERCAAN.'
            }
            onChange={(e) => handleImage(e, certificates, setCertificates)}
          />
        </div>
      </InputWrap>
    </div>
  );
}
