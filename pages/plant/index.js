import { A11y, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import HeaderDisscount from "../../components/header-disscount";
import AppLayout from "../../components/layouts/AppLayout";
import PlantCard from "../../components/plant-card";
import PlantSearch from "../../components/plant-search";
import { breakpoints_four } from "../../utils/consts";

const plant = { "id": 1, "name": "Rocket", "picture": "https://www.rhs.org.uk/getmedia/ada7442e-1241-4dfb-a912-67fe5861b9cd/Salad-rocket940x627.jpg?width=940&height=627&ext=.jpg" }

const sampletobuy = [
  {
    'name': 'Seed Bud',
    'img': '/images/seedbud.jpeg'
  },
  {
    'name': 'Watering Can',
    'img': '/images/wateringcan.jpeg'
  },
  {
    'name': 'Nursery Seed',
    'img': '/images/nursery.jpg'
  },
  {
    'name': 'Plant Pot',
    'img': '/images/wateringcan.jpeg'
  },
  {
    'name': 'Nusery Seed Bed',
    'img': '/images/seedbud.jpeg'
  },
  {
    'name': 'Garden Fork',
    'img': '/images/wateringcan.jpeg'
  },
]

export default function Plants() {
  return (

    <AppLayout>
      <HeaderDisscount
        header={true}
        title={'Do you know?'}
        description={'There are over 20,000 species of edible plants in the world yet fewer than 20 species now provide 90% of our food'}
        background_img="//img.crocdn.co.uk/images/affiliates/image-archive/autumn-plant-sale/autumn-plant-sale_2000x380v2.jpg"
        href=""
        hasButton = {false}
      />
      <div className='container'>
        <PlantSearch />
        <div className="row">
          {[...Array(20).keys()].map(i=>{
            return(
              <div className='col-md-3 pb-4' key={i}>
                <PlantCard plant={plant} />
              </div>
            )
          })}
        </div>
        <div className='py-5'>
          <h4>Common tools you should have</h4>
          <hr />
          <Swiper
            modules={[Navigation, A11y]}
            navigation breakpoints={breakpoints_four}
            loop={true} centeredSlides={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }} >
            {sampletobuy.map((s, i) => {
              return (
                <SwiperSlide key={i}>
                  <div class="card_in_slide" style={{
                    background: `url(${s.img})`,
                    height: '200px',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: "cover",
                    transition: '1s'
                  }}>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </AppLayout>
  )
}