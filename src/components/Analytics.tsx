import { useEffect } from "react";

export default function Analytics() {
  useEffect(() => {
    const plausibleDomain = import.meta.env.VITE_PLAUSIBLE_DOMAIN;
    const goatCounterCode = import.meta.env.VITE_GOATCOUNTER_CODE;
    const umamiWebsiteId = import.meta.env.VITE_UMAMI_WEBSITE_ID;
    const umamiScriptUrl = import.meta.env.VITE_UMAMI_SCRIPT_URL;
    const cloudflareToken = import.meta.env.VITE_CLOUDFLARE_ANALYTICS_TOKEN;

    if (plausibleDomain) {
      appendScript("plausible-analytics", "https://plausible.io/js/script.js", {
        "data-domain": plausibleDomain,
        defer: "true",
      });
    }

    if (goatCounterCode) {
      appendScript("goatcounter-analytics", `https://${goatCounterCode}.goatcounter.com/count.js`, {
        "data-goatcounter": `https://${goatCounterCode}.goatcounter.com/count`,
        async: "true",
      });
    }

    if (umamiWebsiteId && umamiScriptUrl) {
      appendScript("umami-analytics", umamiScriptUrl, {
        "data-website-id": umamiWebsiteId,
        defer: "true",
      });
    }

    if (cloudflareToken) {
      appendScript("cloudflare-analytics", "https://static.cloudflareinsights.com/beacon.min.js", {
        "data-cf-beacon": JSON.stringify({ token: cloudflareToken }),
        defer: "true",
      });
    }
  }, []);

  return null;
}

function appendScript(id: string, src: string, attributes: Record<string, string>) {
  if (document.getElementById(id)) {
    return;
  }

  const script = document.createElement("script");
  script.id = id;
  script.src = src;
  Object.entries(attributes).forEach(([key, value]) => script.setAttribute(key, value));
  document.head.appendChild(script);
}
