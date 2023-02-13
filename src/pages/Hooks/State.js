import React, { useState } from "react";

function State() {
  // useState nhận vào tham số là giá trị khởi tạo và return về 1 array gồm 2 phần tử
  // Phần tử thứ 1 : giá trị của state
  // Phần tử thứ 2 : Hàm dùng để cập nhật giá trị của state
  const [message, setMessage] = useState("Hello World");
  const handleSetMessage = () => {
    const value = prompt("Input your message");
    setMessage(value);
  };
  const [count, setCount] = useState(0);

  //State là array
  const [colors, setColors] = useState(["red", "green", "blue"]);
  const handleAddColor = () => {
    const color = prompt("Input your color");
    // setColors([...colors, color]); // Spread Operator
    // Cách viết thứ 2 của setState dòng 18
    setColors((previousColors) => [...previousColors, color]);
    //Dòng 20 : Viết theo dạng callback func này để giải quyết async trong trường hợp
    //VD : setState trong loop. ở lần loop trước phải run xong rồi, dùng kết quả vừa có đó để chạy setState tiếp theo
    //Thay Đổi state là async, viết dưới dạng arrow func nếu cần cập nhật state liên tục và dùng giá trị state thay đổi mới nhất để sủ dụng tiếp cho các mục đích khác
  };
  const handleRemoveColor = () => {
    const color = prompt("Input your color");
    const newColors = colors.filter((item) => {
      return item !== color;
    });
    setColors(newColors);
  };

  // State là object
  const [form, setForm] = useState({ username: "", email: "" });
  const handleChangeForm = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div>
      <h1>State</h1>
      <p>Message: {message}</p>
      <button onClick={handleSetMessage}>Set Message</button>
      <br />
      <br />
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <br />
      <br />
      <p>Colors: {colors.join(", ")}</p>
      <button onClick={handleAddColor}>Add Color</button>
      <button onClick={handleRemoveColor}>Remove Color</button>
      <br />
      <br />
      <p>user Form: {form.username} - {form.email}</p>
      <form>
        <input
          className="form-control"
          placeholder="Username"
          name="username"
          value={form.username}
          onChange={handleChangeForm}
        />
        <input
          className="form-control"
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={handleChangeForm}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default State;
