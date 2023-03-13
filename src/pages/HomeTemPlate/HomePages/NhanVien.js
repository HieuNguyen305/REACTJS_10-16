import React from "react";

export default function NhanVien() {
  return (
    <>
      <div className="form-group">
        <label>MÃ NV</label>
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
        <label>TÊN NV</label>
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
        <label>Email</label>
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
