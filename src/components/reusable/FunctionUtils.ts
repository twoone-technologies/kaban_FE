import { HouseCard } from "./card/Card";

export const dateHandler = (dateStr: string | undefined, pathname?: string | undefined) => {
  if (dateStr === undefined) return null;

  const date = new Date(dateStr);
  const currentDate = new Date();
  const timeDifference = currentDate.getTime() - date.getTime();
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  if (pathname && pathname.startsWith('/dashboard/notification/')) {
    // If the pathname matches the notification route, return date in a different format
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    };
    return date.toLocaleDateString(undefined, options);
  }

  if (daysDifference === 0) {
    // Check if it's within the same day
    const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
    if (hoursDifference > 0) {
      return `${hoursDifference} ${hoursDifference === 1 ? 'hour' : 'hours'} ago`;
    } else {
      return 'Today';
    }
  } else if (daysDifference === 1) {
    return 'Yesterday';
  } else if (daysDifference > 1 && daysDifference <= 7) {
    return `${daysDifference} ${daysDifference === 1 ? 'day' : 'days'} ago`;
  } else {
    // Get the user's timezone dynamically
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    
    // Return the full date for dates beyond 1 week in the user's timezone
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: userTimeZone,
    };
    return date.toLocaleDateString(undefined, options);
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

