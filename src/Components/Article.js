import React, {Component} from 'react';
import Button from './Button.js';
import Comments from './Comments.js';

class Article extends Component {
    constructor(props) {
        super(props);
        this.toggleArticle = this.toggleArticle.bind(this);
        this.state = {
            isOpened: true
        }
    }

    toggleArticle = () => {
        this.setState({
            isOpened: !this.state.isOpened
        })
    }

    render() {
        return (
            <article>
                { this.state.isOpened ?
                    <p className="opened">{this.props.text}</p> 
                    : 
                    <p className="closed">{this.props.text}</p>  
                }
                <Comments id="this.props.key" />
                <Button handleClick={this.toggleArticle} isOpened={this.state.isOpened} />
            </article>
        )
    }
}

export default Article;
