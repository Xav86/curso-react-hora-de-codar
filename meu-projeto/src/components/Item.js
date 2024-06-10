import PropTypes from 'prop-types';

function Item({ marca = 'Faltou a marca', ano_lancamento = 1 }) {
  return (
    <>
      <li>
        {marca} - {ano_lancamento}
      </li>
    </>
  );
}

Item.propTypes = {
  marca: PropTypes.string.isRequired,
  ano_lancamento: PropTypes.number.isRequired,
};

export default Item;