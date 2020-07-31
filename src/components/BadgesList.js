import React from 'react'
import { Link } from 'react-router-dom'
import Gravatar from'./Gravatar'

class BadgesList extends React.Component {

    render() {
        if (this.props.badges.length === 0) {
            return (
                <div>
                    <h3>No badges were found</h3>
                    <Link className="btn btn-primary" to="/badges/new">Create new badge</Link>

                </div>
            )
        }
        return (
            <ul className="list-untyled">
                {this.props.badges.map((badge)=> {
                    return (
                            <li key= {badge.id}>
                                <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}/edit`}>
                                <p>{badge.firstName}{badge.lastName}</p></Link> 
                            </li>
                        
                            )
                    })
                }
            </ul>
        )
    }

}

export default BadgesList