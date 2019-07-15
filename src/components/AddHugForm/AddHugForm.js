import React from 'react';
import {
  Input,
  InputGroup,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from 'reactstrap';

class AddHugForm extends React.Component {
   state = {
     squirrelDropdownOpen: false,
     treeDropdownOpen: false,
     squirrelName: 'Choose squirrel',
     treeName: 'Choose tree',
     date: '',
   }

   componentDidMount() {
     const { editHug } = this.props;
     if (Object.keys(this.props.editHug).length > 0) {
       this.setState({ squirrelName: editHug.squirrelId, date: editHug.date });
     }
   }

   squirrelToggleEvent = this.squirrelToggleEvent.bind(this);

   treeToggleEvent = this.treeToggleEvent.bind(this);

   dateChangeEvent = (e) => {
     e.preventDefault();
     this.setState({ date: e.target.value });
   }

   squirrelToggleEvent(e) {
     e.preventDefault();
     this.setState(prevState => ({
       squirrelDropdownOpen: !prevState.squirrelDropdownOpen,
     }));
   }

   treeToggleEvent(e) {
     e.preventDefault();
     this.setState(prevState => ({
       treeDropdownOpen: !prevState.treeDropdownOpen,
     }));
   }

   getSquirrelName = (e) => {
     e.preventDefault();
     this.setState({ squirrelName: e.target.name });
   }

   getTreeName = (e) => {
     e.preventDefault();
     this.setState({ treeName: e.target.name });
   }

   saveHug = (e) => {
     const { editHug } = this.props;
     e.preventDefault();
     if (editHug) {
       this.props.saveNewHug(this.state.squirrelName, this.state.treeName, this.state.date, editHug.id);
     }
   }

   render() {
     const squirrels = this.props.squirrels.map(squirrel => (
       <DropdownItem key={squirrel.id} name={squirrel.name} onClick={this.getSquirrelName}>{squirrel.name}</DropdownItem>
     ));
     const trees = this.props.trees.map(tree => (
       <DropdownItem key={tree.id} onClick={this.getTreeName} name={tree.name}>{tree.name}</DropdownItem>
     ));
     return (
       <div>
         <UncontrolledDropdown isOpen={this.state.squirrelDropdownOpen} onClick={this.squirrelToggleEvent}>
           <DropdownToggle caret>{this.state.squirrelName}</DropdownToggle>
           <DropdownMenu>
             {squirrels}
           </DropdownMenu>
         </UncontrolledDropdown>
         <UncontrolledDropdown isOpen={this.state.treeDropdownOpen} onClick={this.treeToggleEvent}>
           <DropdownToggle caret>{this.state.treeName}</DropdownToggle>
           <DropdownMenu>
             {trees}
           </DropdownMenu>
         </UncontrolledDropdown>
         <InputGroup>
         <Input
         onChange={this.dateChangeEvent}
         placeholder="03/04/1999"
         />
         </InputGroup>
         <button className="btn btn-secondary" onClick={this.saveHug}>Submit hug</button>
        </div>
     );
   }
}
export default AddHugForm;
