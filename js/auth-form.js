const navigate_form = (to) => {
    const ele = document.getElementsByClassName("form-auth-container")[0];
    switch (to) {
      case "sign_up": {
        ele.innerHTML = `<form class="form-auth">
        <label style="color: rgb(18, 41, 85);">Display name</label>
        <input class="input-type" placeholder="Name"/>
        <label style="color: rgb(18, 41, 85);">Email</label>
        <input class="input-type" placeholder="Email"/>
        <label style="color: rgb(18, 41, 85);">Password</label>
        <input class="input-type" placeholder="Password"/>
        <p>
          Passwords must contain at least eight characters, including at least
          1 letter and 1 number.
        </p>
        <button class="btn-primary">Sign up</button>
        <span>
          By clicking “Sign up”, you agree to
          <a href="#">our terms of service</a>,
          <a href="#">privacy policy </a>and
          <a href="#"> cookie policy</a>
        </span>
      </form>
      <span style="font-size: 14px; color: #868585" ;
        >Already have an account?
        <a
          style="text-decoration: none; color:#0095ff; cursor:pointer"
          onclick="navigate_form('sign_in')"
          >Log in</a>
      </span>`;
        break;
      }
  
      case "sign_in": {
        ele.innerHTML = `<form class="form-auth">
        <label style="color: rgb(18, 41, 85);">Email</label>
        <input class="input-type" placeholder="Email"/>
        <label style="color: rgb(18, 41, 85);">Password</label>
        <input class="input-type" placeholder="Password"/>
        <a style="
          text-decoration: none;
          color: #0095ff;
          cursor: pointer;
          margin: 10px 0px;
        " onclick="navigate_form('forgot_password')">Forgot password ?
        </a>
        <button class="btn-primary">Sign in</button>
    </form>
        <span style="font-size: 14px; color: #868585; " ;
          >Don’t have an account?
          <a style="text-decoration: none; color:#0095ff; cursor:pointer"
          onclick="navigate_form('sign_up')"
          >Sign up</a></span>`;
        break;
      }
      case "forgot_password": {
        ele.innerHTML = `<form class="form-auth">
        <p style="margin: 10px 0px"> Forgot your account’s password or having trouble logging into your Team? Enter your email address and we’ll send you a recovery code.
        </p>
        <label style="color: rgb(18, 41, 85);">Email</label>
        <input class="input-type" placeholder="Email"/>
          <button class="btn-primary" style="margin:10px 0px" onclick="navigate_form('type_code_forgot_password')" >Send recovery email</button>
        </form>
          `;
        break;
      }
  
      case "type_code_forgot_password": {
        ele.innerHTML = `<form class="form-auth">
        <p style="margin: 10px 0px"> Type vefify code you received.
        </p>
        <label style="color: rgb(18, 41, 85);">Code</label>
        <input class="input-type" placeholder="Code"/>
          <button class="btn-primary" style="margin :10px 0px">Type verify code</button>
        </form>
          `;
        break;
      }
    }
  };
  