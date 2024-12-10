import ItemType from "../Types/ItemType";
import Item from "./Item";

export default function Listing({ items = [] }: { items: Array<ItemType> }) {
  return (
    <div className="item-list">
      {items.map((item) =>
        item.error_messages ? null : <Item key={item.listing_id} item={item} />
      )}
    </div>
  );
}
