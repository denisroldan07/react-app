export default function Item({ item }){
    return (
        <div key={item.id}>
            <img src={item.imagen} alt="Imagen"></img>
            <p>{item.nombre}</p>
        </div>
    );
}