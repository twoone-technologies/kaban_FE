import FormControl from '~/components/reusable/FormControl';
import InputWrap from '../../reusables/InputWrap';
import { useState } from 'react';
import { useAppSelector } from '~/api/hooks';
import { useGetRealtorQuery } from '~/api/features/realtor';

export default function SocialMedia() {
  const [socialLinks, setSocialLinks] = useState({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setSocialLinks((prevLinks) => ({
      ...prevLinks,
      [name]: value,
    }));
  };
  const authState = useAppSelector((state) => state.auth);
  const { data } = useGetRealtorQuery(authState.realtor.id || '');
  console.log(data);

  return (
    <InputWrap>
      <h3>Social Media</h3>
      <fieldset className={`grid grid-cols-1 md:grid-cols-2 gap-1 flex-col`}>
        <FormControl
          as="input"
          type="text"
          name="facebook"
          onChange={handleInputChange}
          labelText="Facebook"
          placeholder="your facebook link"
          defaultValue={data?.socials?.facebook}
        />
        <FormControl
          as="input"
          type="text"
          name="twitter"
          onChange={handleInputChange}
          labelText="Twitter"
          placeholder="your X link"
          defaultValue={data?.socials?.twitter}
        />
        <FormControl
          as="input"
          type="text"
          name="linkedin"
          onChange={handleInputChange}
          labelText="LinkedIn"
          placeholder="your linkedin link"
          defaultValue={data?.socials?.linkedin}
        />
        <FormControl
          as="input"
          type="text"
          name="Instagram"
          onChange={handleInputChange}
          labelText="Instagram"
          placeholder="your instagram link"
          defaultValue={data?.socials?.instagram}
        />
        <FormControl
          as="input"
          type="text"
          name="youtube"
          onChange={handleInputChange}
          labelText="Youtube"
          placeholder="your youtube link"
          defaultValue={data?.socials?.youtube}
        />
        <FormControl
          as="input"
          type="text"
          name="tiktok"
          onChange={handleInputChange}
          labelText="TikTok"
          placeholder="your TikTok link"
          defaultValue={data?.socials?.tiktok}
        />
        <input
          type="text"
          hidden
          readOnly
          name="socials"
          value={socialLinks && JSON.stringify(socialLinks)}
        />
      </fieldset>
    </InputWrap>
  );
}
