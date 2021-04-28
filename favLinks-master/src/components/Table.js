import React from 'react';
const TableHeader = () => {
    // 'Boilerplate' Table header functional component
    /*
        In computer programming, 'boilerplate code' or just 'boilerplate' are sections of code that are repeated in multiple places with little to no variation.
        When using languages that are considered verbose, the programmer must write a lot of code to accomplish only minor functionality.
        Such code is called boilerplate.
    */
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>URL</th>
                <th>Remove</th>
            </tr>
        </thead>
    );
}
const TableBody = props => {
    // 'Boilerplate' Table body functional component 
    // Array.map will create 'table rows' from 'LinkData' passed via 'props'
    const rows = props.linkData.map((row, index) => {
        return (
            <tr key={index}>
                {/*-->Changed 'row.name' to 'row.linkName' */ }
                <td>{row.linkName}</td>
                {/*-->Changed 'row.URL' to 'row.url' */ }
                <td><a href={row.url}>{row.url}</a></td>
                <td><button onClick={() => props.removeLink(index)}>Delete</button></td>
            </tr>
        );
    });
    return <tbody>{rows}</tbody>;
}
const Table = (props) => {
//  const {linkData, removelink} = props;
    {/*TODO - return <table> component, TableHeader and TableBody  */}
    return (
        <div>
            {TableHeader()}
            {TableBody(props)}
        </div>
    )
}
export default Table;