import { ReactNode, useEffect, useState } from 'react';

export default function Container<El extends keyof JSX.IntrinsicElements>({
  children,
  element,
  className,
  ...rest
}: {
  element: El;
} & React.ComponentProps<El>) {
  const Comp = element as string;

  return (
    <Comp className={`container ${className}`} {...rest}>
      {children}
    </Comp>
  );
}


type AdsProps = {
  adContent: ReactNode; // Define a prop called adContent to receive the ad.
};

export const Ads: React.FC<AdsProps> = ({ adContent }) => {
  const [ads, setAds] = useState<'' | ReactNode>('');

  // Check if adContent is provided, and set it as the ads content.
  useEffect(() => {
    if (adContent) {
      setAds(adContent);
    }
  
    return () => {
      adContent
    }
  }, [adContent, ads])
  

  return <div className="ads b-radius flex align-x align-y f-width">{ads}</div>;
};
