import React, {Component} from "react";
import LangContext from "../lang-context";
import './style.scss';

class ArticleBody extends Component{
  render(){
    return (
      <LangContext.Consumer>
        {
          (context) => {
          return (
            <div>
              <h1 className="title">{context.title}</h1>
              <h2 className="article_title">{context.article_title}</h2>
              <div className="article__body">
                <h3 className="article__description">{context.description}</h3>
                <p className="article__description--text">{context.description_text}</p>
              </div>
            </div>
          )}}
      </LangContext.Consumer>
)}}

export default ArticleBody;