// Gerekli bileşenler import edildi.
import BackButton from '../components/BackButton';
import Header from '../components/Header';
import { products } from '../constants';
import Card from './../components/Card';

// PageTwo bileşeni, ikinci sayfayı temsil eder (ürün listesi sayfası).
const PageTwo = () => {
  return (
    // max-w-[1440px] ile sayfa içeriği maksimum 1440 piksel genişlikte olacak, mx-auto ile ortalanacak, lg:py-20 ile büyük ekranlar için üst ve alt yukarıdan ve aşağıdan boşluk verilecek, p-10 ile kenar boşlukları verilecek.
    <div className="max-w-[1440px] mx-auto lg:py-20 p-10">
      {/* Sayfa başlığı ve navigasyon */}
      <Header />

      {/* Geri butonu ve sayfa başlığı */}
      <div className="flex justify-between my-10 border-b pb-5">
        {/* Geri butonu */}
        <BackButton />

        {/* Sayfa başlığı */}
        <h5 className="font-semibold text-gray-500">Sponsorlar Ürün Listesi</h5>
      </div>

      {/* Ürün kartları */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {/* products dizisindeki her bir ürün için bir Card bileşeni oluşturulur */}
        {products.map((product, i) => (
          <div className="col" key={i}>
            {/* Her bir ürün için Card bileşeni */}
            <Card product={product} />
          </div>
        ))}
      </div>

      {/* Açıklama ve bağlantı */}
      <div className="mt-10 bg-gray-200 p-5 rounded flex flex-col items-center">
        {/* Açıklama metni */}
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio sit
          unde tempora reprehenderit, praesentium rerum modi animi quia magni ad
          alias! Tenetur libero vero consectetur! Blanditiis quasi facere totam
          in asperiores, natus iusto laudantium ipsam a corrupti error
          consequatur eveniet voluptatum sed quaerat nostrum. Dolorum commodi
          velit eum dignissimos error?
        </p>
        
        {/* Bağlantı */}
        <a className="text-blue-500 cursor-pointer" href="#">
          Burda bir bağlantı bulunuyor
        </a>
      </div>
    </div>
  );
};

// PageTwo bileşeni dışa aktarılır.
export default PageTwo;
