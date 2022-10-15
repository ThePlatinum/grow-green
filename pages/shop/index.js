import HeaderDisscount from "../../components/header-disscount";
import AppLayout from "../../components/layouts/AppLayout";

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
      </div>
    </AppLayout>
  )
}