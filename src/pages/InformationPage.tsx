import DarkModeSwitch from "../components/DarkModeSwitch";
import { PersianNumber } from "../utils/PersianNumber";

const InformationPage = () => {
  return (
    <div className="text-center text-text">
      <h1 className="pt-20 text-center font-bold text-opposite text-2xl mb-4 bg-background-2 p-4">
        سفره خانه سنتی کیان
      </h1>

      <div className="p-4">
        <div className="flex flex-col bg-background-2 text-opposite rounded-xl px-6 py-4 divide-y divide-stone-700">
          <div className="flex flex-col gap-2 py-3">
            <h3 className="font-semibold text-2xl text-secondary">تلفن</h3>
            <a href="tel:09121827250" className="text-lg">
              {PersianNumber("09121827250")}
            </a>
          </div>
          <div className="flex flex-col gap-2 py-3">
            <h3 className="font-semibold text-2xl text-secondary">ساعت کاری</h3>
            <p className="text-lg">
              از ساعت {PersianNumber("10")} صبح تا {PersianNumber("12")} شب
            </p>
          </div>
          <div className="flex flex-col gap-2 py-3">
            <h3 className="font-semibold text-2xl text-secondary">آدرس</h3>
            <p className="text-lg">
              قزوین، میدان مینودر، جاده وزیران، روبروی تالار کهربا، سفره خانه
              کیان
            </p>
          </div>
          <div className="flex flex-col gap-2 py-3">
            <h3 className="font-semibold text-2xl text-secondary">
              اینستاگرام
            </h3>
            <a
              href="https://www.instagram.com/kian__garden"
              target="_blank"
              className="text-lg"
              dir="ltr"
            >
              @kian__garden
            </a>
          </div>
          <div className="py-3 font-bold text-lg">
            <p>
              انجام تمامی سفارشات
              <br />
              رزرو میز برای مهمانی و جشن های شما
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <DarkModeSwitch />
      </div>
    </div>
  );
};

export default InformationPage;
