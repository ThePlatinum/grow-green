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
        hasButton={false}
      />
      <div className='container py-5'>
        <div className='card card-body rounded-0' >
          <div className='row'>
            <div className='col-md-3 order-md-last p-3 bg-light'>
              <h4>Summary</h4>
              < hr />

              <div class="card mb-3">
                <div class="card-body">
                  <div class="spaced-between">
                    <dt>Total price:</dt>
                    <dd class="text-right">USD 568</dd>
                  </div>
                  <div class="spaced-between">
                    <dt>Discount:</dt>
                    <dd class="text-right">USD 000</dd>
                  </div>
                  <div class="spaced-between">
                    <dt>Total:</dt>
                    <dd class="text-right h5"><strong>USD 1,650</strong></dd>
                  </div>
                </div>
              </div>

              <form>
                <div class="form-group">
                  <label>Have coupon?</label>
                  <div class="input-group">
                    <input type="text" class="form-control" name="" placeholder="Coupon code" />
                    <span class="input-group-append">
                      <button class="btn btn-primary">Apply</button>
                    </span>
                  </div>
                </div>
              </form>

              <a href="#" class="btn btn-primary"> Make Purchase <i class="fa fa-chevron-right"></i> </a>
            </div>
            <div className='col-md-9 order-md-first p-3'>
              <h4>Shopping Cart</h4>
              < hr />
              <table class="table table-borderless table-stripped table-shopping-cart">
                <thead class="text-muted">
                  <tr class="small text-uppercase">
                    <th scope="col" >Product</th>
                    <th scope="col" >Quantity</th>
                    <th scope="col" >Price</th>
                    <th scope="col" class="text-right"> </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <figure >
                      <img src="assets/images/items/3.jpg" class="img-sm" />
                        <figcaption class="info">
                          <a href="#" class="title text-dark">Another name of some product goes just here</a>
                          <p class="small text-muted">Size: XL, Color: blue,  Brand: Tissot</p>
                        </figcaption>
                      </figure>
                    </td>
                    <td>
                      <select class="form-control">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </td>
                    <td>
                      <div class="price-wrap">
                        <var class="price">$98.00</var>
                        <small class="text-muted"> $578.00 each</small>
                      </div>
                    </td>
                    <td class="text-right">
                      <a data-original-title="Save to Wishlist" title="" href="" class="btn btn-light mr-2" data-toggle="tooltip"> <i class="fa fa-heart"></i></a>
                      <a href="" class="btn btn-light btn-round"> Remove</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}