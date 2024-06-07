import { useState, useEffect } from 'react';
import Button from './Button'; 

export default function Form({ onAddItem, editItem, updateItem, setEditItem }) {
  const [name, setName] = useState('');                      // State untuk bidang input nama

  // Perbarui bidang input nama ketika prop editItem berubah
  useEffect(() => {
    if (editItem) {
      setName(editItem.name);
    }
  }, [editItem]);

  // Tangani pengiriman formulir
  const handleSubmit = (e) => {
    e.preventDefault();                                     // Mencegah perilaku pengiriman formulir default
    if (!name) return;                                      // Keluar jika bidang nama kosong

    // Jika editItem ada, perbarui item; jika tidak, tambahkan item baru
    if (editItem) {
      updateItem(editItem.id, { ...editItem, name });
      setEditItem(null);                                   // Bersihkan state editItem setelah pengiriman
    } else {
      onAddItem({ id: Date.now(), name, checked: false });
    }

    setName('');                                           // Bersihkan bidang input nama setelah pengiriman
  };

  return (
    <form onSubmit={handleSubmit}> 
      <input
        type="text"
        placeholder="Nama barang..."
        value={name}                                      // Mengikat nilai bidang input nama ke state
        onChange={(e) => setName(e.target.value)}         // Perbarui state nama saat input berubah
      />
      <Button text={editItem ? 'Update' : 'Tambah'} variant='primary' action={handleSubmit}/>
    </form>
  );
}
