import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import { ClearBasketSvg, CountMinusSvg, CountPlusSvg, CountRemoveSvg, GoBackSvg, HeaderSvg } from "../../assets/svg/Svg";
import EmptyBasket from './empty/EmptyBasket'

const Basket = ({ pizzasBusket }) => {

  const {
    isEmty,
    items,
    updateItemQuantity,
    removeItem,
    emptyCart,
    totalItems,
    cartTotal,
  } = useCart();

  return (
    <div className="wrapper">
      {!isEmty
        ?
        <div className="content">
          <div className="container container--cart">
            <div className="cart">
              <div className="cart__top">
                <h2 className="content__title">
                  <HeaderSvg />
                  Корзина
                </h2>
                <div className="cart__clear" onClick={()=> emptyCart()}>
                  <ClearBasketSvg />
                  <span>Очистить корзину</span>
                </div>
              </div>
              <div className="content__items">
                {items.map(pizzaInBusket =>
                  <div key={pizzaInBusket.id} className="cart__item">
                    <div className="cart__item-img">
                      <img
                        className="pizza-block__image"
                        src={pizzaInBusket.image}
                        alt="Pizza"
                      />
                    </div>
                    <div className="cart__item-info">
                      <h3>{pizzaInBusket.name}</h3>
                      <p>{pizzaInBusket.type}, {pizzaInBusket.size} см.</p>
                    </div>
                    <div className="cart__item-count">
                      <div onClick={()=> updateItemQuantity(pizzaInBusket.id, pizzaInBusket.quantity - 1)} className="button button--outline button--circle cart__item-count-minus">
                        <CountMinusSvg />
                      </div>
                      <b>{pizzaInBusket.quantity}</b>
                      <div onClick={()=> updateItemQuantity(pizzaInBusket.id, pizzaInBusket.quantity + 1)} className="button button--outline button--circle cart__item-count-plus">
                        <CountPlusSvg />
                      </div>
                    </div>
                    <div className="cart__item-price">
                      <b>{pizzaInBusket.price} ₽</b>
                    </div>
                    <div className="cart__item-remove" onClick={()=> removeItem(pizzaInBusket.id)}>
                      <div className="button button--outline button--circle">
                        <CountRemoveSvg />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="cart__bottom">
                <div className="cart__bottom-details">
                  <span>
                    {' '}
                    Всего пицц: <b>{totalItems} шт.</b>{' '}
                  </span>
                  <span>
                    {' '}
                    Сумма заказа: <b>{cartTotal} ₽</b>{' '}
                  </span>
                </div>
                <div className="cart__bottom-buttons">
                  <Link to="/" className="button button--outline button--add go-back-btn">
                    <GoBackSvg />
                    <span>Вернуться назад</span>
                  </Link>
                  <div className="button pay-btn">
                    <span>Оплатить сейчас</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        :
        <EmptyBasket />
      }
    </div>
  )
}

export default Basket;