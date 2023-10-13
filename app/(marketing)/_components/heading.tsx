'use client'
import { useConvexAuth } from 'convex/react'
import { SignInButton } from '@clerk/clerk-react'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '/components/ui/button'
import { Spinner } from '@/components/spinner'

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth()
  return (
    <div className="max-w-3xl space-y-4 ">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">Welcome to Notion</h1>
      <p>The connected workspace where better faster work happens.</p>
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}

      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            Enter Notion
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button>Signup to Notion</Button>
        </SignInButton>
      )}
    </div>
  )
}
