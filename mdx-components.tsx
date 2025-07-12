import type { MDXComponents } from "mdx/types"
import { Badge } from "@/components/ui/badge"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Customize built-in components
    h1: ({ children }) => <h1 className="text-4xl font-bold mb-6 text-gray-900">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-semibold mb-4 mt-8 text-gray-800">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-800">{children}</h3>,
    p: ({ children }) => <p className="mb-4 text-gray-700 leading-relaxed">{children}</p>,
    ul: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700">{children}</ol>,
    code: ({ children }) => (
      <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800">{children}</code>
    ),
    pre: ({ children }) => (
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">{children}</pre>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 mb-4">{children}</blockquote>
    ),
    // Add custom components
    Badge,
    ...components,
  }
}
