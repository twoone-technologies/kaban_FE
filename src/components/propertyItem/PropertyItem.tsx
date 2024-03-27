import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Container, { Ads } from '../reusable/Container';
import { dummyObj } from '../reusable/dummyObj';
import styles from './propertyItem.module.css';
import Modal from '../reusable/modal/Modal';
import ReportForm from './itemInfo/ReportForm';
import VideoMap from './itemInfo/VideoMap';
import { HouseCard } from '../reusable/card/Card';
import Toolkit from './tools/Toolkits';
import Text from './micellenous/Text';
import GalleryAndHeader from './micellenous/GalleryAndHeader';
import PropertyDetails from './micellenous/PropertyDetails';
import DescriptionAndFeatures from './micellenous/DescriptionAndFeatures';
import AgentDetails from './micellenous/AgentDetails';
import SimilarItems from './micellenous/SimilarItems';
import Tooltip from '../reusable/Tooltip';

export default function PropertyItem() {
  const [show, setShow] = useState(false);
  const [copy, setCopy] = useState(false);
  const { id } = useParams<{ id: string }>();

  const listing = dummyObj.find((item) => parseInt(item.id) === Number(id));
  const listingItem = listing as HouseCard;
  const listingArray = dummyObj as HouseCard[];

  const filterObj = () => {
    const similarItems = listingArray.filter(
      (card) => listingItem?.property_type === card.property_type
    );
    similarItems.sort((a, b) => a.price.amount - b.price.amount);
    return similarItems;
  };

  const tooltip = () => {
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 3000);
  };

  return (
    <Container element="section" className={styles.wrapper}>
      <Modal isVisible={show} onClose={() => setShow(false)}>
        <h2>Report Listing</h2>
        <ReportForm />
      </Modal>
      <Toolkit onClick={() => setShow(true)} onCopy={tooltip} />
      <div className={`flex f-width ${styles.pg_layout}`}>
        <div className={`f-width flex f-column gap ${styles.item_details}`}>
          <GalleryAndHeader item={listingItem} />
          <PropertyDetails item={listingItem} />
          <DescriptionAndFeatures item={listingItem} />
          <VideoMap item={listingItem} properties={listingArray} />
        </div>
        <div className={`flex f-column gap ${styles.item_details}`}>
          <AgentDetails item={listingItem} object={listingArray} />
          <Text />
          <Ads adContent={<h1 className={styles.content}></h1>} />
        </div>
      </div>
      <Tooltip copy={copy} text={'Link copied to clipboard '} />
      <SimilarItems similar={filterObj()} />
      <Ads adContent={<h1 className={styles.content}></h1>} />
    </Container>
  );
}
