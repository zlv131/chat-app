interface IDate {
  START_DATE_HOURS_MINUTES: number;
  END_DATE_HOURS_MINUTES: number;
  START_DATE_DAY: number;
  END_DATE_DAY: number;
  START_DATE_MONTH: number,
  END_DATE_MONTH: number
}

interface IAvatar {
  ID: number,
  IMG_URL: string,
}
export const DATE: IDate = {
  START_DATE_HOURS_MINUTES: 11,
  END_DATE_HOURS_MINUTES: 16,
  START_DATE_DAY: 8,
  END_DATE_DAY: 10,
  START_DATE_MONTH: 5,
  END_DATE_MONTH: 7,
};

export const AVATAR: IAvatar[] = [
  {
    ID: 1,
    IMG_URL: 'https://i.pinimg.com/564x/c9/06/30/c90630a8cd098c517fb93ae4adeee3da.jpg',
  },
  {
    ID: 2,
    IMG_URL: 'https://i.pinimg.com/564x/6f/c2/7c/6fc27c5684f8893d1ce3f345229358ac.jpg',
  }
]
