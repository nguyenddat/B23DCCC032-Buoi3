
import React, { useState } from 'react';
import { Good } from '../store/goodsSlice';
import '../styles/Form.css';

interface GoodsFormProps {
  initialData?: Good;
  onSubmit: (good: Omit<Good, 'id'>) => void;
}

const GoodsForm: React.FC<GoodsFormProps> = ({ initialData, onSubmit }) => {
  const [name, setName] = useState(initialData ? initialData.name : '');
  const [price, setPrice] = useState(initialData ? initialData.price : 0);
  const [category, setCategory] = useState(initialData ? initialData.category || 'default' : 'default');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() === '' || price <= 0 || category === 'default') {
      alert('Vui lòng nhập tên, giá hợp lệ và chọn loại sản phẩm.');
      return;
    }
    onSubmit({ name, price, category });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Tên hàng hóa:</label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            placeholder="Nhập tên hàng hóa"
          />
        </div>
        <div className="form-group">
          <label>Giá:</label>
          <input
            type="number"
            value={price}
            onChange={e => setPrice(parseFloat(e.target.value))}
            required
            min="0"
            placeholder="Nhập giá hàng hóa"
          />
        </div>
        <div className="form-group">
          <label>Loại sản phẩm:</label>
          <select
            value={category}
            onChange={e => setCategory(e.target.value)}
            required
          >
            <option value="default" disabled>Chọn loại sản phẩm</option>
            <option value="electronics">Điện tử</option>
            <option value="fashion">Thời trang</option>
            <option value="grocery">Tạp hóa</option>
            <option value="furniture">Nội thất</option>
          </select>
        </div>
        <div className="form-submit">
          <button type="submit" className="button button-primary">Thêm hàng hóa</button>
        </div>
      </form>
    </div>
  );
};

export default GoodsForm;