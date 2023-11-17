function SortBar() {
  return (
    <div className="bg-neutral-silver md:px-10 md:pb-3 lg:w-full lg:pl-0">
      <div className="bg-blue-midnight py-6 pl-6 text-neutral-light md:rounded-lg">
        <div>
          {/* <!-- Add number of suggestions here -->  */}
          <span>Suggestions</span>
          <select>
            Sort by:
            <option>Most upvotes</option>
            <option>Least upvotes</option>
            <option>Most comments</option>
            <option>Least comments</option>
          </select>

          <button>Add Feedback</button>

          {/* <!-- No feedback --> */}
          {/* <span>
            There is no feedback yet. Got a suggestion? Found a bug that needs
            to be squashed? We love hearing about new ideas to improve our app.
          </span>

          <span>Add Feedback</span> */}
          {/* <!-- No feedback end --> */}
        </div>
      </div>
    </div>
  );
}

export default SortBar;
