// React ve ReactDOM kütüphaneleri import edildi.
import React from 'react';
import ReactDOM from 'react-dom/client';
// App bileşeni import edildi.
import App from './App.jsx';
// Stil dosyası import edildi.
import './index.css';

// ReactDOM.createRoot metodu, React uygulamasını render etmek için kullanılır.
// document.getElementById('root') ile "root" id'sine sahip HTML elementi seçilir ve buraya React uygulaması render edilir.
// render metoduna, uygulamanın kök bileşeni olan App component'i verilir.
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode> komponenti, uygulamayı geliştirirken bazı uyarılar ve potansiyel hataları kontrol etmeye yarar.
  // Bu mod, geliştirme sırasında hataları erken tespit etmeye ve kodunuzun gelecekteki React sürümleriyle uyumlu olmasını sağlamaya yardımcı olur.
  // Bu yüzden genellikle uygulamanın en dışında kullanılır.
  <React.StrictMode>
    {/* App bileşeni, uygulamanın kök bileşeni olarak render edilir. */}
    <App />
  </React.StrictMode>,
);
