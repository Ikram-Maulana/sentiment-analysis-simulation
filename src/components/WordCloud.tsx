import { TagCloud } from "react-tagcloud";

export default function WordCloud({ tags, toastSelectedTag }: any) {
  return (
    <TagCloud
      minSize={16}
      maxSize={60}
      tags={tags}
      onClick={(tag: any) => toastSelectedTag(tag.value)}
    />
  );
}
