import React, { Component } from "react";
import ArticleBody from "./components/ArticleBody/ArticleBody";
import ArticleActions from "./components/ArticleActions/ArticleActions";
import Article from "./components/Article/Article";
import LangContext from "./components/lang-context";

let EN = {
  article_btn: "Read",
  title: "NVIDIA NEWS",
  article_title: "NVIDIA Accelerated AI on Azure",
  description: "Article description:",
  description_text:
    "NVIDIA on Azure is bringing AI, networking, and high-performance computing to the enterprise.",
  current_lang: "EN",
};
let UA = {
  article_btn: "Читати",
  title: "НОВИНИ NVIDIA",
  article_title: "Прискорений штучний інтелект NVIDIA в Azure",
  description: "Опис статті:",
  description_text:
    "NVIDIA на Azure надає підприємствам можливості штучного інтелекту, мереж та високопродуктивних обчислень.",
  current_lang: "UA",
};

class App extends Component {
  state = {
    lang: EN,
  };

  componentDidMount() {
    const lastLang = localStorage.getItem("lang");
    if (lastLang === "UA") {
      this.setState({ lang: UA });
    }
  }

  SetLangEN() {
    localStorage.setItem("lang", "EN");
    this.setState({ lang: EN });
  }

  SetLangUA() {
    localStorage.setItem("lang", "UA");
    this.setState({ lang: UA });
  }

  render() {
    let { lang } = this.state;

    return (
      <div className="wrapper">
        <LangContext.Provider value={lang}>
          <Article>
            <div className="article__title"></div>
          </Article>
          <div className="lang">
            <button
              onClick={this.SetLangUA.bind(this)}
              className={`lang-btn ${lang.current_lang === "UA" && "active"}`}
            >
              UA
            </button>
            <button
              onClick={this.SetLangEN.bind(this)}
              className={`lang-btn ${lang.current_lang === "EN" && "active"}`}
            >
              EN
            </button>
          </div>
        </LangContext.Provider>
      </div>
    );
  }
}

export default App;