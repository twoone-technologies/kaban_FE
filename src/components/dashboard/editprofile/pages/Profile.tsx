import FormControl from '~/components/reusable/FormControl';
import InputWrap from '../../reusables/InputWrap';
import useStateCities from '~/hooks/useStateCities';
import { statesInNigeria } from '~/components/dashboard/postproperty/pages/miscellenous/mapProps';
import OptGroup from '~/components/herosection/Optgroup';
import { UseFormRegister } from 'react-hook-form';
import { EditProfileInputs } from '..';

type ProfileProps = {
  idx: number;
  register: UseFormRegister<EditProfileInputs>;
};

export default function Profile({ idx, register }: ProfileProps) {
  const { allCities, cityOptions, handleCityChange } = useStateCities();
  return (
    <fieldset className={`flex-col gap-2`}>
      <InputWrap className="flex gap-1 flex-col">
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
          type="text"
          name="realtor_service"
          register={register}
          labelText="Realtor's Service"
          placeholder="your service"
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
            type="email"
            name="email"
            readOnly
            register={register}
            labelText="Email Address"
            placeholder="your email address"
          />
          <FormControl
            as="select"
            name="Office state"
            register={register}
            labelText="Office State"
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              handleCityChange(allCities, e.target.value);
            }}
          >
            <OptGroup subItems={statesInNigeria} header={'States'} />
          </FormControl>
          <FormControl as="select" name="Office city" labelText="Office City">
            <OptGroup subItems={cityOptions} header={'Cities'} />
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
            type="number"
            name="mobile_number"
            register={register}
            labelText="Mobile"
            required={idx === 0}
            placeholder="your mobile number"
          />
          <FormControl
            as="input"
            type="number"
            name="whatsapp_number"
            register={register}
            labelText="Whatsapp"
            required={idx === 0}
            placeholder="your Whatsapp number"
          />
        </fieldset>
      </InputWrap>
    </fieldset>
  );
}
