import pages from "../data/pageTitles.json";

export const returnPageTitle = (pathname) => {
  const filteredPage = pages.find((page) => page.pathname === pathname);

  if (!filteredPage) return "Title";

  return filteredPage.title;
};
