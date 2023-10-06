import { HouseCard } from "./card/Card";

export const dateHandler = (dateStr: string | undefined) => {
  if (dateStr === undefined) return null
  const date = new Date(dateStr);

  const currentDate = new Date();
  const timeDifference = currentDate.getTime() - date.getTime();
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  if (daysDifference === 0) {
    return 'Today';
  } else if (daysDifference === 1) {
    return 'Yesterday';
  } else if (daysDifference > 1) {
    return `${daysDifference} days ago`;
  } else {
    return 'In the future';
  }
};

export const getTotal = (items: HouseCard[], agentName: string) => {
  let totalCount = 0;
  
  if (items === undefined) return null
  items.find((item: { realtor: { agentName: string } }) => {
    item.realtor.agentName === agentName ? totalCount++ : null
  })

  return totalCount;
}

