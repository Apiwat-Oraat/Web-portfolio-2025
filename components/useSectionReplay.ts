import { useCallback, useEffect, useState } from "react";
import type { SectionName } from "@/types/sections";

export function useSectionReplay(section: SectionName) {
  const [replayKey, setReplayKey] = useState(0);

  const replay = useCallback(() => {
    setReplayKey((key) => key + 1);
  }, []);

  const handleInViewChange = useCallback(
    (inView: boolean) => {
      if (inView) {
        replay();
      }
    },
    [replay]
  );

  useEffect(() => {
    const handleSectionSelect = (event: Event) => {
      const selectedSection = (event as CustomEvent<SectionName>).detail;

      if (selectedSection === section) {
        replay();
      }
    };

    window.addEventListener("portfolio-section-select", handleSectionSelect);

    return () => {
      window.removeEventListener("portfolio-section-select", handleSectionSelect);
    };
  }, [replay, section]);

  return {
    replayKey,
    handleInViewChange,
  };
}
