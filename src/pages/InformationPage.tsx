import { PersianNumber } from "../utils/PersianNumber";

const InformationPage = () => {
  return (
    <div className="text-center">
      <h1 className="text-center font-bold text-white text-2xl mb-4 bg-stone-800 p-4">
        سفره خانه سنتی کیان
      </h1>
      <div className="p-4">
        <div className="flex flex-col bg-stone-200 rounded-lg px-4 py-2 divide-y divide-stone-700">
          <div className="flex flex-col gap-2 py-2">
            <h3 className="font-semibold text-lg">تلفن</h3>
            <p>{PersianNumber("09121827250")}</p>
          </div>
          <div className="flex flex-col gap-2 py-2">
            <h3 className="font-semibold text-lg">ساعت کاری</h3>
            <p>
              از ساعت {PersianNumber("8")} صبح تا {PersianNumber("12")} شب
            </p>
          </div>
          <div className="flex flex-col gap-2 py-2">
            <h3 className="font-semibold text-lg">آدرس</h3>
            <p>
              قزوین، میدان مینودر، جاده وزیران، روبروی تالار کهربا، سفره خانه
              کیان
            </p>
          </div>
          <div className="flex flex-col gap-2 py-2">
            <h3 className="font-semibold text-lg">اینستاگرام</h3>
            <p>kian__garden</p>
          </div>
          <div className="py-2 font-bold">
            <p>
              انجام تمامی سفارشات
              <br />
              رزرو میز برای مهمانی و جشن های شما
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationPage;
