/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-comment-textnodes */
// Card bileşeni, product ve isPointMode adında iki prop alır.
// eslint-disable-next-line react/prop-types
const Card = ({ product, isPointMode }) => {
  return (
    // Ürün kartı div'i oluşturulmuş. Arka plan rengi, kenarlık ve iç boşluklar belirlendi.
    <div className="border p-2 rounded flex flex-col gap-3">
      {/* Ürün resmi img elementi ile eklenmiş. Genişlik tam olarak dolduracak şekilde ayarlandı. */}
      <img
        className="rounded w-full object-contain"
        // eslint-disable-next-line react/prop-types
        src={product.image}
        // eslint-disable-next-line react/prop-types
        alt={product.name}
      />

      {/* Ürün başlığı h4 elementi ile eklenmiş. */}
      // eslint-disable-next-line react/prop-types, react/prop-types
      <h4 className="font-bold text-xl line-clamp-1">{product.name}</h4>

      {/* Ürün özellikleri p elementi ile eklenmiş. */}
      <p>{product.spec}</p>

      {/* Eğer isPointMode true ise, aşağıdaki kısım gösterilecek */}
      {isPointMode ? (
        <div className="flex justify-between">
          {/* Ürün puanı ve "Bek Puan" metni gösteriliyor. */}
          <p className="font-bold">{product.point} Bek Puan</p>
          {/* Ürün puanını artırmak veya azaltmak için butonlar oluşturuldu */}
          <div className="border rounded-full py-1 px-6 flex gap-5">
            <button>-</button>
            <button>0</button>
            <button>+</button>
          </div>
        </div>
      ) : (
        // Eğer isPointMode false ise, aşağıdaki kısım gösterilecek.
        <p className="font-bold">
          // eslint-disable-next-line react/prop-types
          Çeklişe verilen ürün sayısı: {product.amount} adet
        </p>
      )}
    </div>
  );
};

// Card bileşeni dışa aktarılır.
export default Card;
