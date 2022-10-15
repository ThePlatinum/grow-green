// import  './Card.css';
import Image from "next/image";

export const Card = ( {imagepath, title, subtitle, 
     index, price}) => {

    return(
        <div className="box">
            <div className="imgBx">
                <Image src={imagepath} alt="imagecover"  width="200px" height="200px"/>
            </div>
            <div className="text">
                <h3>{title}</h3>
                <h5>{subtitle}</h5>
                <div className="end-div">
                    <p className="price-tag">{price + "$"}</p>
                    <p className="buynow">Buy now</p>
                </div>
               
            </div>
        </div>
    )
}
