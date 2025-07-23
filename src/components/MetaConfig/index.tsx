import { CONFIG } from "site.config"
import Head from "next/head"

export type MetaConfigProps = {
  title: string
  description: string
  type: "Website" | "Post" | "Page" | string
  date?: string
  image?: string
  url: string
}

const MetaConfig: React.FC<MetaConfigProps> = (props) => {
  // JSON-LD 구조화된 데이터 생성
  const generateJsonLd = () => {
    const baseJsonLd = {
      "@context": "https://schema.org",
      "@type":
        props.type === "Post"
          ? "BlogPosting"
          : props.type === "Website"
          ? "WebSite"
          : "WebPage",
      name: props.title,
      headline: props.title,
      description: props.description,
      url: props.url,
      inLanguage: CONFIG.lang,
      author: {
        "@type": "Person",
        name: CONFIG.profile.name,
        email: CONFIG.profile.email,
        url: CONFIG.link,
      },
      publisher: {
        "@type": "Person",
        name: CONFIG.profile.name,
        email: CONFIG.profile.email,
      },
    }

    if (props.type === "Post" && props.date) {
      return {
        ...baseJsonLd,
        datePublished: props.date,
        dateModified: props.date,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": props.url,
        },
      }
    }

    if (props.type === "Website") {
      return {
        ...baseJsonLd,
        potentialAction: {
          "@type": "SearchAction",
          target: `${CONFIG.link}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      }
    }

    return baseJsonLd
  }

  return (
    <Head>
      <title>{props.title}</title>
      <meta name="robots" content="follow, index" />
      <meta charSet="UTF-8" />
      <meta name="description" content={props.description} />
      {/* 구조화된 데이터 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateJsonLd()),
        }}
      />
      {/* og */}
      <meta property="og:type" content={props.type} />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:url" content={props.url} />
      {CONFIG.lang && <meta property="og:locale" content={CONFIG.lang} />}
      {props.image && <meta property="og:image" content={props.image} />}
      {/* twitter */}
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.description} />
      <meta name="twitter:card" content="summary_large_image" />
      {props.image && <meta name="twitter:image" content={props.image} />}
      {/* post */}
      {props.type === "Post" && (
        <>
          <meta property="article:published_time" content={props.date} />
          <meta property="article:author" content={CONFIG.profile.name} />
        </>
      )}
    </Head>
  )
}

export default MetaConfig
