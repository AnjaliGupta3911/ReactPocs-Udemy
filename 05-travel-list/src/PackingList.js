export default function PackingList() {
  function List(params) {
    return (
      <div>
        <input value="test" type="checkbox" />
        {params.count} {params.item}
        <button>x</button>
      </div>
    );
  }

  return (
    <div className="list">
      <List count={1} item={"Socks"} />
    </div>
  );
}
