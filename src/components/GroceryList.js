import React from 'react'
import Item from './Item'


export default function GroceryList({ items, onDeleteItem, onToggleItem, setEditItem }) {
  return (
    <ul>
      {/* Melooping semua item dalam daftar belanja dan memperlihatkannya menggunakan komponen Item */}
      {items.map((item) => (
        <Item key={item.id} item={item} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} setEditItem={setEditItem} />
      ))}
    </ul>
  );
}