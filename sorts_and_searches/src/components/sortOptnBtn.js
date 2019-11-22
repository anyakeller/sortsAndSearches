import React from 'react';

class SortOptnBtn extends React.Component {
  constructor(props) {
    super(props);
  }
  sortClicked() {
    console.log(this.props.sortname);
  }
  render() {
    return (
      <>
        <label
          className="btn btn-secondary sortOptionBtn"
          data-sort={this.props.sortname} onClick={() => this.sortClicked()}>
          <input
            type="radio"
            name="sortOptns"
            id={this.props.sortname}
            autoComplete="off"
            className="sortOptions"
          />
          {this.props.properSortName}
        </label>
      </>
    );
  }
}

export default SortOptnBtn;
