function Columns({ isHeaderShown }) {
  return (
    <div className={`columns ${isHeaderShown ? 'columns-header-shown' : ''}`}>
      <div className="column column-1">
        <div className="box">Box 1</div>
        <div className="box">Box 2</div>
        <div className="box">Box 3</div>
      </div>
      <div className="column column-2">
        <div className="box">Box 4</div>
        <div className="box">Box 5</div>
        <div className="box">Box 6</div>
      </div>
      <div className="column column-3">
        <div className="box">Box 7</div>
        <div className="box">Box 8</div>
        <div className="box">Box 9</div>
      </div>
    </div>
  );
}

export default Columns;
