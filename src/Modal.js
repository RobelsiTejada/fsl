import React from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';

class ModalApp extends React.Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render () {
    return (
      <div>
        <button onClick={this.handleOpenModal}>Log-in/Sign-up</button>
        <ReactModal
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example"
        ><form onSubmit={this.handleSubmit}>

          <label>
            Email:
            <input type="text" ref={(input) => this.input = input} />
          </label>
          <label>
            Password:
            <input type="text" ref={(input) => this.input = input} />
          </label>
          <label>
            Password Confirmation:
            <input type="text" ref={(input) => this.input = input} />
          </label>
          <input type="submit" value="Sign-Up" />
          </form><br />

          <form onSubmit={this.handleSubmit}>
            <label>
              Email:
              <input type="text" ref={(input) => this.input = input} />
            </label>
            <label>
              Password:
              <input type="text" ref={(input) => this.input = input} />
            </label><br />
            <input type="submit" value="Submit" />
            </form><br />

            <form onSubmit={this.handleSubmit}>
              <label>
                Old Password:
                <input type="text" ref={(input) => this.input = input} />
              </label>
              <label>
                New Password:
                <input type="text" ref={(input) => this.input = input} />
              </label><br />
              <input type="submit" value="Submit" />
          </form><br />

          <button onClick={this.handleCloseModal}>Close Modal</button>
        </ReactModal>
      </div>
    );
  }
}

const props = {};

ReactDOM.render(<ModalApp {...props} />, document.getElementById('main'))
