import './App.css';

function App() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-content">
          <h2 className="logo"><a href="#">OGX</a></h2>
          <ul className="menu">
            <li className="menu-item"><a href="#">Home</a></li>
            <li className="menu-item"><a href="#">Cuadros</a></li>
            <li className="menu-item"><a href="#">Ropa</a></li>
            <li className="menu-item"><a href="#">Relojes Modificados</a></li>
          </ul>
        </div>
      </nav>
      <main>
        <div className="wrapper">

          <div className="pictures">
            <h2 className="pictures-title">OGX Arte</h2>
            <div className="pictures-container">
              <div className="picture-card">
                <div className="picture">
                  <img src="../img/shop_zine1_360x.png" alt="" />
                </div>
                <h3>Cuadro Node World</h3>
                <p>US$49.99</p>
              </div>
              <div className="picture-card">
                <div className="picture">
                  <img src="../img/shop_vol2a_360x.png" alt="" />
                </div>
                <h3>Cuadro Signal World</h3>
                <p>US$49.99</p>
              </div>
            </div>
          </div>
          
          <hr />

          <div className="watches">
              <h2 className="watches-title">OGX Relojes Modificados</h2>
              <div className="watches-container">

                <div className="watch-card">
                  <div className="watch">
                    <img src="../img/shop_watch_gold_360x.png" alt="" />
                  </div>
                  <h3>reloj modificado casio (black/gold)</h3>
                  <p>US$42.99</p>
                </div>
                <div className="watch-card">
                  <div className="watch">
                    <img src="../img/shop_watch_360x.png" alt="" />
                  </div>
                  <h3>reloj modificado casio (black)</h3>
                  <p>US$39.99</p>
                </div>
                <div className="watch-card">
                  <div className="watch">
                    <img src="../img/shop_watch2_360x.png" alt="" />
                  </div>
                  <h3>reloj modificado casio (silver)</h3>
                  <p>US$52.99</p>
                </div>
                <div className="watch-card">
                  <div className="watch">
                    <img src="../img/shop_orange1_360x.png" alt="" />
                  </div>
                  <h3>reloj modificado casio (orange)</h3>
                  <p>US$52.99</p>
                </div>
                <div className="watch-card">
                  <div className="watch">
                    <img src="../img/shop_green1_360x.png" alt="" />
                  </div>
                  <h3>reloj modificado casio (silver/green)</h3>
                  <p>US$52.99</p>
                </div>
                <div className="watch-card">
                  <div className="watch">
                    <img src="../img/shop_blue_360x.png" alt="" />
                  </div>
                  <h3>reloj modificado casio (blue)</h3>
                  <p>US$56.99</p>
                </div>
              </div>
          </div>

          <hr />

          <div className="clothing">
            <h2 className="clothing-title">OGX Ropa</h2>
            <div className="clothing-container">

              <div className="clothes-card">
                <div className="clothes-card-image">
                  <img src="../img/01shop_tee_logoblack_360x.png" alt="tee" />
                </div>
                <h3>polera logoblack</h3>
                <p>US$18.00</p>
              </div>
              
              <div className="clothes-card">
                <div className="clothes-card-image">
                  <img src="../img/02shop_tee_arduino_360x.png" alt="tee" />
                </div>
                <h3>polera arduino</h3>
                <p>US$18.00</p>
              </div>

              <div className="clothes-card">
                <div className="clothes-card-image">
                  <img src="../img/03shop_tee_connected_360x.png" alt="tee" />
                </div>
                <h3>polera connected</h3>
                <p>US$18.00</p>
              </div>

              <div className="clothes-card">
                <div className="clothes-card-image">
                  <img src="../img/04shop_tee_connected2019_360x.png" alt="tee" />
                </div>
                <h3>polera connected v2</h3>
                <p>US$18.00</p>
              </div>

              <div className="clothes-card">
                <div className="clothes-card-image">
                  <img src="../img/05shop_tee_hardware_360x.png" alt="tee" />
                </div>
                <h3>polera hardware</h3>
                <p>US$18.00</p>
              </div>
              
              <div className="clothes-card">
                <div className="clothes-card-image">
                  <img src="../img/06shop_tee_logo_360x.png" alt="tee" />
                </div>
                <h3>polera logowhite</h3>
                <p>US$18.00</p>
              </div>

              <div className="clothes-card">
                <div className="clothes-card-image">
                  <img src="../img/07shop_tee_manifesting_360x.png" alt="tee" />
                </div>
                <h3>polera manifesting</h3>
                <p>US$18.00</p>
              </div>

              <div className="clothes-card">
                <div className="clothes-card-image">
                  <img src="../img/08shop_tee_nodal_360x.png" alt="tee" />
                </div>
                <h3>polera nodal</h3>
                <p>US$18.00</p>
              </div>

              <div className="clothes-card">
                <div className="clothes-card-image">
                  <img src="../img/09shop_tee_nodesinnetwork_360x.png" alt="tee" />
                </div>
                <h3>polera node network</h3>
                <p>US$18.00</p>
              </div>
              
              <div className="clothes-card">
                <div className="clothes-card-image">
                  <img src="../img/10shop_tee_pi_360x.png" alt="tee" />
                </div>
                <h3>polera pi</h3>
                <p>US$18.00</p>
              </div>

              <div className="clothes-card">
                <div className="clothes-card-image">
                  <img src="../img/11shop_tee_portal_360x.png" alt="tee" />
                </div>
                <h3>polera portal</h3>
                <p>US$18.00</p>
              </div>

              <div className="clothes-card">
                <div className="clothes-card-image">
                  <img src="../img/12shop_tee_symbols_360x.png" alt="tee" />
                </div>
                <h3>polera symbols</h3>
                <p>US$18.00</p>
              </div>

              <div className="clothes-card">
                <div className="clothes-card-image">
                  <img src="../img/13shop_tee_terminals_360x.png" alt="tee" />
                </div>
                <h3>polera terminals</h3>
                <p>US$18.00</p>
              </div>
              
              <div className="clothes-card">
                <div className="clothes-card-image">
                  <img src="../img/14shop_tee_connected_white_360x.png" alt="tee" />
                </div>
                <h3>polera connected white</h3>
                <p>US$18.00</p>
              </div>

              <div className="clothes-card">
                <div className="clothes-card-image">
                  <img src="../img/15shop_tee_nodal_white_360x.png" alt="tee" />
                </div>
                <h3>polera nodal white</h3>
                <p>US$18.00</p>
              </div>

              <div className="clothes-card">
                <div className="clothes-card-image">
                  <img src="../img/16shop_tee_pi_white_360x.png" alt="tee" />
                </div>
                <h3>polera pi white</h3>
                <p>US$18.00</p>
              </div>

            </div>
          </div>

        </div>
      </main>
    </div>
    
  );
}

export default App;
