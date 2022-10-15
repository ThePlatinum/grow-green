import React from 'react';

export default function Header() {
  return (
    <div className='bg-green '>
      <nav class="navbar navbar-expand-lg container text-white">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <h2>Grow Green</h2>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDrop" aria-controls="navbarDrop" aria-expanded="false" aria-label="Toggle">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id='navbarDrop'>
            <div class="ms-auto me-auto d-flex gap-5">
              <a href="/plant">Discover Plants</a>
              <a href="/shop">Shop Resources</a>
            </div>
            <a class="btn btn-outline-light position-relative" href='/shop/cart'>
              <i class="bi bi-basket"></i>
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                0
              </span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}