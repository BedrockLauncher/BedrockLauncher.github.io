import ButtonText from "../../components/ButtonText";
import ShowSections from "../../util/ShowSections";
import BannerSection from "./components/BannerSection";
import ShowSectionItem from "./components/ShowSectionItem";
import "./index.scss";

const Home = () => {
  document.title = "Home - Bedrock Launcher";

  return (
    <>
      <BannerSection />

      <main className="home-show-sections">
        <div className="container">
          {ShowSections.map((s) => {
            return {
              ...s,
              img: s.img.replaceAll("%PUBLIC_PATH%", process.env.PUBLIC_URL),
            };
          }).map((sec, i) => {
            return (
              <ShowSectionItem
                key={sec.id}
                info={sec}
                invertOrder={i % 2 !== 0}
              />
            );
          })}
          <ButtonText
            to="https://github.com/BedrockLauncher/BedrockLauncher"
            target="_blank"
            rel="noreferrer"
            label="repo link"
            className="being-built"
          >
            What's being built?
          </ButtonText>
        </div>
      </main>
    </>
  );
};

export default Home;
