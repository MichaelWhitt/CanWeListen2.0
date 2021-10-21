import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/react-fontawesome'




class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
          accounts: [
            {
                id: 0,
                name: "Michael Whitt",
                image: "/assets/images/i2.jpg",
                description: "Chief Executive Officer",
                phone: 1-233-645-9087,
                featured: true,
                email: "fakeemail@fakesite.com",
                github: "https://github.com/MichaelWhitt"
            },
            {
                id: 1,
                name: "Jacob Mooney",
                image: "/assets/images/i3.jfif",
                description: "Chief Technology Officer",
                phone: 1-233-645-9087,
                featured: true,
                email: "fakeemail@fakesite.com",
                github: "https://github.com/jacobmooney"
            },
            {
                id: 2,
                name: "Andy McAdams",
                image: "/assets/images/i1.jfif",
                description: "Chief Information Officer",
                phone: 1-233-645-9087,
                featured: true,
                email: "fakeemail@fakesite.com",
                github: "https://github.com/andymcadams-dev"
            },
            
        ]
        };
    }

      render() {
        const directory = this.state.accounts.map(account => {
            return (
                <div key={account.id} className="col">
                    <img src={account.image} alt={account.name} />
                    <h2>{account.name}</h2>
                    <div>{account.description}</div>
                    <FontAwesomeIcon icon="fa-brands fa-github"/>
                    <div>{account.github}</div>
                </div>
            );
        });

        return (
            <div>
                <div className="container">
                    <div className="row">
                        {directory}
                    </div>
                </div>
            </div>
        );
    }
  } 
  

export default Directory;