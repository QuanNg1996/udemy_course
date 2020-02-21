import React, { useEffect } from 'react';
import classes from './Cockpit.module.css';

const Cockpit = (props) => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // Http request ...
  setTimeout(() => {
      alert('Saved data to cloud!');
    }, 5000);
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    }
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    };
  });

  const assignedClasses = [];
  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  btnClass = classes.Red;
  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red); // assignedClasses = ['red']
  }

  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold); // assignedClasses = ['red', 'bold']
  }

  return(
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is a paragraph</p>
      <button
        className={btnClass}
        onClick={props.clicked}>Show/Remove Name
      </button>
    </div>
  );
};

export default React.memo(Cockpit);
