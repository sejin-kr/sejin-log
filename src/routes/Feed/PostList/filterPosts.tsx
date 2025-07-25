import { DEFAULT_CATEGORY } from "src/constants"
import { TPost } from "src/types"

interface FilterPostsParams {
  posts: TPost[]
  q: string
  tag?: string
  category?: string
  order?: string
}

export function filterPosts({
  posts,
  q,
  tag = undefined,
  category = DEFAULT_CATEGORY,
  order = "desc",
}: FilterPostsParams): TPost[] {
  return posts
    .filter((post) => {
      const tagContent = post.tags ? post.tags.join(" ") : ""
      const searchContent = post.title + post.summary + tagContent
      return (
        searchContent.toLowerCase().includes(q.toLowerCase()) &&
        (!tag || (post.tags && post.tags.includes(tag))) &&
        (category === DEFAULT_CATEGORY ||
          (post.category && post.category.includes(category)))
      )
    })
    .sort((a, b) => {
      // date 속성이 존재하는지 확인하는 안전장치 추가
      const dateA = a.date?.start_date
        ? new Date(a.date.start_date).getTime()
        : 0
      const dateB = b.date?.start_date
        ? new Date(b.date.start_date).getTime()
        : 0
      return order === "desc" ? dateB - dateA : dateA - dateB
    })
}
