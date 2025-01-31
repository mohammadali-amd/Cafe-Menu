import { useCallback, useEffect, useState } from "react";

const InformationPage = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any | null>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event: any) => {
      event.preventDefault();
      setDeferredPrompt(event);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstall = useCallback(() => {
    console.log("111");
    if (!deferredPrompt) {
      console.log("222");
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(() => {
        setDeferredPrompt(null);
      });
      console.log("333");
    }
  }, [deferredPrompt]);

  return (
    <div className="p-4">
      <h2 className="text-center text-white text-2xl mb-4">رستوران سنتی</h2>

      <div className="flex flex-col bg-stone-200 rounded-lg px-4 py-2 divide-y divide-stone-700">
        <div className="flex flex-col gap-2 py-2">
          <h3 className="font-semibold text-lg">تلفن</h3>
          <p>0912345678</p>
        </div>
        <div className="flex flex-col gap-2 py-2">
          <h3 className="font-semibold text-lg">ساعت کاری</h3>
          <p>از ساعت 8 صبح تا 12 شب</p>
        </div>
        <div className="py-2">
          <h3 className="font-semibold text-lg">نصب</h3>
          <button
            onClick={handleInstall}
            className="py-1 px-4 rounded bg-yellow-500 mt-2"
          >
            نصب برنامه
          </button>
        </div>
        <div className="flex flex-col gap-2 py-2">
          <h3 className="font-semibold text-lg">آدرس</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eos
            quaerat veritatis culpa blanditiis aperiam nihil, dolore reiciendis
            quis sapiente omnis, ullam quasi sit distinctio dolor voluptate
            adipisci ratione voluptatibus.
          </p>
        </div>
        <div className="py-2">لوکیشن</div>
      </div>
    </div>
  );
};

export default InformationPage;
