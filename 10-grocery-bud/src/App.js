import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: ''
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    //checks if the value is empty, if so display alert
    if (!name) {
      // display alert
      showAlert(true, 'danger', 'please enter a value');
    } else if (name && isEditing) {
      // deal with edit
    } else {
      showAlert(true, 'success', 'item added to the list');
      const newItem = {
        id: new Date().getTime().toString(), // cheat to have an ID number
        title: name
      };
      setList([...list, newItem]);
      setName(''); // to clear at the moment the item is added
    }
  };

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
  };

  const clearList = () => {
    showAlert(true, 'danger', 'empty list');
    setList([]);
  };

  const removeItem = (id) => {
    showAlert(true, 'danger', 'item removed');
    // if the item id does not match to the id just removed,
    // it should be placed in the new array
    setList(list.filter((item) => item.id !== id));
  };

  

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert}
        list={list} />}
        <h3>Grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} />
          <button className="clear-btn" onClick={clearList}>
            Clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
