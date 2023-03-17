const ResetCount = ({ onClick, count }) => {
    return count > 0 && (
      <div>
        <button style={{ backgroundColor: 'red' }} onClick={onClick}>
          Reset
        </button>
      </div>
    );
  };
  
  export default ResetCount;