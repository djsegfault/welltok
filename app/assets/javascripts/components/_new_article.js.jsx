var NewArticle= React.createClass({
handleClick() {
    var title = this.refs.title.value;
    var description = this.refs.description.value;
    var author = this.refs.author.value;
    var tags = this.refs.tags.value;
    
   console.log('The article title is ' + title + 'the description is ' + description);
   
   $.ajax({
        url: '/api/v1/articles',
        type: 'POST',
        data: { article: { title: title, description: description, author: author, tags: tags } },
        success: (article) => {
            this.props.handleSubmit(article);
        }
    });

},

render() {
        return (
            <div>
                <input ref='title' placeholder='Enter the title of the article' />
                <input ref='description' placeholder='Enter a description' />
                <input ref='author' placeholder='Enter the author name' />
                <input ref='tags' placeholder='Enter the tags for this article' />
                <button onClick={this.handleClick}>Submit</button>
            </div>
        )
    }
});
