import React, {Component} from 'react'
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component'
import Hero from './Hero'
import styles from './HeroesList.css'


class HeroesList extends Component {



  onDelete = (hero) => {
    this.props.onDelete(hero)
  };

  onUpdate = (heroe) => {
    this.props.onUpdate(heroe)
  };

  handleSquadEditorAddBtnClick = (heroe) => {
    this.props.handleSquadEditorAddBtnClick(heroe);
  };


  render() {
    const heroes = ([...this.props.heroes]);
    // eslint-disable-next-line
    const isActiveSquad = this.props.isActiveSquad;
    // eslint-disable-next-line
    const isActiveEdit = this.props.isActiveEdit;


    return (
      <div>
        <h3>HEROES LIST qnty: {heroes.length}</h3>
        <Masonry className={styles.list} elementType={'ul'}>
          {heroes.map(hero => (
            <li key={hero.id} className={styles.listItem}>
              <Hero {...hero} {...this.props} onDelete={this.onDelete} onUpdate={this.onUpdate}
                    handleSquadEditorAddBtnClick={this.handleSquadEditorAddBtnClick}
                    isActiveSquad={isActiveSquad} isActiveEdit={isActiveEdit}/>
            </li>
          ))}
        </Masonry>
      </div>

    )
  }
}

HeroesList.propTypes = {
  heroes: PropTypes.arrayOf().isRequired,
  onDelete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  handleSquadEditorAddBtnClick: PropTypes.func.isRequired,
};



export default HeroesList
