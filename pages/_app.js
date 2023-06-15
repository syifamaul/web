import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import { useEffect } from "react"

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    if("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
       navigator.serviceWorker.register("service-worker.js").then(
          function (registration) {
            console.log("Service Worker registration successful with scope: ", registration.scope);
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, [])

  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
// self.addEventListener("install", function (event) {
//   console.log("Hello world from the Service Worker 🤙");
// });
export default MyApp;
