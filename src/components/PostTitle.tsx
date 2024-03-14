export default function PostTitle({
  title,
  createdAt,
}: {
  title: string;
  createdAt: string;
}) {
  return (
    <div className="grid gap-2">
      <h1 className="text-[1.7rem] font-bold">{title}</h1>
      <div className="text-sm text-gray-400">
        {new Date(createdAt).toDateString()}
      </div>
    </div>
  );
}