var AllArticles = React.createClass({ 
    onUpdate(article) {
        this.props.onUpdate(article);
    },

    
    handleDelete(id) {
        this.props.handleDelete(id);
    },
    
    render() { 
        var articles= this.state.articles.map((article) => {
            return (
                <div key={article.id}>
                    <Article article={article}
                        handleDelete={this.handleDelete.bind(this, article.id)}
                        handleEdit={this.handleEdit}
                        handleUpdate={this.onUpdate} />
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
