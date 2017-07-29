import React, {Component} from 'react';
import Article from './Article.js';
import {articles} from '../fixtures.js';

const App = function() {
    return (
        <section>
            {articles.map((article) => <Article 
                                    key={article.id} 
                                    text={article.text} />)}
        </section>
        
    )
}

export default App;
