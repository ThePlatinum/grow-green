import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation } from 'swiper'
import AppLayout from '../../components/layouts/AppLayout'
import { breakpoints_four, breakpoints_three } from '../../utils/consts'

export default function SinglePlant() {

  const plant = {
    "description": "Rocket is an easy-to-grow crop that adds a lovely peppery flavour to salads. The younger leaves are milder, more tender and delicately flavoured. Older leaves can also be lightly cooked as a spinach substitute, added to sauces, stir-fried or saut\u00e9ed in olive oil. The flowers are edible too. Rocket is rich in potassium and vitamin C and flourishes in a warm, sunny position.",
    "grow": "Keep the soil moist, watering in dry spells, to ensure consistent growth and prevent plants running to seed (\n\n    When a vegetable plant starts flowering and forming seeds, often prematurely, making the crop unusable \u2013 salad leaves may turn bitter and root crops fail to swell. Adverse weather or changes in day length can cause bolting in a wide range of vegetables, including lettuces, onions , carrots and otheer root crops.\n    \n    bolting) prematurely. However, take care not to overwater, as this can dilute the taste. \n    \n    Weed between the plants regularly.\n    \n    It\u2019s best to give rocket some shade in hot weather, to prevent the leaves becoming tough and unpalatable. Cover with fleece or make summer sowings in a spot that gets some light shade.",
    "harvest": "Rocket can provide pickings from early summer through autumn and into winter, if repeat sowings are made.\n\n    You can start harvesting the leaves from about four weeks after sowing. Regular picking keeps growth young, tender and tasty.\n    \n    Pick a few leaves from each plant along the row. If you take lots of leaves from just one plant, you\u2019ll weaken the growth.\n    \n    As flower buds appear, pinch them out to prolong cropping, unless you want the plant to produce seeds. The flowers are edible and can be used as a garnish for salads.",
    "name": "Rocket",
    "picture": "https://www.rhs.org.uk/getmedia/ada7442e-1241-4dfb-a912-67fe5861b9cd/Salad-rocket940x627.jpg?width=940&height=627&ext=.jpg",
    "sow": "Rocket likes in a sunny site with rich, fertile, well-drained soil. It also grows well in containers.\n\n    Sow direct outdoors from April to early September, scattering the seeds thinly along a drill, 0.5\u20131cm (\u00bc\u2013\u00bdin) deep. If sowing several rows, space them 15cm (6in) apart.\n    \n    For a continuous supply of leaves, sow small batches every two to three weeks.\n    \n    Thin out the \n    \n    A seedling is a young plant grown from seed.\n    \n    seedlings to 15cm (6in) apart when they\u2019re large enough to handle, and use the thinnings in salads.\n    \n    If you allow some plants to flower and produce seeds, they\u2019ll self-sow to give you new plants without any effort.\n    \n    For autumn and winter crops, sow in August and September in a cool greenhouse or under cloches or fleece."
  }

  const menus = [
    'sow',
    'grow',
    'harvest',
  ]

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
  
  return (
    <AppLayout>
      <div className='container'>
        <div className='row py-5'>
          <div className='col-md-6 order-md-last'>
            <Image className='plant-img'
              src='/images/pexels-scott-webb-1048035.jpg'
              width={1500} height={1500} alt='Plant Image' />
          </div>
          <div className='col-md-6 order-md-first d-md-flex flex-md-column justify-content-center'>
            <h2 className='py-3'>{plant['name']}</h2>
            <p className='pe-md-4' dangerouslySetInnerHTML={{ __html: plant['description'] }}></p>
          </div>
        </div>
        <div className='row py-5'>
          <div className='col-md-2'>
            <nav className="flex-column align-items-stretch pe-4 border-end">
              <nav className="d-flex flex-md-column gap-2" >
                {menus.map(m => { return (<a className=" text-capitalize" key={m} href={'#' + m}>{m}</a>) })}
              </nav>
            </nav>
          </div>
          <div className='col-md-9'>
            <div data-bs-spy="scroll" data-bs-smooth-scroll="true" tabindex="0">
              {menus.map(m => {
                return (
                  <>
                    <div id={m} className='pb-4'></div>
                    <h5 className='text-capitalize'>{m}</h5>
                    <p dangerouslySetInnerHTML={{ __html: plant[m] }}></p>
                    <div className='pb-2'>
                      <h6>Items to buy</h6>
                      <hr />
                      <Swiper
                        modules={[Navigation, A11y]}
                        navigation breakpoints={breakpoints_three}
                        loop={true} centeredSlides={true}
                        autoplay={{
                          delay: 2000,
                          disableOnInteraction: false,
                        }} >
                        {sampletobuy.map((s, i) => {
                          return (
                            <SwiperSlide key={i}>
                              <div className="card_in_slide" style={{
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
                  </>
                )
              })}
            </div>
          </div>
        </div>
        <div className='py-5'>
          <h4>Related Plants</h4>
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
                  <div className="card_in_slide" style={{
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
