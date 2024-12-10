import ItemType from "../Types/ItemType";

export default function Item({ item }: { item: ItemType }) {
  function getCurrencyFormat(
    price: string | number,
    currencyCode: string
  ): string {
    if (currencyCode === "USD") {
      return `$${price}`;
    } else if (currencyCode === "EUR") {
      return `€${price}`;
    } else {
      return `${currencyCode} ${price}`;
    }
  }

  function getQuantity(quantity: string | number): string {
    if (+quantity <= 10) return "level-low";
    if (+quantity <= 20) return "level-medium";
    return "level-high";
  }

  function limitTitle(title: string): string {
    return title.length > 50 ? `${title.slice(0, 50)}…` : title;
  }

  return (
    <div className="item">
      <div className="item-image">
        <a href={item.url}>
          <img src={item.MainImage?.url_570xN || item.MainImage?.url_75x75} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{limitTitle(item.title || "")}</p>
        <p className="item-price">
          {getCurrencyFormat(item.price, item.currency_code)}
        </p>
        <p className={`item-quantity ${getQuantity(item.quantity)}`}>
          {item.quantity} left
        </p>
      </div>
    </div>
  );
}
