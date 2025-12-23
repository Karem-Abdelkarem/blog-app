const Button = ({ loadMoreHandler }) => {
  return (
    <button
      className="border border-border rounded-md py-3 px-5 text-button mx-auto block cursor-pointer font-medium"
      onClick={loadMoreHandler}
    >
      Load More
    </button>
  );
};
export default Button;
