import React, {Component} from "react";
import ArticleActions from "../ArticleActions/ArticleActions";
import ArticleBody from "../ArticleBody/ArticleBody";

class Article extends Component {

    render (){
        return (
            <div className="article">
            {this.props.children}
            <ArticleBody lang={this.props.lang} />
            <ArticleActions />
            </div>
            );
    }
}
export default Article;

