import { Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const ProductsCarousel = ({ title, products }) => {

    const calculatePorcent = (number, second_number) => {
        return (second_number * 100 / 5).toFixed(0);
    }

    return (
        <div className='container my-5'>
            <h1 className='text-center'>{title}</h1>

            {
                !products && <div className='d-flex justify-content-center mb-5'>
                    <div className="spinner-grow spinner mt-2" role="status"></div>
                    <div className="spinner-grow spinner mt-2" role="status"></div>
                    <div className="spinner-grow spinner mt-2" role="status"></div>

                </div>
            }


            <Swiper
                slidesPerView={6}
                spaceBetween={30}
                pagination={{
                    clickable: true
                }}
                breakpoints={{
                    // when window width is >= 640px
                    191: {
                        width: 191,
                        slidesPerView: 1,
                    },
                    648: {
                        width: 648,
                        slidesPerView: 3,
                    },
                    // when window width is >= 768px
                    1296: {
                        width: 1296,
                        slidesPerView: 6,
                    },
                }}
                scrollbar={{ draggable: true }}
                modules={[Pagination, Scrollbar]}
                className="mySwiper"
            >

                {products?.map((product, index) => (
                    <SwiperSlide key={index}>
                        <div className="card ml-5" style={{ 'width': '20rem !important', 'position': 'relative' }}>
                            {product.discounted_price > 0 &&
                                <div className='disscount-tag'>
                                    <h5>{calculatePorcent(product.price, product.discounted_price)}% OFF</h5>
                                </div>
                            }
                            <img src={product.picture} class="card-img-top" alt={product.name} />
                            <div class="card-body">
                                <h5 class="card-title">{product.name}</h5>
                                <div className='d-flex justify-content-between'>

                                    {product.discounted_price > 0 && <p className='primary-color'>U$D {product.discounted_price}</p>}
                                    {product.discounted_price <= 0 && <p className='text-secondary'>U$D {product.price}</p>}

                                    <a href={`product/${product.id}`}>
                                        <button class="btn btn-primary" style={{
                                            paddingLeft: '1em',
                                            paddingRight: '1em',
                                            paddingTop: '0',
                                            paddingBottom: '0'

                                        }}>Buy</button>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>

        </div>

    )
}

export default ProductsCarousel;