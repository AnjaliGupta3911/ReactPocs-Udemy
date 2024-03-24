export default function Form() {
  function handleFormSubmission(e) {
    e.preventDefault();
    console.log(e.target.value);
  }

  return (
    <div className="add-form">
      <span>What do you need for your 😍 trip? 🧳</span>
      <form
        onSubmit={(e) => {
          handleFormSubmission(e);
        }}
      >
        <select className="select">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
        <input type="text" placeholder="Items.." className="input" />
        <input type="submit" value="Add" className="button" />
      </form>
    </div>
  );
}
