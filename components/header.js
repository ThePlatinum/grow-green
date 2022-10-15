import React, { useState } from 'react';

function Header(args) {
  return (
    <div className='bg-green '>
      <nav class="navbar navbar-expand-lg container text-white">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Grow Green</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">Shop</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">Plants</a>
              </li>
            </ul>
            <div class="d-flex">
              <a class="btn text-white" > <i class="bi bi-basket"></i> </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header;