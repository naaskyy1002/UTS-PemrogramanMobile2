import React, { useState } from 'react';
import Button from './Button'; // Impor komponen Tombol

export default function Item({ item, onDeleteItem, onToggleItem, setEditItem }) {
  const [showPopup, setShowPopup] = useState(false);                // State untuk menampilkan atau menyembunyikan popup

  // Fungsi untuk menangani klik tombol hapus
  const handleDelete = () => {
    setShowPopup(true);                                             // Tampilkan popup saat tombol hapus ditekan
  };

  // Fungsi untuk mengonfirmasi penghapusan item
  const confirmDelete = () => {
    onDeleteItem(item.id);                                         // Panggil fungsi onDeleteItem untuk menghapus item
    setShowPopup(false);                                           // Tutup popup setelah penghapusan
  };

  return (
    <>
      {/* Popup hanya ditampilkan jika showPopup bernilai true */}
      {showPopup && (
        <div className="popup">
          <p>Apakah Anda yakin ingin menghapus item ini?</p>
          <Button text="Ya" variant="primary" action={confirmDelete} /> 
          <Button text="Tidak" variant="danger" action={() => setShowPopup(false)} /> 
        </div>
      )}

      <li>
        <input
          type="checkbox"
          checked={item.checked}
          onChange={() => onToggleItem(item.id)}
        />
        <span style={item.checked ? { textDecoration: 'line-through' } : {}}>
          {item.name}
        </span>
        <Button text="Edit" variant="success" action={() => setEditItem(item)} /> 
        <Button text="Hapus" variant="danger" action={handleDelete} /> 
      </li>
    </>
  );
}
