export default function TaskBody({ body = "Default" }: { body?: string }) {
  const style = {
    margin: "1rem 10%",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 400,
    fontSize: "0.875rem",
  };

  return <div style={style}>{body}</div>;
}
