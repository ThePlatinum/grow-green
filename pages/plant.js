import Image from 'next/image'
import AppLayout from '../components/layouts/AppLayout'

export default function Plants() {
  return (
    <AppLayout>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <h3>Rocket</h3>
            <p>
            Rocket is an easy-to-grow crop that adds a lovely peppery flavour to salads. The younger leaves are milder, more tender and delicately flavoured. Older leaves can also be lightly cooked as a spinach substitute, added to sauces, stir-fried or saut\u00e9ed in olive oil. The flowers are edible too. Rocket is rich in potassium and vitamin C and flourishes in a warm, sunny position.","grow":"Keep the soil moist, watering in dry spells, to ensure consistent growth and prevent plants running to seed (\n\n    When a vegetable plant starts flowering and forming seeds, often prematurely, making the crop unusable \u2013 salad leaves may turn bitter and root crops fail to swell. Adverse weather or changes in day length can cause bolting in a wide range of vegetables, including lettuces, onions , carrots and otheer root crops.\n    \n    bolting) prematurely. However, take care not to overwater, as this can dilute the taste. \n    \n    Weed between the plants regularly.\n    \n    It\u2019s best to give rocket some shade in hot weather, to prevent the leaves becoming tough and unpalatable. Cover with fleece or make summer sowings in a spot that gets some light shade.
            </p>
          </div>
          <div className='col-md-6'>
            <Image className='plant-img' src='/pexels-scott-webb-1048035.jpg' width={100} height={100} />
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
