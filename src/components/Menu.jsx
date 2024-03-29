// constants dosyasından menuData ve react-icons paketinden GiHamburgerMenu bileşeni import edildi.
import { menuData } from '../constants';
import { GiHamburgerMenu } from 'react-icons/gi';

// Menu bileşeni, bir menü listesi oluşturur.
const Menu = () => {
  return (
    // <ul> elementi, bir liste oluşturur.
    <ul>
      {/* Menü başlığı ve hamburger menü ikonu */}
      <li className="flex justify-between px-3 py-4 border rounded-md mb-3">
        {/* Menü başlığı */}
        <span className="font-bold">Menü</span>
        {/* Hamburger menü ikonu */}
        <GiHamburgerMenu className="cursor-pointer" />
      </li>
      
      {/* menuData'dan gelen verilerle menü öğeleri oluşturulur */}
      {menuData.map((text) => (
        // eslint-disable-next-line react/jsx-key
        <li className="border p-2 rounded my-1 text-center transition hover:bg-gray-200 cursor-pointer">
          {/* Menü öğesi metni */}
          {text}
        </li>
      ))}
    </ul>
  );
};

// Menu bileşeni dışa aktarılır.
export default Menu;
