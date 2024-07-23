'use client'

import { useParams } from 'next/navigation'
import ReviewComponent from '../../components/ReviewComponent'

export default function ReviewPage() {
  const params = useParams()
  return <ReviewComponent id={params.id} />
}