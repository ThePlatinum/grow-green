import HeaderDisscount from "../../components/header-disscount";
import AppLayout from "../../components/layouts/AppLayout";
import { ShopCard } from "../../components/shop-card";

export default function Shop() {
  return (

    <AppLayout>
      <HeaderDisscount
        header={true}
        title={'Do you know?'}
        description={'Most people prefer to leave a typical pitchfork as the hay mover in the barn.'}
        background_img="//img.crocdn.co.uk/images/affiliates/image-archive/autumn-plant-sale/autumn-plant-sale_2000x380v2.jpg"
        href=""
        hasButton = {false}
      />
      <div className='container'>
        <div className="content">
          <ShopCard price="10.00" src='/images/plant1.png' title="Plant 1" subtitle="2 litre pot available." index="1" />
          <ShopCard price="11.00" src='/images/plant2.png' title="Plant 2" subtitle="2 litre pot available." index="2" />
          <ShopCard price="11.50" src='/images/plant3.png' title="Plant 3" subtitle="2 litre pot available." index="3" />
          <ShopCard price="10.00" src='/images/plant1.png' title="Plant 1" subtitle="2 litre pot available." index="1" />
          <ShopCard price="11.00" src='/images/plant2.png' title="Plant 2" subtitle="2 litre pot available." index="2" />
          <ShopCard price="11.50" src='/images/plant3.png' title="Plant 3" subtitle="2 litre pot available." index="3" />
          <ShopCard price="10.00" src='/images/plant1.png' title="Plant 1" subtitle="2 litre pot available." index="1" />
          <ShopCard price="11.00" src='/images/plant2.png' title="Plant 2" subtitle="2 litre pot available." index="2" />
          <ShopCard price="11.50" src='/images/plant3.png' title="Plant 3" subtitle="2 litre pot available." index="3" />
          <ShopCard price="10.00" src='/images/plant1.png' title="Plant 1" subtitle="2 litre pot available." index="1" />
          <ShopCard price="11.00" src='/images/plant2.png' title="Plant 2" subtitle="2 litre pot available." index="2" />
          <ShopCard price="11.50" src='/images/plant3.png' title="Plant 3" subtitle="2 litre pot available." index="3" />
        </div>
      </div>
    </AppLayout>
  )
}