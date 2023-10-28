import Link from "next/link";

const Card = (props: PostMetadata) => {
  return (
    <Link
      href={`/posts/${props.slug}`}
      className="flex flex-col  p-4 mb-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      {/* title */}
      <h2 className="truncate mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {props.title}
      </h2>
      {/* subtitle */}
      <p className="flex-auto font-normal text-gray-700 dark:text-gray-400">
        {props.subtitle}
      </p>
      {/* date */}
      <time
        dateTime={props.date}
        className="
        
        text-right mt-2 text-sm text-gray-600 dark:text-gray-300"
      >
        {props.date}
      </time>
    </Link>
  );
};

export default Card;
