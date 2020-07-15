import React, {Component} from 'react';

class ContactList extends Component {
state = {
    deleteID:''
}

    findID = (event) => {
        this.setState ((state,props)=> ({
            deleteID: event.target.id
        }))
    }


    render () {
        console.log(this.state.deleteID)
        const contact = this.props.contacts.map(contact => {
            return (
                
                <tr key={contact.id}>
                    <td><img style={{height: '100px'}} src={contact.pictureUrl}/></td>
                    <td>{contact.name}</td>
                    <td>{contact.popularity.toFixed(2)}</td>
                    <td><button id={contact.id}onClick={this.findID}>Delete actor</button></td>
                </tr>
                
                
            )
        })
        
        return (
            
            <table>
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                    </tr>
                </thead>
                <tbody>
                    {contact}
                </tbody>
            </table>
        
        )
    }
}

export default ContactList;