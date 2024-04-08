import { ActionFunctionArgs } from 'react-router-dom';
import { dummyObj } from '~/components/reusable/dummyObj';
import { HouseCard } from '~/components/reusable/card/Card';
import ListingForm from '~/components/reusable/listingForm';

export type ErrorObj = {
  [fieldName: string]: string[];
};

export type Inputs = {
  title: string;
  status: string;
  category: string;
  type: string;
  description: string;
  salesRentPrice: number;
  priceSuffix: string;
  areaSize: number;
  coverImage: string;
  listingImages: string;
  videoUrl?: string;
  state: string;
  city: string;
  address: string;
  latitude: string;
  longitude: string;
};

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const listingImages = formData.getAll('listingImages');
  const coverImage = formData.getAll('coverImage');
  const newArray: [string, File][] = [];

  const cover_Image = JSON.parse(coverImage as unknown as string);
  const coverImgFile = new File([cover_Image[0]], cover_Image[0].name, { type: cover_Image[0].type });
  newArray.push(['cover_Image', coverImgFile]);

  listingImages.forEach((file) => {
    const fileObject = JSON.parse(file as string) as File[];
    fileObject.forEach((item) => {
      const newFile = new File([item], item.name, { type: item.type });
      newArray.push(['images', newFile]);
    });
  });
  formData.delete('listingImages');
  formData.delete('coverImage');

  const finalFormData = [...formData.entries(), ...newArray];
  // Push finalFormData to backend
  console.log(...finalFormData);
  // Return error object if validation fails
  return 'success';
}

export default function EditProperty() {
  const listingItem = dummyObj as unknown as HouseCard[];
  return (<ListingForm listingArray={listingItem} />);
}
