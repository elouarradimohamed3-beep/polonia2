import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { glass, glassHover } from "@/components/ui";
import { formatDate, type PostMeta } from "@/lib/blog";
import { blogPath } from "@/lib/routes";

const copy = { en: { read: "Read", min: "min" }, pl: { read: "Czytaj", min: "min" } } as const;

export function PostCard({ post, as: Heading = "h3" }: { post: PostMeta; as?: "h2" | "h3" }) {
  const t = copy[post.lang];
  return (
    <article className={`${glass} ${glassHover} group relative flex flex-col p-7`}>
      {post.tags[0] && (
        <span className="w-fit rounded-full border border-rose-400/30 bg-rose-500/10 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-accent">{post.tags[0]}</span>
      )}
      <Heading className="mt-4 text-xl font-bold leading-snug text-white">
        <Link href={blogPath(post.lang, post.slug)} className="after:absolute after:inset-0">{post.title}</Link>
      </Heading>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">{post.description}</p>
      <div className="mt-5 flex items-center justify-between text-xs text-zinc-400">
        <span className="flex items-center gap-3">
          <time dateTime={post.date}>{formatDate(post.lang, post.date)}</time>
          <span className="flex items-center gap-1"><Clock size={12} aria-hidden="true" /> {post.readingMinutes} {t.min}</span>
        </span>
        <span className="flex items-center gap-1 font-bold text-accent">{t.read} <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" aria-hidden="true" /></span>
      </div>
    </article>
  );
}
