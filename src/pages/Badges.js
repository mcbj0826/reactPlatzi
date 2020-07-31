import React from 'react'
import {Link} from 'react-router-dom'
import './styles/Badges.css'
import confLogo from '../images/badge-header.svg'
// import Navbar from '../components/Navbar'
import BadgesList from '../components/BadgesList'
import api from '../api'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'
import MiniLoader from '../components/MiniLoader'

//IMPORTANTE MODIFICAR EN EL ARCHIVO API.JS EL RETURN DE LA LISTA PARA QUE SE MUESTRE LOS DATOS EN VEZ DEL ERROR. 

class Badges extends React.Component {
    state= {
        loading: true,
        error: null,
        data: undefined
    }

    componentDidMount() {
        this.fetchData()

        this.setIntervalId= setInterval(this.fetchData, 5000)
    }

    componentWillUnmount() {
        clearInterval(this.setIntervalId)
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
        if(this.state.loading === true && this.state.data === undefined) {
            return <PageLoading />
        }
        if(this.state.error) {
            return <PageError error ={this.state.error}/>
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
                {this.state.loading && <MiniLoader />}
            </div>
            
        </React.Fragment>
        )
    }
}

export default Badges