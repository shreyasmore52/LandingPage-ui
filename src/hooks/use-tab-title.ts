import { useEffect } from 'react';

export function useTabTitle() {
  useEffect(() => {
    const originalTitle = document.title;
    
    const messages = [
      "Still just an idea? Let's build it ⚡",
    ];
    
    let intervalId: NodeJS.Timeout;
    let messageIndex = 0;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = messages[0];
        messageIndex = 1;

        intervalId = setInterval(() => {
          document.title = messages[messageIndex];
          messageIndex = (messageIndex + 1) % messages.length;
        }, 0); 
      } else {
        clearInterval(intervalId);
        document.title = originalTitle;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      clearInterval(intervalId);
    };
  }, []);
}