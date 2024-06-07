import React from 'react'

export default function Footer({ items }) {
  const totalItems = items.length;                                                    // Menghitung total item dalam daftar belanja
  const checkedItems = items.filter(item => item.checked).length;                     // Menghitung jumlah item yang sudah dibeli
  const percentage = totalItems ? Math.round((checkedItems / totalItems) * 100) : 0;  // Menghitung persentase item yang sudah dibeli

  return (
    <footer>
      {totalItems === 0 ? (
        "Daftar belanjaan masih kosong!"
      ) : (
        `Ada ${totalItems} barang di daftar belanjaan, ${checkedItems} sudah dibeli (${percentage}%)`       // Menampilkan jumlah dan persentase item yang sudah dibeli
      )}
    </footer>
  );
}