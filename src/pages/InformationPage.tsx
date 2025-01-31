import { useState, useEffect } from "react";

const InformationPage = () => {
  const [installPrompt, setInstallPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: BeforeInstallPromptEvent) => {
      e.preventDefault(); // Prevent the default mini-infobar
      setInstallPrompt(e); // Save the event for later use
    };

    // Check if the app is already installed
    const checkIfInstalled = () => {
      const isStandalone = window.matchMedia(
        "(display-mode: standalone)"
      ).matches;
      setIsInstalled(isStandalone);
    };

    // Listen for the beforeinstallprompt event
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    checkIfInstalled(); // Check on initial load

    // Cleanup
    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstallClick = async () => {
    if (!installPrompt) return;

    // Show the install prompt
    installPrompt.prompt();

    // Wait for the user to respond
    const { outcome } = await installPrompt.userChoice;

    if (outcome === "accepted") {
      console.log("User accepted the install prompt");
      setIsInstalled(true);
    } else {
      console.log("User dismissed the install prompt");
    }

    // Clear the saved prompt
    setInstallPrompt(null);
  };

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
          {installPrompt && !isInstalled && (
            <button
              onClick={handleInstallClick}
              className="bg-green-500 text-white px-4 py-2 rounded-lg w-full"
            >
              نصب برنامه
            </button>
          )}
          {isInstalled && <p className="text-green-600">برنامه نصب شده است</p>}
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

// Add this type definition for TypeScript
interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
  prompt(): Promise<void>;
}

declare global {
  interface WindowEventMap {
    beforeinstallprompt: BeforeInstallPromptEvent;
  }
}
