import { useMediaQuery } from "react-responsive";
import ButtonsTransparent from "./Buttons";
import bannerimage4 from "./assets/bannerimage2.png";
import { Link } from "react-router-dom";
import { useIsAuthenticated } from "react-auth-kit";

function Banner() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const isAuthenticated = useIsAuthenticated();

  return (
    <div className="BannerBox">
      {!isTabletOrMobile && (
        <div className="BannerText">
          {!isAuthenticated() && (
            <>
              <h2>
                Grub Your Stuff <span style={{ color: "orange" }}>30%</span> Off
                on Items Here Sign up Now
              </h2>{" "}
              <Link to={"/signup/"}>
                <ButtonsTransparent name={"Signup"} />
              </Link>
            </>
          )}
          {isAuthenticated() && (
            <>
              <h2>
                Grub Your Stuff <span style={{ color: "orange" }}>30%</span> Off
                on Items Here
              </h2>
            </>
          )}
        </div>
      )}
      {isTabletOrMobile && (
        <div
          className="BannerText"
          style={{ width: 900, alignItems: "center", justifyContent: "center" }}
        >
          {!isAuthenticated() && (
            <>
              <h2>
                Grub Your Stuff <span style={{ color: "orange" }}>30%</span> Off
                on Items Here Sign up Now
              </h2>{" "}
              <Link to={"/signup/"}>
                <ButtonsTransparent name={"Signup"} />
              </Link>
            </>
          )}
          {isAuthenticated() && (
            <>
              <h2>
                Grub Your Stuff <span style={{ color: "orange" }}>30%</span> Off
                on Items Here
              </h2>
            </>
          )}
        </div>
      )}
      {!isTabletOrMobile && (
        <div className="BannerImage">
          <img src={bannerimage4} width={250} alt="Bannerimg"/>
        </div>
      )}
    </div>
  );
}

export default Banner;
