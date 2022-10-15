import Image from "next/image";

export const ShopCard = ({ src, title, subtitle, price }) => {

  return (
    <div className="box">
      <div className="imgBx">
        <img src={src} alt="imagecover" />
      </div>
      <div className="text px-3 pt-3">
        <h5>{title}</h5>
        <p>{subtitle}</p>
        <div className="end-div">
          <p className="price-tag text-secondary">U$D {price}</p>
          <p className="buynow primary-button">Buy now</p>
        </div>
      </div>
    </div>
  )
}
