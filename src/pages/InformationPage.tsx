const InformationPage = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-white text-2xl mb-4 bg-stone-800 p-4">
        سفره خانه سنتی کیان
      </h1>
      <div className="p-4">
        <div className="flex flex-col bg-stone-200 rounded-lg px-4 py-2 divide-y divide-stone-700">
          <div className="flex flex-col gap-2 py-2">
            <h3 className="font-semibold text-lg">تلفن</h3>
            <p>0912345678</p>
          </div>
          <div className="flex flex-col gap-2 py-2">
            <h3 className="font-semibold text-lg">ساعت کاری</h3>
            <p>از ساعت 8 صبح تا 12 شب</p>
          </div>
          <div className="flex flex-col gap-2 py-2">
            <h3 className="font-semibold text-lg">آدرس</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eos
              quaerat veritatis culpa blanditiis aperiam nihil, dolore
              reiciendis quis sapiente omnis, ullam quasi sit distinctio dolor
              voluptate adipisci ratione voluptatibus.
            </p>
            <div className="py-2">لوکیشن</div>
          </div>
          <div className="py-2">اینستاگرام</div>
          <div className="py-2">
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
