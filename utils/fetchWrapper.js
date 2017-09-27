const wrappedFetch = url => fetch(url).then(res => res.json());

export default wrappedFetch;
