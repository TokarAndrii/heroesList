import React, { Component } from 'react';
import Input from './shared/Input'
import Button from './shared/Button'
import styles from './HeroesUpdater.css'

const INITIAL_STATE = {
    id: '',
    name: '',
    strength: '',
    intelligence: '',
    speed: '',
};

class HeroesUpdater extends Component {
    /*idHeroe = this.props.id;*/

    handleInputChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
    };

    handleSubmit = (e) => {
        e.preventDefault();

        //this.setState({id: this.idHeroe})

        this.props.onFormSubmit(this.state);

        this.setState({ ...INITIAL_STATE });
    };



    state = {...INITIAL_STATE};

    render() {
        const {name, strength, intelligence, speed} = this.state;
        const {buttonText, title,} = this.props;
        return (
            <div className={styles.holder}>
                <h3>{title}</h3>
                <form className={styles.form} onSubmit={this.handleSubmit}>
                    <Input name="name" type="text" onChange={this.handleInputChange} placeholder="Enter heroe name..."
                           value={name}/>
                    <Input name="strength" type="text" onChange={this.handleInputChange}
                           placeholder="Enter heroe strength..."
                           value={strength}/>
                    <Input name="intelligence" type="text" onChange={this.handleInputChange}
                           placeholder="Enter heroe intelligence..."
                           value={intelligence}/>
                    <Input name="speed" type="text" onChange={this.handleInputChange} placeholder="Enter heroe speed..."
                           value={speed}/>
                    <Button text={buttonText} type="submit"/>
                </form>
            </div>
        )
    }
}

export default HeroesUpdater
