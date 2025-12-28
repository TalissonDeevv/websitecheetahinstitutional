
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogHeaderProps {
  title: string;
  date: string;
  author: string;
  readTime: string;
}

const BlogHeader = ({ title, date, author, readTime }: BlogHeaderProps) => {
  return (
    <div className="pt-28 pb-12 px-4 animate-fade-in">
      <div className="container mx-auto max-w-4xl">
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6 text-sm font-medium"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar ao Blog
        </Link>
        
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
          {title}
        </h1>
        
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-muted-foreground mb-8">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{readTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
