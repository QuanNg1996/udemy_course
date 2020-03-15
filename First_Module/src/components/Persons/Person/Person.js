import React, { Component} from 'react';
// import classes from './Person.module.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import classes from './Person.module.css';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';


class Person extends Component {
  constructor(props) {
    super(props)
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }

  render() {
    console.log('[Person.js] rendering...');
    return (
      // <div className={classes.Person}>
      <Aux>
        {this.context.authenticated ? <p>Logged in !</p> : <p>Please log in</p>}
        <p onClick={this.props.click}>
          My name is {this.props.name} and I am {this.props.age}!
        </p>
        <p>{this.props.children}</p>
        <input
          // ref={(inputEl) => {this.inputElement = inputEl}}
          ref={this.inputElementRef}
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

export default withClass(Person, classes.Person);
