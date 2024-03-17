'use client';

import { deletePost } from '@/actions/post';
import { Button } from '@nextui-org/button';
import Link from 'next/link';
import { useTransition } from 'react';
import { toast } from 'sonner';

export default function PostActions({ number }: { number: number }) {
  const [isLoading, startTransition] = useTransition();

  return (
    <div className="flex items-center gap-5">
      <Button
        as={Link}
        radius="sm"
        color="primary"
        href={`/post/edit?number=${number}`}
        className="no-underline"
      >
        Edit
      </Button>
      <Button
        radius="sm"
        color="primary"
        isLoading={isLoading}
        onPress={() => {
          startTransition(async () => {
            const error = await deletePost(number);
            if (error) {
              toast('Error deleting post.');
            }
          });
        }}
      >
        Delete
      </Button>
    </div>
  );
}
