// react-icons paketinden IoIosArrowDropleft bileşeni ve react-router-dom paketinden Link bileşeni import edildi.
import { IoIosArrowDropleft } from 'react-icons/io';
import { Link } from 'react-router-dom';

// BackButton isimli bir bileşen tanımlandı.
const BackButton = () => {
  return (
    // Link bileşeni, bir URL'ye gitmek için kullanılır. "to" prop'u ile gitmek istediğimiz URL belirtilir.
    // Bu durumda "-1" bir URL gibi görünse de aslında bir sayıdır ve dinamik bir URL oluşturmak yerine sadece geçerli sayfadan bir önceki sayfaya geri dönmeyi sağlar.
    <Link
      className="flex items-center gap-2 border rounded-md p-2 transition hover:shadow hover:bg-gray-100 text-gray-500"
      to={-1}
    >
      {/* IoIosArrowDropleft bileşeni, bir geri gitme oku şeklinde icon sağlar. */}
      <IoIosArrowDropleft className="max-sm:text-lg" />
      {/* "max-md:text-sm" ve "max-sm:hidden" sınıfları ile responsive bir tasarım sağlanmış.
          Bu sınıflar, belirli ekran boyutlarında metni büyütmek veya gizlemek için kullanılır.
          max-sm:text-lg -> Ekran genişliği "sm" boyutundan büyükse metni büyüt.
          max-sm:hidden -> Ekran genişliği "sm" boyutundan küçükse metni gizle. */}
      <span className="max-md:text-sm max-sm:hidden">Ana Ekrana Dön</span>
    </Link>
  );
};

// BackButton bileşeni dışa aktarılır.
export default BackButton;
