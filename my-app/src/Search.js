import React from 'react';


class Search extends React.Component {
    render() {
        return (
            <div className="container">
<form>
  <div className="form-group">
    <label for="exampleInputEmail1">Tell us how you feel</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ex. I am sad because..."/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your information with anyone else.</small>
  
  {/* <button type="submit" class="btn btn-primary">Submit</button> */}
  <button className="button button--rayen button--border-thin button--text-thick button--text-upper button--size-s" data-text="Search Emotion"><span>Search Emotion</span></button>
  </div>
</form>
</div>

              /* <button className="button is-info " onClick={this.addItem}>
                Discover Emotions!
              </button> */

        )
    }
}

export default Search

