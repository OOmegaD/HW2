import React, {Component} from 'react';
class Form extends Component {
    constructor(props) {
        super(props);  
        /* TODO - set initial state for link name and URL */
        // this.states , this.props -->
        this.state = {
            linkName: '',
            url: ''
        }
    }
    handleChange = event => {
        /* TODO - Logic for changing state based on form changes */
        if(event.target.id === "link")
            // Update the 'linkName' in 'state'
            this.setState({ linkName: event.target.value});
        else
            // Update the 'url' in 'state'
            this.setState({ url: event.target.value});
    }
    // To prevent page 'reload' on form 'submit'
    onFormSubmit = event => {
        event.preventDefault();
        /* TODO - Logic for calling props to handle submission and setting state changes */
        let newFavLink = {linkName: this.state.linkName, url: this.state.url};
        // 'addNew' was passed as 'props' from 'LinkContainer'
        this.props.addNew(newFavLink);
        // 'Reset' the 'states'
        this.setState({ linkName: '', url: ''});
    }
    render() {
        return(
            <form>
                {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
                {/* In JSX, 'for' is replaced by 'htmlFor'*/ }
                <label htmlFor="link">Link Name : </label>
                {/* Added value = {this.state.linkName} to update User Interface when the internal 'state' was updated */}
                <input type="text" id="link" value={this.state.linkName} onChange={(event) =>this.handleChange(event)}/>      
                {/* In JSX, 'for' is replaced by 'htmlFor'*/ }
                <label htmlFor="url">URL : </label>
                <input type="text" id="url" value={this.state.url} onChange={(event) =>this.handleChange(event)}/>
                {/* Handle Submission Button */}
                <button type="submit" onClick={(e)=>this.onFormSubmit(e)}>Submit</button>                
            </form>
        )
    }
}
export default Form;