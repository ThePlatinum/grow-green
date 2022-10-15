import { Container } from 'reactstrap'
import { container } from '../styles/Home.module.css'
import { Shop } from './shop'
import { useEffect, useState } from 'react';
import HeaderDisscount from '../components/header-disscount'
import AppLayout from '../components/layouts/AppLayout'
import PlantList from '../components/plant-list'
import { Plants } from '../services/plants.service';

export default function Home() {

  const [plants, setPlants] = useState(null);

  useEffect(() => {

    const getPlants = async (plant) => { 
      await plant.getTopPicks();
      await plant.getTopCategories(); 
      setPlants(plant) 
    };

    if (!plants) {
      let local_plants = new Plants();
      getPlants(local_plants);
    }

  }, [plants])


  return (
    
    <div>
      <div>
      <div className={container}>Home Page Here is a container from module style</div>
      <Container >Here is a container from reactstrap</Container>
      <Shop/>
    </div>
   
    <AppLayout>
      <HeaderDisscount
        header={true}
        title={'UP TO 40% OFF\nAutumn plant sale'}
        description={'It’s one of the best times of the year to plant, so stock up and enjoy terrific savings. Offer on selected lines only.'}
        background_img="//img.crocdn.co.uk/images/affiliates/image-archive/autumn-plant-sale/autumn-plant-sale_2000x380v2.jpg"
        href="shop/route"
      />
      <PlantList title="Top picks this week" plants={plants?.topPick} />
      <HeaderDisscount

        title={'UP TO 40% OFF\nShrubs & ferns'}
        description={'It’s one of the best times of the year to plant, so stock up and enjoy terrific savings. Offer on selected lines only.'}
        background_img="//img.crocdn.co.uk/images/affiliates/image-archive/shrubs/pl0000000003_1087x380.jpg"
        href="shop/route"
      />
      <PlantList title="Popular categories" plants={plants?.topCategories} />


    </AppLayout>
    </div>
  )
}
