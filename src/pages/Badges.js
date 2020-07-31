import React from 'react'
import {Link} from 'react-router-dom'
import './styles/Badges.css'
import confLogo from '../images/badge-header.svg'
// import Navbar from '../components/Navbar'
import BadgesList from '../components/BadgesList'
import api from '../api'

class Badges extends React.Component {
    state= {
        loading: true,
        error: null,
        data: undefined
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = async () => {
        this.setState({loading: true, error: null})

        try {
            const data = await api.badges.list()
            this.setState({loading: false, data: data})

        } catch (error) {
            this.setState({loading: false, error: error})
        }
    }
    render() {
        if(this.state.loading === true) {
            return 'Loading...'
        }
        if(this.state.error) {
            return `Error : ${this.state.error.message}`
        }
        return(
        <React.Fragment>
            {/* <Navbar /> */}
            <div className="Badges">
                <div className="Badges__hero">
                    <div className="Badges__container">
                        <img src={confLogo} alt="Conf-Logo" className="Badges_conf-logo"/>
                    </div>
                </div>    
            </div> 
            <div className="Badge__container">
                <div className="Badge__buttons">
                    <Link to="/badges/new" className= "btn btn-primary">New Badge</Link>
                </div>
                <div className="Badges__list">
                    <div className="Badges__container">
                        <BadgesList badges={this.state.data} />
                        
                    </div>

                </div>
            </div>
        </React.Fragment>
        )
    }
}

export default Badges