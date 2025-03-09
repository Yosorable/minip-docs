import { useEffect, useState, type ReactNode } from "react";
import Layout from "@theme/Layout";

export default function Download(): ReactNode {
  const [valid, setValid] = useState(false);
  const [url, setURL] = useState("");
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const u = decodeURIComponent(urlParams.get("url"));
    try {
      new URL(u);
      setValid(true);
      const downURL = "minip://down/" + u;
      setURL(downURL);
      window.location.href = downURL;
    } catch {
      setURL(u);
    }
  });
  return (
    <Layout title="Download" description="Mini App Download Page">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          fontSize: "20px",
          flexDirection: "column",
        }}
      >
        {valid && (
          <>
            <p>
              Please wait or <a href={url}>Click here</a>
            </p>
          </>
        )}
        {!valid && <p>"{url}" is not a valid url.</p>}
      </div>
    </Layout>
  );
}
