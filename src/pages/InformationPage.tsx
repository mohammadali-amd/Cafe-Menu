import { PersianNumber } from "../utils/PersianNumber";

const InformationPage = () => {
  return (
    <div className="text-center">
      <h1 className="pt-20 text-center font-bold text-white text-2xl mb-4 bg-stone-800 p-4">
        سفره خانه سنتی کیان
      </h1>
      <div className="p-4">
        <div className="flex flex-col bg-stone-200 rounded-lg px-6 py-2 divide-y divide-stone-700">
          <div className="flex flex-col gap-2 py-3">
            <h3 className="font-semibold text-2xl">تلفن</h3>
            <a href="tel:09121827250" className="text-lg">
              {PersianNumber("09121827250")}
            </a>
          </div>
          <div className="flex flex-col gap-2 py-3">
            <h3 className="font-semibold text-2xl">ساعت کاری</h3>
            <p className="text-lg">
              از ساعت {PersianNumber("8")} صبح تا {PersianNumber("12")} شب
            </p>
          </div>
          <div className="flex flex-col gap-2 py-3">
            <h3 className="font-semibold text-2xl">آدرس</h3>
            <p className="text-lg">
              قزوین، میدان مینودر، جاده وزیران، روبروی تالار کهربا، سفره خانه
              کیان
            </p>
          </div>
          <div className="flex flex-col gap-2 py-3">
            <h3 className="font-semibold text-2xl">اینستاگرام</h3>
            <a href="" dir="ltr" className="text-lg">
              @kian__garden
            </a>
          </div>
          <div className="py-3 font-bold">
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
