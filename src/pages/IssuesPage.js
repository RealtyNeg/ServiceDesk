import React from 'react';

const IssuesPage = () =>
{
  return (
    <>
      <header class="py-3 mb-3 border-bottom">
        <div class="container-fluid d-grid gap-3 align-items-center" >
          <div class="dropdown">
            <a href="#" class="d-flex align-items-center col-lg-4 mb-2 mb-lg-0 link-dark text-decoration-none dropdown-toggle" id="dropdownNavLink" data-bs-toggle="dropdown" aria-expanded="false">

            </a>
            <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownNavLink">
              <li><a class="dropdown-item active" href="#" aria-current="page">Overview</a></li>
              <li><a class="dropdown-item" href="#">Inventory</a></li>
              <li><a class="dropdown-item" href="#">Customers</a></li>
              <li><a class="dropdown-item" href="#">Products</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Reports</a></li>
              <li><a class="dropdown-item" href="#">Analytics</a></li>
            </ul>
          </div>

          <div class="d-flex align-items-center">
            <form class="w-100 me-3">
              <input type="search" class="form-control" placeholder="Search..." aria-label="Search" />
            </form>

            <div class="flex-shrink-0 dropdown">
              <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://github.com/mdo.png" alt="mdo" class="rounded-circle" width="32" height="32" />
              </a>
              <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                <li><a class="dropdown-item" href="#">New project...</a></li>
                <li><a class="dropdown-item" href="#">Settings</a></li>
                <li><a class="dropdown-item" href="#">Profile</a></li>
                <li><span class="dropdown-divider"></span></li>
                <li><a class="dropdown-item" href="#">Sign out</a></li>
              </ul>
            </div>
          </div>
        </div>
      </header >
      <div class="container-fluid pb-3">
        <div class="d-grid gap-3" >
          <div class="bg-light border rounded-3">

          </div>
          <div class="bg-light border rounded-3">
          </div>
        </div>
      </div>
    </>
  );
};

export default IssuesPage;
