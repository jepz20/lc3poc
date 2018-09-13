import React from 'react';
import PropTypes from 'prop-types';

class LC3Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'LC3',
      data: undefined,
      title: 'simpsons',
      err: undefined,
    };
  }

  componentWillMount() {
    this.doFetch();
  }

  doFetch() {
    fetch(`http://www.omdbapi.com/?t=${this.state.title}&apikey=27defc43`)
      .then(res => res.json())
      .then(data => {
        this.setState({ data, err: null });
      })
      .catch(err => {
        this.setState({ err, data: null });
      });
  }


  render() {
    const { Input, Image, user = {} } = this.props;
    return (
      <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <h1>{this.state.name}</h1>
        <div>
          <h3>USER</h3>
          <div>{`Name: ${user.name}`}</div>
          <div>{`Email: ${user.email}`}</div>
        </div>
        <input
          value={this.state.title}
          onChange={({ target }) => this.setState({ title: target.value })}
          onKeyPress={e => e && e.key === 'Enter' && this.doFetch()}
          name="search"
        />
        {this.state.data && (
          <div>
            <div>{`Title: ${this.state.data.Title}`}</div>
            <div>{`Release Year: ${this.state.data.Year}`}</div>
            <img src={this.state.data.Poster} alt="poster" />
          </div>
        )}
        {this.state.error && (
          <div>
            Ooops! something bad happen :/
          </div>
        )}
      </div>
    );
  }
}

LC3Screen.propTypes = {
  Input: PropTypes.func.isRequired,
  Image: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

export default LC3Screen;
