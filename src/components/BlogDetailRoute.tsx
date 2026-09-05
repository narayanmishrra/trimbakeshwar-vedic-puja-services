/**
 * Lazy route wrapper: resolves a blog post id against the full catalogue.
 */
import React from 'react';
import { blogPosts } from '../data';
import { BlogPost, Language } from '../types';
import BlogDetail from './BlogDetail';

interface Props {
  id: string;
  lang: Language;
  onBack: () => void;
  onSelectPost: (post: BlogPost) => void;
}

export default function BlogDetailRoute({ id, lang, onBack, onSelectPost }: Props) {
  const post = blogPosts.find((p) => p.id === id) || blogPosts[0];
  return <BlogDetail post={post} lang={lang} onBack={onBack} onSelectPost={onSelectPost} />;
}
