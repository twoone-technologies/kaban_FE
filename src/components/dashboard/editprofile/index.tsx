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
import { useAppSelector } from '~/api/hooks';
import { editRealtor, useGetRealtorQuery } from '~/api/features/realtor';
import { prepareRealtorDto } from './pages/prepareDto';
import { ThreeDots } from '~/components/reusable/Button';

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  console.log(...prepareRealtorDto(formData));
  const user = formData.get('user_id')?.toString();
  // handle no user id,
  if (!user) {
    return { error: 'user id is required' };
  }
  // Push finalFormData to backend
  try {
    await editRealtor(prepareRealtorDto(formData), user).unwrap();
  } catch (error) {
    console.log(error);
    return { error: 'signup is unsuccessful' };
  }

  // console.log(...finalFormData);
  // Return error object if validation fails
  return 'success';
}

export type EditProfileInputs = {
  bio: string;
  company: string;
  mobile_number: string;
  office_address: string;
  realtor_pic: string;
  service_area: string;
  email: string;
  office_state: string;
  office_city: string;
  whatsapp_number: string;
  current_password: string;
  new_password: string;
  confirm_password: string;
  govt_issued_id: string;
  realtors_certificates: string;
  deactivation_reason: string;
};

export default function EditProfile() {
  const { activeIndex, prevId, handleHeaderClick } = useTabulation(150);
  const [minDocx, setMinDocx] = useState(false);
  const { realtor } = useAppSelector((state) => state.auth);
  const { data, isLoading, isSuccess } = useGetRealtorQuery(
    realtor.id || '',
  );
  console.log(data, isLoading, isSuccess);

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

  return (
    <Wrapper element="section" className={styles.wrapper}>
      <Tabulation
        className={styles.tabulation}
        headerArr={profileHeaders}
        idx={activeIndex}
        style={underlineStyle}
        headerSwitch={handleHeaderClick}
      />
      {!isSuccess ? <ThreeDots className='loadingState' /> : 
      <Form
        method="post"
        encType="application/form-data"
        className="flex flex-col gap-2"
      >
        <input name="user_id" type="hidden" value={realtor.id} />
        {activeIndex === 0 && (
          <ProfileHeader setValue={setValue} />
          )}
        {activeIndex === 0 && !isLoading && (
          <Profile realtor={data} idx={activeIndex} register={register} />
        )}
        {activeIndex === 1 && <SocialMedia />}
        {activeIndex === 2 && (
          <Verification
            realtor={data}
            setMinNum={setMinDocx}
            setValue={setValue}
            idx={activeIndex}
            register={register}
          />
        )}
        {activeIndex === 3 && (
          <Password errors={errors} idx={activeIndex} register={register} />
        )}
        {activeIndex === 4 && <Deactivation register={register} />}
        {activeIndex !== 4 && (
          <UpdateOrDeactivateBtn
            minNum={minDocx}
            isValid={isValid}
            idx={activeIndex}
          />
        )}
      </Form>}
    </Wrapper>
  );
}
