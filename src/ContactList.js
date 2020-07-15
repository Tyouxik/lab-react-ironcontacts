import React, {Component} from 'react';

class ContactList extends Component {
state = {
    deleteID:''
}

    // findID = (event) => {
    //     this.setState ((state,props)=> ({
    //         deleteID: event.target.id
    //     }))
    // }


    render () {
        console.log(this.props)

        const contacts = this.props.contacts.map(contact => {
            // if sub component Contact, contact = this.props.data
            return (
                <tr key={contact.id}>
                    <td><img style={{height: '100px'}} src={contact.pictureUrl}/></td>
                    <td>{contact.name}</td>
                    <td>{contact.popularity.toFixed(2)}</td>
                    <td><button onClick={() => this.props.deleteContact(contact.id)}>Delete actor</button></td>
                </tr>
            // <Contact data={contact}/>
                
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
                    {contacts}
                </tbody>
            </table>
        
        )
    }
}

export default ContactList;