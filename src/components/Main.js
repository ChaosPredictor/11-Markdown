require('normalize.css/normalize.css');
require('styles/Main.css');

import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import { MarkdownPreview } from 'react-marked-markdown';

class MainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange=this.handleChange.bind(this);
    this.state={inputText: ''};
  }

  handleChange(e) {
    this.setState({inputText: e.target.value});
  }

  render() {
		return(
			<div>
				<Grid>
					<Row className="show-grid">
						<Col md={6}>
							<textarea className="inputBox" value={this.state.inputText} onChange={this.handleChange} />
						</Col>
						<Col md={6}><MarkdownPreview className="outputBox" value={ this.state.inputText }/></Col>
					</Row>
				</Grid>
			</div>
		);
  }
}

export default MainComponent;
