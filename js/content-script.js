const getElementByXpath = (path) => {
  return document.evaluate(
    path,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;
};

try {
  // Navigation
  const coursesListEle = getElementByXpath(
    "//html/body/div[3]/div/div[2]/aside/section[1]/div/div/ul/li/ul/li[3]/ul"
  );

  const coursesList = coursesListEle.getElementsByTagName("a");

  for (i = 0; i < coursesList.length - 1; i++) {
    const title = coursesList[i].getAttribute("title");
    if (title) {
      coursesList[i].textContent = title;
    }
  }

  // Breadcrumb
  const course = getElementByXpath(
    "//html/body/div[3]/div/div[1]/div/div/nav/ul/li[3]/span/a"
  );
  if (course) {
    course.getElementsByTagName("span")[0].textContent =
      course.getAttribute("title");
  }

  // Navbar
  document
    .querySelectorAll(
      "#wrapper > header.navbar .nav .dropdown:first-child li:not([class]) a[title]"
    )
    .forEach((navLinkEle) => {
      navLinkEle.textContent = navLinkEle.getAttribute("title");
    });
} catch (error) {
  console.log("You are not logged in or elements not found!");
}
