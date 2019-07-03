import React from 'react';
import addHugData from '../../helpers/data/addHugData';

class Form extends React.Component {
   state = {
     squirrelId: '',
     treeId: '',
     date: '',
   };

   changeEvent = (e) => {
     this.setState({
       [e.target.name]: e.target.value,
     });
   };

   giveHug = (e) => {
     e.preventDefault();
     const hug = {
       squirrelId: this.state.squirrelId,
       treeId: this.state.treeId,
       date: this.state.date,
     };

     addHugData.addHug(hug)
       .then(() => {
         this.setState({
           squirrelId: '',
           treeId: '',
           date: '',
         });
       })
       .catch(err => console.error('cannot add hug', err));
   };


   render() {
     return (
      <form>
        <div class="form-group">
          <label for="date">Date</label>
          <input type="date" class="form-control" id="date" placeholder="date" value={this.state.date} onChange={e => this.changeEvent(e)}/>
        </div>
        <div class="form-group">
            <label for="tree">Select Tree</label>
            <select class="form-control" id="tree" value={this.state.treeId} onChange={e => this.changeEvent(e)}>
              <option>Maple</option>
              <option>Oak</option>
              <option>Willow</option>
            </select>
        </div>
        <div class="form-group">
            <label for="tree">Select Squirrel</label>
            <select class="form-control" id="squirrel" value={this.state.squirrelId} onChange={e => this.changeEvent(e)}>
              <option>Trippy</option>
              <option>Sleepy</option>
              <option>Thumbelina</option>
              <option>Skippy</option>
              <option>Sketchy</option>
            </select>
        </div>
        <button onClick={e => this.giveHug(e)}>Add Hug</button>
    </form>
     );
   }
}

export default Form;
