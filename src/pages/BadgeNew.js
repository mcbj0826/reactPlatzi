import React from 'react'

import './styles/BadgeNew.css'
import header from '../images/platziconf-logo.svg'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import PageLoading from '../components/PageLoading'
import api from '../api'

class BadgeNew extends React.Component {
    state = { 
        loading: false,
        error:null,
        form: {
        firstName: '',
        lastName:'',
        email:'',
        jobTitle:'',
        twitter:'',

    } }

    handleChange =e => {
        const nextForm = this.state.form
        nextForm[e.target.name] = e.target.value
        
        this.setState({
               form: nextForm,
        })
    }

    handleSubmit  = async  e => {
        e.preventDefault()
        this.setState({loading: true, error: null})

        try{
            await api.badges.create(this.state.form)
            this.setState({loading: false})

            this.props.history.push('/badges')
        }catch(error){
            this.setState({loading: false, error: error})

        }
    }
    render() {
        if(this.state.loading) {
            return <PageLoading />
        }
        return(
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img src={header} alt="Logo" className="BadgeNew__hero-image img-fluid"/>
                </div>
 
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge firstName={this.state.form.firstName || 'FIRST NAME'}  lastName={this.state.form.lastName || 'LAST NAME'} twitter={this.state.form.twitter || 'TWITTER'} jobTitle={this.state.form.jobTitle || 'JOB_TITLE'} email={this.state.form.email || 'EMAIL'} avatarUrl="" />
                        </div>
                        <div className="col-6">
                            <h1>New Attendant</h1>
                            <BadgeForm onChange= {this.handleChange} onSubmit={this.handleSubmit} formValues= {this.state.form} error={this.state.error} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

}

export default BadgeNew