import datos from '../public/precios.json'
import './StylePages/Prices.css'
import { ItemPricing } from '../src/Components/ItemPricing'

export const Prices = () => {

  return (

    <section className="Prices">

      <div className="prices-container">

        <div className="prices-manicure-container">
          <div className="banner-prices banner-manicure"></div>

          <div className="prices-manicure">
            <ItemPricing name={'Belleza de manos'} price={datos.manicure.bellezaDeManos} />
            <ItemPricing name={'Esmaltado tradicional'} price={datos.manicure.esmaltadoTradicional} />
            <ItemPricing name={'Esmaltado semi'} price={datos.manicure.esmaltadoSemi} />

            <span className="span-prices">Soft-gel</span>

            <ItemPricing name={'Básica'} price={datos.manicure.sfBasico} />
            <ItemPricing name={'Simple'} price={datos.manicure.sfDecoSimple} />
            <ItemPricing name={'Completa'} price={datos.manicure.sfDecoCompleta} />

            <span className="span-prices">Kapping</span>

            <ItemPricing name={'Básico'} price={datos.manicure.kpBasico} />
            <ItemPricing name={'Deco simples'} price={datos.manicure.kpDecoSimple} />
            <ItemPricing name={'Deco completas'} price={datos.manicure.kpDecoCompleta} />
          </div>
        </div>

        <div className="prices-hair-container">
          <div className="banner-prices banner-hair"></div>

          <div className="prices-hair">
            <ItemPricing name={'Cortes simples'} price={datos.hair.corteSimple} />
            <ItemPricing name={'Alisados'} price={`Desde $ ${datos.hair.alisado}`} string={true} />
            <ItemPricing name={'Botox'} price={'Según el largo'} string={true} />

            <span className="span-prices">Tintura</span>

            <ItemPricing name={'De EMENails'} price={datos.hair.tinturaEmenails} />
            <ItemPricing name={'Personal'} price={datos.hair.tinturaPersonal} />
          </div>
        </div>

        <div className="prices-pedicure-container">
          <div className="banner-prices banner-pedicure"></div>
          <div className="prices-pedicure">
            <ItemPricing name={'Belleza de pies'} price={datos.pedicure.bellezaDePies} />
            <ItemPricing name={'Deco de pies básico'} price={datos.pedicure.decoDePiesBasico} />
            <ItemPricing name={'Belleza de pies + semi'} price={datos.pedicure.decoDePiesSemi} />
          </div>
        </div>

        <div className="prices-remove-container">
          <div className="prices-remove">
            <span className="span-prices">Para remover</span>
            <ItemPricing name={'Semipermanente'} price={datos.remove.semipermanente} />
            <ItemPricing name={'Kapping (ajeno)'} price={datos.remove.removeKapping} />
            <ItemPricing name={'Soft-gel'} price={datos.remove.removeSoftGel} />
            <ItemPricing name={'Esculpidas'} price={datos.remove.removeEsculpidas} />
          </div>
        </div>

      </div>

    </section>
  )

}