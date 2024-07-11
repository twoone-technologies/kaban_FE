export type Listing = {
  [x: string]: unknown;
  checked: boolean;
  find?(arg0: (item: { realtor: { agentName: string } }) => void): unknown;
  location: {
    type: string;
    coordinates: [number, number] | number[];
  };
  _id: string;
  realtor: {
    _id?: string;
    user: {
      _id: string;
      full_name: string;
      id: string;
    }
    realtor_pic: string;
    id: string;
  };
  title: string;
  property_category: string;
  property_type: string;
  description?: string;
  status: 'sale' | 'rent';
  featured: boolean;
  price: {
    amount: number;
    per: string;
  };
  address: string;
  city: string;
  state: string;
  images: string[];
  details: {
    bedroom: number;
    bathroom: number;
    land_area: string;
    area_suffix?: string;
    parking_space: number;
    features: string[];
  };
  videoLink: string;
  street_view: boolean;
  report: string[];
  createdAt: string;
  cover_image: string;
  expiresAt: string;
  published_status?: 'published' | 'pending' | 'disapproved';
  draft?: boolean;
  id: string;
};