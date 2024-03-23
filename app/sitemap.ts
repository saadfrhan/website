export default async function sitemap() {
  let routes = ["/", "/projects", "/stuff", "timeline"].map((route) => ({
    url: `https://saadfarhan.vercel.app${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes];
}
