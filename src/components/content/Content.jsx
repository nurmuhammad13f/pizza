import { useState } from 'react';
import SliderSlick from '../../commons/button/Slider';
import ContentTop from './contentTop/ContentTop';
import PizzaBlock from './pizzaBlock/PizzaBlock';
import Sort from './sort/Sort';


const Content = ({ pizzas, setPizzas }) => {

  const [categories, setCategories] = useState(null)
  const [sort, setSort] = useState({
    type: 'rating'
  });
  const [filter, setFilter] = useState(pizzas)

  const onClickCategories = (index) => {
    setCategories(index);
  }

  const onClickSort = (type) => {
    setSort(type);
    const sortedPizzas = pizzas.sort((a, b) =>
      a[type.type]?.localeCompare(b[type.type]));
    setPizzas(sortedPizzas);
  };

  const onFilter = (categoryItem) => {
    if (categoryItem === '') {
      setFilter(pizzas)
      return
    }
    const result = pizzas.filter((currentItem) => {
      return currentItem.category === categoryItem
    })
    setFilter(result);
  }

  return (
    <div className="content">
      <div className="container">
        <SliderSlick />
        <div className="content__top">
          <ContentTop
            onFilter={onFilter}
            onClickCategories={onClickCategories}
            items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые',]} />
          <Sort
            activeSortType={sort.type}
            onClickSort={onClickSort}
            items={[
              { name: 'популярности', type: 'rating' },
              { name: 'цене', type: 'price' },
              { name: 'алфавиту', type: 'name' },
            ]} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {filter.map((pizza =>
            <PizzaBlock
              key={pizzas.id}
              {...pizza}
              pizzas={pizzas}
              pizza={pizza}
              setPizzas={setPizzas}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Content;
