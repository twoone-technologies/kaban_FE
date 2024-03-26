import { Wrapper } from '~/components/reusable/Container';
import styles from './edit.module.css';
import useTabulation from '~/hooks/useTabulation';
import { profileHeaders } from './edit';
import Tabulation from '~/components/reusable/tabulation/Tabulation';
import { ActionFunctionArgs, Form } from 'react-router-dom';
import SocialMedia from './pages/SocialMedia';
import Password from './pages/Password';
import Verification from './pages/Verification';
import Deactivation from './pages/Deactivation';
import Profile from './pages/Profile';
import ProfileHeader from './pages/ProfileHeader';
import UpdateOrDeactivateBtn from './miscellenous/UpdateOrDeactivateBtn';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const govt_issued_id = formData.getAll('govt_issued_id');
  const agent_image = formData.getAll('agent_image');
  const realtors_certificates = formData.getAll('realtors_certificates');
  const newArray: [string, File][] = [];

  if (
    agent_image &&
    agent_image.length > 0 &&
    typeof agent_image[0] === 'string' &&
    agent_image[0].trim() !== ''
  ) {
    const agent_Image = JSON.parse(agent_image[0]) as File[];
    const agentImgFile = new File([agent_Image[0]], agent_Image[0].name, {
      type: agent_Image[0].type,
    });
    newArray.push(['agent_Image', agentImgFile]);
  }

  if (govt_issued_id !== undefined || null) {
    govt_issued_id.forEach((file) => {
      const fileObject = JSON.parse(file as string) as File[];
      fileObject.forEach((item) => {
        const newFile = new File([item], item.name, { type: item.type });
        newArray.push(['govt_issued_id', newFile]);
      });
    });
  }

  if (realtors_certificates) {
    realtors_certificates.forEach((file) => {
      const fileObject = JSON.parse(file as string) as File[];
      fileObject.forEach((item) => {
        const newFile = new File([item], item.name, { type: item.type });
        newArray.push(['realtors_certificates', newFile]);
      });
    });
  }
  formData.delete('realtors_certificates');
  formData.delete('govt_issued_id');
  formData.delete('agent_image');

  const finalFormData = [...formData.entries(), ...newArray];
  // Push finalFormData to backend
  console.log(...finalFormData);
  // Return error object if validation fails
  return 'success';
}

export type EditProfileInputs = {
  agent_image: string;
  full_name: string;
  realtor_service: string;
  service_area: string;
  bio: string;
  email: string;
  office_state: string;
  office_city: string;
  office_address: string;
  mobile_number: string;
  whatsapp_number: string;
  facebook: string;
  x: string;
  linkedin: string;
  instagram: string;
  youtube: string;
  tiktok: string;
  current_password: string;
  new_password: string;
  confirm_password: string;
  govt_issued_id: string;
  realtors_certificates: string;
  deactivation_reason: string;
};

export default function Edit() {
  const { activeIndex, prevId, handleHeaderClick } = useTabulation(150);
  const [minDocx, setMinDocx] = useState(false);

  const underlineStyle = {
    transform: `translateX(${prevId}px)`,
  };

  const {
    register,
    setValue,
    formState: { errors, isValid },
  } = useForm<EditProfileInputs>({
    mode: 'all',
  });

  console.log(isValid, minDocx);
  return (
    <Wrapper element="section" className={styles.wrapper}>
      <Tabulation
        className={styles.tabulation}
        headerArr={profileHeaders}
        idx={activeIndex}
        style={underlineStyle}
        headerSwitch={handleHeaderClick}
      />
      <Form
        method="post"
        encType="application/form-data"
        className="flex flex-col gap-2"
      >
        <ProfileHeader
          id={activeIndex}
          setValue={setValue}
          register={register}
        />
        {activeIndex === 0 && <Profile idx={activeIndex} register={register} />}
        {activeIndex === 1 && <SocialMedia register={register} />}
        {activeIndex === 2 && (
          <Password errors={errors} idx={activeIndex} register={register} />
        )}
        {activeIndex === 3 && (
          <Verification
            setMinNum={setMinDocx}
            setValue={setValue}
            idx={activeIndex}
            register={register}
          />
        )}
        {activeIndex === 4 && <Deactivation register={register} />}
        {activeIndex !== 4 && (
          <UpdateOrDeactivateBtn
            minNum={minDocx}
            isValid={isValid}
            idx={activeIndex}
          />
        )}
      </Form>
    </Wrapper>
  );
}
