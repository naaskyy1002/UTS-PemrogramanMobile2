import { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import GroceryList from './components/GroceryList';
import Footer from './components/Footer';
import './App.css';

// Array awal list belanja
const initialItems = [
  { id: 1, name: 'Beras', checked: true },
  { id: 2, name: 'Gula Pasir', checked: false },
  { id: 3, name: 'Kecap Manis', checked: false },
];

export default function App() {
  const [items, setItems] = useState(initialItems);          // State untuk list belanja
  const [editItem, setEditItem] = useState(null);            // State untuk item yang sedang diedit

  const addItem = (item) => setItems([...items, item]);                                                                     // Fungsi untuk menambahkan item baru ke list belanja
  const deleteItem = (id) => setItems(items.filter((item) => item.id !== id));                                              // Fungsi untuk menghapus item dari list belanja
  const toggleItem = (id) => setItems(items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item));    // Fungsi untuk menandai item sebagai sudah dibeli atau belum
  const updateItem = (id, updatedItem) => setItems(items.map((item) => item.id === id ? updatedItem : item));               // Fungsi untuk mengupdate item dalam list belanja
  const clearItems = () => setItems([]);                                                                                    // Fungsi untuk menghapus semua item dari list belanja

  // menghapus semua item dari list belanja
  return ( 
    <div>
      <Header />
      <Form onAddItem={addItem} editItem={editItem} updateItem={updateItem} setEditItem={setEditItem} />
      <GroceryList items={items} onDeleteItem={deleteItem} onToggleItem={toggleItem} setEditItem={setEditItem} />
      <button onClick={clearItems} style={{ display: 'block', margin: '20px auto', padding: '10px 20px', cursor: 'pointer' }}>
        Bersihkan Daftar
      </button>
      <Footer items={items} />
    </div>
  );
}