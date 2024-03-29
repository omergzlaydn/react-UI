// constants dosyasından storiesData import edildi.
import { storiesData } from '../constants';

// Stories bileşeni, hikayeleri temsil eden bir bileşendir.
const Stories = () => {
  return (
    // Hikayeleri gösteren bir div oluşturulur. Eğer hikaye sayısı ekran genişliğini aşarsa, yatay kaydırma (overflow-x) özelliği sağlanır.
    <div className="flex gap-4 overflow-auto">
      {/* storiesData'dan gelen her bir image için bir img elementi oluşturulur. */}
      {storiesData.map((image) => (
        // eslint-disable-next-line react/jsx-key
        <img
          // Her bir hikaye resmi, belirli bir stilde gösterilir.
          className="border-[4px] rounded-full w-[80px] h-[80px]"
          src={image}
          alt="Story"
        />
      ))}
    </div>
  );
};

// Stories bileşeni dışa aktarılır.
export default Stories;
