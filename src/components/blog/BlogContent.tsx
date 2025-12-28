
import { ReactNode } from "react";

interface BlogContentProps {
  children: ReactNode;
}

const BlogContent = ({ children }: BlogContentProps) => {
  return (
    <div className="pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <article className="prose prose-lg max-w-none dark:prose-invert">
          <div className="text-muted-foreground leading-relaxed space-y-6 text-sm sm:text-base">
            {children}
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogContent;
