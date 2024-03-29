// react-router-dom paketinden Link bileşeni import edildi.
import { Link } from 'react-router-dom';

// Header bileşeni, bir başlık ve navigasyon menüsü içerir.
const Header = () => {
  return (
    // header elementi, başlık ve navigasyon menüsünü içeren bir üst bölge oluşturur.
    <header className="flex justify-between items-center">
      {/* Başlık h1 elementi ile eklendi. */}
      <h1 className="font-bold text-2xl font-sans text-blue-500 max-sm:text-base">
        SATIŞ ETKİNLİĞİ
      </h1>

      {/* Navigasyon menüsü nav elementi içinde oluşturuldu. */}
      <nav className="flex gap-2 whitespace-nowrap">
        {/* Her bir Link bileşeni, belirli bir URL'ye gitmek için kullanılır.
            "to" prop'u ile gidilecek URL belirtilir. */}
        <Link className="text-blue-400 hover:text-blue-600" to={'/'}>
          Sayfa 1
        </Link>
        <Link className="text-blue-400 hover:text-blue-600" to={'/page-two'}>
          Sayfa 2
        </Link>
        <Link className="text-blue-400 hover:text-blue-600" to={'/page-three'}>
          Sayfa 3
        </Link>
      </nav>
    </header>
  );
};

// Header bileşeni dışa aktarılır.
export default Header;
