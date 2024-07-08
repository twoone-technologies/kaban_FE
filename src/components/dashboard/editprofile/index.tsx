import { Wrapper } from '~/components/reusable/Container';
import useTabulation from '~/hooks/useTabulation';
import { profileHeaders } from './edit';
import Tabulation from '~/components/reusable/tabulation/Tabulation';
import { ActionFunctionArgs, Form, useActionData, useNavigation } from 'react-router-dom';
import SocialMedia from './pages/SocialMedia';
import Password from './pages/Password';
import Verification from './pages/Verification';
import Deactivation from './pages/Deactivation';
import Profile from './pages/Profile';
import ProfileHeader from './pages/ProfileHeader';
import UpdateOrDeactivateBtn from './miscellenous/UpdateOrDeactivateBtn';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useAppSelector } from '~/api/hooks';
import { editRealtor, useGetRealtorQuery } from '~/api/features/realtor';
import { preparePasswordDto, prepareRealtorDto } from './pages/prepareDto';
import { ThreeDots } from '~/components/reusable/Button';
import { updatePassword } from '~/api/features/password';
import Tooltip from '~/components/reusable/Tooltip';

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const intent = formData.get('intent');
  const user = formData.get('user_id')?.toString();
  const realtor = formData.get('realtor_id')?.toString();
  console.log(...formData);
  switch (intent) {
    case 'password':
      if (!user) return { error: 'user id is required' };
      try {
        const res = await updatePassword(preparePasswordDto(formData), user).unwrap();
        return res;
      } catch (error) {
        return { error: 'password is unsuccessful'};
      }
    case 'deactivate_account':
      return 'deactivate account';
    default:
      // handle no user id,
      if (!realtor) return { error: 'realtor id is required' };
      // Push finalFormData to backend
      try {
        await editRealtor(prepareRealtorDto(formData), realtor).unwrap();
      } catch (error) {
        return { error: 'edit is unsuccessful' };
      }
  }
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
  const itemWidth = 150
  const { activeIndex, prevId, handleHeaderClick } = useTabulation(itemWidth);
  const [minDocx, setMinDocx] = useState(false);
  const { realtor } = useAppSelector((state) => state.auth);
  const { data, isLoading, isSuccess } = useGetRealtorQuery(realtor.id || '');
  const [alertState, setAlertState] = useState(false);
  const res = useActionData() as { message?: string; error?: string };
  const { state } = useNavigation();
  
  useEffect(() => {
    if (res?.message) setAlertState(true);
    const timeoutId = setTimeout(() => {
      setAlertState(false);
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [state]);

  const {
    register,
    formState: { errors, isValid },
  } = useForm<EditProfileInputs>({
    mode: 'all',
  });

  return (
    <Wrapper element="section">
      <Tabulation
        idx={activeIndex}
        activeTab={prevId}
        headerWidth={itemWidth}
        headerArr={profileHeaders}
        headerSwitch={handleHeaderClick}
      />
      {!isSuccess ? (
        <ThreeDots className="loadingState" />
      ) : (
        <Form
          method="post"
          encType="application/form-data"
          className="flex flex-col gap-2"
        >
          <input name="realtor_id" type="hidden" value={realtor.id} />
          <input name="user_id" type="hidden" value={data.user.id} />
          {activeIndex === 0 && <ProfileHeader />}
          {activeIndex === 0 && !isLoading && (
            <Profile realtor={data} idx={activeIndex} register={register} />
          )}
          {activeIndex === 1 && <SocialMedia />}
          {activeIndex === 2 && (
            <Verification
              realtor={data}
              setMinNum={setMinDocx}
              idx={activeIndex}
            />
          )}
          {activeIndex === 3 && (
            <Password errors={errors} idx={activeIndex} register={register} />
          )}
          {activeIndex === 4 && <Deactivation register={register} />}
          {activeIndex !== 4 && (
            <UpdateOrDeactivateBtn
              minNum={minDocx}
              isLoading={isLoading}
              state={state}
              isValid={isValid}
              idx={activeIndex}
            />
          )}
        <Tooltip copy={alertState} popOver={true} text={res?.message} />
        </Form>
      )}
    </Wrapper>
  );
}
