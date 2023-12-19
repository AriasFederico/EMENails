import './StyleComponents/ItemPricing.css'
export const ItemPricing = ({name,price, string}) => {

  return (
    <div className="ItemPricing">
      <p>{name}</p>
      {string ? <span className='span-price-pricing'>{price}</span> : <span className='span-price-pricing'>$ {price}</span>}
    </div>
  )
}