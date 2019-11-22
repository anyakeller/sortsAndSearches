import React from 'react';
function QuickSortOptns() {
  return (
    <div className="row">
      <div className="mx-auto mt-1" id="quickSortOptionsToggle">
        <label htmlFor="quickOptns"> <p className="text-center">Quick Sort Options</p></label>
        <div id="quickOptns" className="btn-group btn-group-toggle" data-toggle="buttons">
          <label
            className="btn btn-secondary btn-sm btn-info active quickSortOptionBtn"
            data-sort="quickSortFirst">
            <input
              type="radio"
              name="quickSortFirst"
              id="quickSortFirst"
              autoComplete="off"
              defaultChecked
              className="quickSortOptions quickSortOptionActive"
            />
            First Index Pivot
          </label>
          <label
            className="btn btn-secondary btn-sm btn-info quickSortOptionBtn"
            data-sort="quickSortLast">
            <input
              type="radio"
              name="quickSortLast"
              id="quickSortLast"
              autoComplete="off"
              className="quickSortOptions"
            />
            Last Index Pivot
          </label>
          <label
            className="btn btn-secondary btn-sm btn-info quickSortOptionBtn"
            data-sort="quickSortRandom">
            <input
              type="radio"
              name="quickSortRandom"
              id="quickSortRandom"
              autoComplete="off"
              className="quickSortOptions"
            />
            Random Index Pivot
          </label>
        </div>
      </div>
    </div>
  );
}
export default QuickSortOptns;
