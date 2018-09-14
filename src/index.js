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
    fetch(`http://www.omdbapi.com/?s=${this.state.title}&apikey=27defc43`)
      .then(res => res.json())
      .then(({ Search: data } = {}) => {
        console.log(data, 'DATA');
        this.setState({ data, err: null });
      })
      .catch(err => {
        this.setState({ err, data: null });
      });
  }

  handleSelected(data) {
    if (this.state.selected && this.state.selected.imdbID === data.imdbID) {
      this.setState({ selected: null });
      return;
    }
    this.setState({ selected: data });
  }

  render() {
    const { user = {} } = this.props;
    const cellStyle = {
      textAlign: 'left',
      padding: '0.25em',
    };
    const headerStyle = {
      color: '#2e3061',
      fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Helvetica", "Arial", sans-serif',
      fontSize: '40px',
      fontWeight: '700',
    };
    const popStyle = {
      position: 'fixed',
      height: '100%',
      width: '300px',
      top: 0,
      right: 30,
      backgroundColor: 'grey',
      padding: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    };
    return (
      <div style={{ margin: '50px' }}>
        <h1 style={headerStyle} >{this.state.name}</h1>
        <div style={{ margin: '10px 0 10px', border: '1px solid black' }}>
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
        <table style={{ width: '100%' }}>
          <tbody>
            <tr>
              <th style={cellStyle}>Title</th>
              <th style={cellStyle}>Release Year</th>
              <th style={cellStyle}>Type</th>
            </tr>
            {this.state.data && this.state.data.map((data) => (
              <tr key={data.imdbID} onClick={() => this.handleSelected(data)}>
                <td style={cellStyle}>{data.Title}</td>
                <td style={cellStyle}>{data.Year}</td>
                <td style={cellStyle}>{data.Type}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {this.state.selected && (
          <div style={popStyle}>
            <div style={headerStyle}>{this.state.selected.Title}</div>
            <img src={this.state.selected.Poster} alt="sample" />
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
  user: PropTypes.object.isRequired,
};

export default LC3Screen;
