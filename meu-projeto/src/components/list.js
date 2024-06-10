import Item from "./Item";

function List() {
    return (
        <>
            <h1>Minha lista</h1>
                <ul>
                    <Item marca="Hotwells" ano_lancamento={1985}/>
                    <Item marca="Fiat" ano_lancamento={1964}/>
                    <Item marca="Toyota" ano_lancamento={1965}/>
                    <Item marca="Cevrolet" ano_lancamento={1999}/>
                    <Item />
                </ul>
        </>
    );
}

export default List;