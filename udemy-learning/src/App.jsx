import "./App.css";

function App() {
  return (
    <>
      {/* <div class="navigation">
        <input type="checkbox" class="navigation__checkbox" id="navi-toggle" />

        <label for="navi-toggle" class="navigation__button">
          <nav class="navigation__nav">
            <ul class="navigation__list">
              <li class="navigation__item">
                <a href="#" class="navigation__link">
                  <span>01</span>About Natous
                </a>
              </li>
              <li class="navigation__item">
                <a href="#" class="navigation__link">
                  <span>02</span>Your benfits
                </a>
              </li>
              <li class="navigation__item">
                <a href="#" class="navigation__link">
                  <span>03</span>Popular tours
                </a>
              </li>
              <li class="navigation__item">
                <a href="#" class="navigation__link">
                  <span>04</span>Stories
                </a>
              </li>
              <li class="navigation__item">
                <a href="#" class="navigation__link">
                  <span>05</span>Book now
                </a>
              </li>
            </ul>
          </nav>
        </label>
      </div> */}

      <div class="container">
        <input type="checkbox" id="navi-toggle" class="custom-checkbox" />
        <label for="navi-toggle" class="custom-label">
          Toggle Content
        </label>
        <div class="content">This is the content to show or hide.</div>
      </div>

      <header class="header">
        <div class="logo-box">
          <img src="src/img/logo-green-small-1x.png" alt="Logo" class="logo" />
        </div>
        <div class="text-box">
          <h1 class="heading-primary">
            <span class="heading-primary-main"> Outdoors</span>
            <span class="heading-primary-sub"> is where life happens</span>
          </h1>
        </div>
      </header>
    </>
  );
}

export default App;
