import React from 'react'
import { Link } from 'react-router-dom'
import Gravatar from'./Gravatar'

function useSearchBadges(badges) {
    const [query, setQuery] =React.useState('')
    const [filteredBadges, setFilteredBadges]= React.useState(badges)
    React.useMemo( () => { const result =  badges.filter(badge => {
        return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase())
        })
        setFilteredBadges(result)
        
    }, [badges, query ])

    return [query, setQuery, filteredBadges] = useSearchBadges(badges)

}

function BadgesList (props) {
    const badges = props.badges
    const [query, setQuery] =React.useState('')
    const [filteredBadges, setFilteredBadges]= React.useState(badges)
    React.useMemo( () => { const result =  badges.filter(badge => {
        return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase())
        })
        setFilteredBadges(result)
        
    }, [badges, query ])

        if (filteredBadges.length === 0) {
            return (
                <div>
                    <div className="form-group">
                        <label>Filter Badges</label>
                        <input type="text" className="form-control" value={query} onChange={(e) => {
                            setQuery(e.target.value)
                        }}/>
                    </div>
                    <div>
                        <h3>No badges were found</h3>
                        <Link className="btn btn-primary" to="/badges/new">Create new badge</Link>

                    </div>
                </div>
            )
        }
        return (
            <div>
                <div className="form-group">
                    <label>Filter Badges</label>
                    <input type="text" className="form-control" value={query} onChange={(e) => {
                        setQuery(e.target.value)
                    }}/>
                </div>
                <ul className="list-untyled">
                    {filteredBadges.map((badge)=> {
                        return (
                            <li key= {badge.id}>
                                <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                                <p>{badge.firstName}{badge.lastName}</p></Link> 
                            </li>
                        
                        )
                    })
                    }
                </ul>
            </div>
        )
}

export default BadgesList