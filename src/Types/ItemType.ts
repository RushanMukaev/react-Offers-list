export default interface ItemType {
  listing_id: number;
  url: string;
  MainImage: {
    url_570xN: string;
    url_75x75: string;
  };
  title: string;
  currency_code: string;
  price: string;
  quantity: number;
  error_messages: string;
}
