var Body = React.createClass({
    getInitialState() {
        return { articles: [] }
    },
    
    componentDidMount() {
        $.getJSON('/api/v1/articles.json', (response) => { this.setState({ articles: response }) });
    },
    
    handleSubmit(article) {
        console.log(article);
        var newState = this.state.articles.concat(article);
        this.setState({articles: newState});
    },
    
    handleDelete() {
        $.ajax({
            url: `/api/v1/articles/${id}`,
            type: 'DELETE',
            success:() => {
            this.removeArticleClient(id);
            }
        });
    },
    
    removeArticleClient(id) {
        var newArticles = this.state.articles.filter((article) => {
            return article.id != id;
        });

        this.setState({ articles: newArticles });
    },
    

    handleUpdate(article) {
        $.ajax({
            url: `/api/v1/articles/${article.id}`,
            type: 'PUT',
            data: { article: article },
            success: () => {
                console.log('article updated');
                this.updateArticles(article);
            }
        }
    )},
    
    updateArticles(article) {
        var articles = this.state.articles.filter((i) => { return i.id != article.id });
        articles.push(article);

        this.setState({articles: articles });
    },

    render() {
        console.log('Rendering body');
        return (
            <div>
                BODY HELLO
                <NewArticle handleSubmit={this.handleSubmit}/>
                <AllArticles articles={this.state.articles}  handleDelete={this.handleDelete} onUpdate={this.handleUpdate}/>
            </div>
        )
    }
});