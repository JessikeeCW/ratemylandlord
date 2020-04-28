import React, { Component } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

class RateModal extends Component {
  constructor(props) {
    super(props);
    const { propertyId } = this.props; //not sure parent of this component, need to access property Id
    this.state = {
      setShow: false,
      timely_maintenance: 1,
      appropriate_distance: 1,
      respectful: 1,
      communication: 1,
      flexibility: 1,
      transparency: 1,
      organized: 1,
      professionalism: 1,
      comment: ''
    };
  }
  // const [show, setShow] = useState(false);

  handleClose = () => {
    this.setState({ setShow: false });
    console.log('this is state:', this.state);
  };
  handleShow = () => {
    this.setState({ setShow: true });
    console.log('this is state:', this.state);
  };
  handleFormChange = (e) => {
    this.setState({
      [e.target.name]:
        e.target.name === 'comment' ? e.target.value : parseInt(e.target.value)
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    debugger;
    fetch('/rating', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
        Accept: 'Application/JSON'
      },
      body: JSON.stringify(this.state)
    })
      .then(() => {
        //if successful redirect to the home page
        this.setState(this.state);
      })
      .catch((error) => {
        console.log(`Rating did not go through: ${error}`);
      });

    this.handleClose();
  };

  render() {
    const listRatingData = [
      { id: 1, label: 'Timely Maintenance', name: 'timely_maintenance' },
      { id: 2, label: 'Appropriate Distance', name: 'appropriate_distance' },
      { id: 3, label: 'Respectful', name: 'respectful' },
      { id: 4, label: 'Communication', name: 'communication' },
      { id: 5, label: 'Flexibility', name: 'flexibility' },
      { id: 6, label: 'Transparency', name: 'transparency' },
      { id: 7, label: 'Organized', name: 'organized' },
      { id: 8, label: 'Professionalism', name: 'professionalism' }
    ];
    return (
      <div className="Rating">
        <Button variant="primary" onClick={this.handleShow}>
          Leave a Rating
        </Button>
        <Modal show={this.state.setShow} onHide={this.handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Rate your Landlord : 1(Worst) - 5(Best)</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="basicReview">
                {listRatingData.map((data) => (
                  <div key={data.id}>
                    <Form.Label>{data.label}:</Form.Label>
                    {/* <Form.Control onChange={this.handleFormChange}> */}
                    <Form.Check
                      inline
                      label="1"
                      value={1}
                      type="radio"
                      name={data.name}
                      onChange={this.handleFormChange}
                    />
                    <Form.Check
                      inline
                      label="2"
                      value={2}
                      type="radio"
                      name={data.name}
                      onChange={this.handleFormChange}
                    />
                    <Form.Check
                      inline
                      label="3"
                      value={3}
                      type="radio"
                      name={data.name}
                      onChange={this.handleFormChange}
                    />
                    <Form.Check
                      inline
                      label="4"
                      value={4}
                      type="radio"
                      name={data.name}
                      onChange={this.handleFormChange}
                    />
                    <Form.Check
                      inline
                      label="5"
                      value={5}
                      type="radio"
                      name={data.name}
                      onChange={this.handleFormChange}
                    />
                    {/* </Form.Control> */}
                  </div>
                ))}
                <Form.Label>Timely Maintenance</Form.Label>
                <Form.Control
                  as="select"
                  name="timely_maintenance"
                  onChange={this.handleFormChange}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
                <Form.Label>Appropriate Distance</Form.Label>
                <Form.Control
                  as="select"
                  name="appropriate_distance"
                  onChange={this.handleFormChange}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
                <Form.Label>Respectful</Form.Label>
                <Form.Control
                  as="select"
                  name="respectful"
                  onChange={this.handleFormChange}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
                <Form.Label>Communication</Form.Label>
                <Form.Control
                  as="select"
                  name="communication"
                  onChange={this.handleFormChange}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
                <Form.Label>Flexibility</Form.Label>
                <Form.Control
                  as="select"
                  name="flexibility"
                  onChange={this.handleFormChange}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
                <Form.Label>Transparency</Form.Label>
                <Form.Control
                  as="select"
                  name="transparency"
                  onChange={this.handleFormChange}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
                <Form.Label>Organized</Form.Label>
                <Form.Control
                  as="select"
                  name="organized"
                  onChange={this.handleFormChange}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
                <Form.Label>Professionalism</Form.Label>
                <Form.Control
                  as="select"
                  name="professionalism"
                  onChange={this.handleFormChange}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
                <Form.Label>Add a comment:</Form.Label>
                <Form.Control
                  as="textarea"
                  name="comment"
                  onChange={this.handleFormChange}
                ></Form.Control>
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default RateModal;
