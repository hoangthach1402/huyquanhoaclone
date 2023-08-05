import React, { useState, ChangeEvent } from 'react';

const ColorPicker = () => {
  const [rgb, setRGB] = useState({ r: 255, g: 255, b: 255 });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRGB({ ...rgb, [name]: parseInt(value) });
  };

  const bgColor = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;

  return (
    <div style={{ backgroundColor: bgColor, padding: '20px' }}>
      <label>
        Red:
        <input
          type="number"
          name="r"
          value={rgb.r}
          onChange={handleChange}
          min="0"
          max="255"
        />
      </label>
      <label>
        Green:
        <input
          type="number"
          name="g"
          value={rgb.g}
          onChange={handleChange}
          min="0"
          max="255"
        />
      </label>
      <label>
        Blue:
        <input
          type="number"
          name="b"
          value={rgb.b}
          onChange={handleChange}
          min="0"
          max="255"
        />
      </label>
    </div>
  );
};

export default ColorPicker;
