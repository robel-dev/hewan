'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  image: string
  date: string
}

const IMAGES = [
  '/softly-lit-wedding.png',
  '/refined-garden-wedding.png',
  '/refined-wedding-feast.png',
  '/refined-wedding-moment.png',
  '/timeless-elegance.png'
]

export default function BlogPage() {
  const t = useTranslations('blog')
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState(1)

  // Simulate fetching blog posts
  const fetchPosts = async () => {
    setIsLoading(true)
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Generate dummy posts for demonstration
      const newPosts = Array.from({ length: 6 }, (_, i) => ({
        id: posts.length + i + 1,
        title: t('posts.post', { number: posts.length + i + 1 }),
        excerpt: t('posts.excerpt'),
        image: IMAGES[(posts.length + i) % IMAGES.length],
        date: new Date(Date.now() - Math.random() * 10000000000).toLocaleDateString()
      }))
      
      setPosts(prev => [...prev, ...newPosts])
      setPage(prev => prev + 1)
    } catch (error) {
      console.error('Error fetching posts:', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop
        >= document.documentElement.offsetHeight - 1000
        && !isLoading
      ) {
        fetchPosts()
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isLoading])

  return (
    <div className="min-h-screen bg-[#faf9f8] py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-serif mb-12 text-center">{t('title')}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
              <div className="relative h-64">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority={post.id <= 6}
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h2 className="text-xl font-serif mb-3">{post.title}</h2>
                <p className="text-gray-600">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
        
        {isLoading && (
          <div className="text-center mt-8">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
          </div>
        )}
      </div>
    </div>
  )
} 