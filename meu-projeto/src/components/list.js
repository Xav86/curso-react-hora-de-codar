import Item from "./Item";

function List() {
    return (
        <>
            <h1>Minha lista</h1>
                <ul>
                    <Item marca="Hotwells" />
                    <Item marca="Fiat" />
                    <Item marca="Toyota" />
                </ul>
        </>
    );
}

export default List;