import Script from "next/script";

/*
 * Analytics is opt-in via environment variable so the static build stays
 * clean until a real GA4 property exists. Set NEXT_PUBLIC_GA_ID (e.g.
 * G-XXXXXXXXXX) at build time to enable it.
 */
export default function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  if (!gaId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}');`}
      </Script>
    </>
  );
}
