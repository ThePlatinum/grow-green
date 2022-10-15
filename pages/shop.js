import { TextHeader } from '../Components/TextComponent/TextHeader';
import { Card } from "../Components/Card";
import plant1 from '../public/plant1.png';
import plant2 from '../public/plant2.png';
import plant3 from '../public/plant3.png';

export const Shop = () => {
    return (
        <section className="_section">
                <TextHeader textHeaderSpan = "Plants" textHeadenotSpan="" textHeaderDescr= "See list of available plants  below"/>
                <div className="content">
                  <Card price="10.00" imagepath={plant1} title="Plant 1" subtitle = "2 litre pot available." index="1"/>
                  <Card price="11.00" imagepath={plant2} title="Plant 2" subtitle = "2 litre pot available." index="2"/>
                  <Card price="11.50" imagepath={plant3} title="Plant 3" subtitle = "2 litre pot available." index="3"/>
                  <Card price="10.00" imagepath={plant1} title="Plant 1" subtitle = "2 litre pot available." index="1"/>
                  <Card price="11.00" imagepath={plant2} title="Plant 2" subtitle = "2 litre pot available." index="2"/>
                  <Card price="11.50" imagepath={plant3} title="Plant 3" subtitle = "2 litre pot available." index="3"/>
                  <Card price="10.00" imagepath={plant1} title="Plant 1" subtitle = "2 litre pot available." index="1"/>
                  <Card price="11.00" imagepath={plant2} title="Plant 2" subtitle = "2 litre pot available." index="2"/>
                  <Card price="11.50" imagepath={plant3} title="Plant 3" subtitle = "2 litre pot available." index="3"/>
                  <Card price="10.00" imagepath={plant1} title="Plant 1" subtitle = "2 litre pot available." index="1"/>
                  <Card price="11.00" imagepath={plant2} title="Plant 2" subtitle = "2 litre pot available." index="2"/>
                  <Card price="11.50" imagepath={plant3} title="Plant 3" subtitle = "2 litre pot available." index="3"/>
                    {/* <HomeViewButton post_full_list="entrepreneur" post_details="entrepreneurdetails"/> */}
                </div>
            </section>
    )
}