type Props = {
  errorMessage: string;
};

export default function ErrorPage(props: Props) {
  const error = props.errorMessage;
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error}</i>
      </p>
    </div>
  );
}
