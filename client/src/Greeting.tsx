import { useEffect, useState } from 'react';

export function Greeting() {
  const [content, setContent] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:2022/trpc/greeting?input={"0":{"name":"tRPC user"}}`)
      .then(r => r.ok ? r.json() : Promise.reject(new Error(`HTTP ${r.status}`)))
      .then(d => setContent(d.content))
      .catch(e => setError(e.message))
      .finally(() => setLoading(false));
  })

  if (loading) {
    return "Loading...";
  }

  if (error !== null) {
    return "Error: " + JSON.stringify(error);
  }

  return <div>{content}</div>;
}
