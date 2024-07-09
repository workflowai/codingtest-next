type CommentProps = {
  className?: string;
};

export function Comments(props: CommentProps) {
  const { className } = props;
  return <div className={className}></div>;
}
