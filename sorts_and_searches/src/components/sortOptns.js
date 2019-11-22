import React from 'react';
import QuickSortOptns from './quickSortOptns';
import SortOptnBtn from './sortOptnBtn.js';

class SortOptns extends React.Component {
  sortClicked(sortname) {
    console.log(sortname);
  }
  render() {
    return (
      <>
        <div className="row">
          <div className="mx-auto mt-2">
            <div className="col-12">
              <h4 className="text-center">Sort Options</h4>
              <div
                className="btn-group btn-group-toggle sortOptnsRadio"
                data-toggle="buttons">
                <SortOptnBtn sortname="mergeSort" properSortName="Merge Sort" />
                <SortOptnBtn sortname="quickSort" properSortName="Quick Sort" />
                <SortOptnBtn
                  sortname="bubbleSort"
                  properSortName="Bubble Sort"
                />
              </div>
            </div>
          </div>

          <QuickSortOptns />
        </div>
      </>
    );
  }
}

export default SortOptns;
