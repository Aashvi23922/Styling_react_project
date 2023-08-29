import './Card_rotate.css';

function Card_rotate({ data }) {
  return (
    <>
    <div class="cards-list">
      <div class="card 1">
        <img style={{filter:"none"}} src={data?.img}/>
        <div class="card_title title-white"> 
        </div>
      </div>
    </div>
    </>
  );
}

export default Card_rotate;