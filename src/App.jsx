// React ve react-router-dom kütüphaneleri App içinde kullanıldı.
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Sayfa bileşenleri import edildi.
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';
import PageThree from './pages/PageThree';

// App isimli bir fonksiyon bileşeni tanımlandı.
const App = () => {
  return (
    // BrowserRouter, uygulama içindeki route'ları yönetmek için kullanılır.
    // Routes, içinde Route component'lerini barındıran bir component'tir.
    <BrowserRouter>
      <Routes>
        {/* Anasayfa için Route tanımı.
            path="/" --> URL'in kök dizinine ("/") geldiğinde PageOne component'ini render eder.
        */}
        <Route path="/" element={<PageOne />} />
        
        {/* "/page-two" URL'i için Route tanımı.
            path="/page-two" --> "/page-two" URL'ine gelindiğinde PageTwo component'ini render eder.
        */}
        <Route path="/page-two" element={<PageTwo />} />
        
        {/* "/page-three" URL'i için Route tanımı.
            path="/page-three" --> "/page-three" URL'ine gelindiğinde PageThree component'ini render eder.
        */}
        <Route path="/page-three" element={<PageThree />} />
      </Routes>
    </BrowserRouter>
  );
};

// App bileşeni dışa aktarılır.
export default App;
