import InputWrap from '../reusables/InputWrap';
import Button from '~/components/reusable/Button';
import { Wrapper } from '~/components/reusable/Container';
import styles from './edit.module.css';
import CardAgentInfo from '~/components/reusable/card/CardAgentInfo';
import { ChangeEvent, useState } from 'react';
import { ImageFile } from '../postproperty/pages/media';
import useTabulation from '~/hooks/useTabulation';
import { profileHeaders } from './edit';
import Tabulation from '~/components/reusable/tabulation/Tabulation';

export default function Edit() {
  // const errors = useActionData() as ErrorObj;
  const { activeIndex, prevId, handleHeaderClick } =
    useTabulation(150);
  // let pace = 0;

  // useEffect(() => {
  //   if (errors?.title || errors?.description || errors?.price)
  //     setActiveIndex(0);
  //   else if (errors?.upload || errors?.videoUrl) setActiveIndex(1);
  //   else if (errors?.address) setActiveIndex(2);
  // }, [errors]);

  const underlineStyle = {
    transform: `translateX(${prevId}px)`,
  };

  const [coverImage, setCoverImage] = useState<ImageFile>({
    name: '',
    url: '',
    size: 0,
    type: '',
    lastModified: undefined,
    lastModifiedDate: undefined,
    webkitRelativePath: '',
  });
  const handleCoverImg = (e: ChangeEvent<HTMLInputElement>) => {
    const files: FileList | null = e.target.files;
    if (!files || files.length === 0) return;
    const file: ImageFile = files[0];
    setCoverImage({
      ...file,
      name: file.name,
      url: URL.createObjectURL(file as unknown as Blob),
      size: file.size,
      type: file.type,
      lastModified: file.lastModified,
      lastModifiedDate: file.lastModifiedDate,
      webkitRelativePath: file.webkitRelativePath,
    });
  };

  return (
    <Wrapper element="section" className={styles.wrapper}>
      <Tabulation 
        className={styles.tabulation}
        headerArr={profileHeaders}
        idx={activeIndex}
        style={underlineStyle}
        headerSwitch={handleHeaderClick}
      />
      <InputWrap className={`flex s-btw flex-col sm:flex-row ${styles.agentProfileInfo}`}>
        <CardAgentInfo
          className={styles.cardAgentInfo}
          src={coverImage.url}
          star={3}
          identity={
            <div>
              <h3 className="text-xl">Victor Pop</h3>
              <span>pop@gmail.com</span>
            </div>
          }
        />
        <div className="relative flex align-y gap">
          <Button className={styles.btn} type="button">
            Upload picture
          </Button>
          <Button className={styles.btn} type="button">
            Remove
          </Button>
          <input
            className={styles.agentFileInput}
            name="agentImg"
            accept=".jpg, .jpeg, .png"
            type="file"
            onChange={handleCoverImg}
          />
        </div>
      </InputWrap>
    </Wrapper>
  );
}
