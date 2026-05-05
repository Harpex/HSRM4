import { useEffect } from "react";

export function useSEO({ title, description, keywords }) {
  useEffect(() => {
    document.title = title;

    const updateMeta = (name, value) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", value);
    };

    const updateProperty = (property, value) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", value);
    };

    updateMeta("description", description);
    if (keywords) updateMeta("keywords", keywords);
    updateProperty("og:title", title);
    updateProperty("og:description", description);
  }, [title, description, keywords]);
}
