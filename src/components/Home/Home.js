import React from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';

import firebase from 'firebase/app';
import Squirrelz from '../AllSquirrelz/AllSquirrelz';
import Treez from '../Treez/Treez';
import Hug from '../Hug/Hug';
import AddHugForm from '../AddHugForm/AddHugForm';
import HugCorral from '../HugCorral/HugCorral';
import hugData from '../../helpers/data/hugData';
import treeData from '../../helpers/data/treeData';
import squirrelData from '../../helpers/data/squirrelData';

import './Home.scss';


class Home extends React.Component {
  state = {
    hugs: [],
    squirrels: [],
    trees: [],
    hugModal: false,
    newHug: {},
    editHug: {},
  }

  hugModalToggle = this.hugModalToggle.bind(this);

  hugModalToggle(e) {
    e.preventDefault();
    this.setState(prevState => ({
      hugModal: !prevState.hugModal,
    }));
  }

getHugs = () => {
  hugData.getHugs()
    .then(hugs => this.setState({ hugs }))
    .catch(err => console.error('no hugs', err));
};

componentDidMount() {
  squirrelData.getSquirrels()
    .then(squirrels => this.setState({ squirrels }))
    .catch(err => console.error('no squirrels from home', err));
  treeData.getTrees()
    .then(trees => this.setState({ trees }))
    .catch(err => console.error('no trees from home', err));

  this.getHugs();
}

deleteHugs = (hugId) => {
  hugData.deleteHugs(hugId)
    .then(() => this.getHugs())
    .catch(err => console.error('error deleting', err));
}

saveNewHug = (squirrelName, treeName, date, id) => {
  if (Object.keys(this.state.editHug).length > 0) {
    this.updateHug(squirrelName, treeName, date, id);
  } else {
    this.makeNewHug(squirrelName, treeName, date);
  }
}

makeNewHug = (squirrelName, treeName, date) => {
  const newHug = {
    hugs: { ...this.state.newHug },
    squirrelId: squirrelName,
    treeId: treeName,
    date,
  };
  hugData.addHugToFirebase(newHug)
    .then(() => {
      this.setState({ newHug: {} });
      this.setState({ hugModal: false });
      this.getHugs();
    });
}

updateHug = (squirrelName, treeName, date, id) => {
  const hugToChange = { ...this.state.selectedHug };
  const hugId = id;
  hugToChange.squirrelId = squirrelName;
  hugToChange.treeId = treeName;
  hugToChange.date = date;
  hugData.editHug(hugId, hugToChange)
    .then(() => {
      this.setState({ hugToChange: {}, editHug: {} });
      this.setState({ hugModal: false });
      this.getHugs();
    });
}

selectHugToEdit = (hugId) => {
  this.setState({ hugModal: true });
  const selectedHug = this.state.hugs.find(x => x.id === hugId);
  this.setState({ editHug: selectedHug });
}

render() {
  const {
    squirrels,
    trees,
    newHug,
    editHug,
  } = this.state;
  const hugComponents = this.state.hugs.map(hug => (
    <Hug key={hug.id} hug={hug} deleteHugs={this.deleteHugs} selectHugToEdit={this.selectHugToEdit} editHug={editHug}/>
  ));

  return (
    <div className="home">
      <div className="row">
      <div className="col">
      <Squirrelz squirrels={ squirrels }/>
      </div>
      <div className="col">
      <Treez trees = { trees }/>
      </div>
      <div className="col mt-4"><h1>Hug Schedule</h1>{hugComponents}
      <Button color="primary" onClick={this.hugModalToggle}>Add hug</Button>
      </div>
      <Modal isOpen={this.state.hugModal} toggle={this.hugModalToggle} className={this.props.className}>
        <ModalHeader toggle={this.hugModalToggle}>Schedule a new hug</ModalHeader>
        <ModalBody>
          <AddHugForm
          squirrels={ squirrels }
          trees={ trees }
          newHug={ newHug }
          editHug={ editHug }
          saveNewHug={this.saveNewHug}
          />
        </ModalBody>
      </Modal>
    </div>
    </div>
  );
}
}

export default Home;
