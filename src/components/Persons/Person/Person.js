import React, { Component} from 'react';
// import classes from './Person.module.css';
import Aux from '../../../hoc/Aux';
import PropTypes from 'prop-types';


class Person extends Component {
  render() {
    console.log('[Person.js] rendering...');
    return (
      // <div className={classes.Person}>
      <Aux>
        <p onClick={this.props.click}>
          My name is {this.props.name} and I am {this.props.age}!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
      // </div>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  change: PropTypes.func
};

export default Person;
