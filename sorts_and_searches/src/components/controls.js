import React from 'react';

function Controls() {
  return (
    <div className="row">
      <div className="mx-auto my-3">
        <div className="col-12">
            <h4 className="text-center">Animation Controls</h4>
        </div>
        <div className="col-12">
          <button type="button" className="btn btn-success" id="beginSort">
            Begin Sort Animation
          </button>
          <button type="button" className="btn btn-warning" id="pause">
            Pause
          </button>
          <button type="button" className="btn btn-danger" id="reset">
            Stop and Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Controls;
