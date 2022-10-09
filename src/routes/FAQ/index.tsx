import { useState } from "react";
import banner3 from "../../assets/images/banners/1.08_cats_and_pandas.jpg";
import banner1 from "../../assets/images/banners/1.09_combat_update_java.jpg";
import banner0 from "../../assets/images/banners/1.13_technically_updated_java.jpg";
import banner2 from "../../assets/images/banners/other_early_console_era.jpg";
import Accordion from "../../components/Accordion";
import CategorySelection from "../../components/CategorySelection";
import SearchBox from "../../components/SearchBox";
import FAQs from "../../util/FAQs";
import "./index.scss";

const FAQRoute = () => {
  document.title = "FAQ - Bedrock Launcher";

  const [results, setResults] = useState(0);
  const [filterText, setFilterText] = useState("");
  const handleFilterTextChange = (value: string) => {
    setFilterText(value);
    if (value === "") setResults(0);
    if (value !== "")
      setResults(
        FAQs.filter((v) => v.title.toLowerCase().includes(value.toLowerCase()))
          .length
      );
  };

  return (
    <div className="faq">
      <section className="faq-section">
        <h2>FAQ</h2>
        <p>You have questions, we have answers</p>
      </section>
      <main>
        <div className="container">
          <CategorySelection.Parent>
            <CategorySelection.Item
              to="/faq/data"
              bg={banner0}
              title="Your Data"
              description="Issues with your Minecraft worlds, settings, etc?"
            />
            <CategorySelection.Item
              to="/faq/accounts"
              bg={banner1}
              title="Minecraft Account"
              description="Questions about managing Minecraft accounts?"
            />
            <CategorySelection.Item
              to="/faq/versions"
              bg={banner2}
              title="Versions"
              description="Need help with Minecraft versions?"
            />
            <CategorySelection.Item
              to="/faq/misc"
              bg={banner3}
              title="Miscellaneous"
              description="Can't find what you're looking for, try looking here."
            />
          </CategorySelection.Parent>
          <hr />
          <form>
            <h3>Search</h3>
            <SearchBox
              results={results}
              value={filterText}
              handleFilter={handleFilterTextChange}
            />
          </form>
          {FAQs.map((faq) => (
            <Accordion
              title={faq.title}
              key={faq.id}
              desc={faq.body}
              style={{
                display:
                  filterText === "" ||
                  faq.title.toLowerCase().includes(filterText.toLowerCase())
                    ? "block"
                    : "none",
              }}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default FAQRoute;
