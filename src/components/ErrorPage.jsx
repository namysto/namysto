const ErrorPage = () => {
  const fullUrl = window.location.href;
  console.log("Full URL:", fullUrl);

  const path = window.location.pathname;
  console.log("Path:", path);
  return <section className="main-container">404. Page not found</section>;
};

export default ErrorPage;
