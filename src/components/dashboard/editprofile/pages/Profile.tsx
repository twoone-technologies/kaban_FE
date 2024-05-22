import FormControl from '~/components/reusable/FormControl';
import InputWrap from '../../reusables/InputWrap';
import { statesInNigeria } from '~/components/reusable/listingForm/pages/miscellenous/mapProps';
import OptGroup from '~/components/herosection/Optgroup';
import { UseFormRegister } from 'react-hook-form';
import { EditProfileInputs } from '..';
import Checkbox from '~/components/searchForm/checkbox/Checkbox';
import { useState } from 'react';

type ProfileProps = {
  idx: number;
  register: UseFormRegister<EditProfileInputs>;
};

export default function Profile({ idx, register }: ProfileProps) {
  const [company, setCompany] = useState(true);
  const [contact, setContact] = useState(true);
  const [whatsappNum, setWhatsappNum] = useState('');

  return (
    <fieldset className={`flex-col gap-8`}>
      <InputWrap className="flex gap-1 flex-col mb-7">
        <h3>Profile</h3>
        <FormControl
          as="input"
          type="text"
          name="full_name"
          register={register}
          labelText="Full Name"
          placeholder="your full name"
        />
        <FormControl
          as="input"
          type="email"
          name="email"
          readOnly
          register={register}
          labelText="Email Address"
          placeholder="your email address"
        />
        <FormControl
          as="textarea"
          name="bio"
          register={register}
          labelText="Bio"
          placeholder="Tell us about yourself"
        />
      </InputWrap>
      <InputWrap>
        <h3>Contact</h3>
        <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-1 flex-col">
          <FormControl
            as="input"
            type="text"
            name="company"
            value={company ? 'Freelance Agent' : undefined}
            register={register}
            labelText="Company Name"
            placeholder="your company"
            icon={<Checkbox title1={'FreeLance Agent'} onChange={() => setCompany(prev => !prev)} checked={company} />}
          />
          <FormControl
            as="select"
            name="service_area"
            register={register}
            required={idx === 0}
            labelText="Service Area"
          >
            <OptGroup subItems={statesInNigeria} header={'States'} />
          </FormControl>
          <FormControl
            as="input"
            name="Office Address"
            register={register}
            labelText="Office Address"
            placeholder="your office address"
          />
          <FormControl
            as="input"
            type="tel"
            name="mobile_number"
            register={register}
            registerOptions={{
              onChange: (e) => setWhatsappNum(e.target.value),
            }}
            labelText="Mobile"
            required={idx === 0}
            placeholder="your mobile number"
            />
          <FormControl
            as="input"
            type="tel"
            value={contact ? whatsappNum : undefined}
            name="whatsapp_number"
            register={register}
            labelText="Whatsapp"
            required={idx === 0}
            placeholder="your Whatsapp number"
            icon={<Checkbox title1={'Same as Mobile'} onChange={() => setContact(prev => !prev)} checked={contact} />}
          />
        </fieldset>
      </InputWrap>
    </fieldset>
  );
}
