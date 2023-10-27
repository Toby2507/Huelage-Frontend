import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import * as SecureStore from 'expo-secure-store';

dayjs.extend(isBetween);
export const CustomSecureStore = {
  getItem: async (key: string) => {
    let result = await SecureStore.getItemAsync(replacer(key, "_"));
    return result ? JSON.parse(result) : null;
  },
  setItem: async (key: string, value: any) => {
    return await SecureStore.setItemAsync(replacer(key, "_"), JSON.stringify(value));
  },
  removeItem: async (key: string) => {
    return await SecureStore.deleteItemAsync(replacer(key, "_"));
  },
};

export const replacer = (key: string, replaceCharacter: string) => {
  return key.replace(/[^a-z0-9.\-_]/gi, replaceCharacter);
};

export const getItem = async (key: string) => {
  let result = await SecureStore.getItemAsync(key);
  return result ? JSON.parse(result) : null;
};

export const setItem = async (key: string, value: any) => {
  return await SecureStore.setItemAsync(key, JSON.stringify(value));
};

export const removeItem = async (key: string) => {
  return await SecureStore.deleteItemAsync(key);
};

export const numberToCurrency = (value: number) => {
  const number = value.toFixed(2);
  const [currency, decimal] = number.split(".");
  return `₦${currency.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.${decimal}`;
};

export const getDateDiff = (category: string, date: string) => {
  const now = dayjs(), orderDate = dayjs(date);
  const today = now.startOf('day');
  const yesterday = today.subtract(1, 'day');
  const lastWeek = today.subtract(1, 'week');
  const lastMonth = today.subtract(1, 'month');
  switch (category) {
    case 'Today':
      return orderDate.isBetween(now, today);
    case 'Yesterday':
      return orderDate.isBetween(now, yesterday);
    case 'Last week':
      return orderDate.isBetween(now, lastWeek);
    case 'Last month':
      return orderDate.isBetween(now, lastMonth);
  }
};

export const getStatus = (status: string) => {
  switch (status) {
    case "COMPLETED":
      return "Completed";
    case "CANCELLED":
      return "Cancelled";
    default:
      return "Pending";
  }
};