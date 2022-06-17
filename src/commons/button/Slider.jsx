import Slider from "react-slick/lib/slider"

const SliderSlick = () => {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2500,
    };
    return (
        <div>
            <Slider {...settings} className="slider__wrapper">
                {/* {SliderData.map((slide) => )} */}
                <div className="slider__img">
                    <img src="https://images.aws.nestle.recipes/resized/4274048cd5f17c49dfee280f77a3739d_Cheese-Pizza_HB-2_944_531.jpg" alt="" />
                </div>
                <div className="slider__img">
                    <img src="https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/00/a0000450/img/basic/a0000450_main.jpg?20170429125322&q=80&rw=750&rh=536" alt="" />
                </div>
                <div className="slider__img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSWjXpdAGM7oFHVmNIucZrOwGKjbNXO0fra4LKkwyVQmOY3NatQN4y3nMyDtGaUdmT-B0&usqp=CAU" alt="" />
                </div>
                <div className="slider__img">
                    <img src="https://www.garciadepou.com/blog/wp-content/uploads/2016/08/pizza.jpg" alt="" />
                </div>
                <div className="slider__img">
                    <img src="https://www.simplyrecipes.com/thmb/8caxM88NgxZjz-T2aeRW3xjhzBg=/2000x1125/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg" alt="" />
                </div>
                <div className="slider__img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSWjXpdAGM7oFHVmNIucZrOwGKjbNXO0fra4LKkwyVQmOY3NatQN4y3nMyDtGaUdmT-B0&usqp=CAU" alt="" />
                </div>
            </Slider>
        </div>
    )
}

export default SliderSlick