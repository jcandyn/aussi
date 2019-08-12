import React from 'react';
let eventSearch;


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    eventSearch = this.state.value
    cons(eventSearch)
    
  }

    render() {
        return (
            <div className="container col-md-8">
<form onSubmit={this.handleSubmit}>
  <div className="form-group">
    <label for="exampleInputEmail1">Tell us how you feel</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ex. I am sad because..." value={this.state.value} onChange={this.handleChange}/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your information with anyone else.</small>
  
  {/* <button type="submit" class="btn btn-primary">Submit</button> */}
  <button type="submit" value="Submit" className="button button--rayen button--border-thin button--text-thick button--text-upper button--size-s" data-text="Search Emotion"><span>Search Emotion</span></button>
  </div>
</form>
</div>

              /* <button className="button is-info " onClick={this.addItem}>
                Discover Emotions!
              </button> */

        )
    }
}

function cons() {
  console.log(eventSearch)

}

export default Search


