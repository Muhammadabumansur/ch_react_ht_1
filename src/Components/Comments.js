import React, {Component} from 'react';
import {articles} from '../fixtures.js';

const comments = articles.map((article) => article.comments );

class Comments extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}