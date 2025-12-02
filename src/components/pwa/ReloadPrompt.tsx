import React from 'react';
import { useRegisterSW } from 'virtual:pwa-register/react';
import { Button } from '@/components/ui/Button';

export const ReloadPrompt = () => {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      console.log('SW Registered: ' + r);
    },
    onRegisterError(error) {
      console.log('SW registration error', error);
    },
  });

  const close = () => {
    setOfflineReady(false);
    setNeedRefresh(false);
  };

  if (!offlineReady && !needRefresh) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 p-4 rounded-lg bg-neutral-900 border border-neutral-800 shadow-2xl flex flex-col gap-3 max-w-sm animate-in slide-in-from-bottom-5 fade-in duration-300">
      <div className="flex flex-col gap-1">
        <h3 className="font-bold text-white">
          {offlineReady ? 'App ready to work offline' : 'New content available'}
        </h3>
        <p className="text-sm text-neutral-400">
          {offlineReady
            ? 'You can now use this app without an internet connection.'
            : 'Click reload to update to the latest version.'}
        </p>
      </div>
      <div className="flex gap-2 justify-end">
        <Button variant="ghost" size="sm" onClick={close}>
          Close
        </Button>
        {needRefresh && (
          <Button variant="primary" size="sm" onClick={() => updateServiceWorker(true)}>
            Reload
          </Button>
        )}
      </div>
    </div>
  );
};
