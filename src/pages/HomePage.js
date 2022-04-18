import React from 'react';

const HomePage = () =>
{
  return (
    <main class="container col-xl-10 col-xxl-8 px-4 py-5">
      <div class="row  align-items-center g-lg-5 py-5">
        <div class="col-lg-7 text-center text-lg-start">
          <h1>Premium Support</h1>
          <h2>Need assistance?</h2>
          <p>
            If you have any difficulties using our software packages please log your problem on our Problem Tracking System (PTS). This will ensure that your problem will be seen to as soon as possible and you can also check on the progress of its resolution from here.
          </p>
          <p>
            Please key in your PTS user name and password. If you are a new user please press the Register button and fill in the necessary details so that we can register you as a new user.
          </p>
          <hr />
          <h1>Remote Support</h1>
          <p>
            Download Focus TeamViewer by clicking here to enable our staff to access your PC remotely to provide immediate support.
          </p>
          <p>
            Once you download or run TeamViewer please call our support department on +356 2138 1613 and quote the Team Viewer ID and password located in the two blue boxes on the Team Viewer screen. The password will only be valid for the current session and will change automatically on your subsequent session. 	Download Focus TeamViewer
            TeamViewer is a secure Remote Access and Support solution by TeamViewer GmbH.
          </p>
          <p>
            In case of difficulty please e-mail premiumsupport@agilis.com.mt
          </p>
        </div>

        <div class="col-md-10 mx-auto col-lg-5 ">
          <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
            <li class="nav-item" role="presentation">
              <a
                class="nav-link active"
                id="logintabbtn"
                data-bs-toggle="pill"
                data-bs-target="#pills-login"
                type="button"
                role="tab"
                href="#pills-login"
                aria-controls="pills-login"
                aria-selected="true"
              >Login</a
              >
            </li>
            <li class="nav-item" role="presentation">
              <a
                class="nav-link"
                id="registertabbtn"
                data-bs-toggle="pill"
                data-bs-target="#pills-register"
                href="#pills-register"
                role="tab"
                aria-controls="pills-register"
                aria-selected="false"
              >Register</a
              >
            </li>
          </ul>

          <div class="tab-content h-100" >
            <div
              class="tab-pane fade show active"
              id="pills-login"
              role="tabpanel"
              aria-labelledby="logintabbtn"
            >
              <form class="p-4 p-md-5 border rounded-3 bg-light">

                <div class="form-outline mb-4">
                  <input type="email" id="loginName" class="form-control" />
                  <label class="form-label" for="loginName">Email or username</label>
                </div>


                <div class="form-outline mb-4">
                  <input type="password" id="loginPassword" class="form-control" />
                  <label class="form-label" for="loginPassword">Password</label>
                </div>


                <div class="row mb-4">
                  <div class="col-md-6 d-flex justify-content-center">

                    <div class="text-center">
                      <p>Not a member? <a href="#!">Register</a></p>
                    </div>
                  </div>

                  <div class="col-md-6 d-flex justify-content-center">

                    <a href="#!">Forgot password?</a>
                  </div>
                </div>


                <button type="submit" class="btn btn-primary btn-block mb-4">
                  Sign in
                </button>
              </form>
            </div>
            <div
              class="tab-pane fade"
              id="pills-register"
              role="tabpanel"
              aria-labelledby="registertabbtn"
            >
              <form class="p-4 p-md-5 border rounded-3 bg-light">

                <div class="form-outline mb-4">
                  <input type="text" id="registerName" class="form-control" />
                  <label class="form-label" for="registerName">Name</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="text" id="registerUsername" class="form-control" />
                  <label class="form-label" for="registerUsername">Username</label>
                </div>


                <div class="form-outline mb-4">
                  <input type="email" id="registerEmail" class="form-control" />
                  <label class="form-label" for="registerEmail">Email</label>
                </div>


                <div class="form-outline mb-4">
                  <input type="password" id="registerPassword" class="form-control" />
                  <label class="form-label" for="registerPassword">Password</label>
                </div>


                <div class="form-outline mb-4">
                  <input
                    type="password"
                    id="registerRepeatPassword"
                    class="form-control"
                  />
                  <label class="form-label" for="registerRepeatPassword"
                  >Repeat password</label
                  >
                </div>

                <button type="submit" class="btn btn-primary btn-block mb-3">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
