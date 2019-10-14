import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from "redux-form";
class PostsNew extends Component {
    renderTitleField(field){
        return(
            <div className="form-group">
                <label>Title</label>
                <input
                    {...field.input}
                    className="form-control"
                    type="text"
                />
            </div>
        )
    }
    onSubmit(values){
        console.log(values);
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <div className="container">
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field name="title" component={this.renderTitleField} />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}
    
    
PostsNew = reduxForm({
    form: "PostsNewForm"
})(PostsNew);

const selector = formValueSelector('PostsNewForm');
PostsNew = connect(state => {
  // can select values individually
  const title = selector(state, 'title')

  // props
  return {
    title,
  }
})(PostsNew);
    
export default PostsNew;    