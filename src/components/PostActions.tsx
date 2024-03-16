'use client';

import { deletePost } from '@/actions/post';
import { Button } from '@nextui-org/button';
import { useTransition } from 'react';

export default function PostActions({ number }: { number: number }) {
  const [isLoading, startTransition] = useTransition();

  return (
    <div className="flex items-center gap-5">
      <Button radius="sm" color="primary">
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
              // TODO: toast error
            }
          });
        }}
      >
        Delete
      </Button>
    </div>
  );
}