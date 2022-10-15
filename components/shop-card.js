import Image from "next/image";

export const ShopCard = ({ src, title, subtitle, price }) => {

  return (
    <div className="box">
      <div className="imgBx">
        <img src={src} alt="imagecover" width="200" height="200" />
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
