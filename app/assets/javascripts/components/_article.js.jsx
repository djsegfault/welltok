
var Article = React.createClass({
    getInitialState() {
            return {editable: false}
        },
        
    handleEdit() {
        if(this.state.editable) {
            var id = this.props.article.id;
            var title = this.refs.title.value;
            var description = this.refs.description.value;
            var author = this.refs.author.value;
            var tags = this.refs.tags.value;
            var article = {id: id , title: title , description: description, author: author , tags: tags};
            this.props.handleUpdate(article);
        }
        
        this.setState({editable: !this.state.editable})
    },
    
    render() {
        var title = this.state.editable ? <input type='text' ref='title' defaultValue={this.props.article.title} /> : <h3>{this.props.article.title}</h3>;
        var description = this.state.editable ? <input type='textarea' ref='description' defaultValue={this.props.article.description} /> : <p>{this.props.article.description}</p>;
        var author = this.state.editable ? <input type='text' ref='author' defaultValue={this.props.article.author} /> : <p>{this.props.article.author}</p>;
        var tags = this.state.editable ? <input type='text' ref='tags' defaultValue={this.props.article.tags} /> : <p>{this.props.article.tags}</p>;
        return (
            <div>
                {title}
                {description}
                {author}
                {tags}
                <button onClick={this.props.handleDelete} >Delete</button>
                <button onClick={this.props.handleEdit}> Edit </button>
            </div>
        )
    }
});

  
