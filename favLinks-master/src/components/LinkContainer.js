import React from 'react';
import Table from './Table';
import Form from './Form';
class LinkContainer extends React.Component {
    constructor(props){
        super(props)
        /* TODO - Create state object for storing favLinks */  
        // Creating a 'state' to store the list of 'favLinks'
        this.state = {favLinks: [],} 
    }
    removeCharacter = index => {
        /* TODO - Create logic for setting the 'state' to filter array and remove 'favLink' at 'index' */
        const tempArray = this.state.favLinks;   
        // This will remove one element starting at the 'index'
        tempArray.splice(index, 1);
        // This will set the new 'state'
        this.setState ({ favLinks : tempArray }); 
    }
    handleSubmit = favLink => {
        /* TODO - Create logic to setState and add new favLink to favLinks array in state */
        this.setState({          
            // A 'Spread Operator'. This will append the new link at the end of the submission
            /*
                The Story of the Three Dots (...) - Spread vs Rest Operators
                Spread Operator: Allows iterables (Arrays/Objects/Strings) to be expanded into single arguments/elements.
                Rest Parameter: Collects all remaining elements into an array.
                Source: https://scotch.io/bar-talk/javascripts-three-dots-spread-vs-rest-operators543
            */
            favLinks: [...this.state.favLinks, favLink] 
            });
    }
    render() {    
        return (
            <div className="container">
                <h1>My Favorite Links</h1>
                <p>Add a new url with a name and link to the table.</p>          
                {/*TODO - Add Table Component */}
                <Table linkData= {this.state.favLinks} removeLink= {(index) => this.removeCharacter(index)} />           
                <br/>
                <h3>Add New</h3>            
                {/*TODO - Add Form Component */}            
                <Form addNew= {(favLink) => this.handleSubmit(favLink)} />
            </div>
        );
    }
}
export default LinkContainer;