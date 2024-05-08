import './Footer.css';

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer_big flex">

            <div className="footer_left">
              <div className="footer_tit">MirAy</div>
              <div className="footer_icons flex">
                <div className="footer_ic"></div>
                <div className="footer_ic"></div>
                <div className="footer_ic"></div>
                <div className="footer_ic"></div>
              </div>



            </div>

            <div className="footer_right flex">
              <div class="footer_nav">
                <span class="footer_txt"> Categories</span>
                <ul class="footer_list">
                  <li><a href="#">Skincare </a></li>
                  <li><a href="#">Lipstick</a></li>
                  <li><a href="#">Fragrance</a></li>
                  <li><a href="#">Makeup</a></li>
                </ul>
              </div>

              <div class="footer_nav">
                <span class="footer_txt"> Recources </span>
                <ul class="footer_list">
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">Help</a></li>
                </ul>
              </div>
            </div>

          </div>

          <p className="footer_copy">Copyright © 2024 Hashtag Developer. All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
