import datos from '../public/precios.json'
import './StylePages/Prices.css'
import { ItemPricing } from '../src/Components/ItemPricing'

import iconMasterCard from '../public/icons/iconMasterCard.png'
import iconVisa from '../public/icons/iconVisa.png'
import iconAmerican from '../public/icons/iconAmerican.png'
import iconMercado from '../public/icons/iconMercado.png'
import iconDni from '../public/icons/iconDni.png'

export const Prices = () => {

  return (

    <section className="Prices">
      <h1 className='title-about-mobile'>Precios de Servicios</h1>

      <div className="metod">
        <p>Métodos de pago disponibles</p>
        <img src={iconMasterCard} alt="" className='icon-price'/>
        <img src={iconVisa} alt="" className='icon-price'/>
        <img src={iconAmerican} alt="" className='icon-price'/>
        <img src={iconMercado} alt="" className='icon-price'/>
        <img src={iconDni} alt="" className='icon-price'/>
      </div>

      <div className="prices-container">

        <div className="prices-manicure-container">
          <div className="banner-prices banner-manicure"></div>

          <div className="prices-manicure">
            <ItemPricing name={'Belleza de manos'} price={datos.objectPrice.price} />
            <ItemPricing name={'Esmaltado tradicional'} price={datos.objectPrice.price} />
            <ItemPricing name={'Esmaltado semi'} price={datos.objectPrice.price} />

            <span className="span-prices">Soft-gel</span>

            <ItemPricing name={'Básica'} price={datos.objectPrice.price} />
            <ItemPricing name={'Simple'} price={datos.objectPrice.price} />
            <ItemPricing name={'Completa'} price={datos.objectPrice.price} />

            <span className="span-prices">Kapping</span>

            <ItemPricing name={'Básico'} price={datos.objectPrice.price} />
            <ItemPricing name={'Deco simples'} price={datos.objectPrice.price} />
            <ItemPricing name={'Deco completas'} price={datos.objectPrice.price} />
          </div>
        </div>

        <div className="prices-hair-container">
          <div className="banner-prices banner-hair"></div>

          <div className="prices-hair">
            <ItemPricing name={'Cortes simples'} price={datos.objectPrice.price} />
            <ItemPricing name={'Alisados'} price={'Según el largo'} string={true} />
            <ItemPricing name={'Botox'} price={datos.objectPrice.price} />

            <span className="span-prices">Tintura</span>

            <ItemPricing name={'De EMENails'} price={datos.objectPrice.price} />
            <ItemPricing name={'Del cliente'} price={datos.objectPrice.price} />
          </div>
        </div>

        <div className="prices-pedicure-container">
          <div className="banner-prices banner-pedicure"></div>

          <div className="prices-pedicure">
            <ItemPricing name={'Belleza de pies'} price={datos.objectPrice.price} />
            <ItemPricing name={'Deco de pies básico'} price={datos.objectPrice.price} />
            <ItemPricing name={'Bellezza de pies + semi'} price={datos.objectPrice.price} />
          </div>
        </div>

        <div className="prices-remove-container">
          <div className="prices-remove">
            <ItemPricing name={'Semipermanente'} price={datos.objectPrice.price} />
            <ItemPricing name={'Kapping (ajeno)'} price={datos.objectPrice.price} />
            <ItemPricing name={'Soft-gel'} price={datos.objectPrice.price} />
            <ItemPricing name={'Esculpidas'} price={datos.objectPrice.price} />
          </div>
        </div>

      </div>

    </section>
  )

}