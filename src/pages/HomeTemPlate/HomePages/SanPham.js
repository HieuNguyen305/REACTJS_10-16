import React from "react";

export default function SanPham() {
  return (
    <>
      <div className="form-group">
        <label>MÃ SP</label>
        <input
          type="text"
          name
          id
          className="form-control"
          placeholder
          aria-describedby="helpId"
        />
      </div>
      <div className="form-group">
        <label>TÊN SP</label>
        <input
          type="text"
          name
          id
          className="form-control"
          placeholder
          aria-describedby="helpId"
        />
      </div>
    </>
  );
}
