// Menu ve Stories bileşenleri import edildi.
import Menu from '../components/Menu';
import Stories from '../components/Stories';

// PageOne bileşeni, birinci sayfayı temsil eder.
const PageOne = () => {
  return (
    // max-w-[1440px] ile sayfa içeriği maksimum 1440 piksel genişlikte olacak, mx-auto ile ortalanacak, p-10 ile kenar boşlukları verilecek.
    <div className="max-w-[1440px] mx-auto p-10">
      {/* Hikayeleri gösteren Stories bileşeni */}
      <Stories />

      {/* max-md:flex-col ile ekran genişliği md boyutundan küçükse (mobil boyutu) dikey sıralama yapacak, gap-4 ile aralara boşluk verilecek */}
      <div className="flex max-md:flex-col gap-4 my-10">
        {/* İçerik bölümleri */}
        <section className="flex flex-col gap-4">
          {/* Büyük bir resim */}
          <img src="https://picsum.photos/1200/350" className="rounded" />

          {/* İki sütunlu resimler */}
          <div className="grid grid-cols-3 gap-4">
            <img
              className="col-span-2 rounded"
              src="https://picsum.photos/800/350"
            />
            <img className="col-span-1" src="https://picsum.photos/400/350" />
          </div>

          {/* Dikey düzen resimler */}
          <div className="grid grid-cols-3 gap-4">
            <img
              className="col-span-2 rounded h-full"
              src="https://picsum.photos/800/350"
            />
            <img
              className="col-span-1 rounded h-full"
              src="https://picsum.photos/400/350"
            />
          </div>
        </section>

        {/* Sağ menü ve bir resim */}
        <section>
          {/* Menü bileşeni */}
          <Menu />
          {/* Bir resim */}
          <img
            className="rounded w-full my-5"
            src="https://picsum.photos/400"
          />
        </section>
      </div>
    </div>
  );
};

// PageOne bileşeni dışa aktarılır.
export default PageOne;
