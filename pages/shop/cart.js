import Image from "next/image";
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
        <div className='card rounded-0' >
          <div className='row'>
            <div className='col-md-3 order-md-last p-3 py-5 bg-green text-white'>
              <h4>Summary</h4>
              < hr />

              <div class=" mb-5 rounded-0">
                <div class="">
                  <div class="spaced-between">
                    <dt>Total Items:</dt>
                    <dd class="text-right">2</dd>
                  </div>
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
                    <input type="text" class="form-control rounded-0" name="" placeholder="Coupon code" />
                    <span class="input-group-append">
                      <button class="btn btn-dark rounded-0">Apply</button>
                    </span>
                  </div>
                </div>
              </form>

              <div class="d-grid gap-2 pt-5">
                <a href="#" class="btn btn-dark rounded-0"> Make Purchase <i class="fa fa-chevron-right"></i> </a>
              </div>
            </div>

            <div className='col-md-9 order-md-first p-5'>
              <h4>Shopping Cart</h4>
              < hr />
              <div className="row">
                <div className="col-6">Product</div>
                <div className="col-2">Quantity</div>
                <div className="col-2">Price</div>
                <div className="col-2 text-right"></div>
              </div>
              < hr className="mb-0" />

              <div className="row bg-light m-0 p-2 ps-0">
                <div className="col-6">
                  <div className="d-flex gap-3 align-items-center justify-content-center">
                    <Image src="/images/plant2.png" width={150} height={150} />
                    <div>
                      <h5>Bay Leaves</h5>
                      <small>Another name of some product goes just here</small>
                    </div>
                  </div>
                </div>
                <div className="col-2 d-flex gap-3 align-items-center justify-content-center">
                  <input type='number' value='1' class="form-control" />
                </div>
                <div className="col-2 d-flex gap-3 align-items-center justify-content-center">
                  $98.00
                </div>
                <div className="col-2 d-flex gap-3 align-items-center justify-content-center">
                  <a href="#" className="btn btn-outline-danger" ><i class="bi bi-trash"></i></a>
                </div>
              </div>
              <div className="row bg-white m-0 p-2 ps-0">
                <div className="col-6">
                  <div className="d-flex gap-3 align-items-center justify-content-center">
                    <Image src="/images/plant1.png" width={150} height={150} />
                    <div>
                      <h5>Seedlines</h5>
                      <small>Another name of some product goes just here</small>
                    </div>
                  </div>
                </div>
                <div className="col-2 d-flex gap-3 align-items-center justify-content-center">
                  <input type='number' value='1' class="form-control" />
                </div>
                <div className="col-2 d-flex gap-3 align-items-center justify-content-center">
                  $98.00
                </div>
                <div className="col-2 d-flex gap-3 align-items-center justify-content-center">
                  <a href="#" className="btn btn-outline-danger" ><i class="bi bi-trash"></i></a>
                </div>
              </div>
              <div className="row bg-light m-0 p-2 ps-0">
                <div className="col-6">
                  <div className="d-flex gap-3 align-items-center justify-content-center">
                    <Image src="/images/plant3.png" width={150} height={150} />
                    <div>
                      <h5>Seedlines</h5>
                      <small>Another name of some product goes just here</small>
                    </div>
                  </div>
                </div>
                <div className="col-2 d-flex gap-3 align-items-center justify-content-center">
                  <input type='number' value='1' class="form-control" />
                </div>
                <div className="col-2 d-flex gap-3 align-items-center justify-content-center">
                  $98.00
                </div>
                <div className="col-2 d-flex gap-3 align-items-center justify-content-center">
                  <a href="#" className="btn btn-outline-danger" ><i class="bi bi-trash"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}