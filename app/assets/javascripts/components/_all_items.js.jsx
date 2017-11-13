var AllArticles = React.createClass({ 
     getInitialState() {
        return { articles: [] }
    },
    
    componentDidMount() { 
        $.getJSON('/api/v1/articles.json', (response) => { this.setState({ articles: response }) });
    }, 
    
    render() { 
        var articles= this.state.articles.map((article) => {
            return (
                <div>
                    <h3>{article.name}</h3>
                    <p>{article.description}</p>
                    <p>{article.author}</p>
                    <p>{article.tags}</p>
                </div>
            )
        });

        return(
            <div>
                {articles}
            </div>
        )
    } 
});
